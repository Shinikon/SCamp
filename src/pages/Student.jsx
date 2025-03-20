import '../scss/app.scss';
import Block from '../components/Block'
import bcgi from '../assets/img/studbcgi.svg'

function Student() {

    return (
        <div className='main'>



            <div className="main__stud">
                <div className="main__title">
                    <h1>
                        Студенту
                    </h1>

                    <h2>
                        В разделе собрана полезная информация для студентов Smartcampus. Здесь студент узнает, как связаться с Единым деканатом, где и как получить справки, как заселиться в общежитие и оплатить проживание. Информация о студенческих объединениях также размещена в этом разделе
                    </h2>
                </div>
                <h1>
                    Переводы и восстановление
                </h1>
                <div className="main__stud_block">
                    <div className="main__stud_block_1">
                        <p>Отчисление</p>
                        <p>Перевод на другое направление</p>
                        <p>Перевод на бюджет</p>
                    </div>
                    <div className="main__stud_block_2">
                        <p>Академический отпуск</p>
                        <p>Восстановление</p>
                    </div>
                    <div className="main__stud_block_3">
                        <img src={bcgi} alt="" />
                    </div>
                </div>

                <h1  className="main__stud_h1">
                    Переводы и восстановление
                </h1>
            </div>

            <Block />
        </div>
    );
  }
  
  export default Student;