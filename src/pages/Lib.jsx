import React, { useState, useEffect } from "react";
import book from "../assets/img/book.svg";
import image from "../assets/img/SKtoday.svg";
import axios from "axios";
import LibCategory from "../components/LibCategory"; // Убедитесь, что путь к компоненту LibCategory правильный
// import '../scss/components/_libCategory.scss'; // Эта строка, скорее всего, уже есть в LibCategory
import "../scss/components/_libCategory.scss"; // Стиль для всего компонента Lib

function Lib() {
  const [libData, setLibData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://67dc186d1fd9e43fe4772fa9.mockapi.io/data"
        ); 
        setLibData(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
        // Обработка ошибок 
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей, чтобы эффект запустился только один раз

  return (
    <div className="main">
      <div className="main__lib">
        {libData.length > 0 ? ( // Проверяем, что данные загружены
          <LibCategory data={libData} />
        ) : (
          <p>Загрузка данных...</p> //  сообщение о загрузке
        )}

        <div className="main__lib_book">
          <div className="main__lib_book_left">
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <h2>Научные публикации и издания</h2>
            </div>
            <div>
              <h3>
                Первый российский университет и по времени образования,
                и по своему значению. Это феномен национальной науки и культуры,
                которым мы все гордимся. Добро пожаловать в SmartCampus!
              </h3>
            </div>
          </div>

          <div
            className="main__lib_book_image"
            style={{
              backgroundImage: `url(${book})`,
            }}
          ></div>
          <div
            className="main__lib_book_image"
            style={{
              backgroundImage: `url(${book})`,
            }}
          ></div>
        </div>

        <div className="main__lib_bottom">
          <h2>
            Запросить книжную литературу можно по почте{" "}
            <span>bib@eduprosvet.ru</span>
          </h2>

          <div className="main__lib_bottom_grid">
            <div className="main__lib_bottom_grid_block">
              <h3>Электронный каталог</h3>
            </div>

            <div className="main__lib_bottom_grid_block">
              <h3>Электронно-библиотечные системы</h3>
            </div>

            <div className="main__lib_bottom_grid_block">
              <h3>Информационно-библиографическое сопровождение образования</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lib;
