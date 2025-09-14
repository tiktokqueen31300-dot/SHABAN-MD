const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU5ydmN5aXJRVkV2RThUWW0vQlpMcUh0UndGUGhJRHo1SnFFWERCcWtscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNitKclplZE5scVNQZ3pYbTcrcFY0R0dJNFBCd01QViszQXRTb1VrbzEyRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTmh6Mm9rRnk2TTB5ek45VTJlcmxYNlNwY0ZnT3AwRmpSTUlidjB6VFdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhVzBFamJQenlsWmw5OXRnV29DTFlDY2gwU1F0YzZuOWVJL3R5KzdHYW0wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCNW01aHVuWjhRSUNQWk1pS1hWbkg1UmZlVldNcFk2cnFoSjhPNmwxMFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFpMEFMRUkwYm5XSURScEh2THhrOHoxUmgzZmYxZXVkQXcrL1VCTi9GQlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0Fvd2kzODFNV0t0MXZxLzJuWFFQOUl1WjdFeXdhakV2L245a1c0UVFFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjJZKzBmNFBXNGpCRHhQUFZRc0hpWUpEMWNDNXdrYmo2N1pwNVZ2UmJucz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF6eTdsMk4zQndDNU0rUE5mNzNDVVFUNzYrU2dFMjk4eWl6a2Z5b1JBOGhUUUFyMFZPZURBbURCc0RvTHhEN09hSUYzM1BobDF1cjdPSkFQampHV2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiJsRWhUdmk4OExUZmFCN0p1dWw2d2VQbjd2N3BLMWtRclZjZ2dZbG4wZzZvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZUFoxSFhaSCIsIm1lIjp7ImlkIjoiOTIzMTk0NTQxMTk0OjMyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCWoIfNovCdkanwnZGo4aq88J2RqyDNovCdkbXwnZGo8J2RuuGqtuGqvfCdkazwnZGs8J2RqSDNovCdka7wnZGw8J2RueGqtfCdkbPwlqCHXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNXG7wlqSNQ1VURSBHSVJM8JakjSIsImxpZCI6IjIwOTcxNTI1MDM2NDQ2MzozMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BxWjUwZ1ErTEtjeGdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9VSXB3aW8rY01FNFkyK2hUaGsrMTI2eUFoZG92TUtRb3VnZEdGcUhZUmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpOOEptWVpoalNxazJtZitJanVUcTJtaTVKY1dkUzMxSlpSMEwwQm9HNWlVOXBvaTFNc2hIOVh5VnY5eGdXSS9BZjhBUXBlTDdNQWFCNlY3aTBuOEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTTno4V29PQVR1R0kxdUt6bGoybTVZMmpQZTNsS2xpWFdUVGZQbytPM1VkMm54WDQvK3c5YUtMMTRTT3UwZmRSdkkxTUFvT05SbTQ2SVQxS0twUTZoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5NDU0MTE5NDozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmMUNLY0lxUG5EQk9HTnZvVTRaUHRkdXNnSVhhTHpDa0tMb0hSaGFoMkVZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTc4Nzg2NTEsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRDU3In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "KINZA-KD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923043788282",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
