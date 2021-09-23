import 'tailwindcss/tailwind.css'
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
