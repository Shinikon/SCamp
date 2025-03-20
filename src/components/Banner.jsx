import '../scss/components/_banner.scss'
import banimg from "../assets/img/banimg.svg"

function Banner() {

  return (
    <div className="banner">
        <div className="banner__container">
            <div className='banner__container_img'>
                <img  src={banimg} alt="banner" />
            </div>
            <div className='banner__container_box'>
                <div className="banner__container_box_title">
                    <h1>Готовим <span>лидеров,</span></h1>
                    <h1>меняющих мир к <span>лучшему</span></h1>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Banner;