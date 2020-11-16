import React from 'react';

import Card from '../components/Card';

import Emojigotchi from '../assets/images/emojigotchi.png';
import Delsecto from '../assets/images/delsecto.png';
import Netflix from '../assets/images/netflix.png';
import Portfolio from '../assets/images/portfolio.png';
import Wayfarer from '../assets/images/wayfarer.png';

import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Emojigotchi',
          subTitle: 'First JavaScript App',
          imgSrc: Emojigotchi,
          link: 'https://www.spacejam.com/',
          selected: false
        },
        {
          id: 1,
          title: 'Delsecto',
          subTitle: 'MongoDB App',
          imgSrc: Delsecto,
          link: 'https://www.spacejam.com/',
          selected: false
        },
        {
          id: 2,
          title: 'Netflix Seris Reviews',
          subTitle: '24 Hour Collaboration with classmates & UX/UI students',
          imgSrc: Netflix,
          link: 'https://www.spacejam.com/',
          selected: false
        },
        {
          id: 3,
          title: 'portfolio',
          subTitle: 'First Version of Portfolio to show my growth',
          imgSrc: Portfolio,
          link: 'https://www.spacejam.com/',
          selected: false
        },
        {
          id: 4,
          title: 'Wayfarer',
          subTitle: 'Django App',
          imgSrc: Wayfarer,
          link: 'https://www.spacejam.com/',
          selected: false
        }
      ]
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      } 
    });

    this.setState({
      items
    });
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render() {
    return(
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    )
  }

}

export default Carousel;