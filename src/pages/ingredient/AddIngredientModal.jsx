import React from 'react'
import { Modal, Input, InputNumber } from 'antd'
import './index.css'

const AddIngredientModal = props => {
  const {
    isModalVisible,
    newName,
    newQuality,
    handleAdd,
    showNameAlert,
    showQualityAlert,
    handleCancel,
    changeName,
    changeQuality
  } = props

  return (
    <Modal title="Add an ingredient" visible={isModalVisible} onOk={handleAdd} onCancel={handleCancel}>
      <p className='mb-1'>Name</p>
      <Input placeholder="Please enter name" onChange={changeName} value={newName} />
      {showNameAlert && <p className='warning mb-0'>Please enter name</p>}
      <p className='pt-3 mb-1'>Quality</p>
      <InputNumber onChange={changeQuality} value={newQuality} />
      {showQualityAlert && <p className='warning mb-0'>Please enter quality</p>}
    </Modal>
  )
}

export default AddIngredientModal
