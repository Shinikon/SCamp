import React from 'react';
import '../scss/components/_faculty.scss';

const FacultyBlock = ({ data, backgroundImage }) => {
  return (
    <div className="grid-block__item">
      <div
        className="grid-block__animated-block"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <p className="grid-block__text">{data.title}</p>
      </div>
      <p className="grid-block__description">{data.description}</p>
    </div>
  );
};

export default FacultyBlock;