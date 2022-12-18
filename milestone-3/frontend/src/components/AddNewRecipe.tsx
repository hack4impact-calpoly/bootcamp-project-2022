import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

export default function AddRecipeForm(){
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
    <Form onSubmit={handleSubmit}>
    <p style={{color: 'green'}}>{message?message:""}</p>
    <Form.Group>
      <Form.Label for="name">Name:</Form.Label>
      <Form.Control type="text" id="name" value={name} onChange={event => setName(event.target.value)} />
    </Form.Group>
    <Form.Group>
      <Form.Label for="description">Description:</Form.Label>
      <Form.Control type="textarea" id="description" value={description} onChange={event => setDescription(event.target.value)} />
    </Form.Group>
    <Form.Group>
      <Form.Label for="image">Image URL:</Form.Label>
      <Form.Control type="text" id="image" value={image} onChange={event => setImage(event.target.value)} />
    </Form.Group>
    <Form.Group>
        <img src={image} alt="image preview unavailable" style={{ width: '150px', height: '150px', color: 'red' }} />
    </Form.Group>
    <Form.Group>
      <Form.Label for="ingredients">Ingredients:</Form.Label>
      <Form.Control type="text" id="ingredients" placeholder='spinach,potatoes' value={ingredients.join(',')} onChange={handleIngredientChange} />
    </Form.Group>
    <Form.Group>
      <Form.Label for="instructions">Instructions:</Form.Label>
      <Form.Control type="text" id="instructions" placeholder={`Preheat Oven to 350F \nAdd eggs and mix well`} value={instructions.join('\n')} onChange={handleInstructionChange} />
    </Form.Group>
    <Button type="submit" variant="primary">Add Recipe</Button>
    </Form>
  );
};
