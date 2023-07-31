import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../compoonents/Navbar";
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/style.css"></link>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
