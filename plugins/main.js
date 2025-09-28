const config = require('../config'),
  os = require('os'),
  axios = require('axios'),
  fs = require('fs'),
  path = require('path'),
  { cmd, commands } = require('../command'),
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
  } = require('../lib/functions')
const fkontak = {
    key: {
        remoteJid: "94711451319@s.whatsapp.net",
        participant: "0@s.whatsapp.net",
        fromMe: false,
        id: "Naze",
    },
    message: {
        contactMessage: {
            displayName: "©NADEEN-MD",
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;Meta AI;;;\nFN:Meta AI\nitem1.TEL;waid=94711451319:94711451319\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            sendEphemeral: false,
        },
    },
};
cmd(
  {
    pattern: 'botonline',
    react: '\uD83D\uDC81‍\u2642️',
    alias: ['online', 'nadeen-movie-botz', 'bot'],
    desc: 'Check bot online or no.',
    category: 'main',
    use: '.alive',
    filename: __filename,
  },
  async (
    _0x287ce7,
    _0x5afd97,
    _0x521e30,
    {
      from: _0x29e3d9,
      prefix: _0x514a7a,
      l: _0x57c28a,
      quoted: _0x53c9f9,
      body: _0x32eae2,
      isCmd: _0x367505,
      command: _0x34fdca,
      args: _0x1260e9,
      q: _0x5854e2,
      isGroup: _0x22dd5d,
      sender: _0x1690c6,
      senderNumber: _0x259d3a,
      botNumber2: _0x5699fb,
      botNumber: _0x40f349,
      pushname: _0xf1fdde,
      isMe: _0x11586b,
      isOwner: _0x7f6de8,
      groupMetadata: _0x352537,
      groupName: _0x5a6b98,
      participants: _0x251c33,
      groupAdmins: _0x593133,
      isBotAdmins: _0x26f32e,
      isAdmins: _0x515814,
      reply: _0x5ee786,
    }
  ) => {
    try {
      if (os.hostname().length == 12) {
        hostname = 'replit'
      } else {
        if (os.hostname().length == 36) {
          hostname = 'heroku'
        } else {
          if (os.hostname().length == 8) {
            hostname = 'koyeb'
          } else {
            hostname = os.hostname()
          }
        }
      }
      if (config.ALIVE === 'default') {
        const _0x5a9bc8 = [
            {
              buttonId: _0x514a7a + 'menu',
              buttonText: { displayText: 'COMMAND MENU' },
              type: 1,
            },
            {
              buttonId: _0x514a7a + 'ping',
              buttonText: { displayText: 'BOT SPEED' },
              type: 1,
            },
          ],
          _0x30e466 = (
            await axios.get(
              'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json'
            )
          ).data,
          _0x1ce920 = {
            image: { url: config.LOGO },
            caption:
              'Hellow , I am alive now \uD83D\uDCAD\n\n_\uD83C\uDFEE Dear, ' +
              _0xf1fdde +
              '. You can using this whatsapp user bot for download films, tv shows , anime, cattoons._\n\n> \u2B50Our chanal : ' +
              _0x30e466.chlink +
              '\n\n> \uD83C\uDF1F Repo name : ' +
              _0x30e466.reponame,
            footer: config.FOOTER,
            buttons: _0x5a9bc8,
            headerType: 4,
          }
        return await _0x287ce7.buttonMessage2(_0x29e3d9, _0x1ce920)
      } else {
        const _0x34b940 = [
            {
              buttonId: _0x514a7a + 'menu',
              buttonText: {
                displayText:
                  '\uD835\uDE0A\uD835\uDE16\uD835\uDE14\uD835\uDE14\uD835\uDE08\uD835\uDE15\uD835\uDE0B \uD835\uDE14\uD835\uDE0C\uD835\uDE15\uD835\uDE1C',
              },
              type: 1,
            },
            {
              buttonId: _0x514a7a + 'ping',
              buttonText: {
                displayText:
                  '\uD835\uDE09\uD835\uDE16\uD835\uDE1B \uD835\uDE1A\uD835\uDE17\uD835\uDE0C\uD835\uDE0C\uD835\uDE0B',
              },
              type: 1,
            },
          ],
          _0x5cbd95 = {
            image: { url: config.LOGO },
            caption: config.ALIVE,
            footer: config.FOOTER,
            buttons: _0x34b940,
            headerType: 4,
          }
        return await _0x287ce7.buttonMessage2(_0x29e3d9, _0x5cbd95, _0x5afd97)
      }
    } catch (_0xc142a1) {
      _0x5ee786('*Error !!*')
      _0x57c28a(_0xc142a1)
    }
  }
)
const mime = require('mime-types')


