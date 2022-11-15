import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import './about.css';


interface RecipeProps {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

export default function Recipe(props: RecipeProps) {
    return (

<main>
      <div className="recipe container">
        <h1>{props.name}</h1>
        <div>
          <img
            className="img-big"
            src={props.image}
          />
        </div>

        <div className="recipe-body">
          <h2>Ingredients</h2>
          <ul>
            {props.ingredients.map((ingredient: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) => {
              return (
                <li>
                  {ingredient}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="recipe-body">
          <h2>Preperation</h2>
          <ol id="instructions">
        {props.instructions.map((instruction: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined) => {
          return (
            <li>{instruction}</li>
          );
        })}
      </ol>
        </div>

      </div>
    
    </main>


    )};
