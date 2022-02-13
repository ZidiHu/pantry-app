import React from 'react'
import { NavLink } from 'react-router-dom';
import './Toolbar.css'

const Toolbar = () => {

  return (
    <div className='container'>
      <ul className='nav'>
        <li className='nav-item' >
          <NavLink to='/' className='nav-link'>Ingredients</NavLink>
        </li>
        <li className='nav-item' >
          <NavLink to='/recipe' className='nav-link'>Recipes</NavLink>
        </li>
        <li className='nav-item' >
          <NavLink to='/cook-history' className='nav-link'>Cook History</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Toolbar