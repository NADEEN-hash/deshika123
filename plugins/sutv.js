const axios = require('axios');
const config = require('../config'); // Assuming config contains settings like FOOTER, LOGO, BUTTON, JID, etc.
let isUploading = false; // Track upload status for downloads

// Helper function to fetch JSON data
async function fetchJson(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch data from ${url}: ${error.message}`);
    }
}

// Command 1: Search for TV shows
cmd({
    pattern: "tvsub",
    react: '🔎',
    category: "tvshow",
    alias: ["tvsearch"],
    desc: "Search for TV shows on subtv.netlify.app",
    use: ".tvsub Zorro",
    filename: __filename
},
async (conn, m, mek, { from, q, prefix, isPre, isMe, isSudo, isOwner, reply }) => {
    try {
        // Check premium status
        const pr = (await axios.get('https://mv-visper-full-db.pages.dev/Main/main_var.json')).data;
        const isFree = pr.mvfree === "true";

        if (!isFree && !isMe && !isPre) {
            await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            return await conn.sendMessage(from, {
                text: "*`You are not a premium user⚠️`*\n\n" +
                      "*Send a message to one of the 2 numbers below and buy Lifetime premium 🎉.*\n\n" +
                      "_Price: 200 LKR ✔️_\n\n" +
                      "*👨‍💻Contact us: 0778500326, 0722617699*"
            }, { quoted: mek });
        }

        // Check if command is blocked
        if (config.MV_BLOCK === "true" && !isMe && !isSudo && !isOwner) {
            await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            return await conn.sendMessage(from, { text: "*This command currently only works for the Bot owner. To disable it for others, use the .settings command 👨‍🔧.*" }, { quoted: mek });
        }

        if (!q) return await reply('*Please provide a search query! E.g., .tvsub Zorro*');

        // Search for TV shows
        const searchUrl = `https://subtv.netlify.app/api/search/search?text=${encodeURIComponent(q)}`;
        const searchResults = await fetchJson(searchUrl);

        if (!searchResults || searchResults.length === 0) {
            await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            return await conn.sendMessage(from, { text: '*No results found ❌*' }, { quoted: mek });
        }

        // Prepare search results for display
        const srh = searchResults.map(item => ({
            title: item.title.replace("Sinhala Subtitles | සිංහල උපසිරසි සමඟ", "").trim(),
            description: '',
            rowId: prefix + 'tvepisodes ' + item.link
        }));

        const sections = [{
            title: "subtv.netlify.app results",
            rows: srh
        }];

        const listMessage = {
            text: `_*SUBTV TV SHOW SEARCH RESULTS 📺*_\n\n*\`Input:\`* ${q}`,
            footer: config.FOOTER,
            title: 'subtv.netlify.app results 📺',
            buttonText: '*Reply Below Number 🔢*',
            sections
        };

        const caption = `_*SUBTV TV SHOW SEARCH RESULTS 📺*_\n\n*\`Input:\`* ${q}`;

        // Button mode for search results
        const rowss = searchResults.map(item => ({
            title: item.title.replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, "").trim() || "No info",
            id: prefix + `tvepisodes ${item.link}`
        }));

        const listButtons = {
            title: "Choose a TV Show :)",
            sections: [{
                title: "Available TV Shows",
                rows: rowss
            }]
        };

        if (config.BUTTON === "true") {
            await conn.sendMessage(from, {
                image: { url: config.LOGO },
                caption: caption,
                footer: config.FOOTER,
                buttons: [{
                    buttonId: "tvshow_list",
                    buttonText: { displayText: "📺 Select Option" },
                    type: 4,
                    nativeFlowInfo: {
                        name: "single_select",
                        paramsJson: JSON.stringify(listButtons)
                    }
                }],
                headerType: 1,
                viewOnce: true
            }, { quoted: mek });
        } else {
            await conn.listMessage(from, listMessage, mek);
        }
    } catch (e) {
        reply('🚫 *Error Occurred !!*\n\n' + e.message);
        console.log(e);
    }
});

// Command 2: Fetch episode list for a TV show
cmd({
    pattern: "tvepisodes",
    react: "📺",
    desc: "Get episode list for a TV show from episodesub.netlify.app",
    filename: __filename
},
async (conn, mek, m, { from, q, prefix, reply }) => {
    try {
        if (!q) return reply('🚩 *Please provide a TV show URL*');

        const episodeUrl = `https://episodesub.netlify.app/.netlify/functions/episodes?url=${encodeURIComponent(q)}`;
        const episodeData = await fetchJson(episodeUrl);

        if (!episodeData || episodeData.length === 0) {
            await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            return await conn.sendMessage(from, { text: '*No episodes found ❌*' }, { quoted: mek });
        }

        // Prepare episode list for display
        const srh = episodeData.map(episode => ({
            title: episode.title.replace("Sinhala Subtitles | සිංහල උපසිරසි සමඟ", "").trim(),
            description: '',
            rowId: prefix + 'tvdetails ' + episode.link
        }));

        const sections = [{
            title: "Episode List",
            rows: srh
        }];

        const listMessage = {
            text: `_*EPISODE LIST 📺*_\n\n*\`Show:\`* ${q.split('/').pop()}`,
            footer: config.FOOTER,
            title: 'Episode List 📺',
            buttonText: '*Reply Below Number 🔢*',
            sections
        };

        const caption = `_*EPISODE LIST 📺*_\n\n*\`Show:\`* ${q.split('/').pop()}`;

        // Button mode for episode list
        const rowss = episodeData.map(episode => ({
            title: episode.title.replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, "").trim() || "No info",
            id: prefix + `tvdetails ${episode.link}`
        }));

        const listButtons = {
            title: "Choose an Episode :)",
            sections: [{
                title: "Available Episodes",
                rows: rowss
            }]
        };

        if (config.BUTTON === "true") {
            await conn.sendMessage(from, {
                image: { url: config.LOGO },
                caption: caption,
                footer: config.FOOTER,
                buttons: [{
                    buttonId: "episode_list",
                    buttonText: { displayText: "📺 Select Episode" },
                    type: 4,
                    nativeFlowInfo: {
                        name: "single_select",
                        paramsJson: JSON.stringify(listButtons)
                    }
                }],
                headerType: 1,
                viewOnce: true
            }, { quoted: mek });
        } else {
            await conn.listMessage(from, listMessage, mek);
        }
    } catch (e) {
        reply('🚫 *Error Occurred !!*\n\n' + e.message);
        console.log(e);
    }
});

// Command 3: Fetch episode details
cmd({
    pattern: "tvdetails",
    react: "🎥",
    desc: "Get details for a specific TV show episode from subdetailes.netlify.app",
    filename: __filename
},
async (conn, mek, m, { from, q, prefix, reply }) => {
    try {
        if (!q || !q.includes('https://subz.lk/')) return reply('🚩 *Please provide a valid episode URL*');

        const detailsUrl = `https://subdetailes.netlify.app/api/details?url=${encodeURIComponent(q)}`;
        const episodeDetails = await fetchJson(detailsUrl);

        if (!episodeDetails) {
            await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            return await conn.sendMessage(from, { text: '*No details found ❌*' }, { quoted: mek });
        }

        const msg = `*☘️ 𝗧ɪᴛʟᴇ ➮* _${episodeDetails.title || 'N/A'}_\n\n` +
                    `*📅 𝗥ᴇʟᴇᴀꜱᴇᴅ ᴅᴀᴛᴇ ➮* _${episodeDetails.date || 'N/A'}_\n` +
                    `*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _${episodeDetails.country || 'N/A'}_\n` +
                    `*💃 𝗥ᴀᴛɪɴɢ ➮* _${episodeDetails.rating || 'N/A'}_\n` +
                    `*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _${episodeDetails.duration || 'N/A'}_\n` +
                    `*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _${episodeDetails.author || 'N/A'}_\n`;

        const rows = [
            { buttonId: prefix + 'daqt ' + q, buttonText: { displayText: 'Send Details 💡' }, type: 1 },
            { buttonId: prefix + 'ch ' + q, buttonText: { displayText: 'Send Images 💡' }, type: 1 }
        ];

        episodeDetails.downloadLinks.forEach(link => {
            rows.push({
                buttonId: prefix + `tvdl ${link.link}±${episodeDetails.images[1] || config.LOGO}±${episodeDetails.title}`,
                buttonText: { displayText: `${link.size} - ${link.quality}` },
                type: 1
            });
        });

        const buttonMessage = {
            image: { url: episodeDetails.images[0] || config.LOGO },
            caption: msg,
            footer: config.FOOTER,
            buttons: rows,
            headerType: 4
        };

        const rowss = episodeDetails.downloadLinks.map(link => ({
            title: `${link.size} - ${link.quality}`.replace(/WEBDL|WEB DL|BluRay HD|BluRay SD|BluRay FHD|Telegram BluRay SD|Telegram BluRay HD|Direct BluRay SD|Direct BluRay HD|Direct BluRay FHD|FHD|HD|SD|Telegram BluRay FHD/gi, "").trim() || "No info",
            id: prefix + `tvdl ${link.link}±${episodeDetails.images[1] || config.LOGO}±${episodeDetails.title}`
        }));

        const listButtons = {
            title: "🎬 Choose a download link :)",
            sections: [{
                title: "Available Links",
                rows: rowss
            }]
        };

        if (config.BUTTON === "true") {
            await conn.sendMessage(from, {
                image: { url: episodeDetails.images[0] || config.LOGO },
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
            await conn.buttonMessage(from, buttonMessage, mek);
        }
    } catch (e) {
        reply('🚫 *Error Occurred !!*\n\n' + e.message);
        console.log(e);
    }
});

// Command 4: Download TV show episode
cmd({
    pattern: "tvdl",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    if (isUploading) {
        return await conn.sendMessage(from, {
            text: '*An episode is already being uploaded. Please wait until it finishes.* ⏳',
            quoted: mek
        });
    }

    try {
        const [pix, imglink, title] = q.split("±");
        if (!pix || !imglink || !title) return await reply("⚠️ Invalid format. Use:\n`tvdl link±img±title`");

        const downloadUrl = `https://subztvdl.netlify.app/api/download?url=${encodeURIComponent(pix)}`;
        const downloadData = await fetchJson(downloadUrl);

        if (!downloadData || !downloadData.link) return await reply("⚠️ Couldn’t extract download link.");

        isUploading = true; // Lock upload
        const message = {
            document: { url: downloadData.link },
            caption: `*🎬 Name: *${title}\n\n${config.NAME}`,
            mimetype: "video/mp4",
            jpegThumbnail: await (await axios.get(imglink, { responseType: 'arraybuffer' })).data,
            fileName: `${title}.mp4`
        };

        // Send uploading message
        await conn.sendMessage(from, { text: '*Uploading your episode.. ⬆️*', quoted: mek });

        // Upload and send success messages
        await Promise.all([
            conn.sendMessage(config.JID || from, message),
            conn.sendMessage(from, { react: { text: '✔️', key: mek.key } }),
            conn.sendMessage(from, { text: `*Episode sent successfully to JID ${config.JID} ✔*`, quoted: mek })
        ]);
    } catch (e) {
        reply('🚫 *Error Occurred !!*\n\n' + e.message);
        console.error("tvdl error:", e);
    } finally {
        isUploading = false; // Reset lock
    }
});

// Command 5: Send episode details (reusing daqt from sinhalasub)
cmd({
    pattern: "daqt",
    react: "🎥",
    desc: "Send detailed information for a TV show episode",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply('🚩 *Please provide a URL*');

        const detailsUrl = `https://subdetailes.netlify.app/api/details?url=${encodeURIComponent(q)}`;
        const episodeDetails = await fetchJson(detailsUrl);

        const details = (await axios.get('https://mv-visper-full-db.pages.dev/Main/main_var.json')).data;

        const msg = `*☘️ 𝗧ɪᴛʟᴇ ➮* _${episodeDetails.title || 'N/A'}_\n\n` +
                    `*📅 �_Rᴇʟᴇᴀꜱᴇᴅ ᴅᴀᴛᴇ ➮* _${episodeDetails.date || 'N/A'}_\n` +
                    `*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _${episodeDetails.country || 'N/A'}_\n` +
                    `*💃 𝗥ᴀᴛɪɴɢ ➮* _${episodeDetails.rating || 'N/A'}_\n` +
                    `*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _${episodeDetails.duration || 'N/A'}_\n` +
                    `*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _${episodeDetails.author || 'N/A'}_\n\n` +
                    `> 🌟 Follow us: *${details.chlink}*`;

        await conn.sendMessage(config.JID || from, {
            image: { url: episodeDetails.images[0] || config.LOGO },
            caption: msg
        });

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
    } catch (e) {
        reply('🚫 *Error Occurred !!*\n\n' + e.message);
        console.log(e);
    }
});

// Command 6: Send images (reusing ch from sinhalasub, if needed)
cmd({
    pattern: "ch",
    react: "🖼️",
    desc: "Send images for a TV show episode",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply('🚩 *Please provide a URL*');

        const detailsUrl = `https://subdetailes.netlify.app/api/details?url=${encodeURIComponent(q)}`;
        const episodeDetails = await fetchJson(detailsUrl);

        if (!episodeDetails.images || episodeDetails.images.length === 0) {
            return await conn.sendMessage(from, { text: '*No images found for this episode.*', quoted: mek });
        }

        for (const img of episodeDetails.images) {
            await conn.sendMessage(from, { image: { url: img }, caption: episodeDetails.title || 'Episode Image' }, { quoted: mek });
        }

        await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } });
    } catch (e) {
        reply('🚫 *Error Occurred !!*\n\n' + e.message);
        console.log(e);
    }
});
