const config = require('../config'),
  fs = require('fs'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    getsize,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions'),
  { cmd, commands } = require('../command'),
  sadiya_apikey = 'sadiya-key-666'
sizetoo = '_This file size is too big_'
const yts = require('ytsearch-venom')
let wm = config.FOOTER,
  newsize = config.MAX_SIZE * 2048 * 2048
function ytreg(_0x3f851d) {
  return /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(
    _0x3f851d
  )
}
cmd(
  {
    pattern: 'ytsthama',
    alias: ['ytsearchyako'],
    use: '.yts lelena',
    react: '\uD83D\uDD0E',
    desc: 'Search songs',
    category: 'search',
    filename: __filename,
  },
  async (
    _0x3a8e5a,
    _0x50e9ea,
    _0x342a22,
    {
      from: _0x2c4452,
      l: _0x315b50,
      quoted: _0x186cd4,
      body: _0x246589,
      isCmd: _0x16119c,
      command: _0x191366,
      args: _0x393fa7,
      q: _0x442f28,
      isGroup: _0x570ca3,
      sender: _0x238f53,
      senderNumber: _0x170f42,
      botNumber2: _0x45d845,
      botNumber: _0x3cdb06,
      pushname: _0xd6cf7a,
      isMe: _0x54316d,
      isOwner: _0x1308b6,
      groupMetadata: _0x1060b6,
      groupName: _0x517421,
      participants: _0x17568a,
      groupAdmins: _0x280b5a,
      isBotAdmins: _0x185964,
      isAdmins: _0x3387c1,
      reply: _0x417208,
    }
  ) => {
    try {
      if (!_0x442f28) {
        return await _0x417208(imgmsg)
      }
      if (isUrl(_0x442f28) && !ytreg(_0x442f28)) {
        return await _0x417208(imgmsg)
      }
      try {
        let _0x54d683 = require('ytsearch-venom')
        var _0x1ec364 = await _0x54d683(_0x442f28)
      } catch (_0x55c1ce) {
        return (
          _0x315b50(_0x55c1ce),
          await _0x3a8e5a.sendMessage(
            _0x2c4452,
            { text: '*Error !!*' },
            { quoted: _0x50e9ea }
          )
        )
      }
      var _0x4c2f07 = ''
      _0x1ec364.all.map((_0x59739f) => {
        _0x4c2f07 +=
          ' *🔍️' +
          _0x59739f.title +
          '*\n\uD83D\uDD17 ' +
          _0x59739f.url +
          '\n\n'
      })
      await _0x3a8e5a.sendMessage(
        _0x2c4452,
        { text: _0x4c2f07 },
        { quoted: _0x50e9ea }
      )
    } catch (_0x5aeb46) {
      _0x315b50(_0x5aeb46)
      _0x417208('*Error !!*')
    }
  }
)
cmd(
  {
    pattern: 'ws',
    alias: ['ytsindu'],
    use: '.song lelena',
    react: '\uD83C\uDFA7',
    desc: 'Download songs',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x264091,
    _0x2810d0,
    _0x29de50,
    {
      from: _0x30a0f7,
      prefix: _0x6f038d,
      l: _0x4824a5,
      quoted: _0x49ac2e,
      body: _0x5d87f9,
      isCmd: _0x198fce,
      command: _0x1357da,
      args: _0x38b05e,
      q: _0x203ded,
      isGroup: _0x43ed08,
      sender: _0x321bd5,
      senderNumber: _0x441f2b,
      botNumber2: _0xa4bc9d,
      botNumber: _0x3de5b0,
      pushname: _0x1f359c,
      isMe: _0x5bc040,
      isOwner: _0x166d6a,
      groupMetadata: _0x57eb8e,
      groupName: _0x4db1a5,
      participants: _0x543d08,
      groupAdmins: _0x396d31,
      isBotAdmins: _0x12052d,
      isAdmins: _0x545f78,
      reply: _0x3d9476,
    }
  ) => {
    try {
      if (!_0x203ded) {
        return await _0x3d9476('*Please enter a query or a url!*')
      }
      const _0x32b91f = _0x203ded.replace(/\?si=[^&]*/, '')
      var _0x4111bd = await yts(_0x32b91f)
      let _0xbf6d41 = '*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*'
      var _0x1ba16b = _0x4111bd.videos[0]
      let _0x3ddcd3 =
        '*`\uD83C\uDFA7 NADEEN MD SONG DOWNLODER \uD83C\uDFA7`*\n\n*`🎶 Title:`* ' +
        _0x1ba16b.title +
        '\n\n*`\uD83D\uDCFA Views:`* ' +
        _0x1ba16b.views +
        '\n\n*`⌛️ Duration:`* ' +
        _0x1ba16b.duration +
        '\n\n*`\uD83D\uDD17 Url:`* ' +
        _0x1ba16b.url
      const _0x374d1a = [
          {
            buttonId: _0x6f038d + 'ytaa ' + _0x1ba16b.url,
            buttonText: { displayText: '*AUDIO TYPE 🎶*' },
            type: 1,
          },
          {
            buttonId:
              _0x6f038d + 'ytad ' + _0x1ba16b.url + '\xB1' + _0x1ba16b.title,
            buttonText: { displayText: '*DOCUMENT TYPE 📁*' },
            type: 1,
          },
          {
            buttonId:
              _0x6f038d + 'ytaap ' + _0x1ba16b.url + '\xB1' + _0x1ba16b.title,
            buttonText: { displayText: '*VOICE TYPE 🎤*' },
            type: 1,
          },
        ],
        _0x393765 = {
          image: { url: _0x1ba16b.thumbnail },
          caption: _0x3ddcd3,
          footer: _0xbf6d41,
          buttons: _0x374d1a,
          headerType: 4,
        }
      await _0x264091.buttonMessage(_0x30a0f7, _0x393765, _0x2810d0)
    } catch (_0x32d224) {
      _0x3d9476(N_FOUND)
      console.log(_0x32d224)
    }
  }
)
cmd(
  {
    pattern: 'ytaa',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x211dce,
    _0x23e11c,
    _0x2dc950,
    { from: _0x19c307, q: _0x179bbf, reply: _0x268f74 }
  ) => {
    if (!_0x179bbf) {
      return await _0x268f74('*Need a youtube url!*')
    }
    try {
      const _0x43c362 = await fetchJson(
        'https://sadas-ytmp3-5.vercel.app/convert?link=' + _0x179bbf
      )
      await _0x211dce.sendMessage(_0x19c307, {
        react: {
          text: '\u2B06️',
          key: _0x23e11c.key,
        },
      })
      await _0x211dce.sendMessage(
        _0x19c307,
        {
          audio: { url: _0x43c362.url },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0x23e11c }
      )
      await _0x211dce.sendMessage(_0x19c307, {
        react: {
          text: '\u2714️',
          key: _0x23e11c.key,
        },
      })
    } catch (_0x49fb5b) {
      _0x268f74(N_FOUND)
      console.log(_0x49fb5b)
    }
  }
)
cmd(
  {
    pattern: 'ytaap',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3ce063,
    _0x38ce6a,
    _0x49d350,
    { from: _0x41c808, q: _0x6df8ce, reply: _0x12f59e }
  ) => {
    if (!_0x6df8ce) {
      return await _0x12f59e('*Need a youtube url!*')
    }
    try {
      const _0x20fa63 = await fetchJson(
        'https://sadas-ytmp3-5.vercel.app/convert?link=' + _0x6df8ce
      )
      await _0x3ce063.sendMessage(_0x41c808, {
        react: {
          text: '\u2B06️',
          key: _0x38ce6a.key,
        },
      })
      await _0x3ce063.sendMessage(
        _0x41c808,
        {
          audio: { url: _0x20fa63.url },
          mimetype: 'audio/mpeg',
          ptt: true,
        },
        { quoted: _0x38ce6a }
      )
      await _0x3ce063.sendMessage(_0x41c808, {
        react: {
          text: '\u2714️',
          key: _0x38ce6a.key,
        },
      })
    } catch (_0x3d9e62) {
      _0x12f59e(N_FOUND)
      console.log(_0x3d9e62)
    }
  }
)
cmd(
  {
    pattern: 'ytad',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x41f0b4,
    _0x1c9594,
    _0x4d4147,
    { from: _0x248a6a, q: _0x11fbc9, reply: _0x450502 }
  ) => {
    try {
      if (!_0x11fbc9) {
        return await _0x450502('*Need a youtube url!*')
      }
      const _0x121a6b = _0x11fbc9.split('\xB1')[0],
        _0x4f2b73 = _0x11fbc9.split('\xB1')[1],
        _0x43334a = await fetchJson(
         'https://apis.davidcyriltech.my.id/youtube/mp3?url=' +
            _0x121a6b  )
      await _0x41f0b4.sendMessage(_0x248a6a, {
        react: {
          text: '\u2B06',
          key: _0x1c9594.key,
        },
      })
      await _0x41f0b4.sendMessage(
        _0x248a6a,
        {
          document: { url: _0x43334a.result.downloadUrl },
          mimetype: 'audio/mpeg',
          caption: _0x4f2b73 + '\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          fileName: _0x4f2b73 + '.mp3',
        },
        { quoted: _0x1c9594 }
      )
      await _0x41f0b4.sendMessage(_0x248a6a, {
        react: {
          text: '\u2714️',
          key: _0x1c9594.key,
        },
      })
      await _0x41f0b4.sendMessage(_0x248a6a, {
        react: {
          text: '\u2714',
          key: _0x1c9594.key,
        },
      })
    } catch (_0x11f9da) {
      console.log(_0x11f9da)
    }
  }
)

cmd(
  {
    pattern: '40k',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3a3175,
    _0x38b0d0,
    _0x2c2ee2,
    { from: _0x2fbbc9, q: _0x3154a6, reply: _0x5abb42 }
  ) => {
    try {
      if (!_0x3154a6) {
        return await _0x5abb42('*Need a youtube url!*')
      }
      const _0x12d12c = await fetchJson(
        'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x3154a6 + '&apikey=d4a5c39da3e24d13&format=2160'
      )
      await _0x3a3175.sendMessage(
        _0x2fbbc9,
        {
          video: { url: _0x12d12c.data.result.download },
          caption: '\n*4K*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x38b0d0 }
      )
    } catch (_0x5e1619) {
      console.log(_0x5e1619)
    }
  }
)
cmd(
  {
    pattern: '1080p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x504177,
    _0x582802,
    _0xf655cc,
    { from: _0x56385b, q: _0x354910, reply: _0x3a0d67 }
  ) => {
    try {
      if (!_0x354910) {
        return await _0x3a0d67('*Need a youtube url!*')
      }
      const _0x150d50 = await fetchJson(
        'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x354910 + '&apikey=d4a5c39da3e24d13&format=1080'
      )
      await _0x504177.sendMessage(
        _0x56385b,
        {
          video: { url: _0x150d50.data.result.download },
          caption: '*1080p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x582802 }
      )
    } catch (_0x5b69ae) {
      console.log(_0x5b69ae)
    }
  }
)
cmd(
  {
    pattern: '240p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x504177,
    _0x582802,
    _0xf655cc,
    { from: _0x56385b, q: _0x354910, reply: _0x3a0d67 }
  ) => {
    try {
      if (!_0x354910) {
        return await _0x3a0d67('*Need a youtube url!*')
      }
      const _0x150d50 = await fetchJson(
        'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x354910 + '&apikey=d4a5c39da3e24d13&format=240'
      )
      await _0x504177.sendMessage(
        _0x56385b,
        {
          video: { url: _0x150d50.data.result.download },
          caption: '*240p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x582802 }
      )
    } catch (_0x5b69ae) {
      console.log(_0x5b69ae)
    }
  }
)
cmd(
  {
    pattern: '480p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x504177,
    _0x582802,
    _0xf655cc,
    { from: _0x56385b, q: _0x354910, reply: _0x3a0d67 }
  ) => {
    try {
      if (!_0x354910) {
        return await _0x3a0d67('*Need a youtube url!*')
      }
      const _0x150d50 = await fetchJson(
        'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x354910 + '&apikey=d4a5c39da3e24d13&format=480'
      )
      await _0x504177.sendMessage(
        _0x56385b,
        {
          video: { url: _0x150d50.data.result.download },
          caption: '*480p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x582802 }
      )
    } catch (_0x5b69ae) {
      console.log(_0x5b69ae)
    }
  }
)
cmd(
  {
    pattern: '360p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x504177,
    _0x582802,
    _0xf655cc,
    { from: _0x56385b, q: _0x354910, reply: _0x3a0d67 }
  ) => {
    try {
      if (!_0x354910) {
        return await _0x3a0d67('*Need a youtube url!*')
      }
      const _0x150d50 = await fetchJson(
        'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x354910 + '&apikey=d4a5c39da3e24d13&format=360'
      )
      await _0x504177.sendMessage(
        _0x56385b,
        {
          video: { url: _0x150d50.data.result.download },
          caption: '*360p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x582802 }
      )
    } catch (_0x5b69ae) {
      console.log(_0x5b69ae)
    }
  }
)
cmd(
  {
    pattern: '140K',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x504177,
    _0x582802,
    _0xf655cc,
    { from: _0x56385b, q: _0x354910, reply: _0x3a0d67 }
  ) => {
    try {
      if (!_0x354910) {
        return await _0x3a0d67('*Need a youtube url!*')
      }
      const _0x150d50 = await fetchJson(
        'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x354910 + '&apikey=d4a5c39da3e24d13&format=1440'
      )
      await _0x504177.sendMessage(
        _0x56385b,
        {
          video: { url: _0x150d50.data.result.download },
          caption: '*1440p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x582802 }
      )
    } catch (_0x5b69ae) {
      console.log(_0x5b69ae)
    }
  }
)
cmd(
  {
    pattern: '36p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x108d4b,
    _0x5151ee,
    _0x5f42f1,
    { from: _0x21083c, q: _0x1be374, reply: _0x3fe193 }
  ) => {
    try {
      if (!_0x1be374) {
        return await _0x3fe193('*Need a youtube url!*')
      }
      const _0x2a5f50 = _0x1be374.split('\xB1')[0],
        _0x19f381 = _0x1be374.split('\xB1')[1],
        _0x62e47c = await fetchJson(
          'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x2a5f50 +
          '&apikey=d4a5c39da3e24d13&format=360'
        )
      await _0x108d4b.sendMessage(
        _0x21083c,
        {
          document: { url: _0x62e47c.data.result.download },
          mimetype: 'video/mp4',
          caption: '*360p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          fileName: _0x62e47c.data.result.title + '.mp4',
        },
        { quoted: _0x5151ee }
      )
    } catch (_0x28bb31) {
      await _0x108d4b.sendMessage(_0x21083c, {
        react: {
          text: '\u2714️',
          key: _0x5151ee.key,
        },
      })
      console.log(_0x28bb31)
    }
  }
)
cmd(
  {
    pattern: '48p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x108d4b,
    _0x5151ee,
    _0x5f42f1,
    { from: _0x21083c, q: _0x1be374, reply: _0x3fe193 }
  ) => {
    try {
      if (!_0x1be374) {
        return await _0x3fe193('*Need a youtube url!*')
      }
      const _0x2a5f50 = _0x1be374.split('\xB1')[0],
        _0x19f381 = _0x1be374.split('\xB1')[1],
        _0x62e47c = await fetchJson(
          'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x2a5f50 +
          '&apikey=d4a5c39da3e24d13&format=480'
        )
      await _0x108d4b.sendMessage(
        _0x21083c,
        {
          document: { url: _0x62e47c.data.result.download },
          mimetype: 'video/mp4',
          caption: '*480p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          fileName: _0x62e47c.data.result.title + '.mp4',
        },
        { quoted: _0x5151ee }
      )
    } catch (_0x28bb31) {
      await _0x108d4b.sendMessage(_0x21083c, {
        react: {
          text: '\u2714️',
          key: _0x5151ee.key,
        },
      })
      console.log(_0x28bb31)
    }
  }
)
cmd(
  {
    pattern: '108p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x108d4b,
    _0x5151ee,
    _0x5f42f1,
    { from: _0x21083c, q: _0x1be374, reply: _0x3fe193 }
  ) => {
    try {
      if (!_0x1be374) {
        return await _0x3fe193('*Need a youtube url!*')
      }
      const _0x2a5f50 = _0x1be374.split('\xB1')[0],
        _0x19f381 = _0x1be374.split('\xB1')[1],
        _0x62e47c = await fetchJson(
          'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x2a5f50 +
          '&apikey=d4a5c39da3e24d13&format=1080'
        )
      await _0x108d4b.sendMessage(
        _0x21083c,
        {
          document: { url: _0x62e47c.data.result.download },
          mimetype: 'video/mp4',
          caption: '*1080p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          fileName: _0x62e47c.data.result.title + '.mp4',
        },
        { quoted: _0x5151ee }
      )
    } catch (_0x28bb31) {
      await _0x108d4b.sendMessage(_0x21083c, {
        react: {
          text: '\u2714️',
          key: _0x5151ee.key,
        },
      })
      console.log(_0x28bb31)
    }
  }
)
cmd(
  {
    pattern: '24p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x108d4b,
    _0x5151ee,
    _0x5f42f1,
    { from: _0x21083c, q: _0x1be374, reply: _0x3fe193 }
  ) => {
    try {
      if (!_0x1be374) {
        return await _0x3fe193('*Need a youtube url!*')
      }
      const _0x2a5f50 = _0x1be374.split('\xB1')[0],
        _0x19f381 = _0x1be374.split('\xB1')[1],
        _0x62e47c = await fetchJson(
          'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x2a5f50 +
          '&apikey=d4a5c39da3e24d13&format=240'
        )
      await _0x108d4b.sendMessage(
        _0x21083c,
        {
          document: { url: _0x62e47c.data.result.download },
          mimetype: 'video/mp4',
          caption: '*240p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          fileName: _0x62e47c.data.result.title + '.mp4',
        },
        { quoted: _0x5151ee }
      )
    } catch (_0x28bb31) {
      await _0x108d4b.sendMessage(_0x21083c, {
        react: {
          text: '\u2714️',
          key: _0x5151ee.key,
        },
      })
      console.log(_0x28bb31)
    }
  }
)
cmd(
  {
    pattern: '1440p',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3c5ffe,
    _0x12e91e,
    _0x1cbf6a,
    {
      from: _0x29b69d,
      quoted: _0x14c02f,
      body: _0x181f29,
      isCmd: _0x2fa563,
      command: _0x254bc6,
      args: _0x31287f,
      q: _0x16559b,
      isGroup: _0x425c9d,
      sender: _0x59978b,
      senderNumber: _0x298503,
      botNumber2: _0x460f00,
      botNumber: _0x117104,
      pushname: _0x3b9407,
      isMe: _0x394804,
      isOwner: _0x416c96,
      groupMetadata: _0x1ad423,
      groupName: _0x91e47,
      participants: _0x4c07f9,
      groupAdmins: _0x169d12,
      isBotAdmins: _0x535e79,
      isAdmins: _0x4f2869,
      reply: _0x5f3b99,
    }
  ) => {
    try {
      const _0x2888a4 = await fetchJson(
          'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' +
            _0x16559b +
            '&apikey=d4a5c39da3e24d13&format=1440'
        ),
        _0x334252 = _0x2888a4.data.result.download
      await _0x3c5ffe.sendMessage(
        _0x29b69d,
        {
          video: { url: _0x334252 },
          mimetype: 'video/mp4',
          caption: '*1440p*\n\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x12e91e }
      )
    } catch (_0x1ae6ff) {
      console.log(_0x1ae6ff)
      _0x5f3b99("\u274C *I Couldn't find anything. Please try again later...*")
      await _0x3c5ffe.sendMessage(
        _0x117104 + '@s.whatsapp.net',
        { text: '\u2757 *Error Info:* ' + _0x1ae6ff },
        { quoted: _0x12e91e }
      )
    }
  }
)
cmd(
  {
    pattern: '4k',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x108d4b,
    _0x5151ee,
    _0x5f42f1,
    { from: _0x21083c, q: _0x1be374, reply: _0x3fe193 }
  ) => {
    try {
      if (!_0x1be374) {
        return await _0x3fe193('*Need a youtube url!*')
      }
      const _0x2a5f50 = _0x1be374.split('\xB1')[0],
        _0x19f381 = _0x1be374.split('\xB1')[1],
        _0x62e47c = await fetchJson(
          'https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=' + _0x2a5f50 +
          '&apikey=d4a5c39da3e24d13&format=2160'
        )
      await _0x108d4b.sendMessage(
        _0x21083c,
        {
          document: { url: _0x62e47c.data.result.download },
          mimetype: 'video/mp4',
          caption: '*4K*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          fileName: _0x62e47c.data.result.title + '.mp4',
        },
        { quoted: _0x5151ee }
      )
    } catch (_0x28bb31) {
      await _0x108d4b.sendMessage(_0x21083c, {
        react: {
          text: '\u2714️',
          key: _0x5151ee.key,
        },
      })
      console.log(_0x28bb31)
    }
  }
)
cmd(
  {
    pattern: 'ch',
    alias: ['ck'],
    use: '.song lelena',
    react: '\uD83D\uDCFD️',
    desc: 'Download videos',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x5e8a46,
    _0x1ecd01,
    _0xa4c128,
    {
      from: _0x4f3dde,
      prefix: _0x3f62ac,
      l: _0x543329,
      quoted: _0x21ff8e,
      body: _0x459335,
      isCmd: _0x39cb22,
      command: _0x3cd4b4,
      args: _0x423cdd,
      q: _0x2e6b98,
      isGroup: _0x4d0abc,
      sender: _0x43a52e,
      senderNumber: _0x4c07e6,
      botNumber2: _0x7fcddb,
      botNumber: _0x3ddf92,
      pushname: _0xcd2eb2,
      isMe: _0x442cb8,
      isOwner: _0x421453,
      groupMetadata: _0x3bd32a,
      groupName: _0x5b9f9f,
      participants: _0x501016,
      groupAdmins: _0x169cd3,
      isBotAdmins: _0x22cdd8,
      isAdmins: _0x35b230,
      reply: _0xbe956e,
    }
  ) => {
    try {
      if (!_0x2e6b98) {
        return await _0xbe956e('*Please enter a query or a url!*')
      }
      const _0x2b6e8d = _0x2e6b98.replace(/\?si=[^&]*/, '')
      var _0x4c5fcf = await yts(_0x2e6b98)
      let _0x8e6abf = '> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*'
      N_FOUND = "*ERROR!*"
      var _0x2cc130 = _0x4c5fcf.videos[0]
      let _0x280d43 =
        '*\uD83D\uDCFD️ NADEEN-MD VIDEO DOWNLODER \uD83D\uDCFD️*\n     \n*\uD83D\uDCC3 Title:* ' +
        _0x2cc130.title +
        '\n\n*\uD83D\uDCFA Views:* ' +
        _0x2cc130.views +
        '\n\n*\uD83D\uDD79️ Duration:* ' +
        _0x2cc130.duration +
        '\n\n*\uD83D\uDD17 Url:* ' +
        _0x2cc130.url 
      const _0x1fc8c3 = [
                {
                 buttonId: _0x3f62ac + 'videodl240 ' + _0x2cc130.url,
                 buttonText: { displayText: '*240p Video File \uD83C\uDFA5*' },
                 type: 1,
                  },
                {
                 buttonId: _0x3f62ac + 'videodl360 ' + _0x2cc130.url,
                 buttonText: { displayText: '*360p Video File \uD83C\uDFA5*' },
                 type: 1,
                  },
                {
                 buttonId: _0x3f62ac + 'videodl480 ' + _0x2cc130.url,
                 buttonText: { displayText: '*480p Video File \uD83C\uDFA5*' },
                 type: 1,
                  },
               {
                 buttonId: _0x3f62ac + 'videodl720 ' + _0x2cc130.url,
                 buttonText: { displayText: '*720p Video File \uD83C\uDFA5*' },
                 type: 1,
                  },
               {
                 buttonId: _0x3f62ac + 'videodl1080 ' + _0x2cc130.url,
                 buttonText: { displayText: '*1080p Video File \uD83C\uDFA5*' },
                 type: 1,
                  },
                {
                 buttonId: _0x3f62ac + '1440p ' + _0x2cc130.url,
                 buttonText: { displayText: '*1440p Video File \uD83C\uDFA5*' },
                 type: 1,
                  },
                 {
                 buttonId: _0x3f62ac + '40k ' + _0x2cc130.url,
                 buttonText: { displayText: '*4K Video File \uD83C\uDFA5*\n\n' },
                 type: 1,
                  },
                        {
                 buttonId: _0x3f62ac + 'docdl1240 ' + _0x2cc130.url,
                 buttonText: { displayText: '*240p Document File \uD83D\uDCC1*' },
                 type: 1,
                  },
                {
                 buttonId: _0x3f62ac + 'docdl360 ' + _0x2cc130.url,
                 buttonText: { displayText: '*360p Document File \uD83D\uDCC1*' },
                 type: 1,
                  },
                {
                 buttonId: _0x3f62ac + 'docdl480 ' + _0x2cc130.url,
                 buttonText: { displayText: '*480p Document File \uD83D\uDCC1*' },
                 type: 1,
                  },
               {
                 buttonId: _0x3f62ac + 'docdl720 ' + _0x2cc130.url,
                 buttonText: { displayText: '*720p Document File \uD83D\uDCC1*' },
                 type: 1,
                  },
               {
                 buttonId: _0x3f62ac + 'docdl1080 ' + _0x2cc130.url,
                 buttonText: { displayText: '*1080p Document File \uD83D\uDCC1*' },
                 type: 1,
                  },
                {
                 buttonId: _0x3f62ac + '144p ' + _0x2cc130.url,
                 buttonText: { displayText: '*1440p Document File \uD83D\uDCC1*' },
                 type: 1,
                },
               {
                 buttonId: _0x3f62ac + '4k ' + _0x2cc130.url,
                 buttonText: { displayText: '*4K Document File \uD83D\uDCC1*' },
                 type: 1,
                },
              ],
       
        _0x50b3fc = {
          image: {url: _0x2cc130.thumbnail || '' },
          caption: _0x280d43,
          footer: _0x8e6abf,
          buttons: _0x1fc8c3,
          headerType: 4,
        }
      await _0x5e8a46.buttonMessage(_0x4f3dde, _0x50b3fc, _0x1ecd01)
    } catch (_0x525a9a) {
      _0xbe956e(N_FOUND)
      console.log(_0x525a9a)
    }
  }
)
//aluth ewa
cmd(
  {
    pattern: 'docdl144',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x5564e3,
    _0x4e55b4,
    _0x7706b,
    { from: _0x5988eb, q: _0x127689, reply: _0x153742 }
  ) => {
    try {
      if (!_0x127689) {
        return await _0x153742('*Need a YouTube URL!*')
      }
      const _0x3c19e0 = _0x127689.split('&'),
        _0x1313be = _0x3c19e0[0],
        _0xf59938 = _0x3c19e0[1],
        _0x58b71d = _0x3c19e0[2] || 'video',
        _0x104202 = await fetch(_0xf59938),
        _0x413d17 = await _0x104202.buffer(),
        _0x50d71c = await resizeImage(_0x413d17, 200, 200),
        _0x1c13bc = await fetchJson(
          'https://sadas-ytmp4-5.vercel.app/convert?link=' +
            _0x1313be +
            '&format=mp4&audioBitrate=128&videoQuality=144&filenameStyle=pretty&vCodec=h264'
        ),
        _0x388476 = _0x1c13bc.url
      await _0x5564e3.sendMessage(_0x5988eb, {
        react: {
          text: '\u2B06️',
          key: _0x4e55b4.key,
        },
      })
      await _0x5564e3.sendMessage(
        _0x5988eb,
        {
          document: { url: _0x388476 },
          jpegThumbnail: _0x50d71c,
          caption: '`[144p]`\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          mimetype: 'video/mp4',
          fileName: (_0x1c13bc.filename || _0x58b71d) + '.mp4',
        },
        { quoted: _0x4e55b4 }
      )
      await _0x5564e3.sendMessage(_0x5988eb, {
        react: {
          text: '\u2714️',
          key: _0x4e55b4.key,
        },
      })
    } catch (_0x53b41c) {
      console.error(_0x53b41c)
      await _0x153742('*An error occurred while processing your request.*')
    }
  }
)
cmd(
  {
    pattern: 'docdl240',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x1ef3d2,
    _0x129aef,
    _0x4ab777,
    { from: _0x31d730, q: _0x52e12d, reply: _0x296102 }
  ) => {
    try {
      if (!_0x52e12d) {
        return await _0x296102('*Need a YouTube URL!*')
      }
      const _0x4889d6 = _0x52e12d.split('&'),
        _0x30a51e = _0x4889d6[0],
        _0x27c2c8 = _0x4889d6[1],
        _0x61da9f = _0x4889d6[2] || 'video',
        _0x52497b = await fetch(_0x27c2c8),
        _0x42ea77 = await _0x52497b.buffer(),
        _0x5d4499 = await resizeImage(_0x42ea77, 200, 200),
        _0x4b0e1c = await fetchJson(
          'https://sadas-ytmp4-5.vercel.app/convert?link=' +
            _0x30a51e +
            '&format=mp4&audioBitrate=128&videoQuality=240&filenameStyle=pretty&vCodec=h264'
        ),
        _0x2c3a1f = _0x4b0e1c.url
      await _0x1ef3d2.sendMessage(_0x31d730, {
        react: {
          text: '\u2B06️',
          key: _0x129aef.key,
        },
      })
      await _0x1ef3d2.sendMessage(
        _0x31d730,
        {
          document: { url: _0x2c3a1f },
          jpegThumbnail: _0x5d4499,
          caption: '`[240p]`\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          mimetype: 'video/mp4',
          fileName: (_0x4b0e1c.filename || _0x61da9f) + '.mp4',
        },
        { quoted: _0x129aef }
      )
      await _0x1ef3d2.sendMessage(_0x31d730, {
        react: {
          text: '\u2714️',
          key: _0x129aef.key,
        },
      })
    } catch (_0xef7027) {
      console.error(_0xef7027)
      await _0x296102('*An error occurred while processing your request.*')
    }
  }
)
cmd(
  {
    pattern: 'docdl360',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x5a97c0,
    _0x31faef,
    _0x1c2e8d,
    { from: _0x34d68d, q: _0x15a283, reply: _0x11a879 }
  ) => {
    try {
      if (!_0x15a283) {
        return await _0x11a879('*Need a YouTube URL!*')
      }
      const _0x3d9958 = _0x15a283.split('&'),
        _0x57fb11 = _0x3d9958[0],
        _0xad43bd = _0x3d9958[1],
        _0x3859bf = _0x3d9958[2] || 'video',
        _0x501d54 = await fetch(_0xad43bd),
        _0x2fcfdb = await _0x501d54.buffer(),
        _0x25dd30 = await resizeImage(_0x2fcfdb, 200, 200),
        _0x228cdc = await fetchJson(
          'https://sadas-ytmp4-5.vercel.app/convert?link=' +
            _0x57fb11 +
            '&format=mp4&audioBitrate=128&videoQuality=360&filenameStyle=pretty&vCodec=h264'
        ),
        _0x358c6b = _0x228cdc.url
      await _0x5a97c0.sendMessage(_0x34d68d, {
        react: {
          text: '\u2B06️',
          key: _0x31faef.key,
        },
      })
      await _0x5a97c0.sendMessage(
        _0x34d68d,
        {
          document: { url: _0x358c6b },
          caption: '`[360p]`\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          mimetype: 'video/mp4',
          fileName: (_0x228cdc.filename || _0x3859bf) + '.mp4',
        },
        { quoted: _0x31faef }
      )
      await _0x5a97c0.sendMessage(_0x34d68d, {
        react: {
          text: '\u2714️',
          key: _0x31faef.key,
        },
      })
    } catch (_0xc412a3) {
      console.error(_0xc412a3)
      await _0x11a879('*An error occurred while processing your request.*')
    }
  }
)
cmd(
  {
    pattern: 'docdl480',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x5a97c0,
    _0x31faef,
    _0x1c2e8d,
    { from: _0x34d68d, q: _0x15a283, reply: _0x11a879 }
  ) => {
    try {
      if (!_0x15a283) {
        return await _0x11a879('*Need a YouTube URL!*')
      }
      const _0x3d9958 = _0x15a283.split('&'),
        _0x57fb11 = _0x3d9958[0],
        _0xad43bd = _0x3d9958[1],
        _0x3859bf = _0x3d9958[2] || 'video',
        _0x501d54 = await fetch(_0xad43bd),
        _0x2fcfdb = await _0x501d54.buffer(),
        _0x25dd30 = await resizeImage(_0x2fcfdb, 200, 200),
        _0x228cdc = await fetchJson(
          'https://sadas-ytmp4-5.vercel.app/convert?link=' +
            _0x57fb11 +
            '&format=mp4&audioBitrate=128&videoQuality=480&filenameStyle=pretty&vCodec=h264'
        ),
        _0x358c6b = _0x228cdc.url
      await _0x5a97c0.sendMessage(_0x34d68d, {
        react: {
          text: '\u2B06️',
          key: _0x31faef.key,
        },
      })
      await _0x5a97c0.sendMessage(
        _0x34d68d,
        {
          document: { url: _0x358c6b },
          caption: '`[480p]`\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          mimetype: 'video/mp4',
          fileName: (_0x228cdc.filename || _0x3859bf) + '.mp4',
        },
        { quoted: _0x31faef }
      )
      await _0x5a97c0.sendMessage(_0x34d68d, {
        react: {
          text: '\u2714️',
          key: _0x31faef.key,
        },
      })
    } catch (_0xc412a3) {
      console.error(_0xc412a3)
      await _0x11a879('*An error occurred while processing your request.*')
    }
  }
)
cmd(
  {
    pattern: 'docdl720',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x41ff1a,
    _0x281a59,
    _0xc50c2e,
    { from: _0x513aa4, q: _0x2fdd8b, reply: _0x16fc44 }
  ) => {
    try {
      if (!_0x2fdd8b) {
        return await _0x16fc44('*Need a youtube url!*')
      }
      const _0x4a571c = _0x2fdd8b.split('&'),
        _0xd0641 = _0x4a571c[0],
        _0x7baf6c = _0x4a571c[1],
        _0x3928de = _0x4a571c[2] || 'video',
        _0x181e1b = await fetch(_0x7baf6c),
        _0x32945 = await _0x181e1b.buffer(),
        _0x2379bd = await resizeImage(_0x32945, 200, 200),
        _0x1bb850 = await fetchJson(
          'https://sadas-ytmp4-5.vercel.app/convert?link=' +
            _0xd0641 +
            '&format=mp4&audioBitrate=128&videoQuality=720&filenameStyle=pretty&vCodec=h264'
        ),
        _0x5f03b4 = _0x1bb850.url
      await _0x41ff1a.sendMessage(_0x513aa4, {
        react: {
          text: '\u2B06️',
          key: _0x281a59.key,
        },
      })
      await _0x41ff1a.sendMessage(
        _0x513aa4,
        {
          document: { url: _0x5f03b4 },
          caption: '`[720p]`\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          mimetype: 'video/mp4',
          fileName: (_0x1bb850.filename || _0x3928de) + '.mp4',
        },
        { quoted: _0x281a59 }
      )
      await _0x41ff1a.sendMessage(_0x513aa4, {
        react: {
          text: '\u2714️',
          key: _0x281a59.key,
        },
      })
    } catch (_0x2dbac1) {
      console.log(_0x2dbac1)
    }
  }
)
cmd(
  {
    pattern: 'docdl1080',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x2ca5cf,
    _0x569179,
    _0x118d41,
    { from: _0x319722, q: _0x10cd92, reply: _0x193fdc }
  ) => {
    try {
      if (!_0x10cd92) {
        return await _0x193fdc('*Need a youtube url!*')
      }
      const _0x4e2a84 = _0x10cd92.split('&'),
        _0x1fcd48 = _0x4e2a84[0],
        _0x55a868 = _0x4e2a84[1],
        _0x2ea109 = _0x4e2a84[2] || 'video',
        _0x4c7d57 = await fetch(_0x55a868),
        _0x5cc672 = await _0x4c7d57.buffer(),
        _0x2fa58c = await resizeImage(_0x5cc672, 200, 200),
        _0x38038e = await fetchJson(
          'https://sadas-ytmp4-5.vercel.app/convert?link=' +
            _0x1fcd48 +
            '&format=mp4&audioBitrate=128&videoQuality=1080&filenameStyle=pretty&vCodec=h264'
        ),
        _0x18c5cf = _0x38038e.url
      await _0x2ca5cf.sendMessage(_0x319722, {
        react: {
          text: '\u2B06️',
          key: _0x569179.key,
        },
      })
      await _0x2ca5cf.sendMessage(
        _0x319722,
        {
          document: { url: _0x18c5cf },
          caption: '`[1080p]`\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
          mimetype: 'video/mp4',
          fileName: (_0x38038e.filename || _0x2ea109) + '.mp4',
        },
        { quoted: _0x569179 }
      )
      await _0x2ca5cf.sendMessage(_0x319722, {
        react: {
          text: '\u2714️',
          key: _0x569179.key,
        },
      })
    } catch (_0x668f85) {
      console.log(_0x668f85)
    }
  }
)
cmd(
  {
    pattern: 'videodl144',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x524d2e,
    _0x5625f1,
    _0x27b265,
    { from: _0x2fab03, q: _0x1a8095, reply: _0x9b27b2 }
  ) => {
    try {
      if (!_0x1a8095) {
        return await _0x9b27b2('*You must provide a YouTube URL!*')
      }
      const _0x145b8f = await fetchJson(
          'https://sadas-ytmp4-5.vercel.app/convert?link=' +
            _0x1a8095 +
            '&format=mp4&audioBitrate=128&videoQuality=144&filenameStyle=pretty&vCodec=h264'
        ),
        _0x14c9ed = _0x145b8f.url
      await _0x524d2e.sendMessage(_0x2fab03, {
        react: {
          text: '\u2B06️',
          key: _0x5625f1.key,
        },
      })
      await _0x524d2e.sendMessage(
        _0x2fab03,
        {
          video: { url: _0x14c9ed },
          caption: _0x145b8f.filename + '\n\n`[144p]`\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x5625f1 }
      )
      await _0x524d2e.sendMessage(_0x2fab03, {
        react: {
          text: '\u2714️',
          key: _0x5625f1.key,
        },
      })
    } catch (_0x570cb1) {
      console.error(_0x570cb1)
      await _0x9b27b2('*An error occurred while downloading the video.*')
    }
  }
)
cmd(
  {
    pattern: 'videodl240',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x27aa91,
    _0x27f704,
    _0x1cf64f,
    { from: _0x3a99be, q: _0x4b89ed, reply: _0x1d195b }
  ) => {
    try {
      const _0x625252 = await fetchJson(
          'https://sadas-ytmp4-5.vercel.app/convert?link=' +
            _0x4b89ed +
            '&format=mp4&audioBitrate=128&videoQuality=240&filenameStyle=pretty&vCodec=h264'
        ),
        _0x9b47ff = _0x625252.url
      await _0x27aa91.sendMessage(_0x3a99be, {
        react: {
          text: '\u2B06️',
          key: _0x27f704.key,
        },
      })
      await _0x27aa91.sendMessage(
        _0x3a99be,
        {
          video: { url: _0x9b47ff },
          caption: _0x625252.filename + '\n\n`[240p]`\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x27f704 }
      )
      await _0x27aa91.sendMessage(_0x3a99be, {
        react: {
          text: '\u2714️',
          key: _0x27f704.key,
        },
      })
    } catch (_0x4d5a7c) {
      _0x1d195b('*Error !!*')
      console.log(_0x4d5a7c)
    }
  }
)
cmd(
  {
    pattern: 'videodl360',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x37fb23,
    _0x4c2ecd,
    _0x2f0147,
    { from: _0x1c729a, q: _0xc1ead5, reply: _0x533ece }
  ) => {
    try {
      const _0x3072c0 = await fetchJson(
          'https://sadas-ytmp4-5.vercel.app/convert?link=' +
            _0xc1ead5 +
            '&format=mp4&audioBitrate=128&videoQuality=360&filenameStyle=pretty&vCodec=h264'
        ),
        _0xdf5a1a = _0x3072c0.url
      await _0x37fb23.sendMessage(_0x1c729a, {
        react: {
          text: '\u2B06️',
          key: _0x4c2ecd.key,
        },
      })
      await _0x37fb23.sendMessage(
        _0x1c729a,
        {
          video: { url: _0xdf5a1a },
          caption: _0x3072c0.filename + '\n\n`[360p]`\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x4c2ecd }
      )
      await _0x37fb23.sendMessage(_0x1c729a, {
        react: {
          text: '\u2714️',
          key: _0x4c2ecd.key,
        },
      })
    } catch (_0x544c67) {
      _0x533ece('*Error !!*')
      console.log(_0x544c67)
    }
  }
)
cmd(
  {
    pattern: 'videodl480',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x37fb23,
    _0x4c2ecd,
    _0x2f0147,
    { from: _0x1c729a, q: _0xc1ead5, reply: _0x533ece }
  ) => {
    try {
      const _0x3072c0 = await fetchJson(
          'https://sadas-ytmp4-5.vercel.app/convert?link=' +
            _0xc1ead5 +
            '&format=mp4&audioBitrate=128&videoQuality=480&filenameStyle=pretty&vCodec=h264'
        ),
        _0xdf5a1a = _0x3072c0.url
      await _0x37fb23.sendMessage(_0x1c729a, {
        react: {
          text: '\u2B06️',
          key: _0x4c2ecd.key,
        },
      })
      await _0x37fb23.sendMessage(
        _0x1c729a,
        {
          video: { url: _0xdf5a1a },
          caption: _0x3072c0.filename + '\n\n`[480p]`\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x4c2ecd }
      )
      await _0x37fb23.sendMessage(_0x1c729a, {
        react: {
          text: '\u2714️',
          key: _0x4c2ecd.key,
        },
      })
    } catch (_0x544c67) {
      _0x533ece('*Error !!*')
      console.log(_0x544c67)
    }
  }
)
cmd(
  {
    pattern: 'videodl720',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0xc7859e,
    _0x1f26f2,
    _0x17d8f8,
    { from: _0xf25871, q: _0x1be922, reply: _0x376f65 }
  ) => {
    try {
      const _0x1169a4 = await fetchJson(
          'https://sadas-ytmp4-5.vercel.app/convert?link=' +
            _0x1be922 +
            '&format=mp4&audioBitrate=128&videoQuality=720&filenameStyle=pretty&vCodec=h264'
        ),
        _0xe9cd5b = _0x1169a4.url
      await _0xc7859e.sendMessage(_0xf25871, {
        react: {
          text: '\u2B06️',
          key: _0x1f26f2.key,
        },
      })
      await _0xc7859e.sendMessage(
        _0xf25871,
        {
          video: { url: _0xe9cd5b },
          caption: _0x1169a4.filename + '\n\n`[720p]`\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x1f26f2 }
      )
      await _0xc7859e.sendMessage(_0xf25871, {
        react: {
          text: '\u2714️',
          key: _0x1f26f2.key,
        },
      })
    } catch (_0x57f47b) {
      _0x376f65('*Error !!*')
      console.log(_0x57f47b)
    }
  }
)
cmd(
  {
    pattern: 'videodl1080',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x4a0b59,
    _0x5b3ef6,
    _0x383b0d,
    { from: _0x49028e, q: _0x15f1ff, reply: _0x34661a }
  ) => {
    try {
      const _0x1faad9 = await fetchJson(
          'https://sadas-ytmp4-5.vercel.app/convert?link=' +
            _0x15f1ff +
            '&format=mp4&audioBitrate=128&videoQuality=1080&filenameStyle=pretty&vCodec=h264'
        ),
        _0x4b3542 = _0x1faad9.url
      await _0x4a0b59.sendMessage(_0x49028e, {
        react: {
          text: '\u2B06️',
          key: _0x5b3ef6.key,
        },
      })
      await _0x4a0b59.sendMessage(
        _0x49028e,
        {
          video: { url: _0x4b3542 },
          caption: _0x1faad9.filename + '\n\n`[1080p]`\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x5b3ef6 }
      )
      await _0x4a0b59.sendMessage(_0x49028e, {
        react: {
          text: '\u2714️',
          key: _0x5b3ef6.key,
        },
      })
    } catch (_0x57e154) {
      _0x34661a('*Error !!*')
      console.log(_0x57e154)
    }
  }
)

//iwaraaiii
cmd(
  {
    pattern: 'ytmp4-240',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x147f1b,
    _0x11b4e3,
    _0x136ad4,
    {
      from: _0x3a6eb9,
      quoted: _0x30162f,
      body: _0x5f472c,
      isCmd: _0x3771d6,
      command: _0x28fe77,
      args: _0x25a685,
      q: _0x34b034,
      isGroup: _0x79efb8,
      sender: _0x2497ee,
      senderNumber: _0x253a4b,
      botNumber2: _0x5b1457,
      botNumber: _0x1ea7ea,
      pushname: _0x4a1dfa,
      isMe: _0x4011b8,
      isOwner: _0x2ae132,
      groupMetadata: _0x582db5,
      groupName: _0x148200,
      participants: _0x482928,
      groupAdmins: _0x2e5269,
      isBotAdmins: _0x3e4598,
      isAdmins: _0x1f71f5,
      reply: _0xb7ad2,
    }
  ) => {
    try {
      const _0x39693b = await fetchJson(
          'https://sadiya-tech-apis.vercel.app/download/ytdl?url=' +
            _0x34b034 +
            '&apikey=' +
            sadiya_apikey +
            '&format=240'
        ),
        _0x391b7c = _0x39693b.result.download
      await _0x147f1b.sendMessage(
        _0x3a6eb9,
        {
          video: { url: _0x391b7c },
          mimetype: 'video/mp4',
          caption: '*240p* \n\n *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x11b4e3 }
      )
    } catch (_0x2ad1d1) {
      console.log(_0x2ad1d1)
      _0xb7ad2("\u274C *I Couldn't find anything. Please try again later...*")
      await _0x147f1b.sendMessage(
        _0x1ea7ea + '@s.whatsapp.net',
        { text: '\u2757 *Error Info:* ' + _0x2ad1d1 },
        { quoted: _0x11b4e3 }
      )
    }
  }
)
cmd(
  {
    pattern: 'ytmp4-360',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3c5ffe,
    _0x12e91e,
    _0x1cbf6a,
    {
      from: _0x29b69d,
      quoted: _0x14c02f,
      body: _0x181f29,
      isCmd: _0x2fa563,
      command: _0x254bc6,
      args: _0x31287f,
      q: _0x16559b,
      isGroup: _0x425c9d,
      sender: _0x59978b,
      senderNumber: _0x298503,
      botNumber2: _0x460f00,
      botNumber: _0x117104,
      pushname: _0x3b9407,
      isMe: _0x394804,
      isOwner: _0x416c96,
      groupMetadata: _0x1ad423,
      groupName: _0x91e47,
      participants: _0x4c07f9,
      groupAdmins: _0x169d12,
      isBotAdmins: _0x535e79,
      isAdmins: _0x4f2869,
      reply: _0x5f3b99,
    }
  ) => {
    try {
      const _0x2888a4 = await fetchJson(
          'https://sadiya-tech-apis.vercel.app/download/ytdl?url=' +
            _0x16559b +
            '&apikey=' +
            sadiya_apikey +
            '&format=360'
        ),
        _0x334252 = _0x2888a4.result.download
      await _0x3c5ffe.sendMessage(
        _0x29b69d,
        {
          video: { url: _0x334252 },
          mimetype: 'video/mp4',
          caption: '*360p*\n\n *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x12e91e }
      )
    } catch (_0x1ae6ff) {
      console.log(_0x1ae6ff)
      _0x5f3b99("\u274C *I Couldn't find anything. Please try again later...*")
      await _0x3c5ffe.sendMessage(
        _0x117104 + '@s.whatsapp.net',
        { text: '\u2757 *Error Info:* ' + _0x1ae6ff },
        { quoted: _0x12e91e }
      )
    }
  }
)
cmd(
  {
    pattern: 'ytmp4-480',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3c5ffe,
    _0x12e91e,
    _0x1cbf6a,
    {
      from: _0x29b69d,
      quoted: _0x14c02f,
      body: _0x181f29,
      isCmd: _0x2fa563,
      command: _0x254bc6,
      args: _0x31287f,
      q: _0x16559b,
      isGroup: _0x425c9d,
      sender: _0x59978b,
      senderNumber: _0x298503,
      botNumber2: _0x460f00,
      botNumber: _0x117104,
      pushname: _0x3b9407,
      isMe: _0x394804,
      isOwner: _0x416c96,
      groupMetadata: _0x1ad423,
      groupName: _0x91e47,
      participants: _0x4c07f9,
      groupAdmins: _0x169d12,
      isBotAdmins: _0x535e79,
      isAdmins: _0x4f2869,
      reply: _0x5f3b99,
    }
  ) => {
    try {
      const _0x2888a4 = await fetchJson(
          'https://sadiya-tech-apis.vercel.app/download/ytdl?url=' +
            _0x16559b +
            '&apikey=' +
            sadiya_apikey +
            '&format=480'
        ),
        _0x334252 = _0x2888a4.result.download
      await _0x3c5ffe.sendMessage(
        _0x29b69d,
        {
          video: { url: _0x334252 },
          mimetype: 'video/mp4',
          caption: '*480p*\n\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x12e91e }
      )
    } catch (_0x1ae6ff) {
      console.log(_0x1ae6ff)
      _0x5f3b99("\u274C *I Couldn't find anything. Please try again later...*")
      await _0x3c5ffe.sendMessage(
        _0x117104 + '@s.whatsapp.net',
        { text: '\u2757 *Error Info:* ' + _0x1ae6ff },
        { quoted: _0x12e91e }
      )
    }
  }
)
cmd(
  {
    pattern: 'ytmp4-720',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x161bf6,
    _0x16bd69,
    _0x58a62f,
    {
      from: _0x161769,
      quoted: _0x5ebe20,
      body: _0x32550f,
      isCmd: _0x8d60cd,
      command: _0xf3bf7a,
      args: _0x12e682,
      q: _0x180624,
      isGroup: _0x4cf0ef,
      sender: _0x1f4507,
      senderNumber: _0x1f4b19,
      botNumber2: _0x4cfed7,
      botNumber: _0x50a6c3,
      pushname: _0x57e78e,
      isMe: _0x42bc77,
      isOwner: _0x1fd68b,
      groupMetadata: _0x1d66e2,
      groupName: _0x59c68b,
      participants: _0x473b3d,
      groupAdmins: _0x2bb87b,
      isBotAdmins: _0x3954d6,
      isAdmins: _0x39df80,
      reply: _0x211416,
    }
  ) => {
    try {
      const _0x2b9f33 = await fetchJson(
          'https://apis.davidcyriltech.my.id/download/ytmp4?url=' +
            _0x180624 
        ),
        _0x380026 = _0x2b9f33.result.download_url
      await _0x161bf6.sendMessage(
        _0x161769,
        {
          video: { url: _0x380026 },
          mimetype: 'video/mp4',
          caption: '*720p*\n\n *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x16bd69 }
      )
    } catch (_0x5d2483) {
      console.log(_0x5d2483)
      _0x211416("\u274C *I Couldn't find anything. Please try again later...*")
      await _0x161bf6.sendMessage(
        _0x50a6c3 + '@s.whatsapp.net',
        { text: '\u2757 *Error Info:* ' + _0x5d2483 },
        { quoted: _0x16bd69 }
      )
    }
  }
)
cmd(
  {
    pattern: 'ytmp4-1080',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x4a095d,
    _0x4947d8,
    _0x2406b6,
    {
      from: _0x348402,
      quoted: _0x1c3917,
      body: _0x3370d6,
      isCmd: _0xae0186,
      command: _0x53d2b2,
      args: _0x5cd42b,
      q: _0x1e5a96,
      isGroup: _0xa69cdd,
      sender: _0x260488,
      senderNumber: _0x1d4350,
      botNumber2: _0x196473,
      botNumber: _0x24e99d,
      pushname: _0x579c2e,
      isMe: _0x53dd46,
      isOwner: _0x47e47d,
      groupMetadata: _0x49c6ab,
      groupName: _0x34a1ab,
      participants: _0x5da9a0,
      groupAdmins: _0x50b49a,
      isBotAdmins: _0x2a7742,
      isAdmins: _0x483f04,
      reply: _0x23c83d,
    }
  ) => {
    try {
      const _0x8f513b = await fetchJson(
          'https://sadiya-tech-apis.vercel.app/download/ytdl?url=' +
            _0x1e5a96 +
            '&apikey=' +
            sadiya_apikey +
            '&format=1080'
        ),
        _0x3b960a = _0x8f513b.result.download
      await _0x4a095d.sendMessage(
        _0x348402,
        {
          video: { url: _0x3b960a },
          mimetype: 'video/mp4',
          caption: '*1080p* \n\n\n*•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x4947d8 }
      )
    } catch (_0x21457f) {
      console.log(_0x21457f)
      _0x23c83d("\u274C *I Couldn't find anything. Please try again later...*")
      await _0x4a095d.sendMessage(
        _0x24e99d + '@s.whatsapp.net',
        { text: '\u2757 *Error Info:* ' + _0x21457f },
        { quoted: _0x4947d8 }
      )
    }
  }
)
cmd(
  {
    pattern: 'ytmp4doc-240',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x4c832d,
    _0x311ac7,
    _0x5b7960,
    {
      from: _0x570c19,
      quoted: _0xe6f557,
      body: _0xed526f,
      isCmd: _0x3d075c,
      command: _0x393891,
      args: _0x3ce423,
      q: _0x3f1968,
      isGroup: _0x2049a3,
      sender: _0xe206a,
      senderNumber: _0x294bdf,
      botNumber2: _0x28bd2d,
      botNumber: _0xed2c24,
      pushname: _0x22f861,
      isMe: _0xfb8170,
      isOwner: _0x9874ce,
      groupMetadata: _0x56a4a5,
      groupName: _0x1f85e5,
      participants: _0x1cd6af,
      groupAdmins: _0x4793cb,
      isBotAdmins: _0x2798ea,
      isAdmins: _0x42b7f3,
      reply: _0x180981,
    }
  ) => {
    try {
      const _0x1603c2 = await fetchJson(
          'https://sadiya-tech-apis.vercel.app/download/ytdl?url=' +
            _0x3f1968 +
            '&apikey=' +
            sadiya_apikey +
            '&format=240'
        ),
        _0x3404be = _0x1603c2.result.download
      await _0x4c832d.sendMessage(
        _0x570c19,
        {
          document: { url: _0x3404be },
          mimetype: 'video/mp4',
          fileName: _0x1603c2.result.title + '.mp4',
          caption: '*240p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x311ac7 }
      )
    } catch (_0x1c174a) {
      console.log(_0x1c174a)
      _0x180981("\u274C *I Couldn't find anything. Please try again later...*")
      await _0x4c832d.sendMessage(
        _0xed2c24 + '@s.whatsapp.net',
        { text: '\u2757 *Error Info:* ' + _0x1c174a },
        { quoted: _0x311ac7 }
      )
    }
  }
)
cmd(
  {
    pattern: 'ytmp4doc-360',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3b897b,
    _0x3599ca,
    _0x57ce68,
    {
      from: _0x5a48a9,
      quoted: _0x4f4fab,
      body: _0x4d864c,
      isCmd: _0x54e6bd,
      command: _0x274f60,
      args: _0x294d77,
      q: _0x41830f,
      isGroup: _0x494763,
      sender: _0x9b2545,
      senderNumber: _0x5cc4a7,
      botNumber2: _0x27cbb9,
      botNumber: _0x27e0c7,
      pushname: _0x25b4ed,
      isMe: _0xa72fb5,
      isOwner: _0x415d20,
      groupMetadata: _0x17f4c3,
      groupName: _0xc5d762,
      participants: _0x1b6408,
      groupAdmins: _0x29ca83,
      isBotAdmins: _0x120e52,
      isAdmins: _0x3cf6a2,
      reply: _0x1276b8,
    }
  ) => {
    try {
      const _0x11ff7f = await fetchJson(
          'https://sadiya-tech-apis.vercel.app/download/ytdl?url=' +
            _0x41830f +
            '&format=360'
        ),
        _0xc5c903 = _0x11ff7f.result.download
      await _0x3b897b.sendMessage(
        _0x5a48a9,
        {
          document: { url: _0xc5c903 },
          mimetype: 'video/mp4',
          fileName: _0x11ff7f.result.title + '.mp4',
          caption: '*360p* \n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x3599ca }
      )
    } catch (_0x2e1787) {
      console.log(_0x2e1787)
      _0x1276b8("\u274C *I Couldn't find anything. Please try again later...*")
      await _0x3b897b.sendMessage(
        _0x27e0c7 + '@s.whatsapp.net',
        { text: '\u2757 *Error Info:* ' + _0x2e1787 },
        { quoted: _0x3599ca }
      )
    }
  }
)
cmd(
  {
    pattern: 'ytmp4doc-480',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3b897b,
    _0x3599ca,
    _0x57ce68,
    {
      from: _0x5a48a9,
      quoted: _0x4f4fab,
      body: _0x4d864c,
      isCmd: _0x54e6bd,
      command: _0x274f60,
      args: _0x294d77,
      q: _0x41830f,
      isGroup: _0x494763,
      sender: _0x9b2545,
      senderNumber: _0x5cc4a7,
      botNumber2: _0x27cbb9,
      botNumber: _0x27e0c7,
      pushname: _0x25b4ed,
      isMe: _0xa72fb5,
      isOwner: _0x415d20,
      groupMetadata: _0x17f4c3,
      groupName: _0xc5d762,
      participants: _0x1b6408,
      groupAdmins: _0x29ca83,
      isBotAdmins: _0x120e52,
      isAdmins: _0x3cf6a2,
      reply: _0x1276b8,
    }
  ) => {
    try {
      const _0x11ff7f = await fetchJson(
          'https://sadiya-tech-apis.vercel.app/download/ytdl?url=' +
            _0x41830f +
            '&format=480'
        ),
        _0xc5c903 = _0x11ff7f.result.download
      await _0x3b897b.sendMessage(
        _0x5a48a9,
        {
          document: { url: _0xc5c903 },
          mimetype: 'video/mp4',
          fileName: _0x11ff7f.result.title + '.mp4',
          caption: '*480p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x3599ca }
      )
    } catch (_0x2e1787) {
      console.log(_0x2e1787)
      _0x1276b8("\u274C *I Couldn't find anything. Please try again later...*")
      await _0x3b897b.sendMessage(
        _0x27e0c7 + '@s.whatsapp.net',
        { text: '\u2757 *Error Info:* ' + _0x2e1787 },
        { quoted: _0x3599ca }
      )
    }
  }
)
cmd(
  {
    pattern: 'download',
    react: '\uD83C\uDF5F',
    alias: ['down'],
    desc: 'Direct downloader from a link',
    category: 'movie',
    use: '.directdl <Direct Link>',
    dontAddCommandList: false,
    filename: __filename,
  },
  async (
    _0x2d6e3d,
    _0x397668,
    _0x59bae5,
    { from: _0x5870d5, q: _0x3ddfc1, reply: _0xcb33bf }
  ) => {
    try {
      if (!_0x3ddfc1) {
        return _0xcb33bf('\u2757 Please provide a direct download link.')
      }
      const _0x16c513 = _0x3ddfc1.trim()
      if (!/^(https?:\/\/[^\s]+)/.test(_0x16c513)) {
        return _0xcb33bf(
          '\u2757 The provided URL is invalid. Please check the link and try again.'
        )
      }
      await _0x2d6e3d.sendMessage(_0x5870d5, {
        react: {
          text: '\u2B07️',
          key: _0x397668.key,
        },
      })
      let _0x124ce6 = 'video/mp4',
        _0x55dd05 = 'downloaded_video.mp4'
      try {
        const _0x48a3ed = await axios.head(_0x16c513),
          _0x3224d2 = _0x48a3ed.headers['content-type']
        if (_0x3224d2) {
          _0x124ce6 = _0x3224d2
        }
        const _0x179c7d = _0x48a3ed.headers['content-disposition']
        if (_0x179c7d && _0x179c7d.includes('filename=')) {
          const _0x231a62 = _0x179c7d.match(
            /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
          )
          _0x231a62 &&
            _0x231a62[1] &&
            (_0x55dd05 = _0x231a62[1].replace(/['"]/g, ''))
        } else {
          const _0x1ec73b = new URL(_0x16c513).pathname,
            _0x5415fe = path.basename(_0x1ec73b)
          if (_0x5415fe) {
            _0x55dd05 = _0x5415fe
          }
        }
      } catch (_0x5a28d8) {
        const _0x306413 = new URL(_0x16c513).pathname,
          _0x1030b8 = path.basename(_0x306413)
        if (_0x1030b8) {
          _0x55dd05 = _0x1030b8
        }
      }
      await _0x2d6e3d.sendMessage(_0x5870d5, {
        document: { url: _0x16c513 },
        caption: config.FOOTER,
        mimetype: _0x124ce6,
        fileName: _0x55dd05 + 'NADEEN-MD',
      })
      await _0x2d6e3d.sendMessage(_0x5870d5, {
        react: {
          text: '\u2705',
          key: _0x397668.key,
        },
      })
    } catch (_0x54e1c5) {
      _0xcb33bf('\u2757 Error occurred: ' + _0x54e1c5.message)
    }
  }
)
cmd(
  {
    pattern: 'ytmp4doc-720',
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x516a7f,
    _0x45fdc3,
    _0x456b75,
    {
      from: _0x28844c,
      quoted: _0x3f95cf,
      body: _0x18228c,
      isCmd: _0x1d837a,
      command: _0x11718e,
      args: _0x663ae5,
      q: _0x9ce7ab,
      isGroup: _0x1aa2a6,
      sender: _0x7f0235,
      senderNumber: _0x2d95a0,
      botNumber2: _0x15da9c,
      botNumber: _0x11c11a,
      pushname: _0xe04b08,
      isMe: _0x1a0924,
      isOwner: _0x4f918a,
      groupMetadata: _0xd23838,
      groupName: _0x25ed30,
      participants: _0x428a4c,
      groupAdmins: _0x2a0239,
      isBotAdmins: _0x1ef450,
      isAdmins: _0xf3edd7,
      reply: _0x342697,
    }
  ) => {
    try {
      const _0x60e6f3 = await fetchJson(
          'https://apis.davidcyriltech.my.id/download/ytmp4?url=' +
            _0x9ce7ab 
        ),
        _0x1ce8b8 = _0x60e6f3.result.download_url
      await _0x516a7f.sendMessage(
        _0x28844c,
        {
          document: { url: _0x1ce8b8 },
          jpegThumbnail: _0x60e6f3.thumbnail,
          mimetype: 'video/mp4',
          fileName: _0x60e6f3.result.title,
          caption: '*720p*\n\n> *•ɴᴀᴅᴇᴇɴ-ᴍᴅ•*',
        },
        { quoted: _0x45fdc3 }
      )
    } catch (_0x1c178d) {
      console.log(_0x1c178d)
      _0x342697("\u274C *I Couldn't find anything. Please try again later...*")
      await _0x516a7f.sendMessage(
        _0x11c11a + '@s.whatsapp.net',
        { text: '\u2757 *Error Info:* ' + _0x1c178d },
        { quoted: _0x45fdc3 }
      )
    }
  }
)
