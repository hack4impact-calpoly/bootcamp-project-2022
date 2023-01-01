import '../App.css';
import RecipePreview from '../components/recipePreview';
import recipe_list, { Recipe } from '../recipeData';
import { useState, useEffect } from 'react'




function Home() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        fetch("http://localhost:3001/recipe")
            .then((response) => response.json()).then((recipeData) => {
                setRecipes(recipeData);
            })
            .catch((err) => console.log(err));
    }, []);
    return (

        <>
            <h2 className="headerSentence">Signature Dishes.</h2>
            <h3 className="headerSubSentence" style={{ paddingRight: 10 }}>
                Click each to learn more.
            </h3>
            <div className="dishes_container">
                {recipes.map(
                    (recipe, index) => (
                        <RecipePreview
                            name={recipe.name}
                            description={recipe.description}
                            image={recipe.image}
                            color={index % 2 === 0 ? '#bcbcbc' : '#ffcc4c'}
                        />
                    )
                )}
            </div>
        </>
    )

}

export default Home;
