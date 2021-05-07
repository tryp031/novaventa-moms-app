import MainLayaout from "../comps/Layaout";
import "antd/dist/antd.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayaout>
      <Component {...pageProps} />
    </MainLayaout>
  );
}

export default MyApp;
