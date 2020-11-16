import React from 'react';
import Hero from '../components/Hero';
import DocIframe from '../components/DocViewer';

function Resume(props) {

  return(
    <div>
      <Hero title={props.title} />
      <DocIframe source="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:8a57ba12-ec75-47ad-8dbd-9874d9cc3ee9" />
    </div>
  
  );
}

export default Resume;