'use strict'

const asm = require('asmcrypto.js')
const validateCipherMode = require('./cipher-mode')

exports.create = async function (key, iv) { // eslint-disable-line require-await
  // Throws an error if mode is invalid
  validateCipherMode(key)

  let enc
  let dec
  enc = new asm.AES_GCM.Encrypt({
    key: key,
    nonce: iv
  })

  dec = new asm.AES_GCM.Decrypt({
    key: key,
    nonce: iv
  })
  
 const res = {
    async encrypt (data) { // eslint-disable-line require-await
      return Buffer.from(
        enc.process(data).result
      )
    },

    async decrypt (data) { // eslint-disable-line require-await
      return Buffer.from(
        dec.process(data).result
      )
    }
  }

  return res
}
