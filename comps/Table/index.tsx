import { Table, Tag, Space } from 'antd';

const TableCustom = (props) => {
  return (
    <>
      <Table dataSource={props.dataSource} columns={props.columns} />
    </>
  );
};

export default TableCustom;
