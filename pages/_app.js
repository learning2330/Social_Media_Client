import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../compoonents/Navbar";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
