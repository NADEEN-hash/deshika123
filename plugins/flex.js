const config = require('../config'),
  { cmd, commands } = require('../command'),
  axios = require('axios'),
  sharp = require('sharp'),
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
  fetch = (..._0x528df7) =>
    import('node-fetch').then(({ default: _0x1863f6 }) =>
      _0x1863f6(..._0x528df7)
    ),
  { Buffer } = require('buffer'),
  FormData = require('form-data'),
  fs = require('fs'),
  path = require('path'),
  fileType = require('file-type'),
  l = console.log

cmd(
  {
    pattern: 'fox',
    react: '\uD83D\uDD0E',
    category: 'movie',
    alias: ['floxflex'],
    desc: 'pupilvideo.blogspot.com movie search',
    use: '.pupilvideot ape',
    filename: __filename,
  },
  async (
    _0x3c4d2a,
    _0x311992,
    _0x5ba3d1,
    {
      from: _0x18fe40,
      q: _0x4ea248,
      prefix: _0x2fb128,
      isMe: _0x491a7a,
      reply: _0x14cd3f,
    }
  ) => {
    try {
      if (!_0x4ea248) {
        return await _0x14cd3f('*Please provide a movie name!*')
      }
      let _0x141e7a = await fetchJson(
        'https://darkyasiya-new-movie-api.vercel.app/api/movie/foxflickz/search?q=' + _0x4ea248 
      )
      if (!_0x141e7a || !_0x141e7a.data.all || _0x141e7a.data.all.length === 0) {
        return (
          await _0x3c4d2a.sendMessage(_0x18fe40, {
            react: {
              text: '\u274C',
              key: _0x5ba3d1.key,
            },
          }),
          await _0x3c4d2a.sendMessage(
            _0x18fe40,
            { text: '*No results found \u274C*' },
            { quoted: _0x5ba3d1 }
          )
        )
      }
      var _0x102193 = []
      for (var _0x4cb9e3 = 0; _0x4cb9e3 < _0x141e7a.data.all.length; _0x4cb9e3++) {
        _0x102193.push({
          title: _0x141e7a.data.all[_0x4cb9e3].title,
          description: '',
          rowId: _0x2fb128 + 'foxdl ' + _0x141e7a.data.all[_0x4cb9e3].link,
        })
      }
      const _0xc369 = [
          {
            title: '[foxflickz.com results]',
            rows: _0x102193,
          },
        ],
        _0x5f0a95 = {
          text:
            '_*\uD83C\uDFACFOXFLICKZ MOVIE SEARCH RESULTS \uD83C\uDFAC*_\n\n*Movie Search : ' +
            _0x4ea248 +
            ' \uD83D\uDD0E*',
          footer: config.FOOTER,
          title: 'Search Results \uD83C\uDFAC',
          buttonText: '*Reply Below Number \uD83D\uDD22*',
          sections: _0xc369,
        }
      await _0x3c4d2a.listMessage(_0x18fe40, _0x5f0a95, _0x5ba3d1)
    } catch (_0x2c3eec) {
      console.log(_0x2c3eec)
      await _0x3c4d2a.sendMessage(
        _0x18fe40,
        { text: '\uD83D\uDEA9 *Error occurred!!*' },
        { quoted: _0x5ba3d1 }
      )
    }
  }
)
cmd(
  {
    pattern: 'foxdl',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x407c64,
    _0x19e839,
    _0x23a6bb,
    {
      from: _0x143ba1,
      q: _0x11485c,
      isMe: _0x2fa8bb,
      prefix: _0x307246,
      reply: _0x806f15,
    }
  ) => {
    try {
      if (!_0x11485c) {
        return await _0x806f15('*please give me text !..*')
      }
      let hukanna = await fetchJson(
          'https://darkyasiya-new-movie-api.vercel.app/api/movie/foxflickz/movie?url=' + _0x11485c 
        ),
        _0xad7e09 =
          '*\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ \u27AE*  _' +
          (hukanna.data.title || 'N/A') +
          '_\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE*  _' +
          (hukanna.data.dateCreate || 'N/A') +
          '_\n*\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ \u27AE* _' +
        (hukanna.data.imdb.value || 'N/A') +
        '_\n*\uD83C\uDFAD \uD835\uDDDAᴇɴᴀʀᴇꜱ \u27AE* _' +
          (hukanna.data.category || 'N/A') +
        '_\n*🌍𝗖ᴏᴜɴᴛʀʏ \u27AE* _' +
          (hukanna.data.country || 'N/A') +
          '_'
      if (hukanna.data.downloadUrl.length < 1) {
        return await _0x407c64.sendMessage(
          _0x143ba1,
          { text: 'error !' },
          { quoted: _0x23a6bb }
        )
      }
      var _0x5f49ed = []
      _0x5f49ed.push({
        buttonId: _0x307246 + 'foxdet ' + _0x11485c,
        buttonText: { displayText: 'Details send' },
        type: 1,
      })
      hukanna.data.downloadUrl.map((utta) => {
        _0x5f49ed.push({
          buttonId:
            _0x307246 +
            ('foxdll ' +
              utta.link +
            hukanna.data.title),
          buttonText: { displayText: '' + utta.quality },
          type: 1,
        })
      })
      const _0xea21b7 = {
        image: { url: hukanna.data.mainImage},
        caption: _0xad7e09,
        footer: config.FOOTER,
        buttons: _0x5f49ed,
        headerType: 4,
      }
      return await _0x407c64.buttonMessage(_0x143ba1, _0xea21b7, _0x23a6bb)
    } catch (_0x19dacf) {
      console.log(_0x19dacf)
      await _0x407c64.sendMessage(
        _0x143ba1,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x23a6bb }
      )
    }
  }
)
async function resizeImage(_0x13f5d6, _0x5b7bd4, _0x43def1) {
  try {
    return await sharp(_0x13f5d6).resize(_0x5b7bd4, _0x43def1).toBuffer()
  } catch (_0x4c0996) {
    return console.error('Error resizing image:', _0x4c0996), _0x13f5d6
  }
}
let isUploadingg = false; // Track upload status





cmd({
    pattern: "foxdll",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isMe, reply }) => {
    
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }

    if (isUploadingg) {
        return await conn.sendMessage(from, { 
            text: '*A movie is already being uploaded. Please wait a while before uploading another one.* ⏳', 
            quoted: mek 
        });
    }

    let attempts = 0;
    const maxRetries = 2;
    isUploadingg = true; // Set upload in progress

    while (attempts < maxRetries) {
        try {
            const datae = q.split("±")[0];
            const dat = q.split("±")[1];
            
            
            if (!datae) {
                throw new Error('No direct download link found. Try again...');
            }
            console.log(datae)
            const mediaUrl = datae;
            
            await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });
            const up_mg = await conn.sendMessage(from, { text: '*Uploading your movie..⬆️*' });
            
            await conn.sendMessage(config.JID || from, { 
                document: { url: mediaUrl },
                caption: `${dat}\n\n${config.FOOTER}`,
                mimetype: "video/mp4",
                fileName: `${dat}.mp4`
            });
            
            await conn.sendMessage(from, { delete: up_mg.key });
            await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
            
            break; // Exit loop on success
        } catch (error) {
            attempts++;
            console.error(`Attempt ${attempts}: Error fetching or sending:`, error);
        }
    }
    
    if (attempts >= maxRetries) {
        await conn.sendMessage(from, { text: "*Error fetching this moment. Please try again later ❗*" }, { quoted: mek });
    }
    
    isUploadingg = false; // Reset upload status
});

cmd(
  {
    pattern: 'foxdet',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x1875c6,
    _0x63b81d,
    _0x102c8d,
    { from: _0x5e2ca4, q: _0x3c3a9e, isMe: _0x4a995d, reply: _0x1e2b99 }
  ) => {
    try {
      if (!_0x3c3a9e) {
        return await _0x1e2b99('*please give me text !..*')
      }
      let _0x2f20f2 = await fetchJson(
        'https://darkyasiya-new-movie-api.vercel.app/api/movie/foxflickz/movie?url=' + _0x3c3a9e 
      )
      const _0x430178 = (
        await axios.get(
          'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json'
        )
      ).data
      let _0x341eab =
        '*\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ \u27AE*  _' +
          (_0x2f20f2.data.title || 'N/A') +
          '_\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE*  _' +
          (_0x2f20f2.data.dateCreate || 'N/A') +
          '_\n*\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ \u27AE* _' +
        (_0x2f20f2.data.imdb.value || 'N/A') +
        '_\n*\uD83C\uDFAD \uD835\uDDDAᴇɴᴀʀᴇꜱ \u27AE* _' +
          (_0x2f20f2.data.category || 'N/A') +
        '_\n*🌍𝗖ᴏᴜɴᴛʀʏ \u27AE* _' +
          (_0x2f20f2.data.country || 'N/A') +
          '_\n*🕵️‍♂️𝗗ɪʀᴇᴄᴛᴏʀ \u27AE* _' +
          (_0x2f20f2.data.director.name || 'N/A') +
        '_\n\n> \uD83C\uDF1F *Follow us :* \n*' +
        _0x430178.chlink +
        '*\n\n> _*\uD83C\uDFACNADEEN MD\uD83C\uDFAC*_\n'
      await _0x1875c6.sendMessage(config.JID, {
        image: { url: _0x2f20f2.data.mainImage },
        caption: _0x341eab,
      })
      await _0x1875c6.sendMessage(_0x5e2ca4, {
        react: {
          text: '\u2714️',
          key: _0x102c8d.key,
        },
      })
    } catch (_0x56c49e) {
      console.error('Error fetching or sending', _0x56c49e)
      await _0x1875c6.sendMessage(_0x5e2ca4, '*Error fetching or sending *', {
        quoted: _0x102c8d,
      })
    }
  }
)