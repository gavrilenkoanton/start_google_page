import React from 'react';
import styles from './GoogleAppComponent.module.css'

class GoogleAppComponent extends React.Component {

  render() {
    return (
      <div className={styles.googleAppBlockApp}>
        <img src={this.props.logo} alt={this.props.description}/>
        <span>{this.props.description}</span>
      </div>
    )
  }
}

export default GoogleAppComponent