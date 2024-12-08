const { cmd } = require('../command')
const { fetchJson } = require('../DATABASE/functions')

const apilink = 'https://dark-yasiya-api-new.vercel.app' // API LINK ( DO NOT CHANGE THIS!! )

cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    react: "🎧",
    filename: __filename
},
async(conn, mek, m,{from, reply, q}) => {
try{

if(!q) return reply('Give me song name or url !')
    
const search = await fetchJson(`${apilink}/search/yt?q=${q}`)
const data = search.result.data[0];
const url = data.url
    
const ytdl = await fetchJson(`${apilink}/download/ytmp3?url=${data.url}`)
    
let message = `‎‎*👾 𝙼𝙰𝙻𝚅𝙸𝙽 𝚅𝟸 𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁*
╭───────────────╮  
*➢📌 ᴛɪᴛʟᴇ*÷ ${data.title}
*➢👀 ᴠɪᴇᴡꜱ*÷ ${data.views}
*➢💻 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ*÷ ${data.description}
*➢⏳ ᴅᴜʀᴀᴛɪᴏɴ*÷ ${data.timestamp}
*➢⏱️ᴀɢᴏ*÷ ${data.ago}
╰───────────────╯

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ*`;

            // Send the song info with context
            const sentMsg = await conn.sendMessage(
                from,
                {
                    text: message,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "👾 ＭＡＬＶＩＮ  |   𝚃𝙴𝙲𝙷 ジ",
                            newsletterJid: "120363306168354073@newsletter",
                        },
                        externalAdReply: {
                            title: `MALVIN-MD Song Downloader`,
                            body: `${data.title} : Powered By MALVIN MD Song Information Search Engine`,
                            thumbnailUrl: data.thumbnail,
                            sourceUrl: ``,
                            mediaType: 1,
                            renderLargerThumbnail: true,
                        },
                    },
                },
                { quoted: mek },
            );

// SEND AUDIO NORMAL TYPE and DOCUMENT TYPE
await conn.sendMessage(from, { audio: { url: ytdl.result.dl_link }, mimetype: "audio/mpeg" }, { quoted: mek })
await conn.sendMessage(from, { document: { url: ytdl.result.dl_link }, mimetype: "audio/mpeg", fileName: data.title + ".mp3", caption: `${data.title}

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ*`}, { quoted: mek })
  
} catch(e){
console.log(e)
reply(e)
}
})
