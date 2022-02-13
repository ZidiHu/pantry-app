import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import moment from 'moment'
import Toolbar from './components/Toolbar'
import Ingredient from '../src/pages/ingredient/index'
import RecipeList from '../src/pages/recipe/index'
import CookHistory from '../src/pages/cookHistory/index'
// import mock data
import mockIngredients from '../src/mock/ingredient'
import mockCookHistory from '../src/mock/cookHistory'
import mockRecipe from '../src/mock/recipe'

const App = () => {
  const [ingredientList, setIngredientList] = useState(mockIngredients)
  const [cookHistory, setCookHistory] = useState(mockCookHistory)
  const [count, setCount] = useState(3)

  const handleCook = (key) => {
    // find the recipe cooked
    let cookedRecipe = mockRecipe.find(item => item.key === key)
    const newData = {
      key: count,
      recipeName: cookedRecipe.recipeName,
      cookDate: moment().format('DD/MM/YYYY'),
      ingredients: cookedRecipe.ingredients
    }
    // create a array to store remaining ingredients and its quality
    const array = cookedRecipe.ingredients.map((ingredient) => {
      // find which ingredients were used
      let usedIngredient = ingredientList.find((item => item.name === ingredient.ingredientName))
      // calculate remaining quantity
      let qualityLeft = usedIngredient.quality - ingredient.ingredientQuality

      let ingredientLeft = {
        key: usedIngredient.key,
        name: usedIngredient.name,
        quality: qualityLeft
      }

      return ingredientLeft
    })

    setIngredientList(array)
    setCookHistory([...cookHistory, newData])
    setCount(count + 1)
  }

  return (
    <Router>
      <Toolbar />

      <hr />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/ingredient' element={<Ingredient ingredientList={ingredientList} />} />
        <Route path='/recipe' element={<RecipeList handleCook={handleCook} />} />
        <Route path='/cook-history' element={<CookHistory cookHistory={cookHistory} />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App
