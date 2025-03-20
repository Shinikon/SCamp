import React from 'react';
import AlignedTextBlock from '../components/NewStudBlock';


import map from '../assets/img/map.svg'
import '../scss/app.scss';


const alignedTextData = [
    { text: 'Один из лучших нестоличных технических вузов' },
    { text: 'Крутые преподаватели' },
    { text: 'Исторические корпуса' },
    { text: 'Удобный кампус' },
    { text: 'Свобода выбора' },
    { text: 'Университетский город' },
  ];

function NewStud() {

    return (
        <div className='main'>
            <div className="main__ns">
                <h1>
                    Выбирай SmartCampus!
                </h1>
                <AlignedTextBlock data={alignedTextData} />

                <div className="main__ns_enter">
                    <div className="main__ns_enter_left">
                        <h1>
                            Поступить онлайн
                        </h1>
                        <button>
                            <h3>
                            Поступить
                            </h3>
                        </button>
                    </div>
                    {/* <div> */}
                        <h2>
                        Подать докумеенты в SmartCampus можно с 1 февраля в личном кабинете, по почте и лично. С 20 июня - через Госуслуги
                        </h2>
                    {/* </div> */}
                </div>
            </div>

            <div className="main__ns_map">
                <div
                    className="main__ns_map_left"
                    style={{
                    backgroundImage: `url(${map})`
                    }}>
                </div>

                <div className="main__ns_map_right">
                    <h1>
                        Карта кампуса
                    </h1>
                    <h2>
                        Учебные корпуса в шаговой доступности общежития, научно-техническая библиотека, бассейн, профилакторий, культурный центр. Убедитесь сами!
                    </h2>

                    <button>
                        <h2>
                            Подробнее
                        </h2>
                    </button>
                </div>
            </div>
        </div>
    );
  }
  
  export default NewStud;