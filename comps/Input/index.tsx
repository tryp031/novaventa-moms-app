import { Form, Input } from "antd";

const InputField = (props) => {
  return (
    <>
      <Form.Item label={props.title}> 
        <Input placeholder={props.placeholder} />
      </Form.Item>
    </>
  );
};

export default InputField;
