import React, { useState } from 'react';
import { Table, Button, Popconfirm, Form, Modal } from 'antd';
import mockIngredients from '../../mock/ingredient'
import AddIngredientModal from '../ingredient/AddIngredientModal'

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const IngredientList = props => {
  const [data, setData] = useState(mockIngredients)
  const [count, setCount] = useState(3)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newName, setNewName] = useState()
  const [newQuality, setNewQuality] = useState()

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Quality',
      dataIndex: 'quality'
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) =>
        data.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ]

  const handleDelete = (key) => {
    const dataSource = [...data];
    setData(dataSource.filter((item) => item.key !== key))
  };

  const handleAdd = () => {
    setIsModalVisible(true);
  };

  const components = {
    body: {
      row: EditableRow,
    },
  };

  const handleOk = () => {
    const newData = {
      key: count,
      name: newName,
      quality: newQuality
    };
    setData([...data, newData])
    setCount(count + 1)
    setIsModalVisible(false);
    setNewName(null)
    setNewQuality(null)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const changeName = (e) => {
    setNewName(e.target.value)
  }

  const changeQuality = (value) => {
    setNewQuality(value)
  }

  return (
    <div>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add an ingredient
      </Button>
      <Table
        components={components}
        bordered
        dataSource={data}
        columns={columns}
        pagination={false}
      />

      <AddIngredientModal
        isModalVisible={isModalVisible}
        newName={newName}
        newQuality={newQuality}
        handleOk={handleOk}
        handleCancel={handleCancel}
        changeName={changeName}
        changeQuality={changeQuality}
      />

    </div>
  )
}

export default IngredientList
