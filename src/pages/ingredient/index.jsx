import React, { useState } from 'react';
import { Button } from 'antd';
import IngredientList from './IngredientList'

const Ingredient = props => {

  return (
    <>
      <Button type="primary">Back</Button>
      <IngredientList />
    </>
  )
}

export default Ingredient
