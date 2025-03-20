import '../scss/app.scss';
import sport from "../assets/img/sport.svg"
import obsh from "../assets/img/obsh.svg"
import events from "../assets/img/events.svg"
import studsov from "../assets/img/studsov.svg"

function StudLife() {

    return (
        <div className="main">
            <div className="main__sl">
                <h1 className="main__sl_title">
                    Студенческая жизнь в SmartCampus
                </h1>
                <h3>
                    Студенческая жизнь в SmartCampus невозможно описать словами: слишком яркая и разнообразная. В университете есть всё - от творчества и науки до стартап-студии и помощи людям. Здесь каждый может развить таланты, найти себя или реализовать проект вместе с командой единомышленников
                </h3>

                <div className="main__sl_sport">
                    <div  className="main__sl_sport_block">
                        <h1>
                            Спортивные мероприятия
                        </h1>

                        <h3>
                        Спортивные мероприятия в университете играют важную роль в жизни студентов. Спортивные клубы и секции предлагают регулярные тренировки, а мастер-классы и семинары позволяют обучаться новым навыкам и встречаться с профессионалами. Все это способствует созданию активного и здорового студенческого сообщества.
                        </h3>
                    </div>
                    <div>
                        <img src= {sport} alt="" />
                    </div>
                </div>

                <div className="main__sl_block">
                    <div className="main__sl_block_left">
                        <div
                         className="main__sl_block_left_image"
                         style={{
                            backgroundImage: `url(${obsh})`
                        }}>
                        </div>
                        <h2 className="main__sl_block_left_text">
                            Проживание в общежитие
                        </h2>
                    </div>
                    <div className="main__sl_block_right">
                        <div className="main__sl_block_right_box">
                            <div
                             className="main__sl_block_right_box_image"
                             style={{
                                backgroundImage: `url(${events})`
                            }}>
                            </div>
                            <h2 className="main__sl_block_right_box_text">
                                Мероприятия
                            </h2>
                        </div>
                        <div className="main__sl_block_right_box">
                            <div
                            className="main__sl_block_right_box_image"
                            style={{
                                backgroundImage: `url(${studsov})`
                            }}>
                            </div>
                            <h2 className="main__sl_block_right_box_text">
                                Студсовет
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default StudLife;