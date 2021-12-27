import Head from "next/head";

import "../styles/globals.css";
import "@fontsource/montserrat/latin-500.css";
import montserrat500 from "@fontsource/montserrat/files/montserrat-latin-500-normal.woff2";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="font"
          href={montserrat500}
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
