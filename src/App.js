import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pantry">Pantry</Link>
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
          <Route path="/pantry" element={<Pantry />} />
          <Route path="/recipe" element={<Recipes />} />
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

function Pantry() {
  return (
    <div>
      <h2>Pantry</h2>
    </div>
  );
}

function Recipes() {
  return (
    <div>
      <h2>Recipes</h2>
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

