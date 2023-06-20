import axios, {AxiosError, Method, RawAxiosRequestHeaders} from 'axios';
import getConfig from 'next/config';
import {GetServerSidePropsContext} from 'next';
import {getCookie, setCookie} from 'cookies-next';
import {enqueueSnackbar} from 'notistack';
import axiosCurilize from 'axios-curlirize';

declare module 'axios' {
  interface AxiosStatic {
    isInitialized?: boolean;
  }
}

const config = getConfig();

const DOMAIN_BASE_URL =
  config.publicRuntimeConfig.DOMAIN_BASE_URL || '';
const doesNotRequireTokens = ['user/login', 'user/refresh-token'];

export interface AxiosOptions {
  method?: Method;
  formData?: FormData | undefined;
  body?: any;
  apiUrl?: string;
  headers?: RawAxiosRequestHeaders;
  queryParams?: object | undefined;
  serverContext?: GetServerSidePropsContext;
  isServerSide?: boolean;
}

export const API = async (options: AxiosOptions): Promise<any> => {
  const {
    method,
    formData,
    body,
    apiUrl,
    headers,
    queryParams,
    serverContext,
    isServerSide
  } = options;

  if (serverContext && !axios.isInitialized) {
    axiosCurilize(axios);
    axios.isInitialized = true;
  }

  const accessToken = getCookie('accessToken', {
    req: serverContext?.req,
    res: serverContext?.res
  });

  try {
    let finalApiUrl = DOMAIN_BASE_URL + apiUrl;
    let requestHeaders: RawAxiosRequestHeaders = headers || {};
    if (doesNotRequireTokens.indexOf(apiUrl!!) < 0) {
      requestHeaders['Authorization'] = `Bearer ${accessToken}`;
    }
    requestHeaders['Accept'] = 'application/json';
    requestHeaders['accept-encoding'] = '*';
    const apiData = await axios.request({
      method: method,
      data: body || formData,
      headers: requestHeaders,
      params: queryParams,
      url: finalApiUrl
    });
    if (apiData.status === 200 || apiData.status === 201) {
      return apiData.data;
    }
  } catch (exception: any) {
    if (exception instanceof AxiosError) {
      if (exception.response?.status === 401) {
        try {
          const updatedTokens = await handle401Error(serverContext);
          const cookieOptions = {
            req: serverContext?.req,
            res: serverContext?.res,
            path: '/',
            maxAge: 7 * 24 * 60 * 60
          };
          setCookie('accessToken', updatedTokens.accessToken, cookieOptions);
          setCookie('refreshToken', updatedTokens.refreshToken, cookieOptions);
          return API(options);
        } catch (e) {}
      }
    }

    return new Promise((resolve, reject) => {
      if (!isServerSide) {
        enqueueSnackbar(exception?.response?.data?.message || '', {
          variant: 'default',
          autoHideDuration: 5000
        });
      }
      reject(exception.response.data);
    });
  }
};

API.get = (apiUrl: string, options?: AxiosOptions) =>
  API({...options, method: 'GET', apiUrl: apiUrl});
API.post = (apiUrl: string, options?: AxiosOptions) =>
  API({...options, method: 'POST', apiUrl: apiUrl});
API.put = (apiUrl: string, options?: AxiosOptions) =>
  API({...options, method: 'PUT', apiUrl: apiUrl});
API.delete = (apiUrl: string, options?: AxiosOptions) =>
  API({...options, method: 'DELETE', apiUrl: apiUrl});

const handle401Error = async (serverContext?: GetServerSidePropsContext) => {
  let options = {req: serverContext?.req, res: serverContext?.res};
  const accessToken = getCookie('accessToken', options);
  const refreshToken = getCookie('refreshToken', options);
  return API.post('user/refresh-token', {
    body: {
      accessToken: accessToken,
      refreshToken: refreshToken
    }
  });
};

export const API_STATES = {
  INITIAL_STATE: 'INITIAL_STATE',
  LOADING_STATE: 'LOADING_STATE',
  COMPLETED_STATE: 'COMPLETED_STATE',
  ERROR_STATE: 'ERROR_STATE'
};