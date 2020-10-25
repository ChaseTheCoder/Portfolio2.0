import React from 'react';

import emojigotchi from '../assets/images/emojigotchi.png';
import delsecto from '../assets/images/delsecto.png';
import netflix from '../assets/images/netflix.png';
import portfolio from '../assets/images/portfolio.png';
import wayfarer from '../assets/images/wayfarer.png';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Emojigotchi',
          subTitle: 'First JavaScript App',
          imgSrc: emojigotchi,
          link: '#',
          selected: false
        },
        {
          id: 1,
          title: 'Delsecto',
          subTitle: 'MongoDB App',
          imgSrc: delsecto,
          link: '#',
          selected: false
        },
        {
          id: 2,
          title: 'Netflix Seris Reviews',
          subTitle: '24 Hour Collaboration with classmates & UX/UI students',
          imgSrc: netflix,
          link: '#',
          selected: false
        },
        {
          id: 3,
          title: 'portfolio',
          subTitle: 'First Version of Portfolio to show my growth',
          imgSrc: portfolio,
          link: '#',
          selected: false
        },
        {
          id: 4,
          title: 'Wayfarer',
          subTitle: 'Django App',
          imgSrc: wayfarer,
          link: 'https://wayfarernrc.herokuapp.com/',
          selected: false
        }
      ]
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.ed !== id) {
        item.selected = false;
      } 
    });

    this.setState({
      items
    });
  }

  render() {
    return(
      <p>Carousle, Hey</p> 
    )
  }

}

export default Carousel;