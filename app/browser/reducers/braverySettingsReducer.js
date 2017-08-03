/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict'

const appConstants = require('../../../js/constants/appConstants')
const {clearBraverySettings} = require('../../common/cache/braverySettingsCache')
const {makeImmutable} = require('../../common/state/immutableUtil')

const braverySettingsReducer = (state, action, immutableAction) => {
  action = immutableAction || makeImmutable(action)
  switch (action.get('actionType')) {
    case appConstants.APP_SET_RESOURCE_ENABLED:
    case appConstants.APP_CHANGE_SETTING: // TODO: remove this once #10181 is merged
    case appConstants.APP_CHANGE_SITE_SETTING:
    case appConstants.APP_REMOVE_SITE_SETTING:
    case appConstants.APP_CLEAR_SITE_SETTINGS:
      clearBraverySettings()
      break
  }
  return state
}

module.exports = braverySettingsReducer
