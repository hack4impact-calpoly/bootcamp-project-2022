import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// About page
export default function About() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image src="https://images.fineartamerica.com/images/artworkimages/medium/3/funny-cute-dabbing-chef-gift-idea-haselshirt-transparent.png" rounded />
        </Col>
        <Col md={8}>
          <h1>About Me</h1>
          <p>
            My name is Swayam and this page was created as a part of Hack4Impact - Cal Poly's dev bootcamp.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
