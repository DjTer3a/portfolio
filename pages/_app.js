import 'tailwindcss/tailwind.css'
import { useEffect } from "react";
import { appWithTranslation } from '../i18n'
import App from 'next/app'
import mailgo from "mailgo";

const mailgoConfig = {
  dark: true,
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    mailgo(mailgoConfig);
  }, []);

  return <Component {...pageProps} />;
}


// MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });
export default MyApp;