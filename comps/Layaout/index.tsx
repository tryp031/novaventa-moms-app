import { Layout } from "antd";

const { Content } = Layout;

import MainFooter from "../Footer";
import Navbar from "../Navbar";

function MainLayaout({ children }) {
  return (
    <Layout>
      <Navbar></Navbar>

      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <MainFooter></MainFooter>
    </Layout>
  );
}

export default MainLayaout;
