import React from 'react';
import '../scss/components/_footer.scss';
import locationIcon from '../assets/img/location.svg';
import phoneIcon from '../assets/img/phone.svg';
import facebookIcon from '../assets/img/VK.svg';
import instagramIcon from '../assets/img/TG.svg';
import nameIcon from '../assets/img/name.svg';
import emailIcon from '../assets/img/email.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__block1">
        <p>
        Первый российский университет и по времени образования, и по своему значению. Мы стремимся к тому, чтобы каждый студент получил лучшие условия для раскрытия своего потенциала и становления профессионалом в выбранной области.Это феномен национальной науки и культуры, которым мы все гордимся. Добро пожаловать в SmartCampus!
        </p>
      </div>

      <div className="footer__block2">
        <h3>Приходите к нам</h3>
        <div className="footer__block2_contact1">
          <img src={locationIcon} alt="Location" />
          <p>Ул. Пушкина д. Колотушкина г. Магадан </p>
        </div>
        <div className="footer__block2_contact2">
          <img src={phoneIcon} alt="Phone" />
          <p>79823892356</p>
        </div>
        <div className="footer__block2_social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="footer__block3">
        <div className="footer__form">
          <div className="footer__name-email">
            <div className="footer__input-wrapper">
              <input type="text" placeholder="Ваше имя" />
              <img src={nameIcon} alt="Name" />
            </div>
            <div className="footer__input-wrapper">
              <input type="email" placeholder="Ваш email" />
              <img src={emailIcon} alt="Email" />
            </div>
          </div>
          <textarea placeholder="Ваше сообщение" />
          <button type="submit">Отправить</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;