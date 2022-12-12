import site_icon from './site-icon.png'
import "./Home.css"
import { Link } from 'react-router-dom'
import { recipes } from '../recipeData'
import RecipePreview from './RecipePreview'

export default function Home() {
    return(
        <div className="page-card-wrapper">
            <div className="page-card">
                <div className="nav-menu"> 
                    <img src={site_icon} className="nav-image" />
                    <Link className="nav-text" to="/about">About</Link>
                </div>

                <div className="recipe-container">
                    {recipes.map((recipe) => (<RecipePreview {...recipe}/>))}
                </div>
            </div>  

            <div className="description-layout-wrapper">
                <div className="logo-text">
                    <span>
                        <em>that</em> easy
                    </span>
                </div>

                <div className="description-text">
                    <span>
                        Straightforward recipes for things you <em>should </em> 
                        know how to cook.
                    </span>
                </div>
            </div>
        </div>
    );
}