'use strict'

const errcode = require('err-code')

const CIPHER_MODES = {
  16: 'id-aes128-GCM',
  32: 'id-aes256-GCM',
}

module.exports = function (key) {
  const mode = CIPHER_MODES[key.length]
  if (!mode) {
    const modes = Object.entries(CIPHER_MODES).map(([k, v]) => `${k} (${v})`).join(' / ')
    throw errcode(new Error(`Invalid key length ${key.length} bytes. Must be ${modes}`), 'ERR_INVALID_KEY_LENGTH')
  }
  return mode
}
