const config = require('../config'),
  { cmd, commands } = require('../command'),
  axios = require('axios'),
  sharp = require('sharp'),
  download = require('../lib/yts'),
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
  l = console.log,
  cinesubz_tv = require('sadasytsearch'),
  {
    cinesubz_info,
    cinesubz_tv_firstdl,
    cinesubz_tvshow_info,
  } = require('../lib/cineall')
cmd({
  pattern: "cine",	
  react: '🔎',
  category: "movie",
  alias: ["cinesubz"],
  desc: "cinesubz.co movie search",
  use: ".cine 2025",
  filename: __filename
},
async (conn, m, mek, {
  from, q, prefix, isPre, isSudo, isOwner, isMe, reply
}) => {
  try {
    const pr = (await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json')).data;
    const isFree = pr.mvfree === "true";

    // Premium check
    if (!isFree && !isMe && !isPre) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return await conn.sendMessage(from, {
        text: "*`You are not a premium user⚠️`*\n\n" +
              "*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n" +
              "_Price : 200 LKR ✔️_\n\n" +
              "*👨‍💻Contact us : 0778500326 , 0722617699*"
      }, { quoted: mek });
    }

    // Block check
    if (config.MV_BLOCK === "true" && !isMe && !isSudo && !isOwner) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return await conn.sendMessage(from, {
        text: "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*"
      }, { quoted: mek });
    }

    if (!q) return await reply('*Please give me a movie name 🎬*');

    const url = await cinesubz_tv(q);

    if (!url || !url.data || url.data.length === 0) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return await conn.sendMessage(from, { text: '*No results found ❌*' }, { quoted: mek });
    }

   var srh = [];  
for (var i = 0; i < url.data.length; i++) {
srh.push({
title: (url.data[i].title || "No result")
    .replace("Sinhala Subtitles | සිංහල උපසිරැසි සමඟ", "")
    .replace("Sinhala Subtitle | සිංහල උපසිරැසි සමඟ", ""),

description: '',
rowId: prefix + 'cinedl ' + url.data[i].link
});
}

const sections = [{
title: "cinesubz.co results",
rows: srh
}	  
]
const listMessage = {
text: `_*CINESUBZ MOVIE SEARCH RESULTS 🎬*_

*\`Input :\`* ${q}`,
footer: config.FOOTER,
title: 'cinesubz.co results',
buttonText: '*Reply Below Number 🔢*',
sections
}


    const caption = `_*CINESUBZ MOVIE SEARCH RESULTS 🎬*_ 

*\`💃🏻Input :\`* ${q}`;

    // ✅ Button mode toggle
    const rowss = url.data.map((v, i) => {
    // Clean size and quality text by removing common tags
    const cleanText = `${url.data[i].title}`
      .replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, "")
      .trim() || "No info";

    return {
      title: cleanText,
      id: prefix + `cinedl ${url.data[i].link}` // Make sure your handler understands this format
    };
  });

  // Compose the listButtons object
  const listButtons = {
    title: "Choose a Movie :)",
    sections: [
      {
        title: "Available Links",
        rows: rowss
      }
    ]
  };

	
if (config.BUTTON === "true") {
      await conn.sendMessage(from, {
    image: { url: config.LOGO },
    caption: caption,
    footer: config.FOOTER,
    buttons: [

	    
      {
        buttonId: "download_list",
        buttonText: { displayText: "🎥 Select Option" },
        type: 4,
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify(listButtons)
        }
      }
	    
    ],
    headerType: 1,
    viewOnce: true
  }, { quoted: mek });
    } else {
      await conn.listMessage(from, listMessage,mek)
    }

  } catch (e) {
    console.log(e);
    await conn.sendMessage(from, { text: '🚩 *Error !!*' }, { quoted: mek });
  }
});




cmd({
    pattern: "cinedl",	
    react: '🎥',
     desc: "moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isMe, prefix, reply }) => {
try{
if (!q || !q.includes('https://cinesubz.net/movies/')) {
    console.log('Invalid input:', q);
    return await reply('*❗ This is a TV series, please use .tv command.*');
}

let sadass = await fetchJson(`https://visper-md-ap-is.vercel.app/movie/cine/info?q=${q}`)
const sadas = sadass.result;
	console.log(cinesubz_info)
let msg = `*🍿 𝗧ɪᴛʟᴇ ➮* *_${sadas.data.title  || 'N/A'}_*

*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _${sadas.data.date  || 'N/A'}_
*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _${sadas.data.country  || 'N/A'}_
*💃 𝗥ᴀᴛɪɴɢ ➮* _${sadas.data.imdb  || 'N/A'}_
*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _${sadas.data.runtime  || 'N/A'}_
*💁 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _${sadas.data.subtitle_author  || 'N/A'}_
*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* ${sadas.data.genres.join(', ')  || 'N/A'}
`

if (sadas.length < 1) return await conn.sendMessage(from, { text: 'erro !' }, { quoted: mek } )

var rows = [];  

rows.push(
    { buttonId: prefix + 'ctdetails ' + q, buttonText: { displayText: 'Details Card\n' }, type: 1 }
    
);

	
  sadas.dl_links.map((v) => {
	rows.push({
        buttonId: prefix + `paka ${sadas.data.image}±${v.link}±${sadas.data.title}
	
	*\`[ ${v.quality} ]\`*`,
        buttonText: { 
    displayText: `${v.size}  (${v.quality} )`
        .replace("WEBDL", "")
	     .replace("WEB DL", "")
        .replace("BluRay HD", "") 
	.replace("BluRay SD", "") 
	.replace("BluRay FHD", "") 
	.replace("Telegram BluRay SD", "") 
	.replace("Telegram BluRay HD", "") 
		.replace("Direct BluRay SD", "") 
		.replace("Direct BluRay HD", "") 
		.replace("Direct BluRay FHD", "") 
		.replace("FHD", "") 
		.replace("HD", "") 
		.replace("SD", "") 
		.replace("Telegram BluRay FHD", "") 
		
},
        type: 1
          }
		 
		 
		 );
        })



  
const buttonMessage = {
 
image: {url: sadas.data.image.replace(/-\d+x\d+(?=\.jpg)/, '')},	
  caption: msg,
  footer: config.FOOTER,
  buttons: rows,
  headerType: 4
}



const rowss = sadas.dl_links.map((v, i) => {
    // Clean size and quality text by removing common tags
    const cleanText = `${v.size} (${v.quality})`
      .replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, "")
      .trim() || "No info";

    return {
      title: cleanText,
      id: prefix + `paka ${sadas.data.image}±${v.link}±${sadas.data.title}
	
	*\`[ ${v.quality} ]\`*` // Make sure your handler understands this format
    };
  });

  // Compose the listButtons object
  const listButtons = {
    title: "🎬 Choose a download link:",
    sections: [
      {
        title: "Available Links",
        rows: rowss
      }
    ]
  };

	
if (config.BUTTON === "true") {
      await conn.sendMessage(from, {
    image: { url: sadas.data.image.replace(/-\d+x\d+(?=\.jpg)/, '') },
    caption: msg,
    footer: config.FOOTER,
    buttons: [
{
            buttonId: prefix + 'ctdetails ' + q,
            buttonText: { displayText: "Details Send" },
            type: 1
        },
	    
      {
        buttonId: "download_list",
        buttonText: { displayText: "🎥 Select Option" },
        type: 4,
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify(listButtons)
        }
      }
	    
    ],
    headerType: 1,
    viewOnce: true
  }, { quoted: mek });
    } else {
      return await conn.buttonMessage(from, buttonMessage, mek)
    }
} catch (e) {
    console.log(e)
  await conn.sendMessage(from, { text: '🚩 *Error !!*' }, { quoted: mek } )
}
})



