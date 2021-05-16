import "../styles/globals.css";
import Header from "../components/header";
import Footer from '../components/footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <style jsx>{`
        .body {
          backgroundColor: white;
        }
        .container :global(.btn) {
          background: #000;
          color: #fff;
        }
      `}</style>
      <Footer/>
    </>
  );
}

export default MyApp;
