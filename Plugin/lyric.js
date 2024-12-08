const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../DATABASE/functions')
const { lyrics, lyricsv2 } = require('@bochilteam/scraper');

var tmsg =''
if(config.LANG === 'SI') tmsg = '*Ndinokumbira, Zita re nziyo. !*'
else tmsg = "*Please give me a song name. !*"
var descg = ''
if(config.LANG === 'SI') descg = "Ndipe ma lyrics  enziyo yacho."
else descg = "It gives lyrics of given song name."
var cantscg = ''
if(config.LANG === 'SI') cantscg = "*Ndamashaya ma lyrics  enziyo yacho !*"
else cantscg = "*I cant find lyrics of this song !*"

cmd({
    pattern: "lyric",
    alias: ["lyrics"],
    react: '🎙️',
    desc: descg,
    category: "search",
    use: '.lyric <song name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(tmsg)
const result = await fetchJson(`https://some-random-api.com/lyrics?title=${text}`)
if(result.lyrics) reply(`
*[🧚 MALVIN - ＭＤ 🧚‍]*

   *LYRICS SEARCH*
   
*${result.title}*
_${result.artist}_


${result.lyrics}

└───────────◉

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ*`)
else reply(cantscg)
} catch (e) {
reply(cantscg)
l(e)
}
})
