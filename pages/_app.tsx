import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import {DefaultSeo} from 'next-seo';

import {metaConstants} from '@/meta-constants';
import Layout from '@/components/views/Layout';
import {store} from '@/store';

import 'swiper/swiper-bundle.min.css';
import '../styles/rc-slider.css';
import '../styles/globals.css';

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
