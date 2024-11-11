const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS040eS83SEh3c3RQRDVEU0tOaUFJV1BYVTBBOXF4bHU2eE94bGM3ekcyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianpTUDFnbStOT1d6NlI3S20rUndFZ0JpUFlvc09XMm52UEpsOU9PZ1Yzcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSEp4KzFQSlJYSnNncnpTbUh6ZlF1OGxKV3hJZUQ5dk1mUXVLT0N0bEhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzWXJZdVE3TUh0VmsvZ0FZY0lmZDAxM0ZiUGNjK1BXYnFRcEhEdW9JYVNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFPVzV5dzcrWmtRWHd6RVF4RjZrNnh1bnQ1cXpTWlN2bFRhS25ERGtOMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZHRjVjdFBNVmpzbWxvNGw1N0s1OGhLQnpORnlCTFVVdXNDUHFRLzRtMnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExpejFVTFJEdGc0ZUQxdnZkQzNnRUVQTFVsdUFhdnhYYU1pT1dyd29XST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVVnMHlZQVlBbGc1TnFMQ2V3cjJydE9PNDI5b0swWTFCM1d1WUJJa3dWbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJIUC9tRXNSaDdBQ2pOZU51bzlLdTN0NktPeWo4RW1JMUtOZXQ0TjliL3ltem42ckFrTE5haHZqWnZGaWYwOTRaRjNSUm5OOVppaDVvR2FOYzg4cENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJyNC9wWm43b2lVZE02OUZRNGkvdDNUczBrLzN2VVdsWFBPakZINzRrR1VNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2Z3JLTE1xTFRpNmRZVlVNNklWQnRBIiwicGhvbmVJZCI6IjNjN2Q5OWE0LTk0NmItNDA4YS05MjM5LTc0NDJkYThlNTc4OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJN0g3cmw3cE5qOGFpa2h2UjBUb2lUU3V6clE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDlvQzJpVnR5V1FteWZLVmlybSt5Y3ZjUnpJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVWUE5EVlFQIiwibWUiOnsiaWQiOiIyNjM3MTQ3NTc4NTc6NDNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01uMW5xRUZFT1M3eDdrR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1jL0tqNzBGanlJcnBsdkVUeEswQStrc3pxLzR4NmQ4MC80ajRmSGVLMkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhvSHg4Q2NpeUo4SzdqT1hjdWpuYnNkanl5K2htN2hTVFE0MVpWMmN0MjF3bHZjVi9IT3hpZEtUM3d5bHplVTRCUUlqM2FUWjJ3QWxIZzdvNFM0VEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjNFJmZTVCdklEQzJvWDNoTUVmYlNDRTNSS2lGVTQ1VDVhVTBaZDNlUHdhYit0cGUxaXd4dDBQdlFwVDBzU3B4bHRLaTJXbFRtZkg3c1BWKzRaZkhDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNDc1Nzg1Nzo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJablB5bys5Qlk4aUs2WmJ4RThTdEFQcExNNnYrTWVuZk5QK0krSHgzaXRnIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMzIxMzI5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtUQyJ9',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Malvin King",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 263714757857",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'MALVIN MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/uxnee2.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  ADAM : process.env.AUTO_REACT || 'yes',
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
