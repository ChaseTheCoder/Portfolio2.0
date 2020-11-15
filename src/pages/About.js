import React from 'react';
import Hero from '../components/Hero';
import AboutIcons from '../components/AboutIcons'

function About(props) {

  return(
    <div>
      <Hero title={props.title} subTitle={props.subTitle} />
      
      <AboutIcons />

      <Hero subTitle2={props.subTitle2} />

    </div>
  );
}

export default About;