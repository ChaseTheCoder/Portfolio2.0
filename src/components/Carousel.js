import React from 'react';
import Emojigotchi from '../assets/images/emojigotchi.png';
import Delsecto from '../assets/images/delsecto.png';
import Netflix from '../assets/images/netflix.png';
import Portfolio from '../assets/images/portfolio.png';
import Wayfarer from '../assets/images/wayfarer.png';
import { CardGroup, Card } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

function Carousel() {

  const cardInfo = [
        {
          id: 0,
          title: 'Emojigotchi',
          subTitle: 'First JavaScript App',
          imgSrc: Emojigotchi,
          link: 'https://pages.git.generalassemb.ly/ChaseTheCoder/emojigotchi/',
          github: '#'
        },
        {
          id: 1,
          title: 'Delsecto',
          subTitle: 'MongoDB App',
          imgSrc: Delsecto,
          link: 'https://www.spacejam.com/',
          github: '#'
        },
        {
          id: 2,
          title: 'Netflix Seris Reviews',
          subTitle: '24 Hour Collaboration with classmates & UX/UI students',
          imgSrc: Netflix,
          link: 'https://www.spacejam.com/',
          github: '#'
        },
        {
          id: 3,
          title: 'portfolio',
          subTitle: 'First Version of Portfolio to show my growth',
          imgSrc: Portfolio,
          link: 'https://chasethecoder.github.io/portfolio/',
          github: '#'
        },
        {
          id: 4,
          title: 'Wayfarer',
          subTitle: 'Django App',
          imgSrc: Wayfarer,
          link: 'https://www.spacejam.com/',
          github: '#'
        }
      ]

  const renderCard = (card, id) => {
    return(
      <Card style={{ width: "18rem" }} key={id}>
        <Card.Img variant="top" src={card.imgSrc} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.subTitle}</Card.Text>
          <Card.Link href={card.link}>Site</Card.Link><Card.Link href={card.github}><FaGithub/></Card.Link>
        </Card.Body>
      </Card>
    )
  }

  return(
    <div>
      <CardGroup>
        {cardInfo.map(renderCard)}
      </CardGroup>
    </div>
  )

};

export default Carousel;