import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import moment from 'moment'
import Ingredient from '../src/pages/ingredient/index'
import RecipeList from '../src/pages/recipe/index'
import CookHistory from '../src/pages/cookHistory/index'
// import mock data
import mockCookHistory from '../src/mock/cookHistory'
import mockRecipe from '../src/mock/recipe'

const App = () => {
  const [cookHistory, setCookHistory] = useState(mockCookHistory)
  const [count, setCount] = useState(3)

  const handleCook = (key) => {
    let cookedRecipe = mockRecipe.find(item => item.key === key)
    const newData = {
      key: count,
      recipeName: cookedRecipe.recipeName,
      cookDate: moment().format('DD/MM/YYYY'),
      ingredients: cookedRecipe.ingredients
    }
    setCookHistory([...cookHistory, newData])
    setCount(count + 1)
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/ingredient'>Ingredient</Link>
          </li>
          <li>
            <Link to='/recipe'>Recipes</Link>
          </li>
          <li>
            <Link to='/cook-history'>Cook History</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/ingredient' element={<Ingredient />} />
          <Route path='/recipe' element={
            <RecipeList handleCook={handleCook} />
          } />
          <Route path='/cook-history' element={
            <CookHistory cookHistory={cookHistory} />
          } />
        </Routes>
      </div>
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
