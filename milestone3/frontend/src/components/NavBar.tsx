import React from 'react'
import { Link } from 'react-router-dom'
require('../css/RecipePreview.css')

function NavBar() {
  return (
    <div id = "navBar">
        <div id = "navLeft">
            <h1> <Link to="/"> Home</Link></h1>
        </div>
        <div id="navRight">
            <h3> <Link to="/about"> About</Link></h3>
            <h3><Link to="/about"> Recipes</Link></h3>
        </div>
    </div>
  )
}

export default NavBar