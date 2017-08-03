/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Cache of URLs mapped their site settings.
 * This gets rebuilt when site settings or a bravery setting is changed.
 */
const currentBraverySettings = new Map()

const clearBraverySettings = () => {
  currentBraverySettings.clear()
}

const getBraverySettings = (url) => {
  return currentBraverySettings.get(url)
}

const updateBraverySettings = (url, braverySettings) => {
  currentBraverySettings.set(url, braverySettings)
}

module.exports = {
  clearBraverySettings,
  getBraverySettings,
  updateBraverySettings
}