let isUploadingg = false; // Track upload status





const cinesubzDownBase = "https://drive2.cscloud12.online";
const apilinkcine = "https://cinesubz-store.vercel.app/";

cmd({
    pattern: "paka",
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
    const maxRetries = 5;
    isUploadingg = true;

    
    while (attempts < maxRetries) {
        try {
            const [datae, datas, dat] = q.split("±");
            let url = datas;
            let mediaUrl = url;
            let downloadUrls = null;

            // 🔹 Check only if it's from Cinesubz
            if (url.includes(cinesubzDownBase)) {
                const check = await fetchJson(`${apilinkcine}api/get/?url=${encodeURIComponent(url)}`);

                if (check?.isUploaded === false) {
                    // New upload case
                    const urlApi = `https://manojapi.infinityapi.org/api/v1/cinesubz-download?url=${encodeURIComponent(url)}&apiKey=sadasthemi20072000`; 
                    const getDownloadUrls = await axios.get(urlApi);

                    downloadUrls = getDownloadUrls.data.results;

                    // Save in DB
                    const payload = { url, downloadUrls, uploader: "VISPER-MD" }; 
                    await axios.post(`${apilinkcine}api/save`, payload);

                } else {
                    // Already uploaded
                    downloadUrls = check.downloadUrls;
                }

                // Pick best available link
                mediaUrl =
                     downloadUrls.direct ||
                    downloadUrls?.gdrive2 
            }

            // 🔹 Thumbnail
            const botimg = datae;

            await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });
            const up_mg = await conn.sendMessage(from, { text: '*Uploading your movie..⬆️*' });

            // 🔹 Send document
            await conn.sendMessage(config.JID || from, { 
                document: { url: mediaUrl },
                caption: `🎬 ${dat}\n\n${config.NAME}\n\n${config.FOOTER}`,
                mimetype: "video/mp4",
                jpegThumbnail: await (await fetch(botimg)).buffer(),
                fileName: `${dat}.mp4`
            });

            await conn.sendMessage(from, { delete: up_mg.key });
            await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

            break; // ✅ success → exit loop
        } catch (error) {
            attempts++;
            console.error(`Attempt ${attempts}: Error fetching or sending:`, error);
        }
    }

    if (attempts >= maxRetries) {
        await conn.sendMessage(from, { text: "*Error fetching at this moment. Please try again later ❗*" }, { quoted: mek });
    }

    isUploadingg = false;
});



























