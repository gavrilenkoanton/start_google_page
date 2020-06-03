import React from 'react';
import styles from './Header.module.css'

class Header extends React.Component {

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.settingsButton} onClick={this.props.onClickSettings}>
          <i className="material-icons">dehaze</i>
        </div>
        <span className={styles.allLink}>ВСЕ</span>
        <span className={styles.mailLink}>
          <a href="https://mail.google.com/">{this.props.messages.mail}</a>
        </span>
        <span className={styles.imagesLink}>
          <a href="https://www.google.by/imghp?hl=ru&tab=wi&ogbl">
            {this.props.messages.images}
          </a>
        </span>
        <span className={styles.imagesLinkMob}>
          <a href="https://www.google.by/imghp?hl=ru&tab=wi&ogbl">{this.props.messages.imagesMob}</a>
        </span>
        <div className={styles.appsIcon} onClick={this.props.onClickApps}>
          <i className="material-icons">apps</i>
        </div>
        <button className={styles.enter}>Войти</button>
      </div>
    )
  }
}

export default Header