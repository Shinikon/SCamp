import image from '../assets/img/SKtoday.svg';
import book from '../assets/img/book.svg'
import '../scss/app.scss';

import libData from '../libData'
import LibCategory from '../components/LibCategory'

function Lib() {

    return (
        <div className="main">
            <div className="main__lib">

                <LibCategory data = {libData}/>


                <div className="main__lib_book">
                    <div className="main__lib_book_left">
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
                        className="main__lib_book_image"
                        style={{
                            backgroundImage: `url(${book})`
                        }}>
                    </div>
                    <div
                        className="main__lib_book_image"
                        style={{
                            backgroundImage: `url(${book})`
                        }}>
                    </div>
                </div>

                <div className="main__lib_bottom">
                    <h2>
                        Запросить книжную литературу можно по почте <span>bib@eduprosvet.ru</span>
                    </h2>
                    
                    <div className="main__lib_bottom_grid">
                        <div className="main__lib_bottom_grid_block">
                            <h3>
                                Электронный каталог 
                            </h3>
                        </div>

                        <div className="main__lib_bottom_grid_block">
                            <h3>
                                Электронно-библиотечные системы
                            </h3>
                        </div>
                        
                        <div className="main__lib_bottom_grid_block">
                            <h3>
                                Информационно-библиографическое сопровождение образования
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Lib;