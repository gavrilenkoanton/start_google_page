import React from 'react';
import styles from './MobileSearchWindow.module.css'


class MobileSearchWindow extends React.Component {

    state = {
        inputValue: ""
    }

    onInputChange = (e) => {
        this.setState({inputValue: e.currentTarget.value})
    }
    clearInput = () => {
        this.setState({inputValue: ""})
    }

    render() {
        return (

            <div className={styles.mobileSearch}>
                <div className={styles.inputBlock}>
                    <div className={styles.backItem} onClick={this.props.showMobileSearchComponent}>
                        <i className="material-icons">keyboard_backspace</i>
                    </div>
                        <input type="text" className={styles.input} value={this.state.inputValue} onChange={this.onInputChange}/>
                    <div className={this.state.inputValue.length > 0 ? styles.closeIcon : styles.closeIconHide} onClick={this.clearInput}>
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
