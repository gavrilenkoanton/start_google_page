import React from 'react';

class SettingsPoint extends React.Component {
  render() {
    return (
      <div >
        <i className="material-icons">{this.props.iconName}</i>
        <span>{this.props.description}</span>
      </div>
    )
  }
}

export default SettingsPoint