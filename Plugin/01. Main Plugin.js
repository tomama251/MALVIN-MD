const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../DATABASE/functions')
const { checkAccess, isPremiumUser, blacklistedJIDs, premiumJIDs, dataLoaded } = require('../DATABASE/accessControl');
const mono = "```"

    function detectPlatform() {
      if (process.env.REPL_ID) return 'Replit';
      if (process.env.HEROKU_APP_NAME) return 'Heroku';
      if (process.env.KOYEB_PROJECT_ID) return 'Koyeb';
      if (process.env.AWS_LAMBDA_FUNCTION_NAME) return 'AWS Lambda';
      if (process.env.VERCEL) return 'Vercel';
      if (process.env.RENDER) return 'Render';
      if (process.env.NETLIFY) return 'Netlify';
      if (process.env.WORKFLOW) return 'Workflow';
      if (process.env.FLYIO_APP_NAME) return 'Fly.io';
      return 'Unknown Platform';
    }
    const platformName = detectPlatform();

    

cmd({
      pattern: "runtime",
      desc: "Chek Bot Runtime",
      category: "main",
      react: "⏰",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*🚀 𝖱𝗎𝗇𝗍𝗂𝗆𝖾 : ${uptime}*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＭＡＬＶＩＮ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363306168354073@newsletter",
          },
          externalAdReply: {
              title: `Runtime ⏰`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://files.catbox.moe/gdvaaw.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


        




cmd({
      pattern: "alive",
      alias: ["online"],
      desc: "Chek Bot Alive",
      category: "main",
      react: "🧚🏻‍♀️",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*

*🥰🇿🇼 I'm MALVIN 𝖬𝖣 Whatsapp Bot*

> *Platform :*  *${os.hostname()}*
> *Ram Usage :* *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
> *Runtime :* *${runtime(process.uptime())}* 
> *Version :* *2.0.0*
                                                                                                  
*🧚‍♂️ Have A Nice Day 🧚‍♂️*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＭＡＬＶＩＮ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363306168354073@newsletter",
          },
          externalAdReply: {
              title: `I'm Alive Now 👨‍💻`,
              body: `Created by Malvin King`,
              thumbnailUrl: `https://files.catbox.moe/gdvaaw.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });

















cmd({
      pattern: "menu",
      alias: ["panel"],
      desc: "Get Bot Menu",
      category: "main",
      react: "📁",
      filename: __filename
},
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const voice = {
    menu: 'media/malvin.mp3'
}

let menu = {
main: '',
download: '',
movie: '',
group: '',
owner: '',
convert: '',
news: '',
ai: '',
tools: '',
search: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}
   
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*
          
*╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*
*┋* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*┋▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*┋▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*┋▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*┋▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *❖ᴍᴀʟᴠɪɴ-ᴍᴅ v2❖*
*┋▸* *ᴄʀᴇᴀᴛᴏʀ* : *➺ᴍᴀʟᴠɪɴ ᴋɪɴɢ࿐*
*┋▸* *ᴠᴇʀsɪᴏɴ* : *ᴠ.2.0.0*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*

╭━━❮ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄 ❯━╮
        ───────
 ${menu.download}
╰━━━━━━━━━━━━⪼
●●►
╭━━❮ 𝙼𝙾𝚅𝙸𝙴 𝙼𝙴𝙽𝚄 ❯━╮
       ───────
 ${menu.movie}
╰━━━━━━━━━━━━⪼
●●►
╭━━❮ 𝙰𝚒 𝙼𝙴𝙽𝚄 ❯━╮
     ───────
 ${menu.ai}
╰━━━━━━━━━━━━⪼
●●►
╭━━❮ 𝙼𝙰𝙸𝙽 𝙼𝙴𝙽𝚄 ❯━╮
      ───────
 ${menu.main}
╰━━━━━━━━━━━━⪼
●●►
╭━━❮ 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄 ❯━╮
      ───────
 ${menu.fun}
╰━━━━━━━━━━━━⪼
●●►
╭━━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙼𝙴𝙽𝚄 ❯━╮
        ───────
 ${menu.convert}
╰━━━━━━━━━━━━⪼
●●►
╭━━❮ 𝚂𝙴𝙰𝚁𝙲𝙷 𝙼𝙴𝙽𝚄 ❯━╮
       ───────
 ${menu.search}
╰━━━━━━━━━━━━⪼
●●►
╭━━❮ 𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄 ❯━╮
       ───────
 ${menu.group}
╰━━━━━━━━━━━━⪼
●●►
╭━━❮ 𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄 ❯━╮
       ───────
 ${menu.owner}
╰━━━━━━━━━━━━⪼
●●►
╭━━❮ 𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄 ❯━╮
      ───────
 ${menu.other}
╰━━━━━━━━━━━━⪼
●●►
╭━━❮ 𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄 ❯━╮
       ───────
 ${menu.tools}
╰━━━━━━━━━━━━⪼
●●►
╭━━❮ 𝙽𝙴𝚆𝚂 𝙼𝙴𝙽𝚄 ❯━╮
      ───────
 ${menu.news}
╰━━━━━━━━━━━━⪼

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＭＡＬＶＩＮ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363306168354073@newsletter",
          },
          externalAdReply: {
              title: `MALVIN-MD Menu List`,
              body: `Created by Malvin King`,
              thumbnailUrl: `https://files.catbox.moe/gdvaaw.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "owner",
      desc: "Chek Bot Owner",
      category: "main",
      react: "👨‍💻",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*

*👾 ＭＡＬＶＩＮ-ＭＤ 💗*

> *𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ᴍᴀʟᴠɪɴ ᴋɪɴɢ (ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ)*

*⚡ɴᴜᴍʙᴇʀ* -: 263714757857

*⚡ʏᴏᴜᴛᴜʙᴇ -:* https://www.youtube.com/@malvintech2 

*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＭＡＬＶＩＮ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363306168354073@newsletter",
          },
          externalAdReply: {
              title: `MALVIN-MD Owner Information`,
              body: `Created by Malvin King`,
              thumbnailUrl: `https://files.catbox.moe/gdvaaw.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "support",
      desc: "To get the bot informations.",
      category: "main",
      react: "🥰",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*

*🇿🇼MALVIN-MD Support Channels💗*

*Youtube Channel Link:* https://www.youtube.com/@malvintech2 

*Github Profile Link:* https://github.com/kingmalvn 

*Whatsapp Channel Link:* https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＭＡＬＶＩＮ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363306168354073@newsletter",
          },
          externalAdReply: {
              title: `MALVIN-MD Support Channels`,
              body: `Created by Malvin King`,
              thumbnailUrl: `https://files.catbox.moe/gdvaaw.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "repo",
      desc: "To get the repo informations.",
      category: "main",
      react: "📡",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*
          
📍𝖱𝖾𝗉𝗈 𝖫𝗂𝗇𝗄 ❤️‍🔥👇

👨‍💻◦https://github.com/kingmalvn/MALVIN-MD-V2/tree/main 

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖲𝗎𝖻𝗌𝖼𝗋𝗂𝖻𝖾 𝖬𝗒 𝖸𝗈𝗎𝗍𝗎𝖻𝖾 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ https://www.youtube.com/@malvintech2 

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖥𝗈𝗅𝗅𝗈𝗐 𝖬𝗒 𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＭＡＬＶＩＮ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363306168354073@newsletter",
          },
          externalAdReply: {
              title: `MALVIN-MD Repo Informations`,
              body: `Created by Malvin King`,
              thumbnailUrl: `https://files.catbox.moe/gdvaaw.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "about",
      desc: "To get the bot informations.",
      category: "main",
      react: "ℹ️",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `👋 𝐇𝐄𝐋𝐋𝐎𝐖 𝐓𝐇𝐄𝐑 ${senderNumber}

𝐈 𝐀𝐌 𝐌𝐀𝐋𝐕𝐈𝐍-𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓

𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐌𝐀𝐋𝐕𝐈𝐍 𝐓𝐄𝐂𝐇 (𝐌𝐀𝐋𝐕𝐈𝐍 𝐊𝐈𝐍𝐆)..
           
ɢɪᴛʜᴜʙ :    
             
ʏᴏᴜᴛᴜʙᴇ : https://www.youtube.com/@malvintech2 
      
ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ : https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

тнαηкѕ ƒσя υѕιηg мαℓνιи-м∂ ωнαтѕαρρ вσт м∂`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＭＡＬＶＩＮ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363306168354073@newsletter",
          },
          externalAdReply: {
              title: `MALVIN-MD About`,
              body: `Created by Malvin King`,
              thumbnailUrl: `https://files.catbox.moe/gdvaaw.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "system",
      alias: ["status", "botinfo"],
      desc: "Check uptime, RAM usage, CPU info, and more",
      category: "main",
      react: "⏰",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent
        
          
          let desc = `*乂 MALVIN-MD SYSTEM INFORMATION*

*⏰𝖱𝗎𝗇𝗍𝗂𝗆𝖾:-  ${runtime(process.uptime())}*    
*📟𝖱𝖺𝗆 𝖴𝗌𝖺𝗀𝖾:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*⚙️𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆:- ${os.hostname()}*
*👨‍💻𝖮𝗐𝗇𝖾𝗋:- Malvin King*   
*👾𝖵𝖾𝗋𝗌𝗂𝗈𝗇:- 2.0.0*
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ*`

       

          

          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👾 ＭＡＬＶＩＮ  |   𝚃𝙴𝙲𝙷 ジ',
          newsletterJid: "120363306168354073@newsletter",
          },
          externalAdReply: {
              title: `MALVIN-MD System Information`,
              body: `Created by Malvin King`,
              thumbnailUrl: `https://files.catbox.moe/gdvaaw.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "☄",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
         const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        // Check access permissions
        if (!checkAccess(senderNumber, isGroup)) {
            if (blacklistedJIDs.includes(senderNumber)) {
                return reply("*🚫 You are blacklisted. Access denied.*");
            } else {
                return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
            }
        }
        const startTime = Date.now();
        const message = await conn.sendMessage(from, { text: '```Pinging To index.js!!!```' });
        const endTime = Date.now();
        const ping = endTime - startTime;

        // Send the ping response without buttons
        await conn.sendMessage(from, { text: `*📍 Malvin Speed : ${ping}ms*` }, { quoted: message })
    } catch (e) {
        console.error(e);
        reply(`${e}`);
  }
});
