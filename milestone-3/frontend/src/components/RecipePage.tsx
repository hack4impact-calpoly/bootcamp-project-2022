import React from 'react';
import './RecipePage.css';
import recipes from '../recipeData';
import { useParams } from 'react-router-dom';

export default function RecipePage() {
  let { path } = useParams();
  console.log('name = ', path);
  const currentRecipe = recipes.find((x) => x.path === path);

  return (
    <main>
      <div className="recipes-container">
        <h1 className="recipes-title">{currentRecipe?.name}</h1>

        <div className="recipes-left">
          <div>
            <img
              className="recipes-img"
              src={currentRecipe?.image}
              alt={currentRecipe?.name}
            />
          </div>
          <div className="buton">
            <a
              href={currentRecipe?.recipeSource}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Original Recipe
            </a>
          </div>
        </div>

        <div className="recipes-content">
          <p>{currentRecipe?.description}</p>
          <h2>Ingredients</h2>
          {currentRecipe?.ingredients.map((section) => {
            return (
              <>
                {section.title !== '' ? <h3>{section.title}</h3> : ''}
                <ul>
                  {section.content.map((item) => {
                    return <li> {item} </li>;
                  })}
                </ul>
              </>
            );
          })}
        </div>
      </div>

      <h2>Preparation</h2>
      <ol className="ordered-list">
        {currentRecipe?.instruction.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ol>
    </main>
  );
}
