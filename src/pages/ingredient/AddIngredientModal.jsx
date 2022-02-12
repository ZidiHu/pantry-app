import React, { useState } from 'react';
import { Modal, Input, InputNumber } from 'antd';

const AddIngredientModal = props => {
  const {
    isModalVisible,
    newName,
    newQuality,
    handleOk,
    handleCancel,
    changeName,
    changeQuality
  } = props

  return (
    <Modal title="Add an ingredient" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <p>Name</p>
      <Input placeholder="Please input name" onChange={changeName} value={newName}/>
      <p>Quality</p>
      <InputNumber onChange={changeQuality} value={newQuality}/>
    </Modal>
  )
}

export default AddIngredientModal
