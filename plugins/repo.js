const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*🚀 *_🧚‍♀️ 𝐌alvin Md repo!_* ✅ 

--- *🧚‍♀️🎉 _Welcome to MIKU-MD!_* 🎉💃 

*💃🔹 Repo:* https://github.com/kingmalvn/MALVIN-MD 

*💃🔹 OWNER:* < 263714757857 >🪄⚡


_Thank you for using_   💃MIKU-MD💗*. 
_We're here to make your experience enjoyable and seamless._
_If you need any help or have questions, don't hesitate to ask._ 😼💗

*🖇️Join My WhatsApp Channel✓🤍 - :* https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z


_*💃Enjoy your time with us!💡*_

> *💐𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©Ｍａｌｖｉｎ Ｋｉｎｇ 2024^🤍*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/uxnee2.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
