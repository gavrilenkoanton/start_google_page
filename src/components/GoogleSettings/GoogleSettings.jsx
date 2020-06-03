import React from 'react';
import styles from './GoogleSettings.module.css'
import SettingsPoint from "./SettingsPoint/SettingsPoint";

const upperMenuPoints = [
  {
    iconName: "home",
    description: "Главная страница",
  },
  {
    iconName: "restore",
    description: "Действия в поиске"
  },
  {
    iconName: "bookmarks",
    description: "Подборки"
  },
];

const lowerMenuPoints = [
  {
    iconName: "settings",
    description: "Настройки"
  },
  {
    iconName: "admin_panel_settings",
    description: "Ваши данные в поиске"
  },
  {
    iconName: "find_in_page",
    description: "Как работает Google поиск"
  },
  {
    iconName: "help",
    description: "Справка"
  },
  {
    iconName: "announcement",
    description: "Отзыв"
  },
]

class GoogleSettings extends React.Component {
  getSettingsPoints = (value) => value.map( (point) => {
      return <SettingsPoint iconName={point.iconName} description={point.description} key={point.iconName}/>
    })

  render() {
    return (
      <div className={styles.settingsWrapper}>
        <div className={styles.logoWrapper}>
          <img src={require('./../../img/logo.png')} alt="logo" className={styles.logo}/>
        </div>
        <div className={styles.settingsFirst}>
          {this.getSettingsPoints(upperMenuPoints)}
        </div>
        <div className={styles.settingsSecond}>
          {this.getSettingsPoints(lowerMenuPoints)}
        </div>
      </div>
    )
  }
}

export default GoogleSettings