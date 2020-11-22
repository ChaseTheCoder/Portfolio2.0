import React from 'react';

import CardInfo from './CardInfo';

function Card(props) {

  return(
    <div>
      <iframe title="Projects" src={props.item.link}></iframe>
      { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subtitle} link={props.item.link} /> }
    </div>
  );
}

export default Card;
