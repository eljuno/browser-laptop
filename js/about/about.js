/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const React = require('react')
const ImmutableComponent = require('../../app/renderer/components/immutableComponent')
const {aboutUrls, isNavigatableAboutPage} = require('../lib/appUrlUtil')

const cx = require('../lib/classSet')

const {StyleSheet, css} = require('aphrodite/no-important')
const globalStyles = require('../../app/renderer/components/styles/global')
const commonStyles = require('../../app/renderer/components/styles/commonStyles')

const {
  AboutPageSectionTitle,
  AboutPageSectionSubTitle
} = require('../../app/renderer/components/common/sectionTitle')

require('../../less/about/history.less')
require('../../node_modules/font-awesome/css/font-awesome.css')

class AboutAbout extends ImmutableComponent {
  render () {
    return <div className='siteDetailsPage'>
      <div className='siteDetailsPageHeader'>
        <AboutPageSectionTitle data-l10n-id='aboutPages' />
      </div>

      <div className={cx({
        siteDetailsPageContent: true,
        [css(commonStyles.siteDetailsPageContent)]: true
      })}>
        <AboutPageSectionSubTitle data-l10n-id='listOfAboutPages' />
        <ul className={css(styles.list)}>
          {
            aboutUrls.keySeq().sort().filter((aboutSourceUrl) => isNavigatableAboutPage(aboutSourceUrl)).map((aboutSourceUrl) =>
              <li>
                <a href={aboutUrls.get(aboutSourceUrl)} target='_blank'>
                  {aboutSourceUrl}
                </a>
              </li>)
          }
        </ul>
      </div>
    </div>
  }
}

const styles = StyleSheet.create({
  list: {
    marginLeft: globalStyles.spacing.aboutPageSectionPadding
  }
})

module.exports = <AboutAbout />
