import React from 'react'
import { Modal, Form, Input, InputNumber, Button, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
// import './index.css'

const AddRecipeModal = props => {
  const {
    isModalVisible,
    handleCancel,
    addRecipe,
  } = props

  return (
    <Modal title='Add a recipe' visible={isModalVisible} footer={null} onCancel={handleCancel}>
      <Form
        name='add_recipe'
        onFinish={addRecipe}
        autoComplete='off'
      >
        <Form.Item
          label='Recipe Name'
          name='recipeName'
          rules={[
            {
              required: true,
              message: 'Please input recipe name',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Method'
          name='method'
          rules={[
            {
              required: true,
              message: 'Please input cook method',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.List name='ingredients'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align='baseline'>
                  <Form.Item
                    {...restField}
                    name={[name, 'ingredientName']}
                    rules={[{ required: true, message: 'Missing ingredient' }]}
                  >
                    <Input placeholder='ingredient' />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'ingredientQuality']}
                    rules={[{ required: true, message: 'Missing quality' }]}
                  >
                    {/* <InputNumber onChange={changeQuality} value={newQuality} /> */}
                    <Input />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type='dashed' onClick={() => add()} block icon={<PlusOutlined />}>
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button onClick={handleCancel} className='me-2'>
            Cancel
          </Button>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddRecipeModal
