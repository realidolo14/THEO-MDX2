const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/4yX4WJs5/Theo-hacker-1.jpg" || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/4yX4WJs5/Theo-hacker-1.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_18_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU0LFxuICAgICAgICA3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMzLFxuICAgICAgICA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDgyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDg3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgODUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUzLFxuICAgICAgICA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDY2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYzLFxuICAgICAgICA1LFxuICAgICAgICA1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDY0LFxuICAgICAgICA0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaUZ6UmJnQ045dGhzaGNHZ1VzQm4xYmQ2Zm1QOTFhSjQ1akY0WDB1U0ZIbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibmlOdy1BQWpSNTZ1NUN5ZmZDcXU4Z1wiLFxuICBcInBob25lSWRcIjogXCIzNDIxYjk3MC1kMTA0LTQxOTItYjgwNi03YTY4MWFhNDdlZDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA2LFxuICAgICAgMTAsXG4gICAgICAxNCxcbiAgICAgIDE1NCxcbiAgICAgIDE2NCxcbiAgICAgIDcsXG4gICAgICAyMjMsXG4gICAgICAyMzMsXG4gICAgICAxMjksXG4gICAgICA4MCxcbiAgICAgIDEzMyxcbiAgICAgIDk0LFxuICAgICAgMTcwLFxuICAgICAgMjUwLFxuICAgICAgMTIyLFxuICAgICAgMTQxLFxuICAgICAgODQsXG4gICAgICAxNSxcbiAgICAgIDYwLFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDI1MixcbiAgICAgIDE1MSxcbiAgICAgIDE2NSxcbiAgICAgIDQwLFxuICAgICAgMTgsXG4gICAgICAxMzksXG4gICAgICAzMyxcbiAgICAgIDEyMixcbiAgICAgIDIwMixcbiAgICAgIDE2NixcbiAgICAgIDEzNyxcbiAgICAgIDEyNSxcbiAgICAgIDkzLFxuICAgICAgNzksXG4gICAgICAxOTMsXG4gICAgICAxMTEsXG4gICAgICAxLFxuICAgICAgMTQ0LFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1A1bmU0RUVMK2t0cmNHR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyVFJkZjBpaDM0eE8wMWNOR3grMkUvbDVkQkJVdTh0cGo5YllQM1p3VVVnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJKMkVaaGJkWEp1amNFVllhRzJYeGd2TTJNYmlOVnBhM1NBcFc1b3RjMmd0SEg3S3hmV1dUcUZJTDNiUXNvdzQybWlUQWRDNXBOYlhyV3RRNjRzZUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFOV1pmZXRYWktBYzhma2NSYko5UllRT3VmOGxpb2ZEMWNVam85dlJLbC9PZ2ZRMTVKa2JxY2RkL2s2YkJCUC9iMXhiRituTmc4SlVIdGFBZ28xRGlRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNDk4MzQ2Nzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGhlb1wiLFxuICAgIFwibGlkXCI6IFwiMTM3OTE0OTIzNjIzNjk6OEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzQ5ODM0Njc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY4NDU1MTFcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO-MD ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MDX2",
  ownername:process.env.OWNER_NAME|| "Theo_Idolo😎♒💨",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
