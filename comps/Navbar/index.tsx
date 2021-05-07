import Link from "next/link";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header>
      <div className="logo">
        <h4>Novaventa Mom's</h4>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/campaign/summary">
            <a>Campañas</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/salesman">
            <a>Vendedores</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/sales">
            <a>Ventas</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/about">
            <a>About</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
