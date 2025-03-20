import React from 'react';
// import { Link } from 'react-router-dom';

import '../scss/app.scss';
import Banner from '../components/Banner';
import TodayBox from '../components/TodayBox'
import Block from '../components/Block'

import rec1 from '../assets/img/rec1.svg'
import rec2 from '../assets/img/rec2.svg'



function AbUs() {

    return (
        <div className="main">
            <Banner />
            <TodayBox />

            <div className="main__abus">
                <h1>
                    Ректорат
                </h1>

                <div className='main__abus_flex'>
                    <div className='main__abus_flex_block'>
                        <img src={rec1} alt="" />
                        <div>
                            <h3>
                                Куликов Евгений Сергеевич
                            </h3>
                            <p>
                                Ректор
                            </p>
                        </div>
                    </div>

                    <div className='main__abus_flex_block'>
                        <img src={rec2} alt="" />
                        <div>
                            <h3>
                                Федорова Ольга Сергеевна
                            </h3>
                            <p>
                            Проректор по учебной работе
                            </p>
                        </div>
                    </div>

                    <div className='main__abus_flex_block'>
                        <img src={rec1} alt="" />
                        <div>
                            <h3>
                            Иванов Дмитрий Маркович
                            </h3>
                            <p>
                            Проректор по молодежной политике
                            </p>
                        </div>
                    </div>

                    <div className='main__abus_flex_block'>
                        <img src={rec2} alt="" />
                        <div>
                            <h3>
                            Яцкевич Мария Игоревна
                            </h3>
                            <p>
                            Проректор по административно-хозяйственной работе
                            </p>
                        </div>
                    </div>
                </div>

                <Block />
            </div>
        </div>
    );
  }
  
  export default AbUs;