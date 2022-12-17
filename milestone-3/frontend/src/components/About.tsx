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
            My name is Swayam and this website was created as a part of Hack4Impact - Cal Poly's dev bootcamp.
          </p>
          <p>
        You can find me on <a href="https://www.instagram.com/sway.1351">Instagram</a>, <a href="https://github.com/sway4em">GitHub</a>, and <a href="https://linkedin.com/in/swayamchidrawar">LinkedIn</a>.
      </p>
        </Col>
      </Row>
    </Container>
  );
}
