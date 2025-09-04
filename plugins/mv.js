const config = require('../config'),
  { cmd, commands } = require('../command'),
  axios = require('axios'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions'),
  fetch = (..._0x1ca37c) =>
    import('node-fetch').then(({ default: _0x5acb9e }) =>
      _0x5acb9e(..._0x1ca37c)
    ),
  { Buffer } = require('buffer'),
  FormData = require('form-data'),
  fs = require('fs'),
  path = require('path'),
  fileType = require('file-type'),
  l = console.log
cmd(
  {
    pattern: 'mv',
    react: '\uD83D\uDD0E',
    alias: ['movie', 'film', 'cinema'],
    desc: 'all movie search',
    category: 'movie',
    use: '.movie',
    filename: __filename,
  },
  async (
    _0x3eb29a,
    _0x8bfedf,
    _0x2cdfbb,
    {
      from: _0xddfb0d,
      prefix: _0x131b0e,
      l: _0x11275e,
      quoted: _0x225304,
      body: _0x26bf04,
      isCmd: _0x78729b,
      command: _0xd2f343,
      args: _0x3276cb,
      q: _0x2d6ddb,
      isGroup: _0x831669,
      sender: _0x31fa23,
      senderNumber: _0x391dbc,
      botNumber2: _0x572839,
      botNumber: _0xd7c3b1,
      pushname: _0x3be213,
      isMe: _0x401511,
      isOwner: _0x154db8,
      groupMetadata: _0x5d0bec,
      groupName: _0xfa4d6a,
      participants: _0x1bacb9,
      groupAdmins: _0x3f027c,
      isBotAdmins: _0x4955f5,
      isAdmins: _0x48ea7d,
      reply: _0x59f221,
    }
  ) => {
    try {
      if (!_0x2d6ddb) {
        return await _0x59f221('*Enter movie name..\uD83C\uDFAC*')
      }
      const _0x7843b7 = [
          {
            buttonId: _0x131b0e + 'cine ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACCINESUBZ Results_' },
            type: 1,
          },
          {
            buttonId: _0x131b0e + 'sinhalasub ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACSINHALASUBLK Results_' },
            type: 1,
          },
          {
            buttonId: _0x131b0e + 'ytsmx ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACYTSMX Results_' },
            type: 1,
          },
          {
            buttonId: _0x131b0e + 'ginisisila ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACGINISISILA Results_' },
            type: 1,
          },
          {
            buttonId: _0x131b0e + 'zoom ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACZOOM SUB Results_' },
            type: 1,
          },
          {
            buttonId: _0x131b0e + 'baiscopes ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACBAISCOPES Results_' },
            type: 1,
          },
          {
            buttonId: _0x131b0e + 'pupilvideo ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACPUPILVIDEO Results_' },
            type: 1,
          },
          {
            buttonId: _0x131b0e + 'slanime ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACSLANIMECLUB Results_' },
            type: 1,
          },
          {
            buttonId: _0x131b0e + '1377 ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFAC1377 Results_' },
            type: 1,
          },
          {
            buttonId: _0x131b0e + 'sexfull ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFAC18 PLUS Results_' },
            type: 1,
          },
          {
            buttonId: _0x131b0e + 'pirate ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACPIRATE Results_' },
            type: 1,
          },
           {
            buttonId: _0x131b0e + 'pup2 ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACSINHALADUB Results_' },
            type: 1,
          },
          {
            buttonId: _0x131b0e + 'hdhub ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACHDHUB4U Results_' },
            type: 1,
          },
          {
            buttonId: _0x131b0e + 'niki ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACNIKI Results_' },
            type: 1,
          },
          {
            buttonId: _0x131b0e + 'cinesl ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACCINESL Results_' },
            type: 1,
         },
 {
            buttonId: _0x131b0e + 'fox ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACFOXFlixz Results_' },
            type: 1,
        },
 {
            buttonId: _0x131b0e + 'sublk ' + _0x2d6ddb,
            buttonText: { displayText: '_\uD83C\uDFACSUBLK Results_' },
            type: 1,
},
        ],

        _0x547828 = {
          image: { url: 'https://files.catbox.moe/beynkp.png' },
          caption:
            '_*\uD83C\uDFACMOVIE DL-X SEARCH SYSTEM \uD83C\uDFAC*_\n\n*`\uD83D\uDCF2Input :`* ' +
            _0x2d6ddb +
            ' \n\n_*\uD83C\uDFAD Select movie download site*_',
          footer: config.FOOTER,
          buttons: _0x7843b7,
          headerType: 4,
        }
      return await _0x3eb29a.buttonMessage2(_0xddfb0d, _0x547828, _0x8bfedf)
    } catch (_0x2636c4) {
      _0x59f221('*Error !!*')
      _0x11275e(_0x2636c4)
    }
  }
)
