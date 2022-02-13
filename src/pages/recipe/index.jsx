import React, { useState } from 'react'
import { Button, List, Card } from 'antd'
import mockRecipe from '../../mock/recipe'
import AddRecipeModal from './AddRecipeModal'

const RecipeList = props => {
  const { handleCook } = props

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

  return (
    <div className='container'>
      <Button
        type='primary'
        onClick={showAddRecipeModal}
        style={{ marginBottom: 20 }}
      >
        Add a recipe</Button>
      <div className='row row-cols-md-3 row-cols-sm-1'>
        {recipeList.map((recipe) => (
          <div key={recipe.key} className='col col-sm-12'>
            <Card title={recipe.recipeName} >
              <strong>Ingredients</strong>
              <div className='pb-3'>
                {recipe.ingredients.map((ingredients) => (
                  <div key={ingredients.ingredientName}>
                    <p className='d-inline me-2'>{ingredients.ingredientName}</p>
                    <p className='d-inline'>{ingredients.ingredientQuality}</p>
                    <br />
                  </div>
                ))}
              </div>
              <strong>Method</strong>
              <p>{recipe.method}</p>
              <Button onClick={() => deleteRecipe(recipe.key)} className='me-2'>Delete</Button>
              <Button type='primary' onClick={() => handleCook(recipe.key)}>Cook</Button>
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
