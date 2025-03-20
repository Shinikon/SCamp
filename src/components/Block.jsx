import '../scss/components/_banner.scss'
import bcgi from '../assets/img/abusbcgi.svg'

function Block() {

  return (
    <div>
        <div className="main__abus_bottom"
                style={{
                    backgroundImage: `url(${bcgi})`
                }}>
                    <div  className="main__abus_bottom_inner">
                        <p>
                        Снижение стоимости обучения
                        </p>
                        <p>
                        Медицинское обслуживание
                        </p>
                        <p>
                        Академические консультанты
                        </p>
                        <p>Стипендии</p>
                        <p>
                        Психологическая поддержка
                        </p>
                        <p>Материальная поддержка</p>
                        <p>
                        Вакансии для студентов и выпускников
                        </p>
                        <p>Поддержка студенческих семей</p>
                    </div>
                </div>
    </div>
    )
}

export default Block;