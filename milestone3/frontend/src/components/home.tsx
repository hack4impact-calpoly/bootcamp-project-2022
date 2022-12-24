import '../App.css';
import RecipePreview from '../components/recipePreview';
import recipes from "../recipeData"
import { useState, useEffect } from 'react'
import { Recipe } from '../recipeData';



function Home() {
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
            .then((res) => res.json())
            .then((data) => setExternalRecipes(data));
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

                {externalRecipes.map((recipe, index) => (
                    <RecipePreview
                        name={recipe.name}
                        description={recipe.description}
                        image={recipe.image}
                        color={index % 2 === 1 ? '#bcbcbc' : '#ffcc4c'}
                        external={true}
                        
                    />
                )
                )}
            </div>
        </>
    )

}

export default Home;
