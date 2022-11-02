import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeCard from './components/RecipeCard';
import recipeData from './recipeData.json';

function App() {
    return (
        <div className="App">
            <main>
                <h1 className="title">Check out some of our favorites!</h1>
                {/* <!-- list of recipes --> */}
                <div className="container-recipes">
                    {recipeData.map(recipe => <RecipeCard name={recipe.name} image={recipe.image} desc={recipe.description} />)}
                </div>
            </main>
        </div>
    );
}

export default App;
