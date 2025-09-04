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
    pattern: "niki",	
    react: '🔎',
    category: "movie",
alias: ["nikii"],
        desc: "niki tv shows search",
    use: ".niki  2025",
    filename: __filename
},
async (conn, m, mek, { from, q, prefix, isMe, reply }) => {
try{


const pr = (await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json')).data;

// convert string to boolean
const isFree = pr.mvfree === "true";

// if not free and not premium or owner
if (!isFree && !isMe && !isPre) {
    await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
    return await conn.sendMessage(from, {
    text: "*`You are not a premium user⚠️`*\n\n" +
          "*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n" +
          "_Price : 200 LKR ✔️_\n\n" +
          "*👨‍💻Contact us : 0711451319 , 0755275844*"
}, { quoted: mek });

}






	
 if(!q) return await reply('*please give me tv shows name !..*')
const url = await fetchJson(`https://sadas-niki-search.vercel.app/api/search?q=${q}`);
	

  if (!url || !url.results || url.results.length === 0) 
	{
		await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            return await conn.sendMessage(from, { text: '*No results found ❌*' }, { quoted: mek });
	}
var srh = [];  
for (var i = 0; i < url.results.length; i++) {
srh.push({
title: url.results[i].title.replace("Sinhala Subtitles | සිංහල උපසිරැසි සමඟ", "").replace("Sinhala Subtitle | සිංහල උපසිරැසි සමඟ", "")|| 'Result not found',
description: '',
rowId: prefix + `nikiinfo ${url.results[i].link}&${url.results[i].image}&${url.results[i].title}`
});
}

const sections = [{
title: "niki.co results",
rows: srh
}	  
]
const listMessage = {
text: `_*NIKI MOVIE SEARCH 🔎*_

*\`Input :\`* ${q}`,
footer: config.FOOTER,
title: 'niki.co results',
buttonText: '*Reply Below Number 🔢*',
sections
}

	
await conn.listMessage(from, listMessage,mek)

} catch (e) {
    console.log(e)
  await conn.sendMessage(from, { text: '🚩 *Error !!*' }, { quoted: mek } )
}
})

cmd({
    pattern: "nikiinfo",	
    react: '🎥',
     desc: "moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isMe, isSudo, isOwner, prefix, reply }) => {
try{

    
  const url = q.split("&")[0]
const image = q.split("&")[1]
const title = q.split("&")[2]
	
let sadas = await fetchJson(`https://sadas-niki-info.vercel.app/api/download-link?url=${url}`)
let msg = `*☘️ 𝗧ɪᴛʟᴇ ➮* *_${title   || 'N/A'}_*
`

if (sadas.length < 1) return await conn.sendMessage(from, { text: 'erro !' }, { quoted: mek } )

var rows = [];

rows.push({
    buttonId: prefix + `nikidet ${url}&${image}&${title}`,
    buttonText: { displayText: 'Details Send' },
    type: 1
});

rows.push({
    buttonId: prefix + `nikidl ${sadas.downloadLink}&${image}&${title}`,
    buttonText: { displayText: 'Movie Send' },
    type: 1
});




  
const buttonMessage = {
 
image: {url: image.replace("-150x150", "") },	
  caption: msg,
  footer: config.FOOTER,
  buttons: rows,
  headerType: 4
}



      return await conn.buttonMessage(from, buttonMessage, mek)
    




} catch (e) {
    console.log(e)
  await conn.sendMessage(from, { text: '🚩 *Error !!*' }, { quoted: mek } )
}
})

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const agent = new https.Agent({ rejectUnauthorized: false });

cmd({
  pattern: "nikidl",
  react: "⬆️",
  alias: ["fetchhh"],
  desc: "Direct downloader from a link with headers",
  category: "movie",
  use: '.directdl <Direct Link>',
  dontAddCommandList: false,
  filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
  try {
   const urll = q.split("&")[0]
const image = q.split("&")[1]
const title = q.split("&")[2]

const sadas = await fetchJson(`https://sadas-niki-dl.vercel.app/get-direct-link?url=${urll}`);
	  
	 const url = `${sadas.directLink}`
    let mime = 'application/octet-stream';
    let fileName = 'downloaded_file';

    // Custom headers
    const headers = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139 Safari/537.36",
      "Accept": "*/*",
      "Connection": "keep-alive",
      "Upgrade-Insecure-Requests": "1",
      "Cookie": "lang=english; affiliate=R38RRFaGV0oLf0GXE2X0lpIV2WaF432kf15pjR1YZyaeAMthcXNumYeUEEJtZTuwbvrZXR7QZg8g%2B3TZJqi7POGAbU0xtoSYmXurTKrYYOMS%2FA8xZBxJmYo%3D"
    };


	  
    // Try HEAD request first
    try {
      const headResp = await axios.head(url, { httpsAgent: agent, headers });

      if (headResp.headers['content-type']) mime = headResp.headers['content-type'];

      const disposition = headResp.headers['content-disposition'];
      if (disposition && disposition.includes('filename=')) {
        const match = disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        if (match && match[1]) fileName = match[1].replace(/['"]/g, '');
      } else {
        const parsedPath = new URL(url).pathname;
        const baseName = path.basename(parsedPath);
        if (baseName) fileName = baseName;
      }

    } catch (headErr) {
      // fallback GET with stream
      const getResp = await axios.get(url, { httpsAgent: agent, headers, responseType: 'stream' });

      if (getResp.headers['content-type']) mime = getResp.headers['content-type'];

      const disposition = getResp.headers['content-disposition'];
      if (disposition && disposition.includes('filename=')) {
        const match = disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        if (match && match[1]) fileName = match[1].replace(/['"]/g, '');
      } else {
        const parsedPath = new URL(url).pathname;
        const baseName = path.basename(parsedPath);
        if (baseName) fileName = baseName;
      }
    }

    // Send the file as document
    await conn.sendMessage(config.JID || from, {
      document: { url },
      mimetype: "video/mp4",
      jpegThumbnail: await (await fetch(image)).buffer(),
      fileName: `${title}.mp4`,
      caption: `*🎬 Name :* *${title}*\n\n${config.NAME}`
    });

    // React with ✅
    await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

  } catch (e) {
    reply(`❗ Error occurred: ${e.message}`);
  }
});


cmd({
    pattern: "nikidet",
    react: '🎥',
    desc: "Send detailed movie info",
    filename: __filename
}, 
async (conn, m, mek, { from, q, reply }) => {
    try {
        if (!q) return reply('Please provide a movie title or URL & image & title');

        let url, image, title;
        let released, country, rating, runtime, subtitle = 'N/A'; // default fallback

        if (q.includes("&")) {
            // Case: URL & image & title
            [url, image, title] = q.split("&");
        } else {
            // Case: just title, maybe extra text after "|"
            title = q.split('|')[0].trim(); 

            // Remove year in parentheses, e.g., "Saint Maud (2019)" -> "Saint Maud"
            title = title.replace(/\(\d{4}\)/, '').trim();

            // Fetch movie info from OMDb
            const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=76cb7f39`;
            const response = await axios.get(apiUrl);
            const movie = response.data;

            if (movie.Response === "False") return reply(`Movie not found: ${title}`);

            title = movie.Title || title;
            image = movie.Poster || 'https://via.placeholder.com/300x450?text=No+Image';
            released = movie.Released || 'N/A';
            country = movie.Country || 'N/A';
            rating = movie.imdbRating || 'N/A';
            runtime = movie.Runtime || 'N/A';
        }

        // Extra follow link
        const details = (await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/footer/nadeen-md.json')).data;

        const msg = `*☘️ 𝗧ɪᴛʟᴇ ➮* ${title}\n\n` +
                    `*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* ${released || 'N/A'}\n` +
                    `*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* ${country || 'N/A'}\n` +
                    `*💃 𝗥ᴀᴛɪɴɢ ➮* ${rating || 'N/A'}\n` +
                    `*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* ${runtime || 'N/A'}\n` +
                    `> 🌟 Follow us : *${details.chlink}*`;

        await conn.sendMessage(from, { image: { url: image.replace("-150x150", "") }, caption: msg });
        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending*', { quoted: mek });
    }
});

cmd({
    pattern: "cinesl",
    react: '🔎',
    category: "movie",
    desc: "CineSL movie search",
    use: ".cinesl 2025",
    filename: __filename
}, async (conn, m, mek, { from, isPre, q, prefix, isMe, isSudo, isOwner, reply }) => {
     try {
        // Premium check
        const pr = (await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json')).data;
        const isFree = pr.mvfree === "true";
        if (!isFree && !isMe && !isPre) {
            await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            return await conn.sendMessage(from, {
                text: "*`You are not a premium user⚠️`*\n\n" +
                      "*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n" +
                      "_Price : 200 LKR ✔️_\n\n" +
                      "*👨‍💻Contact us : 0711451319 , 0755275844*"
            }, { quoted: mek });
        }

        // Require query
        if(!q) return await reply('*Please give me text !..*');

        // Fetch CineSL API
        let response = await fetchJson(`https://visper-cinesl-search-126b.vercel.app/search?q=${encodeURIComponent(q)}`);
        let results = response.results;

        if (!results || results.length === 0) {
            await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            return await conn.sendMessage(from, { text: '*No results found ❌*' }, { quoted: mek });
        }

        // Prepare list rows
        const rows = results.map(v => ({
            title: `${v.title}`,
            //description: `Rating: ${v.rating} | Quality: ${v.quality}`,
            rowId: prefix + `cineslinfo ${v.link}&${v.image}`
        }));

        const listMessage = {
            text: `*_CINESL MOVIE SEARCH RESULT 🎬_*\n\n*Input:* ${q}`,
            footer: config.FOOTER,
            title: 'CineSL results',
            buttonText: '*Reply Below Number 🔢*',
            sections: [{ title: "Available Movies", rows }]
        };

        await conn.listMessage(from, listMessage, mek);

    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { text: '🚩 *Error !!*' }, { quoted: mek });
    }
});

cmd({
    pattern: "cineslinfo",
    react: '🎥',
    desc: "Movie downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isMe, isSudo, isOwner, prefix, reply }) => {
try {
    const urll = q.split("&")[0];
    const im = q.split("&")[1];

    // Fetch movie info from new API
    let sadas = await fetchJson(`https://visper-cinesl-info-dl.vercel.app/api?url=${encodeURIComponent(urll)}&apikey=sadas`);
    if (!sadas.status) return await conn.sendMessage(from, { text: '❌ Error fetching data' }, { quoted: mek });

    const data = sadas.result;

    let msg = `*☘️ 𝗧ɪᴛʟᴇ ➮* *_${data.title || 'N/A'}_*\n\n` +
              `*📅 𝗬𝗲𝗮𝗿 ➮* _${data.year || 'N/A'}_\n` +
              `*⏰ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻 ➮* _${data.duration || 'N/A'}_\n` +
              `*💃 𝗥𝗮𝘁𝗶𝗻𝗴 ➮* _${data.rating || 'N/A'}_\n` +
              `*🎬 𝗗𝗶𝗿𝗲𝗰𝘁𝗼𝗿𝘀 ➮* ${data.directors.join(', ') || 'N/A'}\n` +
              `*👨‍👩‍👧 𝗖𝗮𝘀𝘁 ➮* ${data.cast.join(', ') || 'N/A'}`;

    // Prepare buttons for downloads
    let rows = [];
    rows.push({
        buttonId: prefix + `bdetails ${urll}&${im}`,
        buttonText: { displayText: 'Details Send' },
        type: 1
    });

    data.downloads.forEach(v => {
        rows.push({
            buttonId: prefix + `cinesldlll ${im}±${v.link}±${data.title} *[${v.quality}]*`,
            buttonText: { displayText: `${v.server} - ${v.quality} (${v.lang})` },
            type: 1
        });
    });

    // Prepare listButtons object for button select
    const rowss = data.downloads.map(v => ({
        title: `${v.server} - ${v.quality}`,
        id: prefix + `cinesldlll ${im}±${v.link}±${data.title} *[${v.quality}]*`
    }));

    const listButtons = {
        title: "🎬 Choose a download link :)",
        sections: [{ title: "Available Links", rows: rowss }]
    };

   
        const buttonMessage = {
            image: { url: im.replace("-150x150", "") },
            caption: msg,
            footer: config.FOOTER,
            buttons: rows,
            headerType: 4
        };
        await conn.buttonMessage(from, buttonMessage, mek);
  

} catch (e) {
    console.log(e);
    await conn.sendMessage(from, { text: '🚩 *Error !!*' }, { quoted: mek });
}
});


// Use global-ish variable to prevent redeclaration errors
global.isUploadingggg = global.isUploadingggg || false;

cmd({
    pattern: "cinesldlll",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {

    if (!q) return await reply('*Please provide a direct URL!*');

    if (global.isUploadingggg) {
        return await conn.sendMessage(from, {
            text: '*A movie is already being uploaded. Please wait a while before uploading another one.* ⏳',
            quoted: mek
        });
    }

    try {
        global.isUploadingggg = true; // Set upload in progress

        const [datae, datas, dat] = q.split("±");

        const sadas = await GDriveDl(datas);

        let txt = `*CINESL MOVIE FILE*
*┌──────────────────*
*├ 📁 Size :* ${sadas.fileSize}
*└──────────────────*`;

        const botimg = datae;

        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });
        await conn.sendMessage(from, { text: '*Uploading your movie..⬆️*' });

        await conn.sendMessage(config.JID || from, {
            document: { url: sadas.downloadUrl },
            caption: `*🎬 Name :* ${dat}\n\n${config.NAME}`,
            mimetype: "video/mp4",
            jpegThumbnail: await (await fetch(botimg)).buffer(),
            fileName: `${dat}.mp4`
        });

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

    } catch (error) {
        console.error('Error fetching or sending:', error);
        await conn.sendMessage(from, { text: "*Error fetching this moment, please retry now ❗*" }, { quoted: mek });
    } finally {
        global.isUploadingggg = false; // Reset upload status
    }
});


