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
    pattern: "sublk",	
    react: '🔎',
    category: "movie",
    desc: "SUB.LK movie search",
    use: ".sublk Avatar",
    filename: __filename
},
async (conn, m, mek, { from, isPre, q, prefix, isMe, isSudo, isOwner, reply }) => {
try {
    if (!q) return await reply('*Please give me a movie name 🎥*')

    // Fetch data from SUB.LK API
    let url = await fetchJson(`https://visper-md-ap-is.vercel.app/movie/sublk/SEARCH?q=${encodeURIComponent(q)}`)

    if (!url || !url.result || url.result.length === 0) {
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        return await conn.sendMessage(from, { text: '*No results found ❌*' }, { quoted: mek });
    }

    // Create rows with rowId
    var srh = [];  
    for (var i = 0; i < url.result.length; i++) {
        srh.push({
            title: url.result[i].title,
            //description: url.result[i].year || '',
            rowId: prefix + `sdl ${url.result[i].link}&${url.result[i].year}`
        });
    }

    const listMessage = {
        text: `*_SUB.LK MOVIE SEARCH RESULT 🎬_*

*\`🎡Input :\`* ${q}`,
        footer: config.FOOTER,
        title: 'SUB.LK Results',
        buttonText: '*Reply Below Number 🔢*',
        sections: [{
            title: "SUB.LK Results",
            rows: srh
        }]
    }

    const caption = `*_SUB.LK MOVIE SEARCH RESULT 🎬_*

*\`🎡Input :\`* ${q}
_Total results:_ ${url.result.length}`

    // Also create listButtons for button mode
    const rowss = url.result.map((v, i) => {
        return {
            title: v.title || `Result ${i+1}`,
            id: prefix + `sdl ${v.link}&${v.year}`
        }
    });

    const listButtons = {
        title: "Choose a Movie 🎬",
        sections: [
            {
                title: "SUB.LK Search Results",
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
    pattern: "sdl",	
    react: '🎥',
    desc: "SUB.LK movie downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, prefix, reply }) => {
try {
    if (!q || !q.includes('https://sub.lk/movies/')) {
        console.log('Invalid input:', q);
        return await reply('*❗ Invalid link. Please search using .sublk and select a movie.*');
    }

    let data = await fetchJson(`https://visper-md-ap-is.vercel.app/movie/sublk/infodl?q=${q}`);
    const res = data.result;

    if (!res) return await reply('*🚩 No details found !*');

    let msg = `*☘️ 𝗧ɪᴛʟᴇ ➮* *_${res.title || 'N/A'}_*

*📅 𝗥ᴇʟᴇᴀꜱᴇ 𝗗𝗮𝘁𝗲 ➮* _${res.releaseDate || 'N/A'}_
*🌎 𝗖𝗼𝘂𝗻𝘁𝗿𝘆 ➮* _${res.country || 'N/A'}_
*💃 𝗥𝗮𝘁𝗶𝗻𝗴 ➮* _IMDb: ${res.imdb || 'N/A'} / TMDb: ${res.tmdb || 'N/A'}_
*⏰ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 ➮* _${res.runtime || 'N/A'}_
*🎭 𝗚𝗲𝗻𝗿𝗲𝘀 ➮* ${res.genres?.join(', ') || 'N/A'}

*📖 Synopsis:* 
_${res.synopsis || 'N/A'}_

${config.FOOTER}
`;

    // Prepare button rows
    let rows = [];
    res.downloads.forEach((dl, i) => {
        rows.push({
            buttonId: `${prefix}sbuzndl ${dl.finalLink}±${res.poster}±${res.title}
            
			\`[${dl.quality}]\``,
            buttonText: { 
                displayText: `${dl.size} (${dl.quality})`
                  .replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|HDRip|FHD|HD|SD/gi, "")
                  .trim()
            },
            type: 1
        });
    });

    const buttonMessage = {
        image: { url: res.poster.replace('-200x300', '') },
        caption: msg,
        footer: config.FOOTER,
        buttons: rows,
        headerType: 4
    };

    // List buttons (nativeFlow style)
    const rowss = res.downloads.map((dl, i) => {
        const cleanText = `${dl.size} (${dl.quality})`
          .replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|HDRip|FHD|HD|SD/gi, "")
          .trim() || "No info";

        return {
            title: cleanText,
            id: `${prefix}sbuzndl ${dl.finalLink}±${res.poster}±${res.title}
            
			\`[${dl.quality}]\``
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
            image: { url: res.poster.replace('-200x300', '') },

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
    pattern: "sbuzndl",
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
console.log(`Input:`, q)
    try {
        //===================================================
        const [pix, imglink, title] = q.split("±");
        if (!pix || !imglink || !title) return await reply("⚠️ Invalid format. Use:\n`sindl link±img±title`");
        //===================================================

        const da = pix.split("https://pixeldrain.com/u/")[1];
		console.log(da)
        if (!da) return await reply("⚠️ Couldn’t extract Pixeldrain file ID.");

        const fhd = `https://pixeldrain.com/api/file/${da}`;
        isUploadinggg = true; // lock start

        //===================================================
        const botimg = imglink.trim();
        const message = {
            document: { url: fhd },
            caption: `🎬 ${title}\n\n${config.NAME}\n\n${config.FOOTER}`,
            mimetype: "video/mp4",
            jpegThumbnail: await (await fetch(botimg)).buffer(),
            fileName: `${title}.mp4`,
        };

        // Send "uploading..." msg without blocking
        conn.sendMessage(from, { text: '*Uploading your movie.. ⬆️*', quoted: mek });

        // Upload + react + success (parallel tasks)
        await Promise.all([
            conn.sendMessage(config.JID || from, message),
            conn.sendMessage(from, { react: { text: '✔️', key: mek.key } })
        ]);

    } catch (e) {
        reply('🚫 *Error Occurred !!*\n\n' + e.message);
        console.error("sindl error:", e);
    } finally {
        isUploadinggg = false; // reset lock always
    }
});
