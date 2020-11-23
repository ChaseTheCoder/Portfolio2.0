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
            <ExternalLink href="https://docs.google.com/document/d/1fXHozGoTXDPhV2Xp-foFQJLb2aSSYTk-8YJWHFB7lhQ/edit?usp=sharing"><p className="font-weight-light" >View in Google</p></ExternalLink>
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