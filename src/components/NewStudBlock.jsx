import React from 'react';
import '../scss/components/_newstudBlock.scss';

const NewStudBlock = ({ data }) => {
  const blockColors = ['#59A68D', '#0090D9']; // Синий и зеленый

  return (
    <div className="aligned-text-block">
      {data.map((item, index) => (
        <div
          key={index}
          className="aligned-text-block__item"
          style={{ backgroundColor: blockColors[index % blockColors.length] }}
        >
          <h3 className="aligned-text-block__text">{item.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default NewStudBlock;