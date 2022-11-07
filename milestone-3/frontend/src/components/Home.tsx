import "./Home.css";
import RecipeCard from "./RecipeCard";
import recipeData from "../recipeData.json";
import Navbar from "./Navbar";

function Home() {
    return (
        <main>
            <h1 className="title">Check out some of our favorites!</h1>
            {/* <!-- list of recipes --> */}
            <div className="container-recipes">
                {recipeData.map((recipe) => (
                    <RecipeCard
                        name={recipe.name}
                        image={recipe.image}
                        desc={recipe.description}
                    />
                ))}
            </div>
        </main>
    );
}

export default Home;
