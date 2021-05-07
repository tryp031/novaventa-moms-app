import "antd/dist/antd.css";
import "../styles/index.css";

import {
  Layout,
  Collapse,
  Row,
  Col,
  Form,
  Input,
  Switch,
  Button,
  Table,
  Divider,
} from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;
const { Panel } = Collapse;

function MyApp({ Component, pageProps }) {
  const dataSource = [
    {
      key: "1",
      name: "Campaña 1",
      status: true,
    },
    {
      key: "2",
      name: "Campaña 2",
      status: false,
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Switch disabled={true} defaultChecked={status} />,
    },
  ];

  return (
    <>
      <Layout>
        <Header>
          <h1 className="title">Novaventa Moms</h1>
        </Header>
        <Content className="container">
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <RightOutlined rotate={isActive ? 90 : 0} />
            )}
            className="site-collapse-custom-collapse"
          >
            <Panel
              header="Campaign"
              key="1"
              className="site-collapse-custom-panel"
            >
              <div
                className="panel-container"
                style={{ padding: 24, minHeight: 380 }}
              >
                <Row gutter={24}>
                  <Col span={8}>
                    <Form.Item label="Name">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Status">
                      <Switch />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Search
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
                <Divider orientation="center" plain>
                  Summary Campaign
                </Divider>
                <Row>
                  <Col span={24}>
                    <Table dataSource={dataSource} columns={columns} />
                  </Col>
                </Row>
              </div>
            </Panel>
            <Panel
              header="Sales Manager"
              key="2"
              className="site-collapse-custom-panel"
            >
              <p>Sales Manager Table</p>
            </Panel>
            <Panel
              header="Sales"
              key="3"
              className="site-collapse-custom-panel"
            >
              <p>Table Sales</p>
            </Panel>
          </Collapse>
        </Content>
        <Footer>By Dmazo</Footer>
      </Layout>
    </>
  );
}

export default MyApp;
