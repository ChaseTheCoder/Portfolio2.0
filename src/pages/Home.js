import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Home.css';

function Home(props) {

  return(
    <Container>
      <Row>
        <Col>
          <img sm={4} src="/coffee.png" alt="coffee cup" />
        </Col>
        <Col>
          <h1 sm={4} >This is where text will go</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;