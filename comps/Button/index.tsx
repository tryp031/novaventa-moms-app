import { Form, Button } from 'antd';


const ButtonField = (props) => {
  return (
    <>
      <Form.Item> 
        <Button type={props.type} icon={props.icon}>
        {props.name}
        </Button>
      </Form.Item>
    </>
  );
};

export default ButtonField;

