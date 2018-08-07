import React from 'react';
import '../../styles/Meetup.css';
import MeetupGallery from './ImageGallery';

const Meetup = () => {
    const meetupPhotos = [
        { src: 'https://blog.interlink-ua.com/wp-content/uploads/sites/2/2018/04/DSC_0643.jpg', alt: 'First slide', active: true },
        { src: 'https://blog.interlink-ua.com/wp-content/uploads/sites/2/2017/09/DSC_0297.jpg', alt: 'Second slide', active: false },
        { src: 'https://blog.interlink-ua.com/wp-content/uploads/sites/2/2017/03/DSC_1540.jpg', alt: 'Third slide', active: false },
        { src: 'https://blog.interlink-ua.com/wp-content/uploads/sites/2/2018/04/DSC_0733.jpg', alt: 'Forth slide', active: false },
        { src: 'https://blog.interlink-ua.com/wp-content/uploads/sites/2/2018/03/DSC_0134.jpg', alt: 'Fives slide', active: false },
        { src: 'https://blog.interlink-ua.com/wp-content/uploads/sites/2/2017/12/DSC_1506.jpg', alt: 'Sixes slide', active: false }
    ];
    return(
        <div className="meet-up-info">
            <div className="info-container">
                <img src="https://blog.interlink-ua.com/wp-content/uploads/sites/2/2016/11/unnamed-8.png" alt=""/>
                <p className='description'>Ще не визначився із професією або не знаєш, в якому напрямку розвиватися? Не біда! <br/>
                    InterLink Meetup – новий професійно-орієнтований івент у невимушеному форматі за участю досвідчених менторів компанії
                    InterLink який допоможе тим, хто тільки почав цікавитися ІТ. Мета нашого івенту – допомогти студентам обрати свій шлях в IT,
                    мотивувати розвиватися у кар’єрному напрямку вже зараз та пояснити складні речі на простих і зрозумілих прикладах.<br/>
                    На наших зустрічах ментори розкривають важливі фундаментальні теми у різних напрямках ІТ: програмування, тестування,
                    дизайн та інші. На них ви можете дізнатися “з перших вуст” про те, якими навиками потрібно володіти у даній професії,
                    про важливість комунікацій та англійської мови, про методології розробки ПЗ – все те, з чим доводиться стикатися нашим спеціалістам у роботі.
                    Тож наш івент буде цікавий як для тих, хто вже визначився з професією, так і для тих, хто ще тільки позпочинає своє знайомство з ІТ.
                    Ми допоможемо розвіяти міфи та показати чим же насправді займаються наші колеги.<br/>
                    Зазвичай наші зустрічі проходять у форматі презентації та нетворкінгу і невимушеного спілкування,
                    тож наші гості можуть спробувати примінити свої знання на практиці, взяти участь у цікавих іграх, позмагатися за призи,
                    а також отримати пораду від ментора.
                    Приєднуйся до InterLink Meetup – стартуй разом з нами! 🙂
                </p>
            </div>
            <MeetupGallery
                photos={meetupPhotos}
            />
        </div>
    );
}

export default Meetup;