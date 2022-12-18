import React, { useState } from 'react';
export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const AddRecipeForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const recipe: Recipe = {
      name,
      description,
      image,
      ingredients,
      instructions,
    };

    fetch('http://localhost:3001/recipe', {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        setMessage('Recipe added successfully!');
        setName('');
        setDescription('');
        setImage('');
        setIngredients([]);
        setInstructions([]);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleIngredientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIngredients(event.target.value.split(','));
  };

  const handleInstructionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInstructions(event.target.value.split('\n'));
  };

  return (
    <form onSubmit={handleSubmit}>
    {message && <p>{message}</p>}
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={event => setDescription(event.target.value)} />
      </label>
      <br />
      <label>
        Image URL:
        <input type="text" placeholder="" value={image} onChange={event => setImage(event.target.value)} />
      </label>
      <br />
      <img src={image} alt="image preview unavailable" style={{ width: '150px', height: '150px' }}></img>
      <br />
      <label>
        Ingredients:
        <input type="text" placeholder='spinach,potatoes' value={ingredients.join(',')} onChange={handleIngredientChange} />
      </label>
      <br />
      <label>
        Instructions:
        <textarea placeholder={`Preheat Oven to 350F \nAdd eggs and mix well`} value={instructions.join('\n')} onChange={handleInstructionChange} />
      </label>
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
