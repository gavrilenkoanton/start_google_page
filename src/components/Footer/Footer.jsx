import React from 'react';
import styles from './Footer.module.css'
import FooterSearch from "./FooterSearch/FooterSearch";

class Footer extends React.Component {

  render() {
    return (
      <>
        <div className={styles.upperFooter}>
          Беларусь
        </div>
        <div className={styles.footer}>
          <div className={styles.mobileFooter}>
            <span className={styles.location}>
                {this.props.messages.unknown}
            </span>
            <span>
              {this.props.messages.useMyLocation}
            </span>
          </div>
          <div className={styles.leftPtOfFooter}>
            <a
              href="https://ads.google.com/intl/ru_by/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            >
              {this.props.messages.advertising}
            </a>
            <a
              href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none">{this.props.messages.business}</a>
            <a
              href="https://about.google/?utm_source=google-BY&utm_medium=referral&utm_campaign=hp-footer&fg=1">{this.props.messages.aboutGoogle}</a>
            <span className={styles.howGoogleSearchWork}>
              <a href="https://www.google.com/search/howsearchworks/?fg=1"
              >
                {this.props.messages.howSearchWork}
              </a>
            </span>
          </div>
          <div className={styles.rightPtOfFooter}>
            <a
              href="https://policies.google.com/privacy?fg=1">{this.props.messages.privacy}</a>
            <a
              href="https://policies.google.com/terms?fg=1">{this.props.messages.conditions}</a>
            <span onClick={this.props.onClickFooterSettings}
            >{this.props.messages.settings}</span>
          </div>
          <FooterSearch
          messages={this.props.messages}
          onClickFooterSettings={this.props.onClickFooterSettings}
          showFooterSettings={this.props.showFooterSettings}
          />
        </div>
      </>
    )
  }
}

export default Footer