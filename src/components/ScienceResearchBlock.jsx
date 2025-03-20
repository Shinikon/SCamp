import React from 'react';
import '../scss/components/_scienceBlock.scss';

const ScienceResearchBlock = ({ data, blocksPerRow = 2 }) => {
    const blockColors = ['#59A68D', '#A6BA4C']; // Синий и зеленый
  
    return (
      <div className="science-research-block">
        {data.map((item, index) => {
          const colorIndex = (index < blocksPerRow)
            ? index % blockColors.length // Первая строка
            : (index + 1) % blockColors.length; // Вторая строка
  
          return (
            <div
              key={index}
              className="science-research-block__item"
              style={{ backgroundColor: blockColors[colorIndex] }}
            >
              <h3 className="science-research-block__text">{item.text}</h3>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ScienceResearchBlock;