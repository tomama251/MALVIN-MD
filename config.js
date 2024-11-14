const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'Adams-2024;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0s3ZzRIeUJLZG1BS3ZKRkh2d1VwalkvczB2R0dub3A0NG5meWtZS0oxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGFCem5icUN6L1RGc05RTXFpSW9GY1NZODZiY1phZXhueVgzSjJVZGdHVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTU9NUTBBNVlTMEU5UUFSSkkxbE5tZkttQ083Q2M4djVaSEZvQXlmdVYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsZllmQXBra3NGYWZYOHRDY1NzeS93U3FrelhGSGNEWTNVN3hVTWlTNTJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdPN2U3Q2tOb0kvRWMyOWlNS2plRWxxekUyL1NTZjBsck9tWUIzMUtvRTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks0Nll3QitlZVQwSVNOYmttbXlEbW9uUmpxUUlJQUg5cC9EN2pQNElpVW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01rL3d3UVJuODhES2tpQndhSkNzRWYvQVZENjdJeWJ5dWNyRjNkN3ltdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYm4rdDlZUGx6dWJPWXdob29zK05oWVZ4Q21DOC9hMUkwR2ZZaUdZbXEzWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc4TFcva0hZaWtobFo1TlBoZk41UkU4dCsvbGVmV043VU1xaTFGbVNwNldsRm13dVhTNkJLQUh5NDBNOHZSTUNSVVczODlsSFdzVXdDcTY0UXhxdml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6Ik9zVUdFeHF6cXluS3gzNWx1Uk1aNWZCVWlRWDgzV1FnUlo3M1pYcE40eUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlNdDJwTlh1UmlPbF9oeXdsTFlIV2ciLCJwaG9uZUlkIjoiMzIwNjA1MmQtYzJmMy00ZTg4LTk5ZWEtZTNjZjVkYWFmNDg2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd3Z0pITDNzbnQ3K0NpaTJNRndZQTJTMmNSVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYRmpzOUtJUWhWREwyM012NGN5VFh3M3dsekU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVDFNRUdIUE0iLCJtZSI6eyJpZCI6IjI2MzcxNDc1Nzg1Nzo0NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXYxbnFFRkVKNjUxN2tHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibWMvS2o3MEZqeUlycGx2RVR4SzBBK2tzenEvNHg2ZDgwLzRqNGZIZUsyQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibXM5eWVPNTB0WjhXbFlIVEFwaTRUUmJtWDd0bmVheGhaY1JFVFR1S0ozSk9lWGdkbWVwU1VVS0pkenhPWUNITHVKY2FaQXM2VEZPQ3RpT2hWRjZvQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Im5UMU5ZZVQ3bXZTM1h2Q3RoeHJtT2dHS0VrbnVlNTl5UWIyRnAyblJyZlRldDZJYkd1M0dVRXh0ZlJIV3NmRGkveVBlYjJ6Q1ZtSGhXTzBlbFA3cGlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE0NzU3ODU3OjQ2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpuUHlvKzlCWThpSzZaYnhFOFN0QVBwTE02ditNZW5mTlArSStIeDNpdGcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE1ODMxNDksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS1RDIn0=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Malvin King",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 263714757857",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'MALVIN_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTI_BOT : process.env.ANTI_BOT || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_SAVE_NEW_NUMBERS : process.env.AUTO_SAVE_NEW_NUMBERS || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

