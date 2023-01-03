import './home.css';
import RecipePreview from '../components/recipePreview';
import {useState, useEffect} from 'react'

interface Recipe {
    name: string;
    description: string;
    image: string;
  }
  

function Home() {
    
    //connecting to hus chews api
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    // [get] recipe 
    useEffect(() => {
        fetch("http://localhost:3001/recipe")
          .then((res) => res.json())
          .then((data) => setRecipes(data)).catch(err => console.log(err))
      }, []);
    
      return (
        
        <div className = "backgroundcolor hometext">
            <h3 className = "padding"> 
            {/* <!--message--> */}
            Welcome to my recipe website! Enjoy browsing through the featured menu items below. Click on any link below to find the corresponding recipe! 
            </h3>

            {recipes.map((recipe) => (
            <RecipePreview
        name={recipe.name}
        description={recipe.description}
        image={recipe.image}
    />
    )   
)} 
       
        </div>
        
    )

}

export default Home;
