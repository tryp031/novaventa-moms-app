import { Divider, Form } from "antd";
import { Row, Col } from "antd";
import { getSummary } from "@/lib/Hooks/campaign";

import InputField from "../../../comps/Input";
import ButtonField from "../../../comps/Button";
import SwitchField from "../../../comps/Switch";
import TableCustom from "../../../comps/Table";

import { SearchOutlined, PlusOutlined } from "@ant-design/icons";

const Campaign = () => {
  const columns = [
    {
      title: "Campaña",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Acciones",
      dataIndex: "action",
      key: "action",
    },
  ];

  const dataSource = getSummary();

  return (
    <>
      <h1>Resumen de Campañas</h1>
      <Divider orientation="left">Filtros</Divider>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <InputField title="Campaña" placeholder="Campaña" />
          </Col>
          <Col span={6}>
            <SwitchField title="Estado"></SwitchField>
          </Col>
          <Col span={2}>
            <ButtonField
              name="Buscar"
              type="primary"
              icon={<SearchOutlined />}
            />
          </Col>
          <Col span={2}>
            <ButtonField name="Crear" icon={<PlusOutlined />} />
          </Col>
        </Row>
      </Form>
      <Divider orientation="left">Resumen</Divider>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="vertical">
        <TableCustom columns={columns} dataSource={dataSource} />
      </Form>
    </>
  );
};

export default Campaign;
