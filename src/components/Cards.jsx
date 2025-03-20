import React from 'react';
import CardBlock from '../components/CardBlock';
// Импорт изображений
import image1 from '../assets/img/forStud.svg';
import image2 from '../assets/img/coop.svg';
import image3 from '../assets/img/lib.svg';
import image4 from '../assets/img/AbUs.svg';
import image5 from '../assets/img/NewEvents.svg';

const Cards = () => {
  const cardsData = [
    { id: 1, image: image1, text: 'Студентам', link: '/student' },
    { id: 2, image: image2, text: 'Сотрудничество', link: '/coop' },
    { id: 3, image: image3, text: 'Библиотека', link: '/lib' },
    { id: 4, image: image4, text: 'О нас', link: '/abus' },
    { id: 5, image: image5, text: 'Новости и мероприятия', link: '/newsevents' },
  ];

  return (
    <div className="main">
      <CardBlock
        cards={cardsData}
        largeCardWidth="675px"
        largeCardHeight="400px"
        smallCardWidth="440px"
        smallCardHeight="261px"
      />
    </div>
  );
};

export default Cards;