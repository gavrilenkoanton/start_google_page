import React from 'react';
import styles from './FooterSearch.module.css'

class FooterSearch extends React.Component {

  render() {
    return (
      <>
          {
            this.props.showFooterSettings
            && <div className={styles.settings}>
              <a
                href="https://www.google.com/preferences?hl=ru-BY&fg=1">{this.props.messages.searchSettings}</a>
              <a
                href="https://www.google.com/advanced_search?hl=ru-BY&fg=1">{this.props.messages.searchExtension}</a>
              <a
                href="https://myactivity.google.com/privacyadvisor/search?utm_source=googlemenu&fg=1">{this.props.messages.yourSearchData}</a>
              <a
                href="https://myactivity.google.com/item?utm_source=google&hl=ru-BY&fg=1&restrict=search">{this.props.messages.history}</a>
              <a
                href="https://support.google.com/websearch/?visit_id=637268031945406005-2676353718&hl=ru-BY&rd=2#topic=3378866">{this.props.messages.referenceSearch}</a>
              <a
                href="https://www.google.com/?hl=ru-BY&sa=X&ved=0ahUKEwjatZ2hwuXpAhXR-yoKHeMDAJUQnZcCCAQ">{this.props.messages.feedBack}</a>
            </div>
          }
      </>
    )
  }
}

export default FooterSearch