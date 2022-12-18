import React, { ChangeEvent } from 'react'
import "./recipePreview.css"
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, ListGroup, Image, Form, Button, InputGroup, FormControl } from 'react-bootstrap';

interface Recipe{
    name: string,
    description: string,
    image: string,
    ingredients: string[],
    instructions: string[],
}

// Create a new interface so that the data fetched from the API can be used
interface Recipe_ext extends Recipe{
    '_id'? : string,
    '__v'? : number,
}

export default function RecipePage() {
    // Use the `useParams` hook to access the URL parameters.
    const { name } = useParams(); 

    // Create state variables for the recipe, new ingredient and new instruction.
    const [recipe, setRecipe] = useState<Recipe_ext>({
        name: "RECIPE NOT FOUND", // If wrong recipe is entered in the search box
        description: "",
        image: "",
        ingredients: [],
        instructions: [],
        _id: "",
        __v: 0
    });
    
    const [error, setError] = useState("");
    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState<string[]>([]);
    const [newInstruction, setNewInstruction] = useState('');
    const [allInstructions, setAllInstructions] = useState<string[]>([]);

    useEffect(() => {
        fetch(`http://localhost:3001/recipe/${name}`)
        .then((response) => response.json())
        .then(recipeData => {
            setRecipe(recipeData)
            setAllIngredients(recipeData.ingredients)
            setAllInstructions(recipeData.instructions)
        })
        .catch(err => console.log(err))
    }, [name])


    function addIngredient(){
        fetch(
            `http://localhost:3001/recipe/${name}/ingredient`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "ingredient": newIngredient
                })
            }
            ).then(() => {
                setAllIngredients([...allIngredients,newIngredient])
                setNewIngredient("")
            })
            .catch(err => console.log(err))
    }

    function addInstruction(){
        fetch(
            `http://localhost:3001/recipe/${name}/instruction`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "instruction": newInstruction
                })
            }
            ).then(() => {
                setAllInstructions([...allInstructions,newInstruction]);
                setNewInstruction("")
            })
            .catch(err => console.log(err))
    }
    
    return (
    <Container>
    <Row>
      <Col xs={8}>
        <h1>{recipe.name}</h1>

        {/* Ingredients */}
        <h2>Ingredients</h2>
        <ListGroup variant="flush">
          {/* Maps each item in the ingredients array to a list item */}
          {allIngredients.map((item) => (
            <ListGroup.Item>{item}</ListGroup.Item>
          ))}
        </ListGroup>
        <Form>
          <Form.Control
            placeholder="2 cups of spinach"
            value={newIngredient} // add newIngredient as the input's value
            onChange={(e) => setNewIngredient(e.target.value)}
          />
          <Button variant="primary" onClick={addIngredient}>
            Add Ingredient
          </Button>
        </Form>
      </Col>
      <Col xs={4}>
        <Image src={recipe.image} thumbnail />
      </Col>
    </Row>
    <Row>
        <Col md={12}>
        <h2>Instructions</h2>
        <ListGroup variant="flush">
  {allInstructions.map((instruction) => (
    <ListGroup.Item key={allInstructions.indexOf(instruction) >= 0 ? allInstructions.indexOf(instruction) : instruction}>{instruction}</ListGroup.Item>
  ))}
</ListGroup>

<InputGroup className="mb-3">
  <FormControl
    placeholder="Enter a new instruction"
    value={newInstruction}
    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewInstruction(e.target.value)}
  />
  <InputGroup>
    <InputGroup.Text id="add-instruction-button" onClick={addInstruction}>
      Add Instruction
    </InputGroup.Text>
  </InputGroup>
</InputGroup>
        </Col>
      </Row>
    </Container>

    )
}

RecipePage.defaultProps = {
    external: false,
}