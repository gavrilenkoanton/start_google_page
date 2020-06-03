import React from 'react';
import styles from './SearchInput.module.css'

class SearchInput extends React.Component {

  state = {
    inputValue: ""
  }

  handleChangeInput = (event) => {
    this.setState({inputValue: event.currentTarget.value})
  }

  clearInput = () => {
    this.setState({inputValue: ''})
  }

  render() {
    return (
      <>
        <input
          type="text"
          className={`${styles.searchInput} ${this.state.inputValue && styles.searchInputDev}`}
          onChange={this.handleChangeInput}
          value={this.state.inputValue}
        />
        {this.state.inputValue.length > 0 && (
          <div
            className={styles.clearIcon}
            onClick={this.clearInput}
          >
            <i className="material-icons">clear</i>
          </div>
        )}
      </>
    )
  }
}

export default SearchInput