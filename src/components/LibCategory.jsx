import React from 'react';
import '../scss/components/_libCategory.scss';

const LibCategory = ({ data }) => {
  return (
    <div className="text-block-with-list">
      {data.map((block, index) => (
        <div key={index} className="text-block-with-list__item">
          <h2 className="text-block-with-list__title">{block.title}</h2>
          <ul className="text-block-with-list__list">
            {block.texts.map((text, i) => (
              <p key={i} className="text-block-with-list__text">{text}</p>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LibCategory;