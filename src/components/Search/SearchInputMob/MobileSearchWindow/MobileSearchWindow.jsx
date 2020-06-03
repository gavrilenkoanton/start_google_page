import React from 'react';
import styles from './MobileSearchWindow.module.css'

class MobileSearchWindow extends React.Component {

  state = {
    inputValue: "",
  }

  handleChangeInput = (event) => {
    this.setState({inputValue: event.currentTarget.value})
  }

  handleClickClearInput = () => {
    this.setState({inputValue: ""})
  }

  render() {
    return (
      <div className={styles.mobileSearch}>
        <div className={styles.inputBlock}>
          <div className={styles.backItem} onClick={this.props.showMobileSearchComponent}>
            <i className="material-icons">keyboard_backspace</i>
          </div>
          <input
            type="text"
            className={styles.input}
            value={this.state.inputValue}
            onChange={this.handleChangeInput}
          />
          <div
            className={this.state.inputValue.length > 0 ? styles.closeIcon : styles.closeIconHide}
            onClick={this.handleClickClearInput}
          >
            <span className="material-icons">close</span>
          </div>
          <div className={styles.searchIcon}>
            <span className="material-icons">search</span>
          </div>

        </div>

      </div>
    )
  }
}

export default MobileSearchWindow
