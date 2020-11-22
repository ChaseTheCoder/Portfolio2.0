import React from 'react';
import Hero from '../components/Hero';

function Resume(props) {

  return(
    <div>
      <Hero title={props.title} linkText={props.linkText} doc={props.doc} />   
    </div>
  );
}

export default Resume;