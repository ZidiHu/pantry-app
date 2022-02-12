import React, { useState } from 'react'
import { Collapse, Button, List, Card } from 'antd'
import mockCookHistory from '../../mock/cookHistory'

const { Panel } = Collapse;

const CookHistory = props => {

  return (
    <>
      <h3>Cook History</h3>
      <Collapse bordered={false}>
        {mockCookHistory.map((history) => (
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
    </>
  )
}

export default CookHistory