const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Put Your Session Id Here",
MONGODB: process.env.MONGODB || "mongodb://mongo:ugUHcTyXvgPmrGpmWtrCwrrWoUSQxDbZ@autorack.proxy.rlwy.net:11616",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "𝙼𝙰𝙻𝚅𝙸𝙽-𝙼𝙳",
BOT_NUMBER: process.env.BOT_NUMBER || "263714757857",
AUTO_AI: process.env.AUTO_AI || "false",
LANG: process.env.LANG || "SI"


//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

  
  START_MSG: process.env.START_MSG || `🚀 *_MALVIN-MD Connected Successfully!_* ✅ 

--- *👨‍💻🎉 _Welcome to MALVIN-MD!_* 🎉🥰 

*🙃 PREFIX:* .

*🙃 OWNER:* 263714757857


_Thank you for using_ *👨‍💻MALVIN MD🥰.*
_We're here to make your experience enjoyable and seamless._
_If you need any help or have questions, don't hesitate to ask._ 🌝🥰

*🖇️Join My WhatsApp Channel✓🤗 - :* https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

*🖇️Subscribe My Youtube Channel✓💗 - :* https://www.youtube.com/@malvintech2 

*🖇️Fork & Star My Repo✓💗 - :* https://github.com/kingmalvn/MALVIN-MD

*🖇️Follow My Github Account✓💗 - :* https://github.com/kingmalvn 

_*👨‍💻 Enjoy your time with us! 😊*_

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ ᴛᴇᴄʜ*` ,

  ALIVE_IMG: process.env.ALIVE_IMG || "https://g.top4top.io/p_3218pggm51.jpg",
  MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/uxnee2.jpg",
  MENU_MSG: process.env.MENU_MSG || `Menumsg`,
    MENU_MS: process.env.MENU_MS || `menu 2`,

};


