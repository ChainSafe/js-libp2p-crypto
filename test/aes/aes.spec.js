/* eslint max-nested-callbacks: ["error", 8] */
/* eslint-env mocha */
/* eslint-disable no-unused-vars */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)
const { expectErrCode } = require('../util')

const crypto = require('../../src')
const fixtures = require('./../fixtures/aes')
const goFixtures = require('./../fixtures/go-aes')

const bytes = {
  16: 'AES-128-GCM',
  32: 'AES-256-GCM'
}

describe('AES-256-GCM', () => {
  Object.keys(bytes).forEach((byte) => {
    it(`${bytes[byte]} - encrypt and decrypt`, async () => {
      const key = Buffer.alloc(parseInt(byte, 10))
      key.fill(5)

      const iv = Buffer.alloc(16)
      iv.fill(1)

      const cipher = await crypto.aes.create(key, iv)

      await encryptAndDecrypt(cipher)
      await encryptAndDecrypt(cipher)
      await encryptAndDecrypt(cipher)
      await encryptAndDecrypt(cipher)
      await encryptAndDecrypt(cipher)
    })
  })

  /**
   * In order to make this pass, it requires creating a set of fixtures generated from AES-GCM
   *
  Object.keys(bytes).forEach((byte) => {
    it(`${bytes[byte]} - fixed - encrypt and decrypt`, async () => {
      const key = Buffer.alloc(parseInt(byte, 10))
      key.fill(5)

      const iv = Buffer.alloc(16)
      iv.fill(1)

      const cipher = await crypto.aes.create(key, iv)

      for (let i = 0; i < fixtures[byte].inputs.length; i++) {
        const rawIn = fixtures[byte].inputs[i]
        const input = Buffer.from(rawIn)
        const output = Buffer.from(fixtures[byte].outputs[i])
        const encrypted = await cipher.encrypt(input)
        expect(encrypted).to.have.length(output.length)
        expect(encrypted).to.eql(output)
        const decrypted = await cipher.decrypt(encrypted)
        expect(decrypted).to.eql(input)
      }
    })
  })

  Object.keys(bytes).forEach((byte) => {
    if (!goFixtures[byte]) {
      return
    }

    it(`${bytes[byte]} - go interop - encrypt and decrypt`, async () => {
      const key = Buffer.alloc(parseInt(byte, 10))
      key.fill(5)

      const iv = Buffer.alloc(16)
      iv.fill(1)

      const cipher = await crypto.aes.create(key, iv)

      for (let i = 0; i < goFixtures[byte].inputs.length; i++) {
        const rawIn = goFixtures[byte].inputs[i]
        const input = Buffer.from(rawIn)
        const output = Buffer.from(goFixtures[byte].outputs[i])
        const encrypted = await cipher.encrypt(input)
        expect(encrypted).to.have.length(output.length)
        expect(encrypted).to.eql(output)
        const decrypted = await cipher.decrypt(encrypted)
        expect(decrypted).to.eql(input)
      }
    })
  })
*/
}
