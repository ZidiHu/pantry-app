import React, { useState } from 'react';
import { Collapse, Button, List, Card } from 'antd';
import mockRecipe from '../../mock/recipe'

const { Panel } = Collapse;

const RecipeList = props => {

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
      <List
        grid={{ gutter: 16, lg: 3, md: 2, sm: 1 }}
        dataSource={mockRecipe}
        renderItem={item => (
          <List.Item>
            <Card title={item.recipeName}>
              {item.ingredients.map((ingredients) => (
                <>
                  <p className='d-inline'>{ingredients.ingredientName}</p>
                  <p className='d-inline'>{ingredients.ingredientQuality}</p>
                  <br/>
                </>
              ))}
              <Button type="primary" onClick={() => console.log('rowkey', item.key)}>Cook</Button>
            </Card>
          </List.Item>
        )}
      />
    </>
  )
}

export default RecipeList
