import React, { useState } from 'react'
import { Collapse, List } from 'antd'

const { Panel } = Collapse;

const CookHistory = props => {
  const { cookHistory } = props

  return (
    <div className='container'>
      <h3>Cook History</h3>
      <Collapse>
        {cookHistory.map((history) => (
          <Panel header={history.recipeName} key={history.key} extra={<p>{history.cookDate}</p>}>
            <strong>Used Ingredients</strong>
            <List
              size='small'
              bordered
              dataSource={history.ingredients}
              renderItem={item =>
                <List.Item>{item.ingredientName} {item.ingredientQuality}</List.Item>
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