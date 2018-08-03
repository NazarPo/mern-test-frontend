import React from 'react';
import '../../styles/Meetup.css';
import MeetUpGallery from './ImageGallery';

const Meetup = () => {
    return(
        <div className="meet-up-info">
            <div className="info-container">
                <img src="https://blog.interlink-ua.com/wp-content/uploads/sites/2/2016/11/unnamed-8.png" alt=""/>
                <p>Ще не визначився із професією або не знаєш, в якому напрямку розвиватися? Не біда! <br/>
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
            <MeetUpGallery />
        </div>
    );
}

export default Meetup;