import React from 'react';
import styles from './GoogleAppBlock.module.css'
import GoogleAppComponent from "./GoogleAppComponent/GoogleAppComponent";

const upperGoogleApp = [
  {
    logo: require('./../../img/google_acc.svg'),
    description: "Аккаунт"
  },
  {
    logo: require('./../../img/google_app.png'),
    description: "Поиск"
  },
  {
    logo: require('./../../img/google_b.svg'),
    description: "Бизнес"
  },
  {
    logo: require('./../../img/google-maps.svg'),
    description: "Карты"
  },
  {
    logo: require('./../../img/youtube.svg'),
    description: "YouTube"
  },
  {
    logo: require('./../../img/google-play.png'),
    description: "Play"
  },
  {
    logo: require('./../../img/gmail.svg'),
    description: "Почта"
  },
  {
    logo: require('./../../img/hangouts-meet.svg'),
    description: "Meet"
  },
  {
    logo: require('./../../img/google-contacts.svg'),
    description: "Контакты"
  },
  {
    logo: require('./../../img/google-drive.svg'),
    description: "Диск"
  },
  {
    logo: require('./../../img/google-calendar.svg'),
    description: "Календарь"
  },
  {
    logo: require('./../../img/google_translate.svg'),
    description: "Переводчик"
  },
  {
    logo: require('./../../img/google-photos.svg'),
    description: "Фото"
  },
  {
    logo: require('./../../img/google-duo.svg'),
    description: "Duo"
  },
  {
    logo: require('./../../img/chrome.svg'),
    description: "Chrome"
  },
];

const lowerGoogleApp = [
  {
    logo: require('./../../img/google-docs.svg'),
    description: "Документы"
  },
  {
    logo: require('./../../img/google-hangouts.svg'),
    description: "Hangouts"
  },
  {
    logo: require('./../../img/google-keep.svg'),
    description: "Google Keep"
  },
  {
    logo: require('./../../img/jamboard.svg'),
    description: "Jamboard"
  },
];

class GoogleAppBlock extends React.Component {

  getAppPoints = (value) => value.map((point) => {
    return <GoogleAppComponent logo={point.logo} description={point.description} key={point.description}/>
  })

  render() {
    return (
      <>
        <div className={styles.googleAppBlock}>
          <div className={styles.googleAppBlockFirst}>
            {this.getAppPoints(upperGoogleApp)}
          </div>
          <div className={styles.googleAppBlockSecond}>
            {this.getAppPoints(lowerGoogleApp)}
          </div>
          <a
            className={styles.anotherAppsButton}
            href="https://about.google/intl/ru/products/?tab=wh"
            target="blank"
          >
            Другие приложения и продукты от Google
          </a>
        </div>
      </>
    )
  }
}

export default GoogleAppBlock