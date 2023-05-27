import {Provider} from 'react-redux';
import {store} from '@/store';
import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import {DefaultSeo} from 'next-seo';
import {metaConstants} from '@/meta-constants';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_us',
          url: 'https://easypoints.com',
          site_name: metaConstants.SITE_NAME
        }}
        title={metaConstants.SITE_NAME}
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
