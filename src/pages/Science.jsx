import '../scss/app.scss';
import image from '../assets/img/SKtoday.svg';
import book from '../assets/img/book.svg'

import ScienceResearchBlock from '../components/ScienceResearchBlock';

const scienceResearchData = [
    { text: 'Космические технологии' },
    { text: 'Радиационные технологии' },
    { text: 'Распределенная энергетика' },
    { text: 'Цифровые технологии и искусственный интеллект' },
    { text: 'Инженерия в области здравоохранения' },
    { text: 'Промышленная томография и неразрушающий контроль' },
    { text: 'Освоение и исследование' },
  ];



function Science() {
    return (

        <div className="main">
            <div className="main__scie">
                <div className="main__scie_text">
                    <h1>
                        Наука и исследования
                    </h1>
                    <h3>
                        SmartCampus входит в число крупнейших технических вузов страны и представляет собой развитый научно-образовательный комплекс, в котором гармонично сочетаются инженерно-технические, естественнонаучные и гуманитарные направления.
                    </h3>

                    <h3>
                        SmartCampus – один из ведущих научных центров России, который вносит значительный вклад в развитие фронтирных технологий и подготовку высококвалифицированных специалистов для приоритетных отраслей промышленности и ОПК страны.
                    </h3>
                </div>
                <h1 className="main__scie_title">
                    Направления научной деятельности
                </h1>
                <ScienceResearchBlock data={scienceResearchData} blocksPerRow={4} />


                <div className="main__scie_book">
                    <div className="main__scie_book_left">
                        <div
                            style={{
                                backgroundImage: `url(${image})`
                            }}>
                            <h2>
                                Научные публикации и издания
                            </h2>
                        </div>
                        <div>
                            <h3>
                                Первый российский университет и по времени образования, и по своему значению. Это феномен национальной науки и культуры, которым мы все гордимся. Добро пожаловать в SmartCampus!
                            </h3>
                        </div>
                    </div>

                    <div
                        className="main__scie_book_image"
                        style={{
                            backgroundImage: `url(${book})`
                        }}>
                    </div>
                    <div
                        className="main__scie_book_image"
                        style={{
                            backgroundImage: `url(${book})`
                        }}>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Science;