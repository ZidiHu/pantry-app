import React, { useState } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import AddIngredientModal from './AddIngredientModal'
import './index.css'

const Ingredient = props => {
  const { ingredientList } = props

  const [data, setData] = useState(ingredientList)
  const [count, setCount] = useState(3)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newName, setNewName] = useState()
  const [newQuality, setNewQuality] = useState()
  const [showNameAlert, setShowNameAlert] = useState(false)
  const [showQualityAlert, setShowQualityAlert] = useState(false)

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
      title: '',
      dataIndex: 'operation',
      render: (_, record) =>
        data.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a style={{ color: '#1890ff' }}>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ]

  const handleDelete = (key) => {
    const dataSource = [...data];
    setData(dataSource.filter((item) => item.key !== key))
  };

  const showAddIngredModal = () => {
    setIsModalVisible(true);
  };

  const handleAdd = () => {
    if (newName && newQuality) {
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
    } else {
      if (!newName) { setShowNameAlert(true) }
      if (!newQuality) { setShowQualityAlert(true) }
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setShowNameAlert(false)
    setShowQualityAlert(false)
  };

  const changeName = (e) => {
    setNewName(e.target.value)
  }

  const changeQuality = (value) => {
    setNewQuality(value)
  }

  return (
    <div className='container'>
      <Button
        type="primary"
        onClick={showAddIngredModal}
        style={{ marginBottom: 20 }}
      >
        Add an ingredient
      </Button>
      <Table
        bordered
        dataSource={data}
        columns={columns}
        pagination={false}
      />

      <AddIngredientModal
        isModalVisible={isModalVisible}
        newName={newName}
        newQuality={newQuality}
        showNameAlert={showNameAlert}
        showQualityAlert={showQualityAlert}
        handleAdd={handleAdd}
        handleCancel={handleCancel}
        changeName={changeName}
        changeQuality={changeQuality}
      />

    </div>
  )
}

export default Ingredient
