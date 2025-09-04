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
  fetch = (..._0x1576b4) =>
    import('node-fetch').then(({ default: _0x229b77 }) =>
      _0x229b77(..._0x1576b4)
    ),
  { Buffer } = require('buffer'),
  FormData = require('form-data'),
  fs = require('fs'),
  path = require('path'),
  fileType = require('file-type'),
  l = console.log
cmd(
  {
    pattern: 'tv',
    react: '\uD83D\uDD0E',
    alias: ['tvshows', 'tvseries', 'tvepishodes'],
    desc: 'All tv shows search',
    use: '.tv squiad game',
    category: 'movie',
    filename: __filename,
  },
  async (
    _0x5c70b9,
    _0xde6add,
    _0x20c2c7,
    {
      from: _0x3cb482,
      prefix: _0x10a894,
      l: _0x190193,
      quoted: _0x4a0345,
      body: _0x1225ad,
      isCmd: _0x1038c8,
      command: _0x5d18d4,
      args: _0x3ea026,
      q: _0x1a495c,
      isGroup: _0x426ba0,
      sender: _0x1c72e4,
      senderNumber: _0x5f1fe0,
      botNumber2: _0x1f872f,
      botNumber: _0x48eff0,
      pushname: _0x49db0e,
      isMe: _0x56efdd,
      isOwner: _0x14a2b5,
      groupMetadata: _0x351821,
      groupName: _0x1f57bc,
      participants: _0x382549,
      groupAdmins: _0xfe99fa,
      isBotAdmins: _0x34042b,
      isAdmins: _0x5896c7,
      reply: _0xca8cca,
    }
  ) => {
    try {
      if (!_0x1a495c) {
        return await _0xca8cca('*Enter tv shows name..\uD83C\uDFAC*')
      }
      const _0x50d58e = [
          {
            buttonId: _0x10a894 + 'cinetv ' + _0x1a495c,
            buttonText: { displayText: '_\uD83D\uDCFACINESUBZ Results_' },
            type: 1,
          },
          {
            buttonId: _0x10a894 + 'sinhalasubtv ' + _0x1a495c,
            buttonText: { displayText: '_\uD83D\uDCFASINHALASUB Results_' },
            type: 1,
          },
        ],
        _0x26fff2 = {
          image: { url: config.LOGO },
          caption:
            '_*MOVIE DL-X SEARCH SYSTEM \uD83D\uDCFA*_\n\n*`\uD83D\uDCF2Input :`* ' +
            _0x1a495c +
            ' \n\n_*\uD83C\uDF1F Select movie download site*_',
          footer: config.FOOTER,
          buttons: _0x50d58e,
          headerType: 4,
        }
      return await _0x5c70b9.buttonMessage2(_0x3cb482, _0x26fff2, _0xde6add)
    } catch (_0x1d3e4c) {
      _0xca8cca('*Error !!*')
      _0x190193(_0x1d3e4c)
    }
  }
)