cmd({
    pattern: "ctdetails",	
    react: '🎥',
    desc: "moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isMe, reply }) => {
try{


     if(!q) return await reply('*please give me text !..*')

let sadas = await cinesubz_info(q)
const details = (await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json')).data
     
	
let msg = `*☘️ 𝗧ɪᴛʟᴇ ➮* *_${sadas.data.title  || 'N/A'}_*

*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _${sadas.data.date  || 'N/A'}_
*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _${sadas.data.country  || 'N/A'}_
*💃 𝗥ᴀᴛɪɴɢ ➮* _${sadas.data.imdb  || 'N/A'}_
*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _${sadas.data.runtime  || 'N/A'}_
*👤 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _${sadas.data.subtitle_author  || 'N/A'}_
*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* _${sadas.data.genres.join(', ')  || 'N/A'}_

> 🎯 Follow us : 
*${details.chlink}*\n${config.FOOTER}`
await conn.sendMessage(config.JID || from, { image: { url: sadas.data.image.replace(/-\d+x\d+(?=\.jpg)/, '') }, caption: msg })



 await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});
cmd(
  {
    pattern: 'pupilvideo',
    react: '\uD83D\uDD0E',
    category: 'movie',
    alias: ['sinhalafilm'],
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
        'https://darksadas-yt-new-movie-search.vercel.app/?url=' + _0x4ea248
      )
      if (!_0x141e7a || !_0x141e7a.data || _0x141e7a.data.length === 0) {
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
      for (var _0x4cb9e3 = 0; _0x4cb9e3 < _0x141e7a.data.length; _0x4cb9e3++) {
        _0x102193.push({
          title: _0x141e7a.data[_0x4cb9e3].title,
          description: '',
          rowId: _0x2fb128 + 'newdl ' + _0x141e7a.data[_0x4cb9e3].link,
        })
      }
      const _0xc369 = [
          {
            title: 'pupilvideo.blogspot.com results',
            rows: _0x102193,
          },
        ],
        _0x5f0a95 = {
          text:
            '_*\uD83C\uDFACPUPILVIDEO MOVIE SEARCH RESULTS \uD83C\uDFAC*_\n\n*Movie Search : ' +
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
    pattern: 'newdl',
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
      let _0x15d24d = await fetchJson(
          'https://darksadasyt-new-mv-site-info.vercel.app/?url=' + _0x11485c
        ),
        _0xad7e09 =
          '*\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ \u27AE*  _' +
          (_0x15d24d.title || 'N/A') +
          '_\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE*  _' +
          (_0x15d24d.date || 'N/A') +
          '_\n*\uD83D\uDC64 \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ \u27AE* _' +
          (_0x15d24d.subtitle_author || 'N/A') +
          '_'
      if (_0x15d24d.downloadLinks.length < 1) {
        return await _0x407c64.sendMessage(
          _0x143ba1,
          { text: 'erro !' },
          { quoted: _0x23a6bb }
        )
      }
      var _0x5f49ed = []
      _0x5f49ed.push({
        buttonId: _0x307246 + 'dubdet ' + _0x11485c,
        buttonText: { displayText: 'Details send' },
        type: 1,
      })
      _0x15d24d.downloadLinks.map((_0x46cfda) => {
        _0x5f49ed.push({
          buttonId:
            _0x307246 +
            ('ndll ' +
              _0x15d24d.image +
              '\xB1' +
              _0x46cfda.link +
              '\xB1' +
              _0x15d24d.title),
          buttonText: { displayText: '' + _0x46cfda.title },
          type: 1,
        })
      })
      const _0xea21b7 = {
        image: { url: _0x15d24d.image },
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
cmd(
  {
    pattern: 'ndll',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x2f0ef6,
    _0xd77443,
    _0x545d16,
    { from: _0x14af92, q: _0x16142, isMe: _0x3ce2c9, reply: _0x3e4568 }
  ) => {
    if (!_0x16142) {
      return await _0x3e4568('*Please provide a direct URL!*')
    }
    try {
      await _0x2f0ef6.sendMessage(
        _0x14af92,
        { text: '*Downloading your movie..\u2B07️*' },
        { quoted: _0xd77443 }
      )
      const _0x13ee02 = _0x16142.split('\xB1')[0],
        _0x5399c1 = _0x16142.split('\xB1')[1],
        _0x1a3677 = _0x16142.split('\xB1')[2],
        _0x29f4d8 = _0x5399c1 + '&download=true',
        _0x24c123 = _0x29f4d8.trim(),
        _0x49581f = await axios.get(_0x24c123, { responseType: 'arraybuffer' }),
        _0x27fa04 = Buffer.from(_0x49581f.data, 'binary'),
        _0x80bac7 = _0x13ee02,
        _0x3d0418 = await fetch(_0x80bac7),
        _0x17a7d5 = await _0x3d0418.buffer(),
        _0x2da743 = await resizeImage(_0x17a7d5, 200, 200),
        _0x2a71be = {
          document: _0x27fa04,
          caption:
            '\uD83C\uDFAC ' +
            _0x1a3677 +
            '\n\n' +
            config.NAME +
            '\n\n> _*\uD83C\uDFACNADEEN MD\uD83C\uDFAC*_',
          jpegThumbnail: _0x2da743,
          mimetype: 'video/mp4',
          fileName: _0x1a3677 + '.mp4',
        }
      await _0x2f0ef6.sendMessage(_0x14af92, {
        react: {
          text: '\u2B06️',
          key: _0xd77443.key,
        },
      })
      await _0x2f0ef6.sendMessage(
        _0x14af92,
        { text: '*Uploading your movie..\u2B06️*' },
        { quoted: _0xd77443 }
      )
      await _0x2f0ef6.sendMessage(config.JID, _0x2a71be)
      await _0x2f0ef6.sendMessage(_0x14af92, {
        react: {
          text: '\u2714️',
          key: _0xd77443.key,
        },
      })
    } catch (_0x5baf73) {
      console.error('Error fetching or sending', _0x5baf73)
      await _0x2f0ef6.sendMessage(_0x14af92, '*Error fetching or sending *', {
        quoted: _0xd77443,
      })
    }
  }
)
cmd(
  {
    pattern: 'dubmv',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x2f0ef6,
    _0xd77443,
    _0x545d16,
    { from: _0x14af92, q: _0x16142, isMe: _0x3ce2c9, reply: _0x3e4568 }
  ) => {
    if (!_0x16142) {
      return await _0x3e4568('*Please provide a direct URL!*')
    }
    try {
      await _0x2f0ef6.sendMessage(
        _0x14af92,
        { text: '*Downloading your movie..\u2B07️*' },
        { quoted: _0xd77443 }
      )
      const _0x13ee02 = _0x16142.split('\xB1')[0],
        _0x5399c1 = _0x16142.split('\xB1')[1],
        _0x1a3677 = _0x16142.split('\xB1')[2],
        _0x29f4d8 = _0x5399c1,
        _0x24c123 = _0x29f4d8.trim(),
        _0x49581f = await axios.get(_0x24c123, { responseType: 'arraybuffer' }),
        _0x27fa04 = Buffer.from(_0x49581f.data, 'binary'),
        _0x80bac7 = _0x13ee02,
        _0x3d0418 = await fetch(_0x80bac7),
        _0x17a7d5 = await _0x3d0418.buffer(),
        _0x2da743 = await resizeImage(_0x17a7d5, 200, 200),
        _0x2a71be = {
          document: _0x27fa04,
          caption:
            '\uD83C\uDFAC ' +
            _0x1a3677 +
            '\n\n' +
            config.NAME +
            '\n\n> _*\uD83C\uDFACNADEEN MD\uD83C\uDFAC*_',
          jpegThumbnail: _0x2da743,
          mimetype: 'video/mp4',
          fileName: _0x1a3677 + '.mp4',
        }
      await _0x2f0ef6.sendMessage(_0x14af92, {
        react: {
          text: '\u2B06️',
          key: _0xd77443.key,
        },
      })
      await _0x2f0ef6.sendMessage(
        _0x14af92,
        { text: '*Uploading your movie..\u2B06️*' },
        { quoted: _0xd77443 }
      )
      await _0x2f0ef6.sendMessage(config.JID, _0x2a71be)
      await _0x2f0ef6.sendMessage(_0x14af92, {
        react: {
          text: '\u2714️',
          key: _0xd77443.key,
        },
      })
    } catch (_0x5baf73) {
      console.error('Error fetching or sending', _0x5baf73)
      await _0x2f0ef6.sendMessage(_0x14af92, '*Error fetching or sending *', {
        quoted: _0xd77443,
      })
    }
  }
)
cmd(
  {
    pattern: 'dubdet',
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
        'https://darksadasyt-new-mv-site-info.vercel.app/?url=' + _0x3c3a9e
      )
      const _0x430178 = (
        await axios.get(
          'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json'
        )
      ).data
      let _0x341eab =
        '*\uD83C\uDF5F \uD835\uDDE7ɪᴛʟᴇ \u27AE*  _' +
        (_0x2f20f2.title || 'N/A') +
        '_\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE*  _' +
        (_0x2f20f2.date || 'N/A') +
        '_\n*\uD83D\uDC81‍\u2642️ \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ \u27AE* _' +
        (_0x2f20f2.subtitle_author || 'N/A') +
        '_\n\n> \uD83C\uDF1F Follow us : *' +
        _0x430178.chlink +
        '*\n\n> _*\uD83C\uDFACNADEEN MD\uD83C\uDFAC*_\n'
      await _0x1875c6.sendMessage(config.JID, {
        image: { url: _0x2f20f2.image },
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
cmd(
  {
    pattern: 'cinetv',
    react: '\uD83D\uDD0E',
    category: 'movie',
    alias: ['ctv'],
    desc: 'cinesubz.co tv shows search',
    use: '.cinetv  2025',
    filename: __filename,
  },
  async (
    _0x26e8c3,
    _0x8b41d6,
    _0x4734a0,
    {
      from: _0x5174da,
      q: _0x27092c,
      prefix: _0x1c13d8,
      isMe: _0x2f4d82,
      isSudo: _0x1cb0ec,
      isPre: _0x24e476,
      isOwner: _0x2539d1,
      reply: _0x5c49c7,
    }
  ) => {
    try {
      if (!_0x27092c) {
        return await _0x5c49c7('*please give me text !..*')
      }
      let _0x4a6c13 = await fetchJson(
        'https://darksadas-yt-cinesubz-tv-search.vercel.app/?query=' + _0x27092c
      )
      if (!_0x4a6c13 || !_0x4a6c13.data || _0x4a6c13.data.length === 0) {
        return (
          await _0x26e8c3.sendMessage(_0x5174da, {
            react: {
              text: '\u274C',
              key: _0x4734a0.key,
            },
          }),
          await _0x26e8c3.sendMessage(
            _0x5174da,
            { text: '*No results found \u274C*' },
            { quoted: _0x4734a0 }
          )
        )
      }
      var _0x8c8e7d = []
      for (var _0x41c48a = 0; _0x41c48a < _0x4a6c13.data.length; _0x41c48a++) {
        _0x8c8e7d.push({
          title:
            _0x4a6c13.data[_0x41c48a].title
              .replace('Sinhala Subtitles | සිංහල උපසිරැසි සමඟ', '')
              .replace('Sinhala Subtitle | සිංහල උපසිරැසි සමඟ', '') ||
            'Result not found',
          description: '',
          rowId: _0x1c13d8 + 'cinetvdl ' + _0x4a6c13.data[_0x41c48a].link,
        })
      }
      const _0xbee07a = [
          {
            title: 'cinesubz.co results',
            rows: _0x8c8e7d,
          },
        ],
        _0x436667 = {
          text:
            '_*CINESUBZ TV SHOWS RESULTS \uD83D\uDCFA*_\n\n*`Input :`* ' +
            _0x27092c,
          footer: config.FOOTER,
          title: 'cinesubz.co results',
          buttonText: '*Reply Below Number \uD83D\uDD22*',
          sections: _0xbee07a,
        },
        _0xf24444 =
          '_*CINESUBZ TV SHOWS RESULTS \uD83D\uDCFA*_\n\n*`Input :`* ' +
          _0x27092c,
        _0x893bd9 = _0x4a6c13.data.map((_0x4a8915, _0x3bc549) => {
          const _0x4dc824 =
            ('' + _0x4a6c13.data[_0x3bc549].title)
              .replace(
                /WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi,
                ''
              )
              .trim() || 'No info'
          return {
            title: _0x4dc824,
            id: _0x1c13d8 + ('cinetvdl ' + _0x4a6c13.data[_0x3bc549].link),
          }
        }),
        _0x3b6699 = {
          title: 'Choose a Movie :)',
          sections: [
            {
              title: 'Available Links',
              rows: _0x893bd9,
            },
          ],
        }
      config.BUTTON === 'true'
        ? await _0x26e8c3.sendMessage(
            _0x5174da,
            {
              image: { url: config.LOGO },
              caption: _0xf24444,
              footer: config.FOOTER,
              buttons: [
                {
                  buttonId: 'download_list',
                  buttonText: { displayText: '\uD83C\uDFA5 Select Option' },
                  type: 4,
                  nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify(_0x3b6699),
                  },
                },
              ],
              headerType: 1,
              viewOnce: true,
            },
            { quoted: _0x4734a0 }
          )
        : await _0x26e8c3.listMessage(_0x5174da, _0x436667, _0x4734a0)
    } catch (_0x14bc34) {
      console.log(_0x14bc34)
      await _0x26e8c3.sendMessage(
        _0x5174da,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x4734a0 }
      )
    }
  }
)
cmd(
  {
    pattern: 'cinetvdl',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x3e1962,
    _0x2a20f7,
    _0x41211e,
    {
      from: _0x562de0,
      q: _0x4ebbc2,
      isMe: _0x30367e,
      prefix: _0x2fec6e,
      reply: _0x1a0b46,
    }
  ) => {
    try {
      if (!_0x4ebbc2 || !_0x4ebbc2.includes('https://cinesubz.net/tvshows')) {
        return (
          console.log('Invalid input:', _0x4ebbc2),
          await _0x1a0b46('*\u2757 This is a movie, please use .mv command.*')
        )
      }
      let _0xcd4bd5 = await cinesubz_tvshow_info(_0x4ebbc2),
        _0x565161 =
          '*\u2618️ \uD835\uDDE7ɪᴛʟᴇ \u27AE* *_' +
          (_0xcd4bd5.data.title || 'N/A') +
          '_*\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE* _' +
          (_0xcd4bd5.data.date || 'N/A') +
          '_\n*\uD83C\uDF0E \uD835\uDDD6ᴏᴜɴᴛʀʏ \u27AE* _' +
          (_0xcd4bd5.data.country || 'N/A') +
          '_\n*\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ \u27AE* _' +
          (_0xcd4bd5.data.imdb || 'N/A') +
          '_\n*\u23F0 \uD835\uDDE5ᴜɴᴛɪᴍᴇ \u27AE* _' +
          (_0xcd4bd5.data.runtime || 'N/A') +
          '_\n*\uD83D\uDC81‍\u2642️ \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ \u27AE* _' +
          (_0xcd4bd5.data.director || 'N/A') +
          '_\n*\uD83C\uDFAD \uD835\uDDDAᴇɴᴀʀᴇꜱ \u27AE* ' +
          (_0xcd4bd5.data.category.join(', ') || 'N/A') +
          '\n'
      var _0x178337 = []
      _0x178337.push(
        {
          buttonId: _0x2fec6e + 'ctdetailss ' + _0x4ebbc2,
          buttonText: { displayText: 'Details Card' },
          type: 1,
        },
        {
          buttonId: _0x2fec6e + 'dlc ' + _0x4ebbc2,
          buttonText: { displayText: 'All Epishodes Send\n' },
          type: 1,
        }
      )
      _0xcd4bd5.data.episodes.map((_0x1a4a46) => {
        _0x178337.push({
          buttonId:
            _0x2fec6e +
            ('cinefirstdl ' +
              _0xcd4bd5.data.mainImage +
              '\xB1' +
              _0x1a4a46.link +
              '\xB1' +
              _0xcd4bd5.data.title +
              ' *`' +
              _0x1a4a46.number +
              '`*'),
          buttonText: { displayText: '' + _0x1a4a46.number },
          type: 1,
        })
      })
      const _0x2cdd59 = {
          image: { url: _0xcd4bd5.data.mainImage.replace('-200x300', '') },
          caption: _0x565161,
          footer: config.FOOTER,
          buttons: _0x178337,
          headerType: 4,
        },
        _0x25dd9c = _0xcd4bd5.data.episodes.map((_0x2f56fd, _0x348ae4) => {
          const _0x2445a7 =
            ('' + _0x2f56fd.number)
              .replace(
                /WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi,
                ''
              )
              .trim() || 'No info'
          return {
            title: _0x2445a7,
            id:
              _0x2fec6e +
              ('cinefirstdl ' +
                _0xcd4bd5.data.mainImage +
                '\xB1' +
                _0x2f56fd.link +
                '\xB1' +
                _0xcd4bd5.data.title +
                ' *`' +
                _0x2f56fd.number +
                '`*'),
          }
        }),
        _0x2e9278 = {
          title: '\uD83C\uDFAC Choose a download link :)',
          sections: [
            {
              title: 'Available Links',
              rows: _0x25dd9c,
            },
          ],
        }
      if (config.BUTTON === 'true') {
        await _0x3e1962.sendMessage(
          _0x562de0,
          {
            image: { url: _0xcd4bd5.data.mainImage.replace('-200x300', '') },
            caption: _0x565161,
            footer: config.FOOTER,
            buttons: [
              {
                buttonId: _0x2fec6e + 'ctdetailss ' + _0x4ebbc2,
                buttonText: { displayText: 'Details Send' },
                type: 1,
              },
              {
                buttonId: _0x2fec6e + 'dlc ' + _0x4ebbc2,
                buttonText: { displayText: 'All Epishodes Send' },
                type: 1,
              },
              {
                buttonId: 'download_list',
                buttonText: { displayText: '\uD83C\uDFA5 Select Option' },
                type: 4,
                nativeFlowInfo: {
                  name: 'single_select',
                  paramsJson: JSON.stringify(_0x2e9278),
                },
              },
            ],
            headerType: 1,
            viewOnce: true,
          },
          { quoted: _0x41211e }
        )
      } else {
        return await _0x3e1962.buttonMessage(_0x562de0, _0x2cdd59, _0x41211e)
      }
    } catch (_0x53b9e2) {
      console.log(_0x53b9e2)
      await _0x3e1962.sendMessage(
        _0x562de0,
        { text: '\uD83D\uDEA9 *Error !!*' },
        { quoted: _0x41211e }
      )
    }
  }
)
cmd(
  {
    pattern: 'cinefirstdl',
    react: '\uD83C\uDFAC',
    alias: ['tv'],
    desc: 'Movie downloader',
    filename: __filename,
  },
  async (
    _0xbdb83a,
    _0x316bfb,
    _0x3f3389,
    {
      from: _0x27078e,
      q: _0x5dfd62,
      prefix: _0x560f26,
      isMe: _0x12ae6d,
      reply: _0x28f0fd,
    }
  ) => {
    try {
      if (!_0x5dfd62) {
        return await _0x28f0fd(
          '*\u26A0️ Please provide a valid search query or URL.*'
        )
      }
      console.log('[CINE-FIRSTDL] Query:', _0x5dfd62)
      const [_0x12b5ec, _0x4d5146, _0x2ad128] = _0x5dfd62.split('\xB1')
      if (!_0x4d5146) {
        return await _0x28f0fd(
          '*\uD83D\uDEAB Invalid format. Expected "link\xB1imageURL".*'
        )
      }
      const _0x14323e = await cinesubz_tv_firstdl(_0x4d5146)
      if (!_0x14323e?.dl_links?.length) {
        return await _0xbdb83a.sendMessage(
          _0x27078e,
          { text: '*\u274C No download links found!*' },
          { quoted: _0x3f3389 }
        )
      }
      const _0x4c34cf = _0x14323e.dl_links.map((_0x59285b) => ({
          title: _0x59285b.quality + ' - ' + _0x59285b.size,
          description: '',
          rowId:
            _0x560f26 +
            ('tvdll ' +
              _0x12b5ec +
              '&' +
              _0x2ad128 +
              '&' +
              _0x59285b.direct_link),
        })),
        _0x12e035 = [
          {
            title: '`\uD83D\uDD22 Select your want quality below⤵`',
            rows: _0x4c34cf,
          },
        ],
        _0x25d8d5 =
          '*\uD83C\uDF7F Episode Title:* ' +
          _0x2ad128
      if (config.BUTTON === 'true') {
        return await _0xbdb83a.sendMessage(
          _0x27078e,
          {
            text: _0x25d8d5,
            footer: config.FOOTER,
            title: '\uD83D\uDCFA Cinesubz.lk Download Options',
            buttonText: '\uD83C\uDFAC Select Quality',
            sections: _0x12e035,
          },
          { quoted: _0x3f3389 }
        )
      } else {
        const _0x1783e7 = {
          text: _0x25d8d5,
          footer: config.FOOTER,
          title: '\uD83D\uDCFA Cinesubz.lk Download Options',
          buttonText: '\uD83D\uDD3D Tap to select quality',
          sections: _0x12e035,
        }
        return await _0xbdb83a.listMessage(_0x27078e, _0x1783e7, _0x3f3389)
      }
    } catch (_0x804bc9) {
      console.error('[CINE-FIRSTDL ERROR]', _0x804bc9)
      await _0x28f0fd(
        '\uD83D\uDEAB *An unexpected error occurred!*\n\n' +
          _0x804bc9.message || _0x804bc9
      )
    }
  }
)
cmd(
  {
    pattern: 'tvdll',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x39918d,
    _0x4667c4,
    _0x5ca607,
    { from: _0x2a4f6f, q: _0x2e19c8, isMe: _0x4d9596, reply: _0x5582d6 }
  ) => {
    if (!_0x2e19c8) {
      return await _0x5582d6('*Please provide a direct URL!*')
    }
    try {
      console.log('Query:', _0x2e19c8)
      await _0x39918d.sendMessage(
        _0x2a4f6f,
        { text: '*Downloading your movie..\u2B07️*' },
        { quoted: _0x4667c4 }
      )
      const [_0x27ff54, _0x2579d9, _0x532ce2] = _0x2e19c8.split('&')
      if (!_0x27ff54 || !_0x2579d9 || !_0x532ce2) {
        return await _0x5582d6(
          '*Invalid format. Make sure all 3 parts are provided with `&` separator.*'
        )
      }
      const _0x1fa479 = await download(_0x532ce2)
      console.log(_0x1fa479)
      const _0x3b707a = _0x1fa479.result.direct.trim(),
        _0x2efabf = _0x27ff54.trim(),
        _0x32dcf0 = await fetch(_0x2efabf),
        _0x95dbe6 = await _0x32dcf0.buffer(),
        _0xe8acef = await resizeImage(_0x95dbe6, 200, 200),
        _0x3bb86b = Date.now(),
        _0x196c29 = {
          document: { url: _0x3b707a },
          caption: '*\uD83C\uDFAC* ' + _0x2579d9 + '\n\n' + config.NAME,
          jpegThumbnail: _0xe8acef,
          mimetype: 'video/mp4',
          fileName: _0x2579d9 + '.mp4',
        }
      await _0x39918d.sendMessage(_0x2a4f6f, {
        react: {
          text: '\u2B06️',
          key: _0x4667c4.key,
        },
      })
      await _0x39918d.sendMessage(
        _0x2a4f6f,
        { text: '*Uploading your movie..\u2B06️*' },
        { quoted: _0x4667c4 }
      )
      await _0x39918d.sendMessage(config.JID || _0x2a4f6f, _0x196c29)
      await _0x39918d.sendMessage(_0x2a4f6f, {
        react: {
          text: '\u2714️',
          key: _0x4667c4.key,
        },
      })
    } catch (_0x19bbef) {
      console.error('\u274C Error:', _0x19bbef)
      await _0x39918d.sendMessage(
        _0x2a4f6f,
        { text: '*\u274C Error fetching or sending.*' },
        { quoted: _0x4667c4 }
      )
    }
  }
)
cmd(
  {
    pattern: 'dlc',
    react: '\u2B07️',
    filename: __filename,
  },
  async (
    _0x18a6ad,
    _0x132031,
    _0x1ff96a,
    { from: _0x1b4c1e, q: _0x8b1f11, reply: _0x3f6009, prefix: _0x508f13 }
  ) => {
    if (!_0x8b1f11) {
      return _0x3f6009('*කරුණාකර Cinesubz URL එකක් ලබා දෙන්න !*')
    }
    try {
      const _0x2e4a4c = await cinesubz_tvshow_info(_0x8b1f11)
      if (
        !_0x2e4a4c.data ||
        !Array.isArray(_0x2e4a4c.data.episodes) ||
        _0x2e4a4c.data.episodes.length === 0
      ) {
        return _0x3f6009('\u274C Episode එකක්වත් හමු නොවුණා.')
      }
      const _0x1439f3 = _0x2e4a4c.data.episodes,
        _0x4f06c8 = _0x1439f3
          .map((_0x3b3500) => _0x3b3500.link)
          .filter(Boolean),
        _0x3dd1d3 =
          _0x2e4a4c.data.mainImage ||
          'https://files.catbox.moe/3mvn78.png',
        _0x4d21e5 = _0x2e4a4c.data.title || 'Cinesubz_Show',
        _0x2a0d78 = await cinesubz_tv_firstdl(_0x4f06c8[0]),
        _0x2210b5 = ['360', '480', '720', '1080'],
        _0x1d049e = Object.values(_0x2a0d78.dl_links || {}).filter(
          (_0x2d61e3) =>
            _0x2210b5.some((_0x4c155e) =>
              _0x2d61e3.quality?.toLowerCase().includes(_0x4c155e)
            )
        )
      if (!_0x1d049e.length) {
        return (
          console.log(
            '\u274C No valid quality matches. Found:',
            _0x2a0d78.dl_links
          ),
          _0x3f6009('\u274C Valid quality options not found.')
        )
      }
      let _0x442830 = _0x1d049e.map((_0x2c8790) => ({
        title: _0x2c8790.quality + ' - ' + (_0x2c8790.size || 'Unknown Size'),
        rowId:
          _0x508f13 +
          'dlcq ' +
          _0x2c8790.quality +
          '|' +
          _0x8b1f11 +
          '|' +
          _0x4d21e5,
      }))
      const _0x56cce2 = [
          {
            title: '_\uD83C\uDFAC Download Quality තෝරන්න_',
            rows: _0x442830,
          },
        ],
        _0x219b4c = {
          text: '\uD83C\uDF9E *' + _0x4d21e5 + '*\n',
          footer: config.FOOTER,
          title: '\uD83D\uDCFA [Cinesubz Downloader]',
          buttonText: '\uD83D\uDD3D Quality තෝරන්න',
          sections: _0x56cce2,
        },
        _0x4f85ac = '\uD83C\uDF9E *' + _0x4d21e5 + '*\n',
        _0x16308d = _0x1d049e.map((_0x168058, _0x3c1acb) => {
          const _0xf58c4a =
            (_0x168058.quality + ' - ' + (_0x168058.size || 'Unknown Size'))
              .replace(
                /WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi,
                ''
              )
              .trim() || 'No info'
          return {
            title: _0xf58c4a,
            id:
              _0x508f13 +
              'dlcq ' +
              _0x168058.quality +
              '|' +
              _0x8b1f11 +
              '|' +
              _0x4d21e5,
          }
        }),
        _0x38e119 = {
          title: '\uD83C\uDFAC Choose a download quality :)',
          sections: [
            {
              title: 'Available Links',
              rows: _0x16308d,
            },
          ],
        }
      config.BUTTON === 'true'
        ? await _0x18a6ad.sendMessage(
            _0x1b4c1e,
            {
              image: { url: config.LOGO },
              caption: _0x4f85ac,
              footer: config.FOOTER,
              buttons: [
                {
                  buttonId: 'download_list',
                  buttonText: { displayText: '\uD83C\uDFA5 Select Option' },
                  type: 4,
                  nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify(_0x38e119),
                  },
                },
              ],
              headerType: 1,
              viewOnce: true,
            },
            { quoted: _0x132031 }
          )
        : await _0x18a6ad.listMessage(_0x1b4c1e, _0x219b4c, _0x132031)
    } catch (_0x47a414) {
      console.error(_0x47a414)
      _0x3f6009('\u274C දෝෂයක් හට ගැණිනි.')
    }
  }
)
const { delay } = require('@whiskeysockets/baileys')
cmd(
  {
    pattern: 'dlcq',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0xe7c53c,
    _0x9d4e81,
    _0x2cad04,
    { from: _0x523d68, q: _0x365a2d, reply: _0x34df94 }
  ) => {
    if (!_0x365a2d.includes('|')) {
      return _0x34df94(
        '\u274C Invalid format. Use: .dlcq <quality>|<url>|<title>'
      )
    }
    const [_0x28ad84, _0x436b17, _0xd7b847] = _0x365a2d.split('|'),
      _0x5d7915 = _0x436b17?.trim(),
      _0xe2c1 = _0xd7b847?.trim() || 'Cinesubz',
      _0x38bf48 = ['360', '480', '720', '1080'],
      _0x6434e1 = _0x38bf48.some((_0x1bc927) =>
        _0x28ad84.toLowerCase().includes(_0x1bc927)
      )
    if (!_0x6434e1) {
      return _0x34df94(
        '\u274C Unsupported quality. Use 360, 480, 720, or 1080.'
      )
    }
    try {
      const _0x485651 = await cinesubz_tvshow_info(_0x5d7915),
        _0x4e0731 = _0x485651.data.episodes,
        _0x479201 =
          _0x485651.data.mainImage ||
          'https://files.catbox.moe/3mvn78.png'
      if (!_0x4e0731 || !_0x4e0731.length) {
        return _0x34df94('\u274C No episodes found for this link.')
      }
      await _0x34df94(
        '*\uD83D\uDCE5 Starting to download episodes in *' +
          _0x28ad84 +
          'Quality...'
      )
      for (let _0x442544 = 0; _0x442544 < _0x4e0731.length; _0x442544++) {
        const _0x56f834 = _0x4e0731[_0x442544]
        let _0x4599f6 = false
        for (let _0x37315d = 1; _0x37315d <= 4; _0x37315d++) {
          try {
            const _0x5bd44a = await cinesubz_tv_firstdl(_0x56f834.link),
              _0x302a01 = Object.values(_0x5bd44a.dl_links || {}),
              _0x3a4149 = _0x302a01.find((_0x12575f) =>
                _0x12575f.quality
                  ?.toLowerCase()
                  .includes(_0x28ad84.toLowerCase())
              )
            if (!_0x3a4149) {
              throw new Error('Requested quality not available.')
            }
            const _0x39efb3 = await download(_0x3a4149.direct_link),
              _0x244d22 = _0x39efb3?.result?.direct
            if (!_0x244d22 || !_0x244d22.startsWith('http')) {
              throw new Error('Invalid direct link')
            }
            const _0x5e1941 = await (
                await fetch(_0x56f834.image || _0x479201)
              ).buffer(),
              _0x4fa3ff = _0x56f834.name || 'Episode_' + (_0x442544 + 1),
              _0x1b6788 =
                _0xe2c1.replace(/[^a-zA-Z0-9]/g, '_') +
                '_E' +
                (_0x442544 + 1) +
                '.mp4'
            await _0xe7c53c.sendMessage(config.JID || _0x523d68, {
              document: { url: _0x244d22 },
              caption:
                '*\uD83D\uDCFA' +
                _0xe2c1 +
                '*\n*Episode ' +
                _0x56f834.number +
                ' - ' +
                _0x4fa3ff +
                '*\n\n*`[ ' +
                _0x28ad84 +
                ' ]`*\n\n' +
                config.NAME,
              jpegThumbnail: _0x5e1941,
              mimetype: 'video/mp4',
              fileName: _0x1b6788,
            })
            await delay(3000)
            _0x4599f6 = true
            break
          } catch (_0x2714c8) {
            console.log(
              '\u274C Episode ' +
                (_0x442544 + 1) +
                ' Attempt ' +
                _0x37315d +
                ' Failed:',
              _0x2714c8.message
            )
            _0x37315d === 4
              ? await _0xe7c53c.sendMessage(
                  _0x523d68,
                  {
                    text:
                      '\u26A0️ Failed to download Episode ' +
                      (_0x442544 + 1) +
                      ' after 4 attempts.',
                  },
                  { quoted: _0x9d4e81 }
                )
              : await delay(2000)
          }
        }
      }
      await _0x34df94('*\u2705 All episodes have been Downloaded.*')
    } catch (_0xac37a3) {
      console.error(_0xac37a3)
      _0x34df94('\u274C An error occurred while processing your request.')
    }
  }
)
cmd(
  {
    pattern: 'ctdetailss',
    react: '\uD83C\uDFA5',
    desc: 'moive downloader',
    filename: __filename,
  },
  async (
    _0x10d11b,
    _0x265434,
    _0x385715,
    { from: _0x26004b, q: _0x3fc711, isMe: _0x5e8bd0, reply: _0x29b044 }
  ) => {
    try {
      if (!_0x3fc711) {
        return await _0x29b044('*please give me text !..*')
      }
      let _0x29c3e0 = await fetchJson(
        'https://darksadas-yt-cineszub-tv-shows.vercel.app/?url=' +
          _0x3fc711 +
          '&apikey=pramashi'
      )
      const _0x49ef83 = (
        await axios.get(
          'https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json'
        )
      ).data
      let _0x2ba954 =
        '*\u2618️ \uD835\uDDE7ɪᴛʟᴇ \u27AE* *_' +
        (_0x29c3e0.data.title || 'N/A') +
        '_*\n\n*\uD83D\uDCC5 \uD835\uDDE5ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ \u27AE* _' +
        (_0x29c3e0.data.date || 'N/A') +
        '_\n*\uD83C\uDF0E \uD835\uDDD6ᴏᴜɴᴛʀʏ \u27AE* _' +
        (_0x29c3e0.data.country || 'N/A') +
        '_\n*\uD83D\uDC83 \uD835\uDDE5ᴀᴛɪɴɢ \u27AE* _' +
        (_0x29c3e0.data.imdb || 'N/A') +
        '_\n*\u23F0 \uD835\uDDE5ᴜɴᴛɪᴍᴇ \u27AE* _' +
        (_0x29c3e0.data.runtime || 'N/A') +
        '_\n*\uD83D\uDC81‍\u2642️ \uD835\uDDE6ᴜʙᴛɪᴛʟᴇ ʙʏ \u27AE* _' +
        (_0x29c3e0.data.subtitle_author || 'N/A') +
        '_\n*\uD83C\uDFAD \uD835\uDDDAᴇɴᴀʀᴇꜱ \u27AE* ' +
        (_0x29c3e0.data.genres.join(', ') || 'N/A') +
        '\n\n> 💃🏻 Follow us : *\n' +
        _0x49ef83.chlink +
        '*\n\n*㋛ 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 〽️𝙳*'
      await _0x10d11b.sendMessage(config.JID || _0x26004b, {
        image: { url: _0x29c3e0.data.image.replace('-200x300', '') },
        caption: _0x2ba954,
      })
      await _0x10d11b.sendMessage(_0x26004b, {
        react: {
          text: '\u2714️',
          key: _0x385715.key,
        },
      })
    } catch (_0x52b0d3) {
      console.error('Error fetching or sending', _0x52b0d3)
      await _0x10d11b.sendMessage(_0x26004b, '*Error fetching or sending *', {
        quoted: _0x385715,
      })
    }
  }
)