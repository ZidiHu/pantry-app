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

  const deleteRecipe = (key) => {
    console.log('delete', key)
    const dataSource = [...recipeList];
    setRecipeList(dataSource.filter((item) => item.key !== key))
  };

  const cook = (key) => {
    console.log('cook', key)
  }

  return (
    <div className='container'>
      {/* <Collapse bordered={false} defaultActiveKey={[1]}>
        {mockRecipe.map((recipe) => (
          <Panel header={recipe.recipeName} key={recipe.key}>
            <List
              size='small'
              bordered
              dataSource={recipe.ingredients}
              renderItem={item =>
                <List.Item>{item.ingredientName} {item.ingredientQuality}</List.Item>
              }
            />
            <Button type='primary' onClick={() => console.log('cooking', recipe.key)}>Cook</Button>
          </Panel>
        ))
        }
      </Collapse > */}
      <Button type='primary' onClick={showAddRecipeModal}>Add a recipe</Button>
      {/* <List
        grid={{ gutter: 16, lg: 3, md: 2, sm: 1 }}
        dataSource={recipeList}
        renderItem={item => (
          <List.Item>
            <Card title={item.recipeName}>
              {item.ingredients.map((ingredients) => (
                <div key={ingredients.ingredientName}>
                  <p className='d-inline'>{ingredients.ingredientName}</p>
                  <p className='d-inline'>{ingredients.ingredientQuality}</p>
                  <br />
                </div>
              ))}
              <strong>{item.method}</strong>
              <br />
              <Button onClick={() => deleteRecipe(item.key)}>Delete</Button>
              <Button type='primary' onClick={() => cook(item.key)}>Cook</Button>
            </Card>
          </List.Item>
        )}
      /> */}

      <div className='row row-cols-md-3 row-cols-sm-1'>
        {recipeList.map((recipe) => (
          <div key={recipe.key} className='col col-sm-12'>
            <Card title={recipe.recipeName} >
              {recipe.ingredients.map((ingredients) => (
                <div key={ingredients.ingredientName}>
                  <p className='d-inline'>{ingredients.ingredientName}</p>
                  <p className='d-inline'>{ingredients.ingredientQuality}</p>
                  <br />
                </div>
              ))}
              <strong>{recipe.method}</strong>
              <br />
              <Button onClick={() => deleteRecipe(recipe.key)}>Delete</Button>
              <Button type='primary' onClick={() => cook(recipe.key)}>Cook</Button>
            </Card>
          </div>
        ))}
      </div>

      <AddRecipeModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        addRecipe={addRecipe}
      />
    </div>
  )
}

export default RecipeList
