import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { ExternalLink } from 'react-external-link';

function Hero(props) {

  return(
    <Jumbotron className="bg-transparent jumbotron-flue p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-3">
          <Col md={8} sm={12}>
            { props.title && <h1 className="font-weight-bolder ">{props.title}</h1> }
            { props.subTitle && <h3 className="font-weight-light">{props.subTitle}</h3> }
            { props.subTitle2 && <h3 className="font-weight-light">{props.subTitle2}</h3> }
            { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
          </Col>
        </Row>
        { props.doc && <Row className="justify-content-center py-0">
          <Col md={8} sm={12}>
            <ExternalLink href="zhttps://docs.google.com/document/d/e/2PACX-1vQP2JUgzNqDwMCG6HRnP5cMKOgY9kerlWN-xINawDq3oMiKDm1Xjc9ER4e3Kd2MmvM4Te2nXITBEjwP/pub"><p className="font-weight-light" >View in Google</p></ExternalLink>
             <iframe 
            title="Resume Document"
            src={props.doc}
            height="1000"
            width="100%"></iframe>
          </Col>
        </Row>}
      </Container>
    </Jumbotron>
  );

}

export default Hero;