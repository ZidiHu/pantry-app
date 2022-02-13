import React, { useState } from 'react'
import { Collapse, List } from 'antd'
import './index.css'

const { Panel } = Collapse;

const CookHistory = props => {
  const { cookHistory } = props

  return (
    <div className='container'>
      <h3>Cook History</h3>
      <Collapse>
        {cookHistory.map((history) => (
          <Panel header={history.recipeName} key={history.key} extra={<p>Cooked on: {history.cookDate}</p>}>
            <strong>Used Ingredients</strong>
            <List
              size='small'
              dataSource={history.ingredients}
              renderItem={item =>
                <List.Item className='usedIngredientList'>
                  <strong>Name: </strong>{item.ingredientName}
                  <strong className='paddingLeft'>Quality: </strong>{item.ingredientQuality}
                </List.Item>
              }
            />
          </Panel>
        ))
        }
      </Collapse >
    </div>
  )
}

export default CookHistory