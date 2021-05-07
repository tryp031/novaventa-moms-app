import { Form, Switch } from "antd";

const SwitchField = (props) => {
  return (
    <>
      <Form.Item label={props.title}>
        <Switch defaultChecked onChange={props.onChange} />
      </Form.Item>
    </>
  );
};

export default SwitchField;
