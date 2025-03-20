// import parse from 'html-react-parser';
import React from 'react';
import '../scss/app.scss';

// import '../scss/components/_banner.scss';
import Banner from '../components/Banner';
import TodayBox from '../components/TodayBox'
import Cards from "../components/Cards"


import icon1 from "../assets/img/icon1.svg"
import icon2 from "../assets/img/icon2.svg"
import icon3 from "../assets/img/icon3.svg"

import teach1 from "../assets/img/teach1.svg"
import teach2 from "../assets/img/teach2.svg"
import teach3 from "../assets/img/teach3.svg"





function Main() {
    return (
        <div className='main'>
            <Banner />
            
            <div className="main__feat">
                <div className="main__feat_box">
                    <img src={icon1} alt="" />
                    <h3>Инновации и Будущее</h3>
                    <p>Мы вдохновляем на инновационное мышление, готовя лидеров, способных формировать будущее с помощью передовых технологий и этичного подхода.</p>
                </div>
                <div className="main__feat_box">
                    <img src={icon2} alt="" />
                    <h3>Знания и Технологии</h3>
                    <p>Мы объединяем фундаментальные знания с передовыми технологиями, готовя специалистов для прогрессивного и устойчивого общества.</p>
                </div>
                <div className="main__feat_box">
                    <img src={icon3} alt="" />
                    <h3>Лидерство и  Воздействие</h3>
                    <p>Мы развиваем лидерские качества и социальную ответственность, воспитывая профессионалов, которые будут менять мир к лучшему.</p>
                </div>
            </div>


            <a className="main__studLife" href='/studlife'>
                <div className="main__studLife_box">
                    <h2>
                    Твой путь начинается здесь
                    </h2>
                    <p className="main__studLife_box_text">жизнь студента</p>
                </div>
                <div className="main__studLife_box" style={{
                    backgroundImage: `url(${teach1})`
                }}>
                    <p className="main__studLife_box_text">жизнь студента</p>
                </div>

                <div className="main__studLife_box" style={{
                    backgroundImage: `url(${teach2})`
                }}>
                    <p className="main__studLife_box_text">жизнь студента</p>
                </div>
                <div className="main__studLife_box" style={{
                    backgroundImage: `url(${teach3})`
                }}>
                    <p className="main__studLife_box_text">жизнь студента</p>
                </div>
            </a>

            <TodayBox />
            <Cards />

            <div className="main__banbot">
                <h1 className="main__banbot_text">
                    Инженеры создают будущее — мы создаём инженеров
                </h1>
            </div>
        </div>
    );
  }
  
  export default Main;


