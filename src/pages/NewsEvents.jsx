import '../scss/app.scss';
import NewsSection from '../components/NewsSection';
import image1 from '../assets/img/image1.svg';
import image2 from '../assets/img/image2.svg';
import image3 from '../assets/img/image3.svg';
import image4 from '../assets/img/image4.svg';

function NewsEvents() {
    const newsData = [
      {
        id: 1,
        imageUrl: image1, // Используйте импортированные переменные
        date: '2023-10-27',
        time: '10:00',
        text: 'SC и крупнейшая золотодобывающая компания России будут готовить уникальных специалистов-геологов',
      },
      {
        id: 2,
        imageUrl: image2,
        date: '2023-10-26',
        time: '14:30',
        text: 'Финальные испытания олимпиады «Я – профессионал» по теплоэнергетике проведет SC в середине марта',
      },
      {
        id: 3,
        imageUrl: image3,
        date: '2023-10-25',
        time: '09:15',
        text: 'Ученые SC научились прогнозировать поведение капель суспензии',
      },
      {
        id: 4,
        imageUrl: image4,
        date: '2023-10-24',
        time: '18:00',
        text: 'Магистранты SC – победители конкурса фонда Потанина',
      },
    ];

    return (
      <div>
        <NewsSection title="Новости" news={newsData} />
        <NewsSection title="Мероприятия" news={newsData} />
        <NewsSection title="Архив" news={newsData} />
      </div>
    );
  }
  
  export default NewsEvents;