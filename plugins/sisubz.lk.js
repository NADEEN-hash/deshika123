const config = require('../config'),
  { cmd, commands } = require('../command'),
  axios = require('axios'),
  sharp = require('sharp'),
  https = require("https"),
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

cmd({
    pattern: "sisubs",	
    react: '🔎',
    category: "movie",
    desc: "sinhalasubs movie search",
    use: ".sisubs Avatar",
    filename: __filename
},
async (conn, m, mek, { from, isPre, q, prefix, isMe, isSudo, isOwner, reply }) => {
try {
    if (!q) return await reply('*Please give me a movie name 🎥*')

    // Fetch data from SUB.LK API
    let url = await fetchJson(`https://pathum-rajapaksha.netlify.app/api/search/search?text=${encodeURIComponent(q)}`)

    if (!url || url.length === 0) {
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        return await conn.sendMessage(from, { text: '*No results found ❌*' }, { quoted: mek });
    }

    // Create rows with rowId
    var srh = [];  
    for (var i = 0; i < url.length; i++) {
        srh.push({
            title: url[i].title,
            //description: url.result[i].year || '',
            rowId: prefix + `szdl ${url[i].link}&${url[i].year}`
        });
    }

    const listMessage = {
        text: `*_SINHALASUBS.LK MOVIE SEARCH RESULT 🎬_*

*\`🎞Input :\`* ${q}`,
        footer: config.FOOTER,
        title: 'SINHALASUBS.LK Results',
        buttonText: '*Reply Below Number 🔢*',
        sections: [{
            title: "SINHALASUBS.LK Results",
            rows: srh
        }]
    }

    const caption = `*_SINHALASUBS.LK MOVIE SEARCH RESULT 🎬_*

*\`🎞Input :\`* ${q}
_Total results:_ ${url.length}`

    // Also create listButtons for button mode
    const rowss = url.map((v, i) => {
        return {
            title: v.title || `Result ${i+1}`,
            id: prefix + `szdl ${v.link}&${v.year}`
        }
    });

    const listButtons = {
        title: "Choose a Movie 🎬",
        sections: [
            {
                title: "SINHALASUBS.LK Search Results",
                rows: rowss
            }
        ]
    };

    // Send as buttons or list depending on config
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
        await conn.listMessage(from, listMessage, mek)
    }

} catch (e) {
    console.log(e)
    await conn.sendMessage(from, { text: '🚩 *Error fetching results !!*' }, { quoted: mek })
}
})
cmd({
    pattern: "szdl",	
    react: '🎥',
    desc: "SUB.LK movie downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, prefix, reply }) => {
try {
    if (!q || !q.includes('"https://sinhalasubs.lk/movies/')) {
        console.log('Invalid input:', q);
        return await reply('*❗ Invalid link. Please search using .sisubz and select a movie.*');
    }

    let data = await fetchJson(`https://pathum-detailes.netlify.app/api/details?url=${q}`);
    const res = data;

    if (!res) return await reply('*🚩 No details found !*');

    let msg = `*☘️ 𝗧ɪᴛʟᴇ ➮* *_${res.title || 'N/A'}_*

*📊 𝗗ᴇꜱᴄʀɪᴘᴛɪᴏɴ ➮* _${res.description || 'N/A'}_


${config.FOOTER}
`;

    // Prepare button rows
    let rows = [];
    res.downloadLinks.forEach((dl, i) => {
        rows.push({
            buttonId: `${prefix}pakaz ${res.imageLinks[0]}±${dl[0].url}±${res.title}±[${dl[0].quality}]`,
            buttonText: { 
                displayText: `${dl.size} (${dl.quality})`
                  .replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|HDRip|FHD|HD|SD/gi, "")
                  .trim()
            },
            type: 1
        });
    });

    const buttonMessage = {
        image: { url: res.imageLinks[0].replace('-200x300', '') },
        caption: msg,
        footer: config.FOOTER,
        buttons: rows,
        headerType: 4
    };

    // List buttons (nativeFlow style)
    const rowss = res.downloadLinks.map((dl, i) => {
        const cleanText = `${dl[0].size} (${dl[0].quality})`
          .replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|HDRip|FHD|HD|SD/gi, "")
          .trim() || "No info";

        return {
            title: cleanText,
            id: `${prefix}pakaz ${res.imageLinks[0]}±${dl[0].url}±${res.title}±[${dl[0].quality}]`
        };
    });

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
            image: { url: res.imageLinks[0].replace('-200x300', '') },

            caption: msg,
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
        return await conn.buttonMessage(from, buttonMessage, mek)
    }

} catch (e) {
    console.log(e)
    await conn.sendMessage(from, { text: '🚩 *Error !!*' }, { quoted: mek })
}
})

let isUploadinggg = false; // Track upload status

cmd({
    pattern: "pakaz",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    if (isUploadinggg) {
        return await conn.sendMessage(from, { 
            text: '*A movie is already being uploaded. Please wait until it finishes.* ⏳', 
            quoted: mek 
        });
    }

    try {
        //===================================================
        const [imglink, pix, title, ulity] = q.split("±");
        if (!imglink || !pix || !title || !ulity) return await reply("⚠️ Invalid format. Use:\n`pakaz link±img±title±qulity`");
        //===================================================

        const da = pix.split("https://pixeldrain.com/u/")[1];
        if (!da) return await reply("⚠️ Couldn’t extract Pixeldrain file ID.");

        const fhd = `https://pixeldrain.com/api/file/${da}`;
        isUploadinggg = true; // lock start

        //===================================================
        const botimg = imglink.trim();
        const message = {
            document: { url: fhd },
            caption: `🎬 ${title}\n${ulity}\n${config.NAME}\n\n${config.FOOTER}`,
            mimetype: "video/mp4",
            jpegThumbnail: await (await fetch(botimg)).buffer(),
            fileName: `${title}.mp4`,
        };

        // Send "uploading..." msg without blocking
        conn.sendMessage(from, { text: '*Uploading your movie.. ⬆️*', quoted: mek });

        // Upload + react + success (parallel tasks)
        await Promise.all([
            conn.sendMessage(config.JID || from, message),
            conn.sendMessage(from, { react: { text: '✔️', key: mek.key } }),
            conn.sendMessage(from, { text: `*Movie sent successfully  ✔*`, quoted: mek })
        ]);

    } catch (e) {
        reply('🚫 *Error Occurred !!*\n\n' + e.message);
        console.error("sisusndl error:", e);
    } finally {
        isUploadinggg = false; // reset lock always
    }
})
