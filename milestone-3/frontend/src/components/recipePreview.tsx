import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

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
    <div>
      <Helmet>
        <link rel="stylesheet" href="./App.css" />
      </Helmet>
    <Card className="card mb-3">
      <CardImg
        variant="top"
        src={props.image}
        alt={props.name}
        style={{ width: '150px', height: '150px'}}
      />
      <Card.Body className='card-body'>
        <Card.Title>
          <Link to={`/recipe/${props.name}`}>{props.name}</Link>
        </Card.Title>
        <Card.Text><p>{props.description}</p></Card.Text>
      </Card.Body>
    </Card>
    </div>


  );
}