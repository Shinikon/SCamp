import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/_cardBlock.scss';

const CardBlock = ({ cards, largeCardWidth, largeCardHeight, smallCardWidth, smallCardHeight }) => {
    return (
      <div className="card-block">
        <div className="card-block__top">
          {cards.slice(0, 2).map((card) => (
            <Link
              to={card.link}
              className="card-block__card card-block__card--large"
              key={card.id}
              style={{
                backgroundImage: `url(${card.image})`,
                width: largeCardWidth,
                height: largeCardHeight,
              }}
            >
              <div className="card-block__text card-block__text--large">{card.text}</div>
            </Link>
          ))}
        </div>
        <div className="card-block__bottom">
          {cards.slice(2).map((card) => (
            <Link
              to={card.link}
              className="card-block__card card-block__card--small"
              key={card.id}
              style={{
                backgroundImage: `url(${card.image})`,
                width: smallCardWidth,
                height: smallCardHeight,
              }}
            >
              <div className="card-block__text card-block__text--small">{card.text}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default CardBlock;