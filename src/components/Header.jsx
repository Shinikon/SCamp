import logoSvg from '../assets/img/logo.svg';
import '../scss/components/_header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="block">
        <Link to="/" >
          <div className="header__logo">
            <img width="51" height="51"  src={logoSvg} alt="logo" />
          </div>
        </Link>
        <ul className="header__nav">
          <li>
            <Link to="/education" ><p>Обучение</p></Link>
          </li>
          <li>
            <Link to="/studlife"><p>Жизнь студента</p></Link>
          </li>
          <li>
            <Link to="/science"><p>Наука и исследования</p></Link>
          </li>
          <li>
            <Link to="/newstud"><p>Абитуриенту</p></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;