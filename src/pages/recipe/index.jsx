import React, { useState } from 'react';
import { Collapse, Button, List } from 'antd';
import mockRecipe from '../../mock/recipe'

const { Panel } = Collapse;

const RecipeList = props => {

  const cook = (key) => {
    console.log('cook', key)
  }

  return (
    <Collapse bordered={false} defaultActiveKey={[1]}>
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
    </Collapse >
  )
}

export default RecipeList
