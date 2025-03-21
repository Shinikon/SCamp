import React from 'react';
import FacultyBlock from '../components/FacultyBlock';
import '../scss/components/_faculty.scss';
import backgroundImage from '../assets/img/bcgimg.svg'; // Импортируем изображение

const FacultyList = () => {
  const gridData = [
    {
      title: 'Факультет игровой индустрии и киберспорта',
      description: 'Станьте продюсером международных событий в киберспорте, разработайте креативные кампании, создайте платформенные решения для индустрии и контент для специализированных медиа.',
    },
    {
      title: 'Разработчик игр',
      description: 'На данной программе учащиеся получат знания в области программирования и геймдизайна, изучат разные аспекты создания компьютерных игр, включая работу с различными движками, графикой, звуком и игровым дизайном. ',
    },
    {
      title: 'Факультет игровой индустрии и киберспорта',
      description: 'Станьте продюсером международных событий в киберспорте, разработайте креативные кампании, создайте платформенные решения для индустрии и контент для специализированных медиа.',
    },
    {
      title: 'Разработчик игр',
      description: 'На данной программе учащиеся получат знания в области программирования и геймдизайна, изучат разные аспекты создания компьютерных игр, включая работу с различными движками, графикой, звуком и игровым дизайном. ',
    },
    {
      title: 'Факультет игровой индустрии и киберспорта',
      description: 'Станьте продюсером международных событий в киберспорте, разработайте креативные кампании, создайте платформенные решения для индустрии и контент для специализированных медиа.',
    },
  ];

  return (
    <div className="grid-block">
      {gridData.map((data, index) => (
        <FacultyBlock key={index} data={data} backgroundImage={backgroundImage} />
      ))}
    </div>
  );
};

export default FacultyList;