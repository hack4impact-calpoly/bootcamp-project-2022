import  { ChangeEvent, useEffect, useState } from 'react';


interface Recipe {
    name: string;
    image: string;
    description: string;
    ingredients: string [];
    instructions: string [];
}

function RecipePage(props: Recipe) {
  

  const [newIngredient, setNewIngredient] = useState('');
  const [allIngredients, setAllIngredients] = useState(props.ingredients);
  const [newInstruction, setNewInstruction] = useState('');
  const [allInstructions, setAllInstructions] = useState(props.instructions);
  const addIngredient = () => {

    fetch(`http://localhost:3001/recipe/${props.name}/ingredient`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ingredient: newIngredient
        })
        
    })
    .then((res) => console.log(res));
    setAllIngredients([...allIngredients, newIngredient]);

}  

const addInstruction = () => {
 
    fetch(`http://localhost:3001/recipe/${props.name}/instruction`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            instruction: newInstruction
        })

    })
    .then((res) => console.log(res));
    setAllInstructions([...allInstructions, newInstruction]);
    
}
return (
    <div>
    <h1 className="text">{props.name}</h1>
    <div className="sub-section">
        <img className="recipe-images-main" src={props.image} alt="picture of recipe" width="200" height="200"/>
        <p className="text">
            {props.description}
        </p>

    </div>
    <div className="sub-section">
        <strong className="text">Ingredients</strong>
         <ul>
            {allIngredients.map((ingredient: any) => 
            <li className="text" key={ingredient}>{ingredient}</li>)}
        </ul>
    </div>
    <input
        placeholder="enter ingredient here"
        value={newIngredient} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setNewIngredient(e.target.value);
    }}
    />
     <button onClick={addIngredient}>Add Ingredient</button>

    <div className="sub-section">
        <strong className="text">Instructions</strong>
        <ol>
            {allInstructions.map((instruction: any) =>
            <li className="text" key={instruction}>{instruction}</li>)}
        </ol>
    </div>
    <input
        placeholder="enter instruction here"
        value={newInstruction} 
        onChange={(f: ChangeEvent<HTMLInputElement>) => {
        setNewInstruction(f.target.value);
    }}
    />
    <button onClick={addInstruction}>
    Add Instruction
    </button>
    
    </div>
);

    
}

export default RecipePage;