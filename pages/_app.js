import 'tailwindcss/tailwind.css'
import { appWithTranslation } from '../i18n'
import { useEffect } from "react";

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

export default MyApp;


const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;
MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });
export default appWithTranslation(MyApp);