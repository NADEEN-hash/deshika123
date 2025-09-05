const config = require('../config')
const axios = require('axios');
const fs = require('fs')
const file_size_url = (...args) => import('file_size_url')
.then(({ default: file_size_url }) => file_size_url(...args));
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    getsize,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('../lib/functions')

const {
    cmd,
    commands
} = require('../command')
let wm = config.FOOTER
let newsize = config.MAX_SIZE * 1024 * 1024
var sizetoo =  "_This file size is too big_"
const yts = require("ytsearch-venom")
const g_i_s = require('g-i-s'); 
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const sharp = require('sharp');

//===================================Sahrp funtion===============================================
async function resizeImage(inputBuffer, width, height) {
    try {
        return await sharp(inputBuffer).resize(width, height).toBuffer();
    } catch (error) {
        console.error('Error resizing image:', error);
        return inputBuffer; 
    }
}
//=============================================== Filwe size checker=========================================

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
        }).on('error', err => reject(err));
    });
}

cmd({
    pattern: "ck",
    alias: ["cv"],
    use: '.video lelena',
    react: "📽️",
      desc: "Download videoss",
    category: "download",
    filename: __filename
},

async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{            
    if (!q) return await reply('*Please enter a query or a url!*')
    const url = q.replace(/\?si=[^&]*/, '');
    var results = await yts(url);
    let wm = config.FOOTER
    var result = results.videos[0]
     let caption = `*📹 🄽🄰🄳🄴🄴🄽 🅅🄸🄳🄴🄾 🄳🄾🅆🄽🄻🄾🄰🄳🄴🅁 📹*
*┌─────────────────────┐*
*├ \`📹 Title\` : ${result.title}* 
*├ \`🐼 Views\` : ${result.views}*
*├ \`⌛Duration\` : ${result.duration}*
*├ \`📎 URL\` : ${result.url}*
*└─────────────────────┘*`
const sections = [
  {
title: "`Video type 📽️`",
rows: [{
title: '```144p Video```',
rowId: prefix + `videodl144 ${result.url}` 
},
{
title: '```240p Video```',
rowId: prefix + `videodl240 ${result.url}`
},
{
title: '```360p Video```',
rowId: prefix + `videodl360 ${result.url}`
},
{
title: '```720p Video```',
rowId: prefix + `videodl720 ${result.url}`
},       
{
title: '```1080p Video```',
rowId: prefix + `videodl1080 ${result.url}`
}
       
]},  

{
title: "`Document type 📁`",
rows: [{
title: '```144p Document```',
rowId: prefix + `docdl144 ${result.url}&${result.thumbnail}&${result.title}`
},
{
title: '```240p Document```',
rowId: prefix + `docdl240 ${result.url}&${result.thumbnail}&${result.title}`
},
{
title: '```360p Document```',
rowId: prefix + `docdl360 ${result.url}&${result.thumbnail}&${result.title}`
},
{
title: '```720p Document```',
rowId: prefix + `docdl720 ${result.url}&${result.thumbnail}&${result.title}`
},       
{
title: '```1080p Document```',
rowId: prefix + `docdl1080 ${result.url}&${result.thumbnail}&${result.title}`
}
       
]}  	
]
const listMessage = {
text: caption,
image: {url: result.thumbnail },	
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*\n',
sections
}

const listButtons = {
  title: "❯❯ Choose a video quality ❮❮",
  sections: [
    {
      title: "Video Type 📽️",
      rows: [
        { title: "144p Video", "description":"144p quality download", id: prefix + `videodl144 ${result.url}` },
        { title: "240p Video",  "description":"240p quality download",id: prefix + `videodl240 ${result.url}` },
        { title: "360p Video", "description":"360p quality download", id: prefix + `videodl360 ${result.url}` },
        { title: "720p Video", "description":"720p quality download",id: prefix + `videodl720 ${result.url}` },
        { title: "1080p Video","description":"1080p quality download", id: prefix + `videodl1080 ${result.url}` }
      ]
    },
    {
      title: "Document Type 📁",
      rows: [
        { title: "144p Document","description":"144p quality download", id: prefix + `docdl144 ${result.url}&${result.thumbnail}&${result.title}` },
        { title: "240p Document", "description":"240p quality download",id: prefix + `docdl240 ${result.url}&${result.thumbnail}&${result.title}` },
        { title: "360p Document","description":"360p quality download", id: prefix + `docdl360 ${result.url}&${result.thumbnail}&${result.title}` },
        { title: "720p Document", "description":"720p quality download",id: prefix + `docdl720 ${result.url}&${result.thumbnail}&${result.title}` },
        { title: "1080p Document","description":"1080p quality download", id: prefix + `docdl1080 ${result.url}&${result.thumbnail}&${result.title}` }
      ]
    }
  ]
};

    // Sending logic based on config.BUTTON
    if (config.BUTTON2 === "true") {
      return await conn.sendMessage(from, {
        image: {url: result.thumbnail },
        caption,
        footer: config.FOOTER,
        buttons: [
          {
            buttonId: "Video quality list",
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

} else if (config.BUTTON2 === 'false') {
   await conn.listMessage4(from, listMessage,mek)
}

	

} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "docdl144",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return await reply('*Need a YouTube URL!*');

        const parts = q.split("&");
        const url = parts[0];
        const thumbUrl = parts[1];
        const title = parts[2] || 'video';

        // Fetch and resize the thumbnail
        const botimgResponse = await fetch(thumbUrl);
        const botimgBuffer = await botimgResponse.buffer();

        // Resize function must be defined elsewhere in your codebase
        const resizedBotImg = await resizeImage(botimgBuffer, 200, 200);

        // Fetch the video download information
        const prog = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${url}&format=mp4&audioBitrate=128&videoQuality=144&filenameStyle=pretty&vCodec=h264`);

    
        const videoUrl = prog.url;

        // React with upload emoji
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        // Send video as document
        await conn.sendMessage(from, {
            document: { url: videoUrl },
            jpegThumbnail: resizedBotImg,
            caption: config?.FOOTER || '',
            mimetype: 'video/mp4',
            fileName: `${prog.filename || title}.mp4`
        }, { quoted: mek });

        // React with check mark
        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

    } catch (e) {
        console.error(e);
        await reply('*An error occurred while processing your request.*');
    }
});



cmd({
    pattern: "docdl240",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return await reply('*Need a YouTube URL!*');

        const parts = q.split("&");
        const url = parts[0];
        const thumbUrl = parts[1];
        const title = parts[2] || 'video';

        // Fetch and resize the thumbnail
        const botimgResponse = await fetch(thumbUrl);
        const botimgBuffer = await botimgResponse.buffer();

        // Resize function must be defined elsewhere in your codebase
        const resizedBotImg = await resizeImage(botimgBuffer, 200, 200);

        // Fetch the video download information
        const prog = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${url}&format=mp4&audioBitrate=128&videoQuality=240&filenameStyle=pretty&vCodec=h264`);

    
        const videoUrl = prog.url;

        // React with upload emoji
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        // Send video as document
        await conn.sendMessage(from, {
            document: { url: videoUrl },
            jpegThumbnail: resizedBotImg,
            caption: config?.FOOTER || '',
            mimetype: 'video/mp4',
            fileName: `${prog.filename || title}.mp4`
        }, { quoted: mek });

        // React with check mark
        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

    } catch (e) {
        console.error(e);
        await reply('*An error occurred while processing your request.*');
    }
});



cmd({
    pattern: "docdl360",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return await reply('*Need a YouTube URL!*');

        const parts = q.split("&");
        const url = parts[0];
        const thumbUrl = parts[1];
        const title = parts[2] || 'video';

        // Fetch and resize the thumbnail
        const botimgResponse = await fetch(thumbUrl);
        const botimgBuffer = await botimgResponse.buffer();

        // Resize function must be defined elsewhere in your codebase
        const resizedBotImg = await resizeImage(botimgBuffer, 200, 200);

        // Fetch the video download information
        const prog = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${url}&format=mp4&audioBitrate=128&videoQuality=360&filenameStyle=pretty&vCodec=h264`);

    
        const videoUrl = prog.url;

        // React with upload emoji
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        // Send video as document
        await conn.sendMessage(from, {
            document: { url: videoUrl },
            jpegThumbnail: resizedBotImg,
            caption: '`[360p]`\n' + config?.FOOTER || '',
            mimetype: 'video/mp4',
            fileName: `📺DINKA📺${prog.filename || title}.mp4`
        }, { quoted: mek });

        // React with check mark
        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

    } catch (e) {
        console.error(e);
        await reply('*An error occurred while processing your request.*');
    }
});



cmd({
    pattern: "docdl720",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { from, q, reply }) => {
try {
           if (!q) return await reply('*Need a youtube url!*')
	        const parts = q.split("&");
        const url = parts[0];
        const thumbUrl = parts[1];
        const title = parts[2] || 'video';

        // Fetch and resize the thumbnail
        const botimgResponse = await fetch(thumbUrl);
        const botimgBuffer = await botimgResponse.buffer();

        // Resize function must be defined elsewhere in your codebase
        const resizedBotImg = await resizeImage(botimgBuffer, 200, 200);

        // Fetch the video download information
        const prog = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${url}&format=mp4&audioBitrate=128&videoQuality=720&filenameStyle=pretty&vCodec=h264`);

    
        const videoUrl = prog.url;

        // React with upload emoji
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        // Send video as document
        await conn.sendMessage(from, {
            document: { url: videoUrl },
            jpegThumbnail: resizedBotImg,
            caption: '`[720p]`\n' + config?.FOOTER || '',
            mimetype: 'video/mp4',
            fileName: `🔰DINKA🔰${prog.filename || title}.mp4`
        }, { quoted: mek });

        // React with check mark
        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
} catch (e) {
	       console.log(e)
        }
    })



cmd({
    pattern: "docdl1080",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { from, q, reply }) => {
try {
           if (!q) return await reply('*Need a youtube url!*')
	
                 const parts = q.split("&");
        const url = parts[0];
        const thumbUrl = parts[1];
        const title = parts[2] || 'video';

        // Fetch and resize the thumbnail
        const botimgResponse = await fetch(thumbUrl);
        const botimgBuffer = await botimgResponse.buffer();

        // Resize function must be defined elsewhere in your codebase
        const resizedBotImg = await resizeImage(botimgBuffer, 200, 200);

        // Fetch the video download information
        const prog = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${url}&format=mp4&audioBitrate=128&videoQuality=1080&filenameStyle=pretty&vCodec=h264`);

    
        const videoUrl = prog.url;

        // React with upload emoji
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        // Send video as document
        await conn.sendMessage(from, {
            document: { url: videoUrl },
            jpegThumbnail: resizedBotImg,
            caption: '`[1080p]`\n' + config?.FOOTER || '',
            mimetype: 'video/mp4',
            fileName: `🎬DINKA🎬${prog.filename || title}.mp4`
        }, { quoted: mek });

        // React with check mark
        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
} catch (e) {
	       console.log(e)
        }
    })


















cmd({
    pattern: "videodl144",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return await reply('*You must provide a YouTube URL!*');

        const res = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${q}&format=mp4&audioBitrate=128&videoQuality=144&filenameStyle=pretty&vCodec=h264`);
        

     
        const videoUrl = res.url;

        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: res.filename || 'Downloaded Video'
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

    } catch (e) {
        console.error(e);
        await reply('*An error occurred while downloading the video.*');
    }
});




cmd({
    pattern: "videodl240",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
           const res = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${q}&format=mp4&audioBitrate=240&videoQuality=144&filenameStyle=pretty&vCodec=h264`);
        

     
        const videoUrl = res.url;

        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: res.filename || 'Downloaded Video'
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })



cmd({
    pattern: "videodl360",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
           const res = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${q}&format=mp4&audioBitrate=360&videoQuality=144&filenameStyle=pretty&vCodec=h264`);
        

     
        const videoUrl = res.url;

        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: res.filename || 'Downloaded Video'
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })




cmd({
    pattern: "videodl720",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
          const res = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${q}&format=mp4&audioBitrate=128&videoQuality=720&filenameStyle=pretty&vCodec=h264`);
        

     
        const videoUrl = res.url;

        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: res.filename || 'Downloaded Video'
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })



cmd({
    pattern: "videodl1080",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
           const res = await fetchJson(`https://sadas-ytmp4-5.vercel.app/convert?link=${q}&format=mp4&audioBitrate=128&videoQuality=1080&filenameStyle=pretty&vCodec=h264`);
        

     
        const videoUrl = res.url;

        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: res.filename || 'Downloaded Video'
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

