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
  fetch = (..._0x1c20f7) =>
    import('node-fetch').then(({ default: _0x557a09 }) =>
      _0x557a09(..._0x1c20f7)
    ),
  { Buffer } = require('buffer'),
  FormData = require('form-data'),
  fs = require('fs'),
  {
    sinhalasub_search,
    sinhalasub_info,
    sinhalasub_dl,
  } = require('../lib/sinhalasubli'),
  {
    sinhalasubb_search,
    sinhalasubtv_info,
    sinhalasubtv_dl,
  } = require('../lib/sinhalasubtv'),
  path = require('path'),
  fileType = require('file-type'),
  l = console.log
cmd({
    pattern: "sinhalasub",	
    react: '🔎',
    category: "movie",
alias: ["sinhalasub"],
        desc: "sinhalasub.lk movie search",
    use: ".sinhalasub 2025",
    filename: __filename
},
async (conn, m, mek, { from, q, prefix, isPre, isMe, isSudo, isOwner, reply }) => {
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
          "*👨‍💻Contact us : 0778500326 , 0722617699*"
}, { quoted: mek });

}














	
		if( config.MV_BLOCK == "true" && !isMe && !isSudo && !isOwner ) {
	await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            return await conn.sendMessage(from, { text: "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*" }, { quoted: mek });

}
 if(!q) return await reply('*please give me text !...*')
let urll = await sinhalasub_search(q)
 if (urll.length === 0) 
	{
		await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            return await conn.sendMessage(from, { text: '*No results found ❌*' }, { quoted: mek });
        }
   
	
	var srh = [];  
for (var i = 0; i < urll.length; i++) {
srh.push({
title: urll[i].Title.replace("Sinhala Subtitles | සිංහල උපසිරසි සමඟ", ""),
description: '',
rowId: prefix + 'sininfo ' + urll[i].Link
});
}

const sections = [{
title: "sinhalasub.lk results",
rows: srh
}	  
]
const listMessage = {
text: `_*SINHALASUB MOVIE SEARCH RESULTS 🎬*_

*\`🌋Input :\`* ${q}`,
footer: config.FOOTER,
title: 'cinesubz.co results 🎬',
buttonText: '*Reply Below Number 🔢*',
sections
}
const caption = `_*SINHALASUB MOVIE SEARCH RESULTS 🎬*_

*\`🏔️Input :\`* ${q}`;

    // ✅ Button mode toggle
    const rowss = urll.map((v, i) => {
    // Clean size and quality text by removing common tags
    const cleanText = `${urll[i].Title}`
      .replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, "")
      .trim() || "No info";

    return {
      title: cleanText,
      id: prefix + `sininfo ${urll[i].Link}` // Make sure your handler understands this format
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
     reply('🚫 *Error Accurated !!*\n\n' + e )
console.log(e)
}
})




cmd({
    pattern: "sininfo",
    alias: ["mdv"],
    use: '.moviedl <url>',
    react: "🎥",
    desc: "download movies from sinhalasub.lk",
    //category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, prefix, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('🚩 *Please give me a url*')

let sadass = await fetchJson(`https://visper-md-ap-is.vercel.app/movie/sinhalasub/info?q=${q}`)
	if (!q || !q.includes('https://sinhalasub.lk/movies/')) {
    console.log('Invalid input:', q);
    return await reply('*❗ This is a TV series, please use .tv command.*');
}
const sadas = sadass.result;
if (sadas.length < 1) return await conn.sendMessage(from, { text: "🚩 *I couldn't find anything :(*" }, { quoted: mek } )
var rows = [];  	
rows.push(
    { buttonId: prefix + 'daqt ' + q, buttonText: { displayText: 'Send Details 💡' }, type: 1 },
    { buttonId: prefix + 'ch ' + q, buttonText: { displayText: 'Send Images 💡\n' }, type: 1 }
);
sadas.downloadLinks.map((v) => {
rows.push({
 buttonId: prefix + `sindl ${v.link}±${sadas.images[1]}±${sadas.title}
	
	*\`[ ${v.quality} ]\`*`,
        buttonText: { displayText: `${v.size} - ${v.quality}` },
        type: 1
          },
		 
	 );
        })
 const msg = `*🌾 𝗧ɪᴛʟᴇ ➮* *_${sadas.title || 'N/A'}_*

*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _${sadas.date || 'N/A'}_
*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _${sadas.country || 'N/A'}_
*💃 𝗥ᴀᴛɪɴɢ ➮* _${sadas.rating || 'N/A'}_
*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _${sadas.duration || 'N/A'}_
*🕵️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _${sadas.author || 'N/A'}_
`
const buttonMessage = {
 
image: {url: sadas.images[0] || images},	
  caption: msg,
  footer: config.FOOTER,
  buttons: rows,
  headerType: 4
}




	




const rowss = sadas.downloadLinks.map((v, i) => {
    // Clean size and quality text by removing common tags
    const cleanText = `${v.size} - ${v.quality}`
      .replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, "")
      .trim() || "No info";

    return {
      title: cleanText,
      id: prefix + `sindl ${v.link}±${sadas.images[1]}±${sadas.title}
	
	*\`[ ${v.quality} ]\`*` // Make sure your handler understands this format
    };
  });


const listButtons = {
    title: "🎬 Choose a download link :)",
    sections: [
      {
        title: "Available Links",
        rows: rowss
      }
    ]
  };

if (config.BUTTON === "true") {
      await conn.sendMessage(from, {
    image: { url: sadas.images[0] || images},
    caption: msg,
    footer: config.FOOTER,
    buttons: [
{
            buttonId: prefix + 'daqt ' + q,
            buttonText: { displayText: "Details Send" },
            type: 1
        },
	   
	 {
            buttonId: prefix + 'ch ' + q,
            buttonText: { displayText: "Images Send" },
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
   reply('🚫 *Error Accurated !!*\n\n' + e )
console.log(e)
}
})

let isUploadinggg = false; // Track upload status

cmd({
    pattern: "sindl",
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
        const [pix, imglink, title] = q.split("±");
        if (!pix || !imglink || !title) return await reply("⚠️ Invalid format. Use:\n`sindl link±img±title`");
        //===================================================

        const da = pix.split("https://pixeldrain.com/u/")[1];
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
            conn.sendMessage(from, { react: { text: '✔️', key: mek.key } }),
            conn.sendMessage(from, { text: `*Movie sent successfully  ✔*`, quoted: mek })
        ]);

    } catch (e) {
        reply('🚫 *Error Occurred !!*\n\n' + e.message);
        console.error("sindl error:", e);
    } finally {
        isUploadinggg = false; // reset lock always
    }
});

cmd({
    pattern: "daqt",
    alias: ["mdv"],
    use: '.moviedl <url>',
    react: "🎥",
    desc: "download movies from sinhalasub.lk",
    //category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, prefix, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('🚩 *Please give me a url*')

let sadas = await sinhalasub_info(q)
	
const details = (await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json')).data
  


 const msg = `*🍿 𝗧ɪᴛʟᴇ ➮* *_${sadas.title || 'N/A'}_*

*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _${sadas.date || 'N/A'}_
*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _${sadas.country || 'N/A'}_
*💃 𝗥ᴀᴛɪɴɢ ➮* _${sadas.rating || 'N/A'}_
*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _${sadas.duration || 'N/A'}_
*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _${sadas.author || 'N/A'}_

> 🌟 Follow us : *${details.chlink}*`
await conn.sendMessage(config.JID || from, { image: { url: sadas.images[0] || images }, caption: msg })



 await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});
  
cmd({
	pattern: "sinhalasubtv",	
    react: '🔎',
    category: "movie",
alias: ["sinhalatv"],
        desc: "sinhalasub.lk tv shows search",
    use: ".sinhalasubtv 2025",
    filename: __filename
},
async (conn, m, mek, { from, q, prefix, isPre, isMe, isSudo, isOwner, reply }) => {
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
          "*👨‍💻Contact us : 0778500326 , 0722617699*"
}, { quoted: mek });

}














	

		if( config.MV_BLOCK == "true" && !isMe && !isSudo && !isOwner ) {
	await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            return await conn.sendMessage(from, { text: "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*" }, { quoted: mek });

}
 if(!q) return await reply('*please give me text !..*')
let urll = await sinhalasubb_search(q)

  if (urll.length === 0) 
	{
		await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            return await conn.sendMessage(from, { text: '*No results found ❌*' }, { quoted: mek });
	}
var srh = [];  
for (var i = 0; i < urll.length; i++) {
srh.push({
title: urll[i].Title.replace("Sinhala Subtitles | සිංහල උපසිරසි සමඟ", ""),
description: '',
rowId: prefix + 'sintvinfo ' + urll[i].Link
});
}

const sections = [{
title: "sinhalasub.lk results",
rows: srh
}	  
]
const listMessage = {
text: `*_SINHALASUB TV SEARCH RESULTS 📺_*

*\`🔰Input :\`* ${q}`,
footer: config.FOOTER,
title: 'sinhalasub.lk results 🎬',
buttonText: '*Reply Below Number 🔢*',
sections
}
const caption = `*_SINHALASUB TV SEARCH RESULTS 📺_*

*\`Input :\`* ${q}`;

    // ✅ Button mode toggle
    const rowss = urll.map((v, i) => {
    // Clean size and quality text by removing common tags
    const cleanText = `${urll[i].Title}`
      .replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, "")
      .trim() || "No info";

    return {
      title: cleanText,
      id: prefix + `sintvinfo ${urll[i].Link}` // Make sure your handler understands this format
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
     reply('🚫 *Error Accurated !!*\n\n' + e )
console.log(e)
}
})
cmd({
    pattern: "sintvinfo",
    alias: ["mdv"],
    use: '.moviedl <url>',
    react: "🎥",
    desc: "download movies from sinhalasub.lk",
    //category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, prefix, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('🚩 *Please give me a url*')
if (!q || !q.includes('https://sinhalasub.lk/tvshows/')) {
    console.log('Invalid input:', q);
    return await reply('*❗ This is a movie, please use .mv command.*');
}
let sadas = await sinhalasubtv_info(q)

var rows = [];  	
rows.push({
 buttonId: prefix + 'dtaqt ' + q, buttonText: {displayText: 'Details send'}, type: 1}

);
sadas.result.episodes.map((v) => {
rows.push({
 buttonId: prefix + `sintvfirstdl ${v.episode_link}+${sadas.result.image[0]}`,
        buttonText: { displayText: `${v.title}` },
        type: 1
          },
		 
	 );
        })
 const msg = `*☘️ 𝗧ɪᴛʟᴇ ➮* *_${sadas.result.title || 'N/A'}_*

*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _${sadas.result.date || 'N/A'}_
*💃 𝗥ᴀᴛɪɴɢ ➮* _${sadas.result.imdb || 'N/A'}_
*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _${sadas.result.director || 'N/A'}_
`
const buttonMessage = {
 
image: {url: sadas.result.image[0] || images},	
  caption: msg,
  footer: config.FOOTER,
  buttons: rows,
  headerType: 4
}

const rowss = sadas.result.episodes.map((v, i) => {
    // Clean size and quality text by removing common tags
    const cleanText = `${v.title}`
      .replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, "")
      .trim() || "No info";

    return {
      title: cleanText,
      id: prefix + `sintvfirstdl ${v.episode_link}+${sadas.result.image[0]}` // Make sure your handler understands this format
    };
  });


const listButtons = {
    title: "🎬 Choose a download link :)",
    sections: [
      {
        title: "Available Links",
        rows: rowss
      }
    ]
  };

if (config.BUTTON === "true") {
      await conn.sendMessage(from, {
    image: { url:  sadas.result.image[0] || images},
    caption: msg,
    footer: config.FOOTER,
    buttons: [
{
            buttonId: prefix + 'dtaqt ' + q,
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
   reply('🚫 *Error Accurated !!*\n\n' + e )
console.log(e)
}
})
cmd({
    pattern: "sintvfirstdl",	
    react: '🎬',
    //category: "movie",
	 alias: ["tv"],
    desc: "Moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, prefix, isMe, reply }) => {
try{
 if(!q) return await reply('*please give me text !..*')

const dllink = q.split("+")[0]
const img = q.split("+")[1]
let url = await fetchJson(`https://visper-md-ap-is.vercel.app/movie/sinhalasub/tv/dl?q=${dllink}`)

if (url.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < url.result.dl_links.length; i++) {
srh.push({
title: `${url.result.dl_links[i].quality} - ${url.result.dl_links[i].size}`,
description: '',
rowId: prefix + `sintvdl ${url.result.dl_links[i].link}&${url.result.title}&${img}&${url.result.dl_links[i].quality}`
});
}

const sections = [{
title: "",
rows: srh
}	  
]
const listMessage = {
text: `*🍟 Epishodes title :* _*${url.result.title}*_`,
footer: config.FOOTER,
title: '_[cinesubz.co results 🎬]_',
buttonText: '*Reply below number 🔢*',
sections
}




	
const caption = `*🍟 Epishodes title :* _*${url.result.title}*_`;

    // ✅ Button mode toggle
    if (config.BUTTON3 === "true") {
      return await conn.sendMessage(from, {
        text: caption,
        footer: config.FOOTER,
        title: "",
        buttonText: "📺 Select a quality",
        sections
      }, { quoted: mek });
    } else {
      await conn.listMessage(from, listMessage,mek)
    }
} catch (e) {
      reply('🚫 *Error Accurated !!*\n\n' + e )
console.log(e)
}
})
cmd({
    pattern: "sintvdl",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isMe, reply }) => {
  if (isUploading) {
        return await conn.sendMessage(from, { 
            text: '*A movie is already being uploaded. Please wait a while before uploading another one.* ⏳', 
            quoted: mek 
        });
    }
    try {
 

//===================================================	    
const dllink = q.split("&")[0]
const title = q.split("&")[1]
const image = q.split("&")[2]
const filesize = q.split("&")[3]	    
	



	    
//===================================================
let sadas = `${dllink}`
const da = sadas.split("https://pixeldrain.com/u/")[1]
const fhd = `https://pixeldrain.com/api/file/${da}`
//===================================================
isUploading = true; // Set upload in progress

	    
const mediaUrl = fhd.trim();

const botimg = `${image}`
const message = {
            document: { url: mediaUrl },
	    caption: `*🎬 Name :* ${title}\n\n${config.FOOTER}`,
            mimetype: "video/mp4",
	jpegThumbnail: await (await fetch(botimg)).buffer(),
            fileName: `${title}.mp4`,
        };
 await conn.sendMessage(from, {text: '*Uploading your movie..⬆️*'})

//===================================================================================================
        await conn.sendMessage(config.JID || from, message);
//===================================================================================================
        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });

//====================================================================================================
    } catch (e) {
         reply('🚫 *Error Accurated !!*\n\n' + e )
console.log(e)
    }
});
cmd({
    pattern: "dtaqt",
    alias: ["mdv"],
    use: '.moviedl <url>',
    react: "🎥",
    desc: "download movies from sinhalasub.lk",
    //category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, prefix, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('🚩 *Please give me a url*')

let sadas = await sinhalasubtv_info(q)
	
const details = (await axios.get('https://raw.githubusercontent.com/Nadeenpoorna-app/main-data/refs/heads/main/master.json')).data
  


 const msg = `*☘️ 𝗧ɪᴛʟᴇ ➮* *_${sadas.result.title || 'N/A'}_*

*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _${sadas.result.date || 'N/A'}_
*💃 𝗥ᴀᴛɪɴɢ ➮* _${sadas.result.imdb || 'N/A'}_
*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _${sadas.result.director}_

> 🌟 Follow us : *${details.chlink}*

> _*${config.FOOTER}*_
`
await conn.sendMessage(config.JID || from, { image: { url: sadas.result.image[0] || images }, caption: msg })



 await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});
  
cmd({
    pattern: "ch",
    alias: ["mdv"],
    use: '.moviedl <url>',
    react: "🎥",
    desc: "download movies from sinhalasub.lk",
    //category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, prefix, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('🚩 *Please give me a url*')

let sadas = await sinhalasub_info(q)
	
 const imageUrls = sadas.images || []; 
imageUrls.forEach(async (url) => {
                await conn.sendMessage(from, { image: { url } }, { quoted: mek });
            })

 await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});

//===========================================================================================================


