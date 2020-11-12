import React from 'react';
import Hero from '../components/Hero';
import AboutContent from '../components/AboutContent';

function About(props) {

  return(
    <div>
      <Hero title={props.title} subTitle={props.subTitle} />

      <i class="fab fa-js-square"></i>

      <AboutContent>
        <p>I'm Chase, a software engineer with edtech startup experience.  My hard skills include JavaScript, Node JS, Python, Django, React, SQL Database, MongoDB,</p>

        <p>As an educator I've learned tenacity.  Teachers are truly great at learning and applying immediately. I've been through incredible challenges, bringing classrooms that are academically behind and facing trauma to make over one and a half years worth of growth in math and science.  If you hire me, I will make it happen and I have the data to prove it.</p>

        <p>I'm currently learning data structures and React/React Native.Next, I hope to make educational apps for educators to apply what I learn. </p>
      </AboutContent>
    </div>
  );
}

export default About;