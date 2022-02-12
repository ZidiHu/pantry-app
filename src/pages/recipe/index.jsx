import React, { useState } from 'react'
import { Collapse, Button, List, Card } from 'antd'
import mockRecipe from '../../mock/recipe'
import AddRecipeModal from './AddRecipeModal'

const { Panel } = Collapse;

const RecipeList = props => {
  const [recipeList, setRecipeList] = useState(mockRecipe)
  const [count, setCount] = useState(3)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showAddRecipeModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const addRecipe = values => {
    const newDate = {
      key: count,
      ...values
    }
    setRecipeList([...recipeList, newDate])
    setCount(count + 1)
    setIsModalVisible(false);
  };

  const cook = (key) => {
    console.log('cook', key)
  }

  return (
    <>
      {/* <Collapse bordered={false} defaultActiveKey={[1]}>
        {mockRecipe.map((recipe) => (
          <Panel header={recipe.recipeName} key={recipe.key}>
            <List
              size="small"
              bordered
              dataSource={recipe.ingredients}
              renderItem={item =>
                <List.Item>{item.ingredientName} {item.ingredientQuality}</List.Item>
              }
            />
            <Button type="primary" onClick={() => console.log('cooking', recipe.key)}>Cook</Button>
          </Panel>
        ))
        }
      </Collapse > */}
      <Button type="primary" onClick={showAddRecipeModal}>Add a recipe</Button>
      <List
        grid={{ gutter: 16, lg: 3, md: 2, sm: 1 }}
        dataSource={recipeList}
        renderItem={item => (
          <List.Item>
            <Card title={item.recipeName}>
              {item.ingredients.map((ingredients) => (
                <>
                  <p className='d-inline'>{ingredients.ingredientName}</p>
                  <p className='d-inline'>{ingredients.ingredientQuality}</p>
                  <br />
                </>
              ))}
              <strong>{item.method}</strong>
              <br />
              <Button type="primary" onClick={() => console.log('rowkey', item.key)}>Cook</Button>
            </Card>
          </List.Item>
        )}
      />
      <AddRecipeModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        addRecipe={addRecipe}
      />
    </>
  )
}

export default RecipeList