cmd(
  {
    pattern: 'send',
    alias: ['forward2'],
    desc: 'send msgs',
    category: 'owner',
    use: '.send < Jid address >',
    filename: __filename,
  },
  async (
    _0x2498df,
    _0x21b0a3,
    _0x1f0d88,
    {
      from: _0x5cc45,
      l: _0x19c0c3,
      quoted: _0x390317,
      body: _0xe35e61,
      isCmd: _0x30b5e6,
      command: _0x2ccaaf,
      args: _0x3095ee,
      q: _0x5c6feb,
      isGroup: _0x58266d,
      sender: _0x138c74,
      senderNumber: _0x588835,
      botNumber2: _0x1237f5,
      botNumber: _0x40a3c4,
      pushname: _0x1b79cd,
      isMe: _0x11e81d,
      isOwner: _0x31d1f9,
      groupMetadata: _0x19453e,
      groupName: _0x30d7f3,
      participants: _0x22383b,
      groupAdmins: _0x2b42d2,
      isBotAdmins: _0x2ebdfb,
      isAdmins: _0x101fa1,
      reply: _0x55265b,
    }
  ) => {
    try {
      if (!_0x11e81d && !_0x31d1f9 && !isSudo) {
        return await _0x55265b('*\uD83D\uDCDBOWNER COMMAND*')
      }
      if (!_0x5c6feb || !_0x1f0d88.quoted) {
        return _0x55265b(
          '*Please give me a Jid and Quote a Message to continue.*'
        )
      }
      if (!_0x5c6feb || !_0x1f0d88.quoted) {
        return await _0x55265b(
          '\u274C *Please give me a jid and quote a message you want*\n\n*Use the ' +
            envData.PREFIX +
            'jid command to get the Jid*'
        )
      }
      let _0xdc9a3e = _0x5c6feb.split(',').map((_0x24b800) => _0x24b800.trim())
      if (_0x1f0d88.quoted && _0x1f0d88.quoted.type === 'stickerMessage') {
        let _0x518f8a = await _0x1f0d88.quoted.download(),
          _0x367b45 = new Sticker(_0x518f8a, {
            pack: '\u2981 NADEEN-MD\u2981',
            author: '\u2981 NADEEN-MD \u2981',
            type: StickerTypes.FULL,
            categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
            id: '12345',
            quality: 75,
            background: 'transparent',
          })
        const _0x29d9aa = await _0x367b45.toBuffer(),
          _0x41b49a = []
        for (let _0x306235 of _0xdc9a3e) {
          try {
            _0x2498df.sendMessage(_0x306235, { sticker: _0x29d9aa })
            _0x41b49a.push(_0x306235)
          } catch (_0x251d0d) {
            console.log(
              '\u274C Failed to forward to ' + _0x306235 + ':',
              _0x251d0d
            )
          }
        }
        _0x55265b(
          '*This ' +
            _0x1f0d88.quoted.type +
            ' has been successfully sent to the jid address ' +
            '`' +
            _0x5c6feb +
            '`' +
            '.*  \u2705'
        )
        _0x1f0d88.react('\u2714️')
      } else {
        if (_0x1f0d88.quoted && _0x1f0d88.quoted.type === 'imageMessage') {
          if (
            _0x1f0d88.quoted.imageMessage &&
            _0x1f0d88.quoted.imageMessage.caption
          ) {
            const _0x590540 = _0x1f0d88.quoted.imageMessage.caption
            let _0x838c04 = await _0x1f0d88.quoted.download()
            const _0x4cc0d4 = []
            for (let _0x1e5fc9 of _0xdc9a3e) {
              try {
                _0x2498df.sendMessage(_0x1e5fc9, {
                  image: _0x838c04,
                  caption: _0x590540,
                })
                _0x4cc0d4.push(_0x1e5fc9)
              } catch (_0x5b03a8) {
                console.log(
                  '\u274C Failed to forward to ' + _0x1e5fc9 + ':',
                  _0x5b03a8
                )
              }
            }
            _0x55265b(
              '*This `' +
                _0x1f0d88.quoted.type +
                ' has been successfully sent to the jid address   \u2705'
            )
            _0x1f0d88.react('\u2714️')
          } else {
            let _0x246ba1 = await _0x1f0d88.quoted.download()
            const _0x2f54f0 = []
            for (let _0x49124a of _0xdc9a3e) {
              try {
                _0x2498df.sendMessage(_0x49124a, { image: _0x246ba1 })
                _0x2f54f0.push(_0x49124a)
              } catch (_0x534a2c) {
                console.log(
                  '\u274C Failed to forward to ' + _0x49124a + ':',
                  _0x534a2c
                )
              }
            }
            _0x55265b(
              '*This `' +
                _0x1f0d88.quoted.type +
                ' has been successfully sent to the jid address   \u2705'
            )
            _0x1f0d88.react('\u2714️')
          }
        } else {
          if (_0x1f0d88.quoted && _0x1f0d88.quoted.type === 'videoMessage') {
            let _0x2e2965 = _0x1f0d88.quoted.videoMessage.fileLength
            const _0x23e4a4 = _0x2e2965 / 1048576
            if (_0x23e4a4 >= 50) {
              _0x55265b(
                '*\u274C Video files larger than 50 MB cannot be send.*'
              )
            } else {
              let _0x55151f = await _0x1f0d88.quoted.download()
              const _0x59b498 = _0x5c6feb || _0x5cc45
              if (_0x1f0d88.quoted.videoMessage.caption) {
                _0x2498df.sendMessage(_0x59b498, {
                  video: _0x55151f,
                  mimetype: 'video/mp4',
                  caption: _0x1f0d88.quoted.videoMessage.caption,
                })
                _0x55265b(
                  '*This `' +
                    _0x1f0d88.quoted.type +
                    '`' +
                    ' has been successfully sent to the jid address ' +
                    '`' +
                    _0x5c6feb +
                    '`' +
                    '.*  \u2705'
                )
                _0x1f0d88.react('\u2714️')
              } else {
                const _0x2fdb53 = _0x5c6feb || _0x5cc45
                _0x2498df.sendMessage(_0x2fdb53, {
                  video: _0x55151f,
                  mimetype: 'video/mp4',
                })
                _0x55265b(
                  '*This `' +
                    _0x1f0d88.quoted.type +
                    '`' +
                    ' has been successfully sent to the jid address ' +
                    '`' +
                    _0x5c6feb +
                    '`' +
                    '.*  \u2705'
                )
                _0x1f0d88.react('\u2714️')
              }
            }
          } else {
            if (
              (_0x1f0d88.quoted &&
                _0x1f0d88.quoted.type === 'documentMessage') ||
              _0x1f0d88.quoted.type === 'documentWithCaptionMessage'
            ) {
              const _0x371841 = _0x5c6feb || _0x5cc45
              if (
                _0x1f0d88 &&
                _0x1f0d88.quoted &&
                _0x1f0d88.quoted.documentMessage
              ) {
                let _0x36abdf = _0x1f0d88.quoted.documentMessage.fileLength
                const _0x3ac80d = _0x36abdf / 1048576
                if (_0x3ac80d >= 50) {
                  _0x55265b(
                    '*\u274C Document files larger than 50 MB cannot be send.*'
                  )
                } else {
                  let _0x3c7b4b = _0x1f0d88.quoted.documentMessage.mimetype,
                    _0x868277 = _0x1f0d88.quoted.documentMessage.fileName,
                    _0x26f609 = await _0x1f0d88.quoted.download()
                  _0x2498df.sendMessage(_0x371841, {
                    document: _0x26f609,
                    mimetype: _0x3c7b4b,
                    fileName: _0x868277,
                  })
                  _0x55265b(
                    '*This `' +
                      _0x1f0d88.quoted.type +
                      '`' +
                      ' has been successfully sent to the jid address ' +
                      '`' +
                      _0x5c6feb +
                      '`' +
                      '.*  \u2705'
                  )
                  _0x1f0d88.react('\u2714️')
                }
              } else {
                if (_0x1f0d88.quoted.type === 'documentWithCaptionMessage') {
                  let _0x48c76f =
                    _0x1f0d88.quoted.documentWithCaptionMessage.message
                      .documentMessage.fileLength
                  const _0x10edcb = _0x48c76f / 1048576
                  if (_0x10edcb >= 50) {
                    _0x55265b(
                      '*\u274C Document files larger than 50 MB cannot be send.*'
                    )
                  } else {
                    let _0x3b14a6 = await _0x1f0d88.quoted.download(),
                      _0x181629 =
                        _0x1f0d88.quoted.documentWithCaptionMessage.message
                          .documentMessage.mimetype,
                      _0x596971 =
                        _0x1f0d88.quoted.documentWithCaptionMessage.message
                          .documentMessage.fileName
                    const _0x31b713 = _0x5c6feb || _0x5cc45
                    let _0x1fe179 =
                      _0x1f0d88.quoted.documentWithCaptionMessage.message
                        .documentMessage.caption
                    _0x2498df.sendMessage(_0x31b713, {
                      document: _0x3b14a6,
                      mimetype: _0x181629,
                      caption: _0x1fe179,
                      fileName: _0x596971,
                    })
                    _0x55265b(
                      '*This `' +
                        _0x1f0d88.quoted.type +
                        '`' +
                        ' has been successfully sent to the jid address ' +
                        '`' +
                        _0x5c6feb +
                        '`' +
                        '.*  \u2705'
                    )
                    _0x1f0d88.react('\u2714️')
                  }
                }
              }
            } else {
              if (
                _0x1f0d88.quoted &&
                _0x1f0d88.quoted.type === 'audioMessage'
              ) {
                let _0x677bbe = _0x1f0d88.quoted.audioMessage.fileLength
                const _0x18b2aa = _0x677bbe / 1048576
                if (_0x18b2aa >= 50) {
                  _0x55265b(
                    '*\u274C Audio files larger than 50 MB cannot be send.*'
                  )
                } else {
                  let _0x1a3c40 = await _0x1f0d88.quoted.download()
                  const _0x5b6def = _0x5c6feb || _0x5cc45
                  if (_0x1f0d88.quoted.audioMessage.ptt === true) {
                    _0x2498df.sendMessage(_0x5b6def, {
                      audio: _0x1a3c40,
                      mimetype: 'audio/mpeg',
                      ptt: true,
                      fileName: _0x1f0d88.id + '.mp3',
                    })
                    _0x55265b(
                      '*This `' +
                        _0x1f0d88.quoted.type +
                        '`' +
                        ' has been successfully sent to the jid address ' +
                        '`' +
                        _0x5c6feb +
                        '`' +
                        '.*  \u2705'
                    )
                    _0x1f0d88.react('\u2714️')
                  } else {
                    const _0x5e668c = _0x5c6feb || _0x5cc45
                    _0x2498df.sendMessage(_0x5e668c, {
                      audio: _0x1a3c40,
                      mimetype: 'audio/mpeg',
                      fileName: _0x1f0d88.id + '.mp3',
                    })
                    _0x55265b(
                      '*This `' +
                        _0x1f0d88.quoted.type +
                        '`' +
                        ' has been successfully sent to the jid address ' +
                        '`' +
                        _0x5c6feb +
                        '`' +
                        '.*  \u2705'
                    )
                    _0x1f0d88.react('\u2714️')
                  }
                }
              } else {
                if (
                  _0x1f0d88.quoted &&
                  _0x1f0d88.quoted.type === 'viewOnceMessageV2Extension'
                ) {
                  let _0x41938e = _0x1f0d88
                  const _0x3acb63 = {
                      key: {
                        remoteJid: _0x21b0a3.key.remoteJid,
                        fromMe: false,
                        id: _0x41938e.key.id,
                      },
                      messageTimestamp: _0x41938e.messageTimestamp,
                      pushName: _0x41938e.pushName,
                      broadcast: _0x41938e.broadcast,
                      status: 2,
                      message: {
                        audioMessage: {
                          url: _0x21b0a3.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2Extension.message
                            .audioMessage.url,
                          mimetype:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2Extension.message
                              .audioMessage.mimetype,
                          fileSha256:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2Extension.message
                              .audioMessage.fileSha256,
                          fileLength:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2Extension.message
                              .audioMessage.fleLength,
                          seconds:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2Extension.message
                              .audioMessage.seconds,
                          ptt: _0x21b0a3.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2Extension.message
                            .audioMessage.ptt,
                          mediaKey:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2Extension.message
                              .audioMessage.mediaKey,
                          fileEncSha256:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2Extension.message
                              .audioMessage.fileEncSha256,
                          directPath:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2Extension.message
                              .audioMessage.directPath,
                          mediaKeyTimestamp:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2Extension.message
                              .audioMessage.mediaKeyTimestamp,
                          waveform:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2Extension.message
                              .audioMessage.waveform,
                        },
                      },
                      id: _0x41938e.id,
                      chat: _0x41938e.chat,
                      fromMe: _0x41938e.fromMe,
                      isGroup: _0x41938e.isGroup,
                      sender: _0x41938e.sender,
                      type: 'audioMessage',
                      msg: {
                        url: _0x21b0a3.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2Extension.message
                          .audioMessage.url,
                        mimetype:
                          _0x21b0a3.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2Extension.message
                            .audioMessage.mimetype,
                        fileSha256:
                          _0x21b0a3.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2Extension.message
                            .audioMessage.fileSha256,
                        fileLength:
                          _0x21b0a3.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2Extension.message
                            .audioMessage.fleLength,
                        seconds:
                          _0x21b0a3.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2Extension.message
                            .audioMessage.seconds,
                        ptt: _0x21b0a3.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2Extension.message
                          .audioMessage.ptt,
                        mediaKey:
                          _0x21b0a3.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2Extension.message
                            .audioMessage.mediaKey,
                        fileEncSha256:
                          _0x21b0a3.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2Extension.message
                            .audioMessage.fileEncSha256,
                        directPath:
                          _0x21b0a3.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2Extension.message
                            .audioMessage.directPath,
                        mediaKeyTimestamp:
                          _0x21b0a3.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2Extension.message
                            .audioMessage.mediaKeyTimestamp,
                        waveform:
                          _0x21b0a3.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2Extension.message
                            .audioMessage.waveform,
                      },
                    },
                    _0x1a7655 = sms(_0x2498df, _0x3acb63)
                  var _0x5082ad = getRandom('')
                  let _0x144cdb = await _0x1a7655.download(_0x5082ad),
                    _0x590f0e = require('file-type'),
                    _0x2ff529 = _0x590f0e.fromBuffer(_0x144cdb)
                  await fs.promises.writeFile('./' + _0x2ff529.ext, _0x144cdb)
                  await sleep(1000)
                  let _0x16480a =
                    _0x3acb63.message.audioMessage.caption ||
                    '*㋛ 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 〽️𝙳*'
                  const _0x16a479 = _0x5c6feb || _0x5cc45
                  _0x2498df.sendMessage(_0x16a479, {
                    audio: { url: './' + _0x2ff529.ext },
                    mimetype: 'audio/mpeg',
                    ptt: true,
                    viewOnce: true,
                    fileName: _0x1f0d88.id + '.mp3',
                  })
                  _0x55265b(
                    '*This `' +
                      _0x1f0d88.quoted.type +
                      '`' +
                      ' has been successfully sent to the jid address ' +
                      '`' +
                      _0x5c6feb +
                      '`' +
                      '.*  \u2705'
                  )
                  _0x1f0d88.react('\u2714️')
                } else {
                  if (
                    _0x1f0d88.quoted &&
                    _0x1f0d88.quoted.viewOnceMessageV2 &&
                    _0x1f0d88.quoted.viewOnceMessageV2.message.videoMessage
                  ) {
                    let _0x56828c = _0x1f0d88
                    const _0x48a685 = {
                        key: {
                          remoteJid: _0x21b0a3.key.remoteJid,
                          fromMe: false,
                          id: _0x56828c.key.id,
                        },
                        messageTimestamp: _0x56828c.messageTimestamp,
                        pushName: _0x56828c.pushName,
                        broadcast: _0x56828c.broadcast,
                        status: 2,
                        message: {
                          videoMessage: {
                            url: _0x21b0a3.message.extendedTextMessage
                              .contextInfo.quotedMessage.viewOnceMessageV2
                              .message.videoMessage.url,
                            mimetype:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .videoMessage.mimetype,
                            caption:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .videoMessage.caption,
                            fileSha256:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .videoMessage.fileSha256,
                            fileLength:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .videoMessage.fleLength,
                            seconds:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .videoMessage.seconds,
                            mediaKey:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .videoMessage.mediaKey,
                            height:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .videoMessage.height,
                            width:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .videoMessage.width,
                            fileEncSha256:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .videoMessage.fileEncSha256,
                            directPath:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .videoMessage.directPath,
                            mediaKeyTimestamp:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .videoMessage.mediaKeyTimestamp,
                            jpegThumbnail:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .videoMessage.jpegThumbnail,
                          },
                        },
                        id: _0x56828c.id,
                        chat: _0x56828c.chat,
                        fromMe: _0x56828c.fromMe,
                        isGroup: _0x56828c.isGroup,
                        sender: _0x56828c.sender,
                        type: 'videoMessage',
                        msg: {
                          url: _0x21b0a3.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .videoMessage.url,
                          mimetype:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2.message
                              .videoMessage.mimetype,
                          caption:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2.message
                              .videoMessage.caption,
                          fileSha256:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2.message
                              .videoMessage.fileSha256,
                          fileLength:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2.message
                              .videoMessage.fleLength,
                          seconds:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2.message
                              .videoMessage.seconds,
                          mediaKey:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2.message
                              .videoMessage.mediaKey,
                          height:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2.message
                              .videoMessage.height,
                          width:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2.message
                              .videoMessage.width,
                          fileEncSha256:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2.message
                              .videoMessage.fileEncSha256,
                          directPath:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2.message
                              .videoMessage.directPath,
                          mediaKeyTimestamp:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2.message
                              .videoMessage.mediaKeyTimestamp,
                          jpegThumbnail:
                            _0x21b0a3.message.extendedTextMessage.contextInfo
                              .quotedMessage.viewOnceMessageV2.message
                              .videoMessage.jpegThumbnail,
                        },
                        body: _0x21b0a3.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .caption,
                      },
                      _0x596327 = sms(_0x2498df, _0x48a685)
                    var _0x5082ad = getRandom('')
                    let _0x11ecc0 = await _0x596327.download(_0x5082ad),
                      _0x4f1d9f = require('file-type'),
                      _0x52fcd6 = _0x4f1d9f.fromBuffer(_0x11ecc0)
                    await fs.promises.writeFile('./' + _0x52fcd6.ext, _0x11ecc0)
                    await sleep(1000)
                    let _0x146613 =
                      _0x48a685.message.videoMessage.caption ||
                      '*㋛ 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 〽️𝙳*'
                    const _0x3593a5 = _0x5c6feb || _0x5cc45
                    _0x2498df.sendMessage(_0x3593a5, {
                      video: { url: './' + _0x52fcd6.ext },
                      caption: _0x146613,
                      viewOnce: true,
                    })
                    _0x55265b(
                      '*This `' +
                        _0x1f0d88.quoted.type +
                        '`' +
                        ' has been successfully sent to the jid address ' +
                        '`' +
                        _0x5c6feb +
                        '`' +
                        '.*  \u2705'
                    )
                    _0x1f0d88.react('\u2714️')
                  } else {
                    if (
                      _0x1f0d88.quoted &&
                      _0x1f0d88.quoted.viewOnceMessageV2 &&
                      _0x1f0d88.quoted.viewOnceMessageV2.message.imageMessage
                    ) {
                      let _0x1f4ebb = _0x1f0d88
                      const _0x54941d = {
                          key: {
                            remoteJid: _0x21b0a3.key.remoteJid,
                            fromMe: false,
                            id: _0x1f4ebb.key.id,
                          },
                          messageTimestamp: _0x1f4ebb.messageTimestamp,
                          pushName: _0x1f4ebb.pushName,
                          broadcast: _0x1f4ebb.broadcast,
                          status: 2,
                          message: {
                            imageMessage: {
                              url: _0x21b0a3.message.extendedTextMessage
                                .contextInfo.quotedMessage.viewOnceMessageV2
                                .message.imageMessage.url,
                              mimetype:
                                _0x21b0a3.message.extendedTextMessage
                                  .contextInfo.quotedMessage.viewOnceMessageV2
                                  .message.imageMessage.mimetype,
                              caption:
                                _0x21b0a3.message.extendedTextMessage
                                  .contextInfo.quotedMessage.viewOnceMessageV2
                                  .message.imageMessage.caption,
                              fileSha256:
                                _0x21b0a3.message.extendedTextMessage
                                  .contextInfo.quotedMessage.viewOnceMessageV2
                                  .message.imageMessage.fileSha256,
                              fileLength:
                                _0x21b0a3.message.extendedTextMessage
                                  .contextInfo.quotedMessage.viewOnceMessageV2
                                  .message.imageMessage.fleLength,
                              height:
                                _0x21b0a3.message.extendedTextMessage
                                  .contextInfo.quotedMessage.viewOnceMessageV2
                                  .message.imageMessage.height,
                              width:
                                _0x21b0a3.message.extendedTextMessage
                                  .contextInfo.quotedMessage.viewOnceMessageV2
                                  .message.imageMessage.width,
                              mediaKey:
                                _0x21b0a3.message.extendedTextMessage
                                  .contextInfo.quotedMessage.viewOnceMessageV2
                                  .message.imageMessage.mediaKey,
                              fileEncSha256:
                                _0x21b0a3.message.extendedTextMessage
                                  .contextInfo.quotedMessage.viewOnceMessageV2
                                  .message.imageMessage.fileEncSha256,
                              directPath:
                                _0x21b0a3.message.extendedTextMessage
                                  .contextInfo.quotedMessage.viewOnceMessageV2
                                  .message.imageMessage.directPath,
                              mediaKeyTimestamp:
                                _0x21b0a3.message.extendedTextMessage
                                  .contextInfo.quotedMessage.viewOnceMessageV2
                                  .message.imageMessage.mediaKeyTimestamp,
                              jpegThumbnail:
                                _0x21b0a3.message.extendedTextMessage
                                  .contextInfo.quotedMessage.viewOnceMessageV2
                                  .message.imageMessage.jpegThumbnail,
                            },
                          },
                          id: _0x1f4ebb.id,
                          chat: _0x1f4ebb.chat,
                          fromMe: _0x1f4ebb.fromMe,
                          isGroup: _0x1f4ebb.isGroup,
                          sender: _0x1f4ebb.sender,
                          type: 'imageMessage',
                          msg: {
                            url: _0x21b0a3.message.extendedTextMessage
                              .contextInfo.quotedMessage.viewOnceMessageV2
                              .message.imageMessage.url,
                            mimetype:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .imageMessage.mimetype,
                            caption:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .imageMessage.caption,
                            fileSha256:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .imageMessage.fileSha256,
                            fileLength:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .imageMessage.fleLength,
                            height:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .imageMessage.height,
                            width:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .imageMessage.width,
                            mediaKey:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .imageMessage.mediaKey,
                            fileEncSha256:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .imageMessage.fileEncSha256,
                            directPath:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .imageMessage.directPath,
                            mediaKeyTimestamp:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .imageMessage.mediaKeyTimestamp,
                            jpegThumbnail:
                              _0x21b0a3.message.extendedTextMessage.contextInfo
                                .quotedMessage.viewOnceMessageV2.message
                                .imageMessage.jpegThumbnail,
                          },
                          body: _0x21b0a3.message.extendedTextMessage
                            .contextInfo.quotedMessage.viewOnceMessageV2.message
                            .imageMessage.caption,
                        },
                        _0xdfa5d9 = sms(_0x2498df, _0x54941d)
                      var _0x5082ad = getRandom('')
                      let _0x380d39 = await _0xdfa5d9.download(_0x5082ad),
                        _0x2dda14 = require('file-type'),
                        _0x32ae84 = _0x2dda14.fromBuffer(_0x380d39)
                      await fs.promises.writeFile(
                        './' + _0x32ae84.ext,
                        _0x380d39
                      )
                      await sleep(1000)
                      let _0x4cbca =
                        _0x54941d.message.imageMessage.caption ||
                        '\u2981 ᴘʀᴀʙᴀᴛʜ-ᴍᴅ \u2981'
                      const _0x89389f = _0x5c6feb || _0x5cc45
                      _0x2498df.sendMessage(_0x89389f, {
                        image: { url: './' + _0x32ae84.ext },
                        caption: _0x4cbca,
                        viewOnce: true,
                      })
                      _0x55265b(
                        '*This `' +
                          _0x1f0d88.quoted.type +
                          '`' +
                          ' has been successfully sent to the jid address ' +
                          '`' +
                          _0x5c6feb +
                          '`' +
                          '.*  \u2705'
                      )
                      _0x1f0d88.react('\u2714️')
                    } else {
                      if (
                        _0x5c6feb ||
                        (_0x1f0d88.quoted &&
                          _0x1f0d88.quoted.type === 'conversation')
                      ) {
                        const _0x55ec4e = _0x5c6feb || _0x5cc45
                        _0x2498df.sendMessage(_0x55ec4e, {
                          text: _0x1f0d88.quoted.msg,
                        })
                        _0x55265b(
                          '*This `' +
                            _0x1f0d88.quoted.type +
                            '`' +
                            ' has been successfully sent to the jid address ' +
                            '`' +
                            _0x5c6feb +
                            '`' +
                            '.*  \u2705'
                        )
                        _0x1f0d88.react('\u2714️')
                      } else {
                        const _0xaf5f64 = await _0x2498df.sendMessage(
                          _0x5cc45,
                          {
                            text:
                              '\u274C *Please Give me message!*\n\n' +
                              envData.PREFIX +
                              'send <Jid>',
                          },
                          { quoted: fkontak }
                        )
                        return await _0x2498df.sendMessage(_0x5cc45, {
                          react: {
                            text: '\u2753',
                            key: _0xaf5f64.key,
                          },
                        })
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } catch (_0x4da8a9) {
      return console.log(_0x4da8a9), _0x55265b('error!!')
    }
  }
)
cmd(
  {
    pattern: 'ping',
    alias: ['speed'],
    desc: "Check bot's ping",
    category: 'main',
    use: '.ping',
    filename: __filename,
  },
  async (
    _0x582d74,
    _0x3c1eed,
    _0x126cca,
    {
      from: _0x76e4c,
      l: _0x123c68,
      quoted: _0x1cd9b7,
      body: _0x24d49c,
      isCmd: _0x5bb7e8,
      command: _0x3dc209,
      args: _0x7a2fad,
      q: _0x34add5,
      isGroup: _0x213bd2,
      sender: _0x2864a8,
      senderNumber: _0x283fe9,
      botNumber2: _0x1ec895,
      botNumber: _0x46cc35,
      pushname: _0x5243fe,
      isMe: _0x1ef09b,
      isOwner: _0x1c97a6,
      groupMetadata: _0x3a7921,
      groupName: _0x5b472c,
      participants: _0x3dc9c2,
      groupAdmins: _0x53b355,
      isBotAdmins: _0x287a8a,
      isAdmins: _0x365b45,
      reply: _0x4cca16,
    }
  ) => {
    try {
      var _0x197d16 = new Date().getTime()
      let _0x2f5250 = await _0x582d74.sendMessage(
        _0x76e4c,
        { text: '*Testing...*' },
        { quoted: fkontak }
      )
      var _0x54b78d = new Date().getTime()
      await _0x582d74.edite(
        _0x2f5250,
        '*\uD83D\uDCCDPong* ' + (_0x54b78d - _0x197d16) + ' *ms* '
      )
      await _0x582d74.sendMessage(_0x76e4c, {
        react: {
          text: '\uD83D\uDCCD',
          key: _0x3c1eed.key,
        },
      })
    } catch (_0x28eaa5) {
      _0x4cca16('*Error !!*')
      _0x123c68(_0x28eaa5)
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
        fileName: _0x55dd05,
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
    pattern: 'nadeentest',
    alias: ['panel', 'list', 'commands'],
    desc: "Get bot's command list.",
    category: 'main',
    use: '.menu',
    filename: __filename,
  },
  async (
    _0x42d0e4,
    _0x2767ba,
    _0x167ef5,
    {
      from: _0x4e0d0b,
      prefix: _0x26a5cf,
      l: _0x1ab539,
      quoted: _0x5ae9fa,
      body: _0xf84eca,
      isCmd: _0x2325a6,
      command: _0x45a054,
      args: _0x26ea9e,
      q: _0x5a242c,
      isGroup: _0x3931d9,
      sender: _0x4955d0,
      senderNumber: _0x2b9e1e,
      botNumber2: _0x705169,
      botNumber: _0xc225f8,
      pushname: _0x5410d2,
      isMe: _0xba6441,
      isOwner: _0xc02578,
      groupMetadata: _0x278af1,
      groupName: _0x2e10d2,
      participants: _0x413d5d,
      groupAdmins: _0x2bb7bc,
      isBotAdmins: _0x56e92c,
      isAdmins: _0x1d5473,
      reply: _0x41bedc,
    }
  ) => {
    try {
      if (os.hostname().length == 12) {
        hostname = 'replit'
      } else {
        if (os.hostname().length == 36) {
          hostname = 'heroku'
        } else {
          if (os.hostname().length == 8) {
            hostname = 'koyeb'
          } else {
            hostname = os.hostname()
          }
        }
      }
      const _0x2f8bab =
          (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
          'MB / ' +
          Math.round(require('os').totalmem / 1024 / 1024) +
          'MB',
        _0x4df7c1 = await runtime(process.uptime())
      let _0x134fa1 = '```'
      const _0x653b63 = [
          {
            buttonId: _0x26a5cf + 'mainmenu',
            buttonText: { displayText: 'MAIN COMMANDS' },
            type: 1,
          },
          {
            buttonId: _0x26a5cf + 'groupmenu',
            buttonText: { displayText: 'GROUP COMMANDS' },
            type: 1,
          },
          {
            buttonId: _0x26a5cf + 'moviemenu',
            buttonText: { displayText: 'MOVIE COMMANDS' },
            type: 1,
          },
        ],
        _0x403f48 = (
          await axios.get(
            'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json'
          )
        ).data,
        _0x6fc2a7 = {
          image: { url: config.LOGO },
          caption:
            '  *`M O V I E   D L - X`*\n\n> *ᴜᴘᴛɪᴍᴇ :* ' +
            _0x4df7c1 +
            '\n> *ʀᴀᴍ ᴜꜱꜱᴀɢᴇ :* ' +
            _0x2f8bab +
            '\n> *ᴘʟᴀᴛꜰᴏʀᴍ :* ' +
            hostname +
            '\n> *ᴠᴇʀꜱɪᴏɴ :* 1.0.0\n\n*\uD83C\uDF7F A robot designed to download movies for you. Everything here is done under the rules and regulations of javascript.*\n\n> *\u2B50 Our chanal :* ' +
            _0x403f48.chlink +
            '\n\n> *\uD83D\uDCA8 Repo :* ' +
            _0x403f48.reponame,
          footer: config.FOOTER,
          buttons: _0x653b63,
          headerType: 4,
        }
      await _0x42d0e4.buttonMessage2(_0x4e0d0b, _0x6fc2a7, _0x2767ba)
      _0x167ef5.react('\uD83C\uDFAC')
    } catch (_0x1d8512) {
      _0x41bedc('*Error !!*')
      _0x1ab539(_0x1d8512)
    }
  }
)
cmd({
  pattern: "restart",
  react: "🔄",
  desc: "Restart the bot process",
  use: ".restart",
  category: "main",
  filename: __filename
},
async (conn, mek, m, { reply, isOwner, isSachintha, isSavi, isSadas, isMani, isMe }) => {
  if (!isOwner && !isSachintha && !isSavi && !isSadas && !isMani && !isMe) return;

  try {
    const { exec } = require("child_process");

    // Inform user about restart
    await reply(`♻️ *Bot is restarting...*  
🕐 *Please wait a few seconds for services to resume.*`);

    // Delay to allow the message to be seen
    setTimeout(() => {
      exec("pm2 restart all", (error, stdout, stderr) => {
        if (error) {
          console.error(error);
          reply("❌ *An error occurred while restarting the bot.*");
        }
      });
    }, 3000); // 3-second delay before actual restart

  } catch (e) {
    console.error(e);
    reply("🚨 *Unexpected error occurred during restart.*");
  }
});


cmd({
  pattern: "update",
  react: "ℹ️",
  desc: "Update your bot to the latest version",
  use: ".update",
  category: "main",
  filename: __filename
},
async (conn, mek, m, { reply, isOwner, isSachintha, isSavi, isSadas, isMani, isMe }) => {
  if (!isOwner && !isSachintha && !isSavi && !isSadas && !isMani && !isMe) return;

  try {
    const { exec } = require("child_process");

    // Let the user know an update has started
    await reply(`🔄 *Bot Update in Progress...*  
📦 *Fetching latest code & restarting services...*`);

    // Wait before executing to ensure user sees message
    setTimeout(() => {
      exec('pm2 restart all', (error, stdout, stderr) => {
        if (error) {
          console.error(error);
          reply('❌ *Update failed during restart!*');
        }
      });
    }, 3000); // 3-second delay before restart

  } catch (e) {
    console.error(e);
    reply('🚨 *An unexpected error occurred during update.*');
  }
});
cmd(
  {
    pattern: 'groupmenu',
    react: '\uD83D\uDCA7',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x1b6edd,
    _0xe61f4a,
    _0x4d4e3c,
    {
      from: _0x10940a,
      prefix: _0x56a309,
      l: _0x520825,
      quoted: _0x28ee41,
      body: _0x48afaa,
      isCmd: _0x2a2de8,
      command: _0x3aaff2,
      args: _0x3065c3,
      q: _0x358307,
      isGroup: _0x4cc554,
      sender: _0x2a8d44,
      senderNumber: _0x10e791,
      botNumber2: _0x7c63a8,
      botNumber: _0xed3802,
      pushname: _0x44f740,
      isMe: _0x133875,
      isOwner: _0x381e92,
      groupMetadata: _0x457c83,
      groupName: _0x1b74fe,
      participants: _0x2cf1b0,
      groupAdmins: _0x2cb8c5,
      isBotAdmins: _0x45d894,
      isAdmins: _0x5e56aa,
      reply: _0x3eec74,
    }
  ) => {
    try {
      let _0x48073c = ''
      for (let _0x546ab6 = 0; _0x546ab6 < commands.length; _0x546ab6++) {
        commands[_0x546ab6].category === 'group' &&
          !commands[_0x546ab6].dontAddCommandList &&
            (_0x48073c +=
              '*\u2502\u25BA* \uD83D\uDCA7  ' +
              commands[_0x546ab6].pattern +
              '\n')
      }
      let _0x2edaac = [
          {
            buttonId: _0x56a309 + 'sc',
            buttonText: { displayText: 'GET BOT SCRIPT' },
            type: 1,
          },
          {
            buttonId: _0x56a309 + 'ping',
            buttonText: { displayText: 'GET BOT PING' },
            type: 1,
          },
        ],
        _0x7051b5 = {
          image: { url: config.LOGO },
          caption:
            '*`\uD83D\uDCA7GROUP COMMANDS MENU \uD83D\uDCA7`*\n  \n  *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n' +
            _0x48073c +
            ' *\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*',
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x2edaac,
        }
      return await _0x1b6edd.buttonMessage(_0x10940a, _0x7051b5, _0xe61f4a)
    } catch (_0x2fa05b) {
      _0x3eec74('*ERROR !!*')
      _0x520825(_0x2fa05b)
    }
  }
)
cmd(
  {
    pattern: 'mainmenu',
    react: '\uD83E\uDEE7',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3e4768,
    _0x212c79,
    _0x33afe0,
    {
      from: _0x3e4e9a,
      prefix: _0x553e55,
      l: _0x3ddf24,
      quoted: _0x1023e3,
      body: _0x2b1993,
      isCmd: _0x1f41d9,
      command: _0x129bc3,
      args: _0x505980,
      q: _0x227e61,
      isGroup: _0x1f93a5,
      sender: _0x5ba896,
      senderNumber: _0x85f3d8,
      botNumber2: _0x14ef6a,
      botNumber: _0x3d551d,
      pushname: _0x3dc68e,
      isMe: _0x1f010b,
      isOwner: _0x2faac6,
      groupMetadata: _0x5b228f,
      groupName: _0x4ab084,
      participants: _0x2ff3d9,
      groupAdmins: _0x4f72b2,
      isBotAdmins: _0x456ee6,
      isAdmins: _0x30d667,
      reply: _0x1edea9,
    }
  ) => {
    try {
      let _0x48f572 = ''
      for (let _0x555ed4 = 0; _0x555ed4 < commands.length; _0x555ed4++) {
        commands[_0x555ed4].category === 'main' &&
          !commands[_0x555ed4].dontAddCommandList &&
            (_0x48f572 +=
              '*\u2502\u25BA* \uD83E\uDEE7  ' +
              commands[_0x555ed4].pattern +
              '\n')
      }
      let _0x1ff52f = [
          {
            buttonId: _0x553e55 + 'sc',
            buttonText: { displayText: 'GET BOT SCRIPT' },
            type: 1,
          },
          {
            buttonId: _0x553e55 + 'ping',
            buttonText: { displayText: 'GET BOT PING' },
            type: 1,
          },
        ],
        _0x36c6e5 = {
          image: { url: config.LOGO },
          caption:
            '*`\uD83E\uDEE7MAIN COMMANDS MENU \uD83E\uDEE7`*\n  \n  *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n' +
            _0x48f572 +
            ' *\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*',
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x1ff52f,
        }
      return await _0x3e4768.buttonMessage(_0x3e4e9a, _0x36c6e5, _0x212c79)
    } catch (_0x4cd20f) {
      _0x1edea9('*ERROR !!*')
      _0x3ddf24(_0x4cd20f)
    }
  }
)
cmd(
  {
    pattern: 'moviemenu',
    react: '\uD83C\uDF5F',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x3e1bc5,
    _0x3a8f10,
    _0x57b75a,
    {
      from: _0x159d68,
      prefix: _0x36f32a,
      l: _0x18a218,
      quoted: _0x453468,
      body: _0xe1e10d,
      isCmd: _0x4115b3,
      command: _0x339d05,
      args: _0x17c2d0,
      q: _0x545826,
      isGroup: _0x25a628,
      sender: _0x28751a,
      senderNumber: _0x12bbaa,
      botNumber2: _0x4e7a16,
      botNumber: _0x3d90c9,
      pushname: _0x3a0d30,
      isMe: _0x4c68b8,
      isOwner: _0x44b194,
      groupMetadata: _0x305ce8,
      groupName: _0x5acab9,
      participants: _0x363cb6,
      groupAdmins: _0x24dd16,
      isBotAdmins: _0x20c2a5,
      isAdmins: _0x12d271,
      reply: _0x50045d,
    }
  ) => {
    try {
      let _0x34bdab = ''
      for (let _0x29a792 = 0; _0x29a792 < commands.length; _0x29a792++) {
        commands[_0x29a792].category === 'movie' &&
          !commands[_0x29a792].dontAddCommandList &&
            (_0x34bdab +=
              '*\u2502\u25BA* \uD83C\uDF5F  ' +
              commands[_0x29a792].pattern +
              '\n')
      }
      let _0x3ed3e4 = [
          {
            buttonId: _0x36f32a + 'sc',
            buttonText: { displayText: 'GET BOT SCRIPT' },
            type: 1,
          },
          {
            buttonId: _0x36f32a + 'ping',
            buttonText: { displayText: 'GET BOT PING' },
            type: 1,
          },
        ],
        _0x481806 = {
          image: { url: config.LOGO },
          caption:
            '*`\uD83C\uDF5FMOVIE COMMANDS MENU \uD83C\uDF5F`*\n  \n  *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n' +
            _0x34bdab +
            ' *\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*',
          footer: config.FOOTER,
          headerType: 4,
          buttons: _0x3ed3e4,
        }
      return await _0x3e1bc5.buttonMessage(_0x159d68, _0x481806, _0x3a8f10)
    } catch (_0x3a12e2) {
      _0x50045d('*ERROR !!*')
      _0x18a218(_0x3a12e2)
    }
  }
)
cmd(
  {
    pattern: 'systemda',
    alias: ['statusda'],
    desc: 'Check bot system status.',
    category: 'main',
    use: '.system',
    filename: __filename,
  },
  async (
    _0x6c610,
    _0x644eb6,
    _0x5e13ef,
    { reply: _0x179208, from: _0x24597e }
  ) => {
    try {
      if (os.hostname().length == 12) {
        hostname = 'replit'
      } else {
        if (os.hostname().length == 36) {
          hostname = 'heroku'
        } else {
          if (os.hostname().length == 8) {
            hostname = 'koyeb'
          } else {
            hostname = os.hostname()
          }
        }
      }
      const _0x56273d =
          (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
          'MB / ' +
          Math.round(require('os').totalmem / 1024 / 1024) +
          'MB',
        _0x2301d7 = await runtime(process.uptime()),
        _0x46cd04 =
          '_*\uD83C\uDFAC MOVIE DL-X SYSTEM INFO \uD83C\uDFAC*_\n\n*`\uD835\uDE19\uD835\uDE36\uD835\uDE2F \uD835\uDE35\uD835\uDE2A\uD835\uDE2E\uD835\uDE26 \u279C`* ' +
          _0x2301d7 +
          '\n\n*`\uD835\uDE19\uD835\uDE22\uD835\uDE2E \uD835\uDE36\uD835\uDE34\uD835\uDE34\uD835\uDE22\uD835\uDE28\uD835\uDE26 \u279C`* ' +
          _0x56273d +
          '\n\n*`\uD835\uDE17\uD835\uDE2D\uD835\uDE22\uD835\uDE35\uD835\uDE27\uD835\uDE30\uD835\uDE33\uD835\uDE2E \u279C`* ' +
          hostname +
          '\n\n*`\uD835\uDE1D\uD835\uDE26\uD835\uDE33\uD835\uDE34\uD835\uDE2A\uD835\uDE30\uD835\uDE2F \u279C`* 0.0.1'
      await _0x6c610.sendMessage(
        _0x5e13ef.chat,
        { text: _0x46cd04 },
        { quoted: fkontak }
      )
      _0x5e13ef.react('\uD83C\uDF19')
    } catch (_0x2eb74e) {
      await _0x179208('*Error !!*')
      console.log(_0x2eb74e)
    }
  }
)
cmd({
    pattern: "forward",
    react: "⏩",
alias: ["f"],
     desc: "forwerd film and msg",
    use: ".f jid",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, isSudo, isOwner, isMe, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isIsuru, isTharu,  isSupporters, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

if ( !isMe && !isOwner && !isSudo ) return await reply('*📛OWNER COMMAND*')
if (!q || !m.quoted) {
return reply("*Please give me a Jid and Quote a Message to continue.*");
}
  // Split and trim JIDs
  let jidList = q.split(',').map(jid => jid.trim());
  if (jidList.length === 0) {
    return reply("*Provide at least one Valid Jid. ⁉️*");
  }
  // Prepare the message to forward
  let Opts = {
    key: mek.quoted?.["fakeObj"]?.["key"]
  };
  // Handle document message
  if (mek.quoted.documentWithCaptionMessage?.message?.documentMessage) {
    let docMessage = mek.quoted.documentWithCaptionMessage.message.documentMessage;
    const mimeTypes = require("mime-types");
    let ext = mimeTypes.extension(docMessage.mimetype) || "file";
    docMessage.fileName = docMessage.fileName || `file.${ext}`;
  }
  
  Opts.message = mek.quoted;
  let successfulJIDs = [];
  // Forward the message to each JID
  for (let i of jidList) {
try {
await conn.forwardMessage(i, Opts, false);
successfulJIDs.push(i);
} catch (error) {
console.log(e);
}
}
  // Response based on successful forwards
if (successfulJIDs.length > 0) {
return reply(`*Message Forwarded*\n\n` + successfulJIDs.join("\n"))
} else {
console.log(e)
}
});

cmd(
  {
    pattern: 'id',
    react: '\u269C',
    alias: ['getdeviceid'],
    desc: 'Get message id',
    category: 'owner',
    use: '.id',
    filename: __filename,
  },
  async (
    _0x500560,
    _0x3b9759,
    _0x2183dd,
    {
      from: _0x4f8cf5,
      l: _0x474ba4,
      quoted: _0x34e986,
      isSudo: _0x364ca4,
      body: _0x327d25,
      isCmd: _0x49549c,
      msr: _0x2262b0,
      command: _0x3a547b,
      args: _0x52d979,
      q: _0xb8a1ee,
      isGroup: _0x57f064,
      sender: _0x559eec,
      senderNumber: _0x398879,
      botNumber2: _0x4c9dcf,
      botNumber: _0x85186d,
      pushname: _0x129748,
      isMe: _0x3c29ec,
      isOwner: _0x5b7f1a,
      groupMetadata: _0x3742c5,
      groupName: _0x1a3721,
      participants: _0x5e6f85,
      groupAdmins: _0x4fb6a0,
      isBotAdmins: _0x4ceedc,
      isCreator: _0x2f2bb2,
      isDev: _0x1b5ddf,
      isAdmins: _0xb69281,
      reply: _0x5bdb36,
    }
  ) => {
    try {
      if (!_0x3c29ec && !_0x5b7f1a && !_0x364ca4) {
        return await _0x5bdb36('*\uD83D\uDCDBOWNER COMMAND*')
      }
      if (!_0x2183dd.quoted) {
        return _0x5bdb36('*Please reply a Message... ℹ️*')
      }
      _0x5bdb36(_0x2183dd.quoted.id)
    } catch (_0x490c16) {
      await _0x500560.sendMessage(_0x4f8cf5, {
        react: {
          text: '\u274C',
          key: _0x3b9759.key,
        },
      })
      console.log(_0x490c16)
      _0x5bdb36('\u274C *Error Accurated !!*\n\n' + _0x490c16)
    }
  }
)
cmd({
  pattern: "rename",
  alias: ["r"],
  desc: "Forward media/messages with optional rename and caption",
  use: ".r jid1,jid2 | filename (without ext) | new caption (quote a message)",
  category: "main",
  filename: __filename
},
async (conn, mek, m, {
  reply, isSudo, isOwner, isMe, q
}) => {
if ( !isMe && !isOwner && !isSudo ) return await reply('*📛OWNER COMMAND*')
  if (!q || !m.quoted) {
    return reply("*Please provide JIDs and quote a message to forward.*");
  }

  const mime = require("mime-types");

  // Split into jid list, optional filename, and optional caption
  const parts = q.split('|').map(part => part.trim());
  const jidPart = parts[0];
  const newFileName = parts[1]; // only name without extension
  const newCaption = parts[2];  // optional

  const jidList = jidPart.split(',').map(j => j.trim()).filter(j => j);
  if (jidList.length === 0) {
    return reply("*Provide at least one valid JID.*");
  }

  const quotedMsg = mek.quoted;
  let messageContent = quotedMsg?.message || quotedMsg;

  const opts = {
    key: quotedMsg?.fakeObj?.key,
    message: JSON.parse(JSON.stringify(messageContent)) // clone safely
  };

  // If it's a document, rename the file
  if (opts.message?.documentMessage) {
    const docMsg = opts.message.documentMessage;
    const ext = mime.extension(docMsg.mimetype) || "file"; // get correct extension
    if (newFileName) {
      docMsg.fileName = `${newFileName}.${ext}`; // filename + original mimetype ext
    } else {
      docMsg.fileName = `Forwarded_File_${Date.now()}.${ext}`; // default if no name given
    }
  }

  // If it's a media with caption, replace caption
  if (newCaption) {
    const typesWithCaption = ["imageMessage", "videoMessage", "documentMessage", "audioMessage"];
    for (const type of typesWithCaption) {
      if (opts.message[type]) {
        opts.message[type].caption = newCaption;
      }
    }
  }

  const successful = [];

  for (let jid of jidList) {
    try {
      await conn.forwardMessage(jid, opts, false);
      successful.push(jid);
    } catch (err) {
      console.log(`❌ Failed to forward to ${jid}:`, err);
    }
  }

  if (successful.length > 0) {
    return reply(`✅ *Message forwarded to:*\n${successful.join("\n")}`);
  } else {
    return reply("❌ *Failed to forward message to any JID.*");
  }
});


async function checkFileSize(url, maxMB = 150) {
  return new Promise((resolve, reject) => {
    let totalBytes = 0;
    https.get(url, res => {
      res.on('data', chunk => {
        totalBytes += chunk.length;
        const sizeMB = totalBytes / (1024 * 1024);
        if (sizeMB > maxMB) {
          res.destroy(); // abort download
          reject(new Error(`File exceeds ${maxMB} MB!`));
        }
      });
      res.on('end', () => resolve(totalBytes));
      res.on('error', err => reject(err));
    });
  });
}
cmd(
  {
    pattern: 'requestpairfdrsgh',
    alias: ['pairseuyh'],
    desc: 'Check bot system status.',
    category: 'main',
    use: '.system',
    filename: __filename,
  },
  async (
    _0x2ee746,
    _0x220277,
    _0x385fff,
    { reply: _0x1d3ad2, q: _0x994177, from: _0x487452 }
  ) => {
    try {
      let _0x1c9514 = await axios.get(
        'https://disturbing-marketa-suddapatta-1196257a.koyeb.app/code?number=' +
          _0x994177
      )
      await _0x2ee746.sendMessage(
        _0x385fff.chat,
        { text: _0x1c9514.data.code },
        { quoted: _0x220277 }
      )
      _0x385fff.react('\uD83D\uDD22')
      setTimeout(async () => {
        await _0x2ee746.sendMessage(
          _0x385fff.chat,
          { text: '*Your code is expired \u231B*' },
          { quoted: _0x220277 }
        )
      }, 30000)
    } catch (_0x4aae5c) {
      await _0x1d3ad2('*Error !!*')
      console.log(_0x4aae5c)
    }
  }
)
