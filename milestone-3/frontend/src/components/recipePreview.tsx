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
  _id: string
}

export default function RecipePreview(props: RecipePreviewProps) {
  return (

    <div className="card">
      <img style={{ width: '150px', height: '150px' }} className="card-img-top" src={props.image} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title"><Link to={`/recipe/${props.name}`}><h4 className='card-title'>{props.name}</h4></Link></h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>


  );
}

      {/* The Helmet is the same as <head> */}
      {/* <Helmet>
        <link rel="stylesheet" href="./App.css" />
      </Helmet> */}
      {/* <Card className="card border-dark bg-light mb-3">
        <Card.Body className='card-body'>
          <Row>
            <Card.Img
              className="card-img-top"
              variant="top"
              src={props.image}
              alt={props.name}
              style={{ width: '150px', height: '150px' }}
            />
            <Card.Text>
              <Card.Title>
                <Link to={`/recipe/${props.name}`}><h4 className='card-title'>{props.name}</h4></Link>
              </Card.Title>
              <p className='card-body'>{props.description}</p>
            </Card.Text>
          </Row>
        </Card.Body>
      </Card> */}