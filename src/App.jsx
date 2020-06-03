import React from 'react';
import styles from './App.module.css';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import GoogleAppBlock from "./components/GoogleAppBlock/GoogleAppBlock";
import GoogleSettings from "./components/GoogleSettings/GoogleSettings";
import MobileSearchWindow from "./components/Search/SearchInputMob/MobileSearchWindow/MobileSearchWindow";

import messages_ru from './translation/ru';
import messages_by from './translation/by';


const LANGUAGES = {
  RU: 'ru',
  BY: 'by',
};

const messages = {
  [LANGUAGES.RU]: messages_ru,
  [LANGUAGES.BY]: messages_by
}

class App extends React.Component {

  state = {
    displayAppBlock: false,
    settingsBlock: false,
    mobileSearch: false,
    footerSettings: false,
    currentLocal: LANGUAGES.RU,
  }

  showMobileSearchComponent = () => {
    this.setState({mobileSearch: !this.state.mobileSearch})
  }

  showFooterSettings = (event) => {
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation();
    this.setState({footerSettings: !this.state.footerSettings})
  }

  changeLocal = () => {
    if (this.state.currentLocal === LANGUAGES.BY) {
      this.setState({currentLocal: LANGUAGES.RU})
    } else if (this.state.currentLocal === LANGUAGES.RU) {
      this.setState({currentLocal: LANGUAGES.BY})
    }
  }

  componentDidMount() {
    document.addEventListener("click", (e) => {
      this.setState({displayAppBlock: false, settingsBlock: false, footerSettings: false})
    }, false);
  }

  handleClickApps = (event) => {
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation();
    this.setState({displayAppBlock: !this.state.displayAppBlock})
  }

  handleClickSettings = (event) => {
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation();
    this.setState({settingsBlock: !this.state.settingsBlock})
  }

  render() {
    return (
      <div className={styles.wrapper}>
        { this.state.mobileSearch
        && <MobileSearchWindow showMobileSearchComponent={this.showMobileSearchComponent}/>
        }

        <div className={this.state.settingsBlock ? styles.googleSettingsShow : styles.googleSettingsHide}>
          <GoogleSettings />
        </div>

        { this.state.displayAppBlock && <GoogleAppBlock/> }

        <Header
          messages={messages[this.state.currentLocal]}
          onClickSettings={this.handleClickSettings}
          onClickApps={this.handleClickApps}
        />

        <Search
          messages={messages[this.state.currentLocal]}
          mobileSearchShow={this.mobileSearchShow}
          changeLocal={this.changeLocal}
          showMobileSearchComponent={this.showMobileSearchComponent}
        />
        <Footer
          messages={messages[this.state.currentLocal]}
          onClickFooterSettings={this.showFooterSettings}
          showFooterSettings={this.state.footerSettings}
        />
      </div>
    );
  }
}

export default App;
