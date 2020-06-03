import React from 'react';
import styles from './Search.module.css'
import SearchInputMob from "./SearchInputMob/SearchInputMob";
import SearchInput from "./SearchInput/SearchInput";

class Search extends React.Component {

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.logoBar}>
          <img src={require('./../../img/logo.png')} alt="logo"/>
        </div>
        <div className={styles.searchBlock}>
          <div className={styles.searchBar}>
            <div className={styles.searchIcon}>
              <i className="material-icons">search</i>
            </div>
            <span className={styles.searchInput}>
              <SearchInput/>
            </span>
            <div className={styles.keyboardIcon}>
              <i className="material-icons">keyboard</i>
              <div className={styles.keyboardIconDescription}>Экранная клавиатурв</div>
            </div>
            <div className={styles.micIcon}>
              <i className="material-icons">mic</i>
              <div className={styles.micIconDescription}>Голосовой поиск</div>
            </div>
            <div className={styles.searchIconMob}>
              <i className="material-icons">search</i>
            </div>
          </div>
          <div className={styles.buttons}>
            <input
              type="submit"
              className={styles.searchButton}
              value={this.props.messages.search}
            />
            <input
              type="submit"
              className={styles.iGuessButton}
              value={this.props.messages.lucky}
            />
          </div>
        </div>
        <div className={styles.searchBlockMob}>
          <SearchInputMob showMobileSearchComponent={this.props.showMobileSearchComponent}/>
        </div>
        <div className={styles.regionInfo}>
          <span>{this.props.messages.availableLang}</span>
          <span
            onClick={this.props.changeLocal}
            className={styles.langSwitcher}
          >
            {this.props.messages.currentLang}
          </span>
        </div>
      </div>
    )
  }
}

export default Search