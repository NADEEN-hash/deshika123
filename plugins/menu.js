const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    alias: ["menu"],
    desc: "Check bot online or no.",
    category: "main",
    react: "🎬",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = "*`🍟𝙼𝙾𝚅𝙸𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙼𝙴𝙽𝚄🍟`*\n\n*🧨2.1GB* වලට අඩු ඕනෙම ෆිල්ම් එකක් ගන්න පුළුවන්\n\n *╭─「 `NADEEN-MD` 」*\n*╭──────────●●►*\n🎬│ Movie Search - *.mv*\n🎬│ Cinesubz.co - *.cine*\n🎬│ Sinhalasub.lk - *.sinhalasub*\n🎬│ Yts.mx - *.ytsmx*\n🎬│ Baiscopes.lk - *.baiscopes*\n🎬│ Pupilvideo.com - *.pupilvideo*\n🎬│ Pirates.lk - *.pirate*\n🎬│ 1377.tt - *.1377*\n🎬│ Tv series - *.tv*\n🎬│ Slanimeclub.lk - *.slanime*\n🎬│ Get infomations - *.mvinfo*\n🎬│ Direct Link Download - *.directdl/.upmv/.mkv/.upzip/uptv*\n🎬│ Get *Jid* - *.jid*\n🎬│Google Drive - *.gdrive*\n*╰──────────●●►*\n\n\n> *`🎬𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗🎬`*"

return await conn.sendMessage(from,{image: {url: "https://files.catbox.moe/beynkp.png"},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
