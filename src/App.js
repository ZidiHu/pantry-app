import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Ingredient from '../src/pages/ingredient/index'
import RecipeList from '../src/pages/recipe/index'

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ingredient">Ingredient</Link>
          </li>
          <li>
            <Link to="/recipe">Recipes</Link>
          </li>
          <li>
            <Link to="/cook-history">Cook History</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ingredient" element={<Ingredient />} />
          <Route path="/recipe" element={<RecipeList />} />
          <Route path="/cook-history" element={<CookHistory />} />
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

function CookHistory() {
  return (
    <div>
      <h2>Cook History</h2>
    </div>
  );
}

