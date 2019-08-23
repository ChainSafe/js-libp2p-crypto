'use strict'

const errcode = require('err-code')

const CIPHER_MODES = {
  16: 'aes-128-ctr',
  32: 'aes-256-ctr',
  256: 'id-aes256-GCM' // Since 32 is already here, decided to simply have the key = 256
}

module.exports = function (key) {
  const mode = CIPHER_MODES[key.length]
  if (!mode) {
    const modes = Object.entries(CIPHER_MODES).map(([k, v]) => `${k} (${v})`).join(' / ')
    throw errcode(new Error(`Invalid key length ${key.length} bytes. Must be ${modes}`), 'ERR_INVALID_KEY_LENGTH')
  }
  return mode
}
