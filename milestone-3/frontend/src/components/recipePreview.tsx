import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, Row } from 'react-bootstrap';
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
        <Card.Body className='card-body'>
          <Row>
            <Card.Img
              variant="top"
              src={props.image}
              alt={props.name}
              style={{ width: '150px', height: '150px' }}
            />
            <Card.Text>
              <Card.Title>
                <Link to={`/recipe/${props.name}`}><h4>{props.name}</h4></Link>
              </Card.Title>
              <p>{props.description}</p>
            </Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </div>


  );
}