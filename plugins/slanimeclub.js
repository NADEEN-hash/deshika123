const config = require('../config'),
  { cmd, commands } = require('../command'),
  axios = require('axios'),
  sharp = require('sharp'),
  { scrapercine, getDownloadLink } = require('../lib/yts'),
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
  fetch = (..._0x53bc21) =>
    import('node-fetch').then(({ default: _0x3fade3 }) =>
      _0x3fade3(..._0x53bc21)
    ),
  { Buffer } = require('buffer'),
  FormData = require('form-data'),
  fs = require('fs'),
  path = require('path'),
  fileType = require('file-type'),
  l = console.log,
  cinesubz_tv = require('sadasytsearch'),
  { sizeFormatter } = require('human-readable'),
  { cinesubz_info, cinesubz_tvshow_info } = require('../lib/cineall'),
  {
    slanimeclub_search,
    slanimeclub_ep,
    slanimeclub_dl,
  } = require('../lib/slanimeclub')
cmd(
  {
    pattern: 'slanime',
    react: '\uD83D\uDD0E',
    category: 'movie',
    alias: ['ctv'],
    desc: 'cinesubz.co tv shows search',
    use: '.cinetv  2025',
    filename: __filename,
  },
  async (
    _0x2fad48,
    _0x5abf88,
    _0x3e3d20,
    {
      from: _0x175962,
      q: _0x28bd42,
      prefix: _0x40ac0c,
      isMe: _0x58aa85,
      reply: _0x282e55,
    }
  ) => {
    try {
      if (!_0x28bd42) {
        return await _0x282e55('*please give me tv shows name !..*')
      }
      const _0x1c37c9 = await slanimeclub_search(_0x28bd42)
      if (!_0x1c37c9 || !_0x1c37c9.data || _0x1c37c9.data.length === 0) {
        return (
          await _0x2fad48.sendMessage(_0x175962, {
            react: {
              text: '\u274C',
              key: _0x3e3d20.key,
            },
          }),
          await _0x2fad48.sendMessage(
            _0x175962,
            { text: '*No results found \u274C*' },
            { quoted: _0x3e3d20 }
          )
        )
      }
      var _0x2c3b7d = []
      for (var _0x1f44c1 = 0; _0x1f44c1 < _0x1c37c9.data.length; _0x1f44c1++) {
        _0x2c3b7d.push({
          title:
            _0x1c37c9.data[_0x1f44c1].title
              .replace('Sinhala Subtitles | සිංහල උපසිරැසි සමඟ', '')
              .replace('Sinhala Subtitle | සිංහල උපසිරැසි සමඟ', '') ||
            'Result not found',
          description: '',
          rowId: _0x40ac0c + 'slanimeinfo ' + _0x1c37c9.data[_0x1f44c1].link,
        })
      }
      const _0x437ce4 = [
          {
            title: 'slanimeclub.co results',
            rows: _0x2c3b7d,
          },
        ],
        _0x9b7645 = {
          text:
            '_*SLANIME TV SHOWS RESULTS \uD83D\uDCFA*_\n\n*`\uD83D\uDCF2Input :`* ' +
            _0x28bd42,
          footer: config.FOOTER,
          title: 'slanimeclub.co results',
          buttonText: '*Reply Below Number \uD83D\uDD22*',
          sections: _0x437ce4,
        }
      await _0x2fad48.listMessage(_0x175962, _0x9b7645, _0x3e3d20)
    } catch (_0x316328) {
      console.log(_0x316328)
      await _0x2fad48.sendMessage(
        _0x175962,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x3e3d20 }
      )
    }
  }
)
cmd(
  {
    pattern: 'slanimeinfo',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x3f959b,
    _0x4cbb77,
    _0x4819e8,
    {
      from: _0x387f24,
      q: _0x5c144e,
      isMe: _0x3419d6,
      prefix: _0x288867,
      reply: _0x1a56c4,
    }
  ) => {
    try {
      let _0x2cb6db = await slanimeclub_ep(_0x5c144e)
      console.log('Scraped Data:', _0x2cb6db)
      let _0x113b25 =
        '*\uD83C\uDF5F Title :* _' +
        (_0x2cb6db.title || 'N/A') +
        '_\n\n*\uD83D\uDCC5 First air date :* _' +
        (_0x2cb6db.first_air_date || 'N/A') +
        '_\n*\uD83D\uDCC5 Last air date :* _' +
        (_0x2cb6db.last_air_date || 'N/A') +
        '_\n*\uD83D\uDD22 Ep count :* _' +
        (_0x2cb6db.episode_count || 'N/A') +
        '_\n*\uD83C\uDFC6 Tmdb vote :* _' +
        (_0x2cb6db.tmdbRate || 'N/A') +
        '_\n*\uD83E\uDD47Tmdb vote count :* _' +
        (_0x2cb6db.tmdbVoteCount || 'N/A') +
        '_\n*\uD83D\uDC81‍\u2642️ Director :* _' +
        (_0x2cb6db.director || 'N/A') +
        '_\n*\uD83C\uDFAD Genres :* _' +
        (_0x2cb6db.category || 'N/A') +
        '_\n'
      if (_0x2cb6db.length < 1) {
        return await _0x3f959b.sendMessage(
          _0x387f24,
          { text: 'erro !' },
          { quoted: _0x4819e8 }
        )
      }
      var _0x5b2be7 = []
      _0x5b2be7.push(
        {
          buttonId: _0x288867 + 'ctdetails ' + _0x5c144e,
          buttonText: { displayText: '_Send Details_' },
          type: 1,
        },
        {
          buttonId: _0x288867 + 'ctdetails ' + _0x5c144e,
          buttonText: { displayText: '_Send Images_\n' },
          type: 1,
        }
      )
      _0x2cb6db.episodes.map((_0x343d31) => {
        _0x5b2be7.push({
          buttonId:
            _0x288867 +
            ('slanimedl ' +
              _0x343d31.link +
              '&' +
              _0x2cb6db.title +
              '&' +
              _0x2cb6db.mainImage +
              '&' +
              _0x343d31.number),
          buttonText: { displayText: '' + _0x343d31.number },
          type: 1,
        })
      })
      const _0x51b419 = {
        image: { url: _0x2cb6db.mainImage.replace('-200x300', '') },
        caption: _0x113b25,
        footer: config.FOOTER,
        buttons: _0x5b2be7,
        headerType: 4,
      }
      return await _0x3f959b.buttonMessage(_0x387f24, _0x51b419, _0x4819e8)
    } catch (_0x1438b2) {
      console.log(_0x1438b2)
      await _0x3f959b.sendMessage(
        _0x387f24,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x4819e8 }
      )
    }
  }
)
async function resizeImage(_0x57ea36, _0x50810a, _0x177316) {
  try {
    return await sharp(_0x57ea36).resize(_0x50810a, _0x177316).toBuffer()
  } catch (_0x10d372) {
    return console.error('Error resizing image:', _0x10d372), _0x57ea36
  }
}
const formatSize = sizeFormatter({
  std: 'JEDEC',
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (_0x1f281e, _0x4b0d2a) => _0x1f281e + ' ' + _0x4b0d2a + 'B',
})
async function GDriveDl(_0x1aa4a7) {
  let _0xa0f929
  if (!_0x1aa4a7 || !_0x1aa4a7.match(/drive\.google/i)) {
    return _0x5437c2
  }
  try {
    if (
      ((_0xa0f929 = (_0x1aa4a7.match(/\/?id=(.+)/i) ||
        _0x1aa4a7.match(/\/d\/(.*?)\//))[1]),
      !_0xa0f929)
    ) {
      throw 'ID Not Found'
    }
    _0x5437c2 = await fetch(
      'https://drive.google.com/uc?id=' +
        _0xa0f929 +
        '&authuser=0&export=download',
      {
        method: 'post',
        headers: {
          'accept-encoding': 'gzip, deflate, br',
          'content-length': 0,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          origin: 'https://drive.google.com',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
          'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
          'x-drive-first-party': 'DriveWebUi',
          'x-json-requested': 'true',
        },
      }
    )
    let {
      fileName: _0x218996,
      sizeBytes: _0xfae86,
      downloadUrl: _0x1a44b0,
    } = JSON.parse((await _0x5437c2.text()).slice(4))
    if (!_0x1a44b0) {
      throw 'Link Download Limit!'
    }
    let _0x51b219 = await fetch(_0x1a44b0)
    return 200 !== _0x51b219.status
      ? _0x51b219.statusText
      : {
          downloadUrl: _0x1a44b0,
          fileName: _0x218996,
          fileSize: formatSize(_0xfae86),
          fileSizeb: _0xfae86,
          mimetype: _0x51b219.headers.get('content-type'),
        }
  } catch (_0x5b86b4) {
    return console.log(_0x5b86b4), _0x5437c2
  }
}
cmd(
  {
    pattern: 'gdrive',
    alias: ['googledrive'],
    react: '\uD83D\uDCC1',
    desc: 'Download googledrive files.',
    category: 'download',
    use: '.gdrive *<GoogleDrive Url>*',
    filename: __filename,
  },
  async (
    _0x2767b2,
    _0x64a38c,
    _0x20e984,
    {
      from: _0x394910,
      l: _0x420ebd,
      quoted: _0xf0e783,
      body: _0x4d4dc0,
      isCmd: _0x5401d7,
      command: _0x366a78,
      args: _0x24b03f,
      q: _0x412b02,
      isGroup: _0x229d29,
      sender: _0x2a5750,
      senderNumber: _0x10b4c4,
      botNumber2: _0xa228af,
      botNumber: _0x47ca1a,
      pushname: _0x352619,
      isMe: _0x1f2bcd,
      isOwner: _0x187ce3,
      groupMetadata: _0x10efef,
      groupName: _0x2f3ae1,
      participants: _0x2b4905,
      groupAdmins: _0x3e509e,
      isBotAdmins: _0x2b32ce,
      isAdmins: _0x1efe78,
      reply: _0x2c1a6b,
    }
  ) => {
    try {
      let _0x1b4c9b = await GDriveDl(_0x412b02),
        _0x4500d6 = ''
      _0x4500d6 = _0x1b4c9b.mimetype
      const _0x45733f = await axios.get(_0x1b4c9b.downloadUrl, {
          responseType: 'arraybuffer',
        }),
        _0x9830ff = Buffer.from(_0x45733f.data, 'binary')
      let _0x382367 =
        '*\u25E6 File name:*  ' +
        _0x1b4c9b.fileName +
        '\n*\u25E6 File Size:* ' +
        _0x1b4c9b.fileSize +
        '\n*\u25E6 File type:* ' +
        _0x4500d6 +
        '\n\n' +
        config.FOOTER
      const _0x5294b5 = {
        document: _0x9830ff,
        mimetype: _0x4500d6,
        fileName: _0x1b4c9b.fileName,
        caption: _0x382367,
      }
      await _0x2767b2.sendMessage(_0x394910, _0x5294b5, { quoted: _0x64a38c })
    } catch (_0x5a8d7b) {
      console.log(_0x5a8d7b)
      _0x2c1a6b('' + _0x5a8d7b)
    }
  }
)
cmd(
  {
    pattern: 'slanimetv',
    react: '\uD83D\uDD0E',
    category: 'movie',
    alias: ['ctv'],
    desc: 'cinesubz.co tv shows search',
    use: '.cinetv  2025',
    filename: __filename,
  },
  async (
    _0x285886,
    _0x2da7bd,
    _0x4a6b83,
    {
      from: _0x402893,
      q: _0xa6261e,
      prefix: _0x3dc581,
      isMe: _0x1c5f97,
      reply: _0x20790e,
    }
  ) => {
    try { 
      if (!_0xa6261e) {
        return await _0x20790e('*please give me tv shows name !..*')
      }
      const _0x201019 = await slanimeclub_search(_0xa6261e)
      if (!_0x201019 || !_0x201019.data || _0x201019.data.length === 0) {
        return (
          await _0x285886.sendMessage(_0x402893, {
            react: {
              text: '\u274C',
              key: _0x4a6b83.key,
            },
          }),
          await _0x285886.sendMessage(
            _0x402893,
            { text: '*No results found \u274C*' },
            { quoted: _0x4a6b83 }
          )
        )
      }
      var _0x31597b = []
      for (var _0x50e430 = 0; _0x50e430 < _0x201019.data.length; _0x50e430++) {
        _0x31597b.push({
          title:
            _0x201019.data[_0x50e430].title
              .replace('Sinhala Subtitles | සිංහල උපසිරැසි සමඟ', '')
              .replace('Sinhala Subtitle | සිංහල උපසිරැසි සමඟ', '') ||
            'Result not found',
          description: '',
          rowId: _0x3dc581 + 'slanimeinfo ' + _0x201019.data[_0x50e430].link,
        })
      }
      const _0x1e87e3 = [
          {
            title: 'slanimeclub.co results',
            rows: _0x31597b,
          },
        ],
        _0x416c9e = {
          text:
            '_*SLANIME TV SHOWS RESULTS \uD83D\uDCFA*_\n\n*`Input :`* ' +
            _0xa6261e,
          footer: config.FOOTER,
          title: 'slanimeclub.co results',
          buttonText: '*Reply Below Number \uD83D\uDD22*',
          sections: _0x1e87e3,
        },
        _0x3d00cd =
          '_*SLANIME TV SHOWS RESULTS \uD83D\uDCFA*_\n\n*`Input :` ' +
          _0xa6261e,
        _0x2bc4c7 = _0x201019.data.map((_0x51f4d5, _0x34fee9) => {
          const _0x3012ba =
            ('' + _0x201019.data[_0x34fee9].title)
              .replace(
                /WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi,
                ''
              )
              .trim() || 'No info'
          return {
            title: _0x3012ba,
            id: _0x3dc581 + ('slanimeinfo ' + _0x201019.data[_0x34fee9].link),
          }
        }),
        _0x3491fb = {
          title: 'Choose a Movie :)',
          sections: [
            {
              title: 'Available Links',
              rows: _0x2bc4c7,
            },
          ],
        }
      config.BUTTON === 'true'
        ? await _0x285886.sendMessage(
            _0x402893,
            {
              image: { url: config.LOGO },
              caption: _0x3d00cd,
              footer: config.FOOTER,
              buttons: [
                {
                  buttonId: 'download_list',
                  buttonText: { displayText: '\uD83C\uDFA5 Select Option' },
                  type: 4,
                  nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify(_0x3491fb),
                  },
                },
              ],
              headerType: 1,
              viewOnce: true,
            },
            { quoted: _0x4a6b83 }
          )
        : await _0x285886.listMessage(_0x402893, _0x416c9e, _0x4a6b83)
    } catch (_0x4a5da3) {
      console.log(_0x4a5da3)
      await _0x285886.sendMessage(
        _0x402893,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x4a6b83 }
      )
    }
  }
)
cmd(
  {
    pattern: 'slanimeinfo',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x46c429,
    _0x1c804f,
    _0x258f3d,
    {
      from: _0x5b1c8c,
      q: _0x580174,
      isMe: _0x291dfe,
      prefix: _0x55bd3c,
      reply: _0x526de2,
    }
  ) => {
    try {
      let _0x415277 = await slanimeclub_ep(_0x580174)
      console.log('Scraped Data:', _0x415277)
      let _0x17478b =
        '*\uD83C\uDF5F Title :* _' +
        (_0x415277.title || 'N/A') +
        '_\n\n*\uD83D\uDCC5 First air date :* _' +
        (_0x415277.first_air_date || 'N/A') +
        '_\n*\uD83D\uDCC5 Last air date :* _' +
        (_0x415277.last_air_date || 'N/A') +
        '_\n*\uD83D\uDD22 Ep count :* _' +
        (_0x415277.episode_count || 'N/A') +
        '_\n*\uD83C\uDFC6 Tmdb vote :* _' +
        (_0x415277.tmdbRate || 'N/A') +
        '_\n*\uD83E\uDD47Tmdb vote count :* _' +
        (_0x415277.tmdbVoteCount || 'N/A') +
        '_\n*\uD83D\uDC81‍\u2642️ Director :* _' +
        (_0x415277.director || 'N/A') +
        '_\n*\uD83C\uDFAD Genres :* _' +
        (_0x415277.category || 'N/A') +
        '_\n'
      if (_0x415277.length < 1) {
        return await _0x46c429.sendMessage(
          _0x5b1c8c,
          { text: 'erro !' },
          { quoted: _0x258f3d }
        )
      }
      var _0x53c407 = []
      _0x53c407.push({
        buttonId: _0x55bd3c + 'slanimedet ' + _0x580174,
        buttonText: { displayText: 'Send Details' },
        type: 1,
      })
      _0x415277.episodes.map((_0x317516) => {
        _0x53c407.push({
          buttonId:
            _0x55bd3c +
            ('slanimedl ' +
              _0x317516.link +
              '&' +
              _0x415277.title +
              '&' +
              _0x415277.mainImage +
              '&' +
              _0x317516.number),
          buttonText: { displayText: '' + _0x317516.number },
          type: 1,
        })
      })
      const _0x47fa7c = {
          image: { url: _0x415277.mainImage.replace('-200x300', '') },
          caption: _0x17478b,
          footer: config.FOOTER,
          buttons: _0x53c407,
          headerType: 4,
        },
        _0x228bc3 = _0x415277.episodes.map((_0x310915, _0x463d34) => {
          const _0x1c6c5e =
            ('' + _0x310915.number)
              .replace(
                /WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi,
                ''
              )
              .trim() || 'No info'
          return {
            title: _0x1c6c5e,
            id:
              _0x55bd3c +
              ('slanimedl ' +
                _0x310915.link +
                '&' +
                _0x415277.title +
                '&' +
                _0x415277.mainImage +
                '&' +
                _0x310915.number),
          }
        }),
        _0x1ded87 = {
          title: '\uD83C\uDFAC Choose a epishodes',
          sections: [
            {
              title: 'Available Links',
              rows: _0x228bc3,
            },
          ],
        }
      if (config.BUTTON === 'true') {
        await _0x46c429.sendMessage(
          _0x5b1c8c,
          {
            image: { url: _0x415277.mainImage.replace('-200x300', '') },
            caption: _0x17478b,
            footer: config.FOOTER,
            buttons: [
              {
                buttonId: _0x55bd3c + 'slanimedet ' + _0x580174,
                buttonText: { displayText: 'Details Send' },
                type: 1,
              },
              {
                buttonId: 'download_list',
                buttonText: { displayText: '\uD83C\uDFA5 Select Option' },
                type: 4,
                nativeFlowInfo: {
                  name: 'single_select',
                  paramsJson: JSON.stringify(_0x1ded87),
                },
              },
            ],
            headerType: 1,
            viewOnce: true,
          },
          { quoted: _0x258f3d }
        )
      } else {
        return await _0x46c429.buttonMessage(_0x5b1c8c, _0x47fa7c, _0x258f3d)
      }
    } catch (_0x2ab1ee) {
      console.log(_0x2ab1ee)
      await _0x46c429.sendMessage(
        _0x5b1c8c,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x258f3d }
      )
    }
  }
)
async function resizeImage(_0x341fe9, _0x3b5e69, _0x1fdbb6) {
  try {
    return await sharp(_0x341fe9).resize(_0x3b5e69, _0x1fdbb6).toBuffer()
  } catch (_0x4e9c22) {
    return console.error('Error resizing image:', _0x4e9c22), _0x341fe9
  }
}
async function GDriveDl(_0x3bf549) {
  let _0x69dbe5
  if (!(_0x3bf549 && _0x3bf549.match(/drive\.google/i))) {
    return _0x4f92ff
  }
  const _0x3cba2a = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (_0x5b6db8, _0xfc23f4) => _0x5b6db8 + ' ' + _0xfc23f4 + 'B',
  })
  try {
    _0x69dbe5 = (_0x3bf549.match(/\/?id=(.+)/i) ||
      _0x3bf549.match(/\/d\/(.*?)\//))[1]
    if (!_0x69dbe5) {
      throw 'ID Not Found'
    }
    _0x4f92ff = await fetch(
      'https://drive.google.com/uc?id=' +
        _0x69dbe5 +
        '&authuser=0&export=download',
      {
        method: 'post',
        headers: {
          'accept-encoding': 'gzip, deflate, br',
          'content-length': 0,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          origin: 'https://drive.google.com',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
          'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
          'x-drive-first-party': 'DriveWebUi',
          'x-json-requested': 'true',
        },
      }
    )
    let {
      fileName: _0x939035,
      sizeBytes: _0x3b0dbe,
      downloadUrl: _0x25d27c,
    } = JSON.parse((await _0x4f92ff.text()).slice(4))
    if (!_0x25d27c) {
      throw 'Link Download Limit!'
    }
    let _0x1a0309 = await fetch(_0x25d27c)
    if (_0x1a0309.status !== 200) {
      return _0x1a0309.statusText
    }
    return {
      downloadUrl: _0x25d27c,
      fileName: _0x939035,
      fileSize: _0x3cba2a(_0x3b0dbe),
      mimetype: _0x1a0309.headers.get('content-type'),
    }
  } catch (_0x1b1745) {
    return console.log(_0x1b1745), _0x4f92ff
  }
}
cmd(
  {
    pattern: 'slanimedet',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x5429ae,
    _0x570e52,
    _0x45fc7c,
    { from: _0x1cafcc, q: _0x4f9ef7, isMe: _0x4675a4, reply: _0x1ca296 }
  ) => {
    try {
      if (!_0x4f9ef7) {
        return await _0x1ca296('*please give me text !..*')
      }
      let _0x130896 = await slanimeclub_ep(_0x4f9ef7)
      const _0x55def0 = (
        await axios.get(
          'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/mtv.json'
        )
      ).data
      let _0x2db6f1 =
        '*\u2618️ \uD835\uDDE7ɪᴛʟᴇ \u27AE* *_' +
        (_0x130896.title || 'N/A') +
        '_*\n\n*\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ \u27AE* _' +
        (_0x130896.tmdbRate || 'N/A') +
        '_\n*\uD83C\uDFAD \uD835\uDDDAᴇɴᴀʀᴇꜱ \u27AE* _' +
        (_0x130896.category.join(', ') || 'N/A') +
        '_\n\n> \uD83C\uDF1F Follow us : *' +
        _0x55def0.chlink +
        '*'
      await _0x5429ae.sendMessage(config.JID || _0x1cafcc, {
        image: { url: _0x130896.mainImage.replace('-200x300', '') },
        caption: _0x2db6f1,
      })
      await _0x5429ae.sendMessage(_0x1cafcc, {
        react: {
          text: '\u2714️',
          key: _0x45fc7c.key,
        },
      })
    } catch (_0x24575b) {
      console.error('Error fetching or sending', _0x24575b)
      await _0x5429ae.sendMessage(_0x1cafcc, '*Error fetching or sending *', {
        quoted: _0x45fc7c,
      })
    }
  }
)
cmd(
  {
    pattern: 'slanimedl',
    react: '\uD83C\uDFA5',
    desc: 'Movie downloader',
    filename: __filename,
  },
  async (
    _0x456839,
    _0x4fdd43,
    _0x34862f,
    {
      from: _0x20dab3,
      q: _0x5a490f,
      isMe: _0x3b80e4,
      prefix: _0x5b2b9c,
      reply: _0x490dcb,
    }
  ) => {
    try {
      console.log('Received command input:', _0x5a490f)
      if (!_0x5a490f) {
        return _0x490dcb('Error: Missing required parameters.')
      }
      const _0x441430 = _0x5a490f.split('&')
      if (_0x441430.length < 4) {
        return _0x490dcb(
          'Error: Incorrect command format. Ensure you provide all required details.'
        )
      }
      const [_0x1b9994, _0x153a78, _0x1c7af7, _0x34c22e] = _0x441430,
        _0x4fd068 = _0x1c7af7
      if (!_0x4fd068) {
        return _0x490dcb('Error: Missing bot image URL.')
      }
      let _0x1b1b12
      try {
        const _0x27541e = await fetch(_0x4fd068)
        _0x1b1b12 = await _0x27541e.buffer()
      } catch (_0x254ca4) {
        return (
          console.error('Error fetching bot image:', _0x254ca4),
          _0x490dcb('Failed to retrieve the bot image.')
        )
      }
      const _0x4e5cd9 = await resizeImage(_0x1b1b12, 200, 200),
        _0x3e3573 = await slanimeclub_dl(_0x1b9994)
      console.log('Scraped Data:', _0x3e3573)
      if (!_0x3e3573 || _0x3e3573.length === 0 || !_0x3e3573[0].detailLink) {
        return (
          console.log('No valid link found, check `slanimeclub_dl` function.'),
          _0x490dcb(
            'No valid download link found. Please check the URL and try again.'
          )
        )
      }
      const _0x34ca85 = _0x3e3573[0].detailLink
      console.log('Final Scraped Data:', _0x34ca85)
      await _0x456839.sendMessage(_0x20dab3, {
        react: {
          text: '\u2B06️',
          key: _0x34862f.key,
        },
      })
      await _0x456839.sendMessage(_0x20dab3, {
        text: '*Uploading your movie..\u2B06️*',
      })
      let _0x2cdfa2
      if (_0x34ca85.includes('https://slanimeclub.co/')) {
        _0x2cdfa2 = _0x34ca85.trim()
      } else {
        if (_0x34ca85.includes('https://drive.google.com/')) {
          const _0x3f62c7 = GDriveDl(_0x34ca85)
          if (_0x3f62c7.error) {
            return (
              console.error('Google Drive download failed:', _0x3f62c7.error),
              _0x490dcb(_0x3f62c7.error)
            )
          }
          const _0x11b448 = await axios.get(_0x3f62c7.downloadUrl, {
              responseType: 'arraybuffer',
            }),
            _0x41f687 = Buffer.from(_0x11b448.data, 'binary')
        } else {
          return _0x490dcb(
            'Invalid URL. Please provide a valid Sinhala or Cine movie URL.'
          )
        }
      }
      if (!_0x2cdfa2) {
        return _0x490dcb('Error: Unable to process the media URL.')
      }
      await _0x456839.sendMessage(config.JID, {
        document: { url: _0x2cdfa2 },
        caption:
          '*\uD83C\uDFAC Name :* ' +
          _0x153a78 +
          '\n*EP -* ' +
          _0x34c22e +
          '\n\n> _*\uD83C\uDFACNADEEN MD\uD83C\uDFAC*_',
        mimetype: 'video/mp4',
        jpegThumbnail: _0x4e5cd9,
        fileName: _0x153a78 + '.mp4',
      })
    } catch (_0xdefebe) {
      console.error('Error occurred:', _0xdefebe)
      await _0x456839.sendMessage(
        _0x20dab3,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x34862f }
      )
    }
  }
)
