import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Resume(props) {

  return(
    <Jumbotron className="bg-transparent jumbotron-flue p-0">
    <Container fluid={true}>
      <Row className="justify-content-center py-f">
        <Col md={8} sm={12}>
          { props.title && <h1 className="font-weight-bolder ">{props.title}</h1> }
        </Col>
      </Row>
    </Container>
  </Jumbotron>
  );
}

export default Resume;