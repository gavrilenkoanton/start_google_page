import React from 'react';
import styles from './SearchInputMob.module.css'

class SearchInputMob extends React.Component {

  render() {
    return (
      <div className={styles.searchBar} onClick={this.props.showMobileSearchComponent}>
        <div className={styles.searchIconMob}>
          <i className="material-icons">search</i>
        </div>
      </div>
    )
  }
}

export default SearchInputMob
