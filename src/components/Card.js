import React from 'react';

import CardInfo from './CardInfo';

function Card(props) {

  return(
    <div>
      <img className="" scr={props.item.imgSrc} alt={props.item.imgSrc} />
      { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subtitle} link={props.item.link} /> }
    </div>
  );
}

export default Card;
