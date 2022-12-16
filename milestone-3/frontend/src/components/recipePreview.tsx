import React from 'react';
import './recipePreview.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg } from 'react-bootstrap';

export interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

export interface RecipePreviewProps extends Recipe{
  // external: boolean,
  _id: string
}

export default function RecipePreview(props: RecipePreviewProps) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <Card className="mb-3">
      <CardImg
        variant="top"
        src={props.image}
        alt={props.name}
        style={{ width: '150px', height: '150px' }}
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/recipe/${props.name}`}>{props.name}</Link>
        </Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}