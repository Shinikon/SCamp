import React from 'react';
import '../scss/components/_newsSection.scss';



const NewsSection = ({ title, news }) => {
  return (
    <section className="news-section">
      <h1 className="news-section__title">{title}</h1>
      <div className="news-section__grid">
        {news.map((item) => (
          <div className="news-section__item" key={item.id}>
            <div className="news-section__item-image-wrapper">
              <img
                src={item.imageUrl} // Используйте item.imageUrl
                alt={item.title}
                className="news-section__item-image"
              />
              <span className="news-section__item-datetime">
                {item.date} {item.time}
              </span>
            </div>
            <h2 className="news-section__item-text">{item.text}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;