
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "919922281834@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "wa.me/919922281834";
global.gurl = process.env.GURL || ";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "919922281834";
global.sudo = process.env.SUDO || "917798565310";
global.owner = process.env.OWNER_NUMBER || "919922281834";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09nNm9OanNwTlg4Vm9JUHcxcnpEakE3cU5acVZjMklpcmpYc3ZPWHZXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMm5JTDBKbHJ1SG9rWW50ZXFvM2xKRWZVT0tjS2tyNlRQUndBMWpBSldGOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQjdrVHZDeFplUjZpeHdJMGRJNXpsSmNzV3Z0RGEwNVJQNlliSmhVRVVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjeHp2M0RROG9WV2sxNCtjL3FsZTk0QndBUWNUVjRKcCtRZXYwdkZwTlVBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBc2krcll4U2FremNhY2ZyV3EvRHZCSTRsNG5PL2JwWEpjc3F6aGhlSFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRRdStkT2lpOFF5YXJqL3QxNktSUEdKbDNxNS9UdVBVeXVWanpQMVRKbDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tRR2ZSeGxlZ0orWXNGRE5NZFNzRHdDMzhhQ3dTZFVBOTQ1NzdWVVVrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWExYcmNLWm9PbExQZFIrOHhlc0d2d3ZTRDViTmdMZFE1MysvK3E1WFJuMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlA2NjB6SlgyM0JYSDFYbmpIaGxyRnUxU3FRNG4wWm5PeWZ6enNPUi9weGZaUXJ6UFllbTVTQ2UwQksxTnZ0Vmo0RlNEaHA2TytNUjJ2dm1CSWo2SENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiJSYlVmRUdEelplSFZadU9iUHl1NzlaV3N5NXY3clRIaXF5MmFnbHk3ZVlzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTkyMjI4MTgzNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCNjM5RTAwRjMwQThEMjI2MjVCMzVFMDExM0RGQTQ4OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNDIzMzg3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCYkV4a2p3MVJucXZyR3dCb1pWMG9BIiwicGhvbmVJZCI6ImYxNzVjY2ZjLWZkYmMtNGY2My1hZDJjLTk4N2FkZTA0YzU3OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5V2pLeUZQcHZ4dkJxSmRvSk52UFZZdUpiV2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXRJUEZtazJBVmVseGMvSHNNYVNhS2MvRzA4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJEQUdMUjlaIiwibWUiOnsiaWQiOiI5MTk5MjIyODE4MzQ6MjBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09UcXdKY0VFTXF3cUxVR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFlalQ4N29KNHdDdUlXMUFyZUtZbis5N3dxL3U5dk0remVFZTczM083M0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlkZS80MWJZWGpqbHRkTTZLUGlreG9zV1ZRK1dlNnB2cExyb01YUkxyaXRvS1ozZngrc3JYSnNWNkhpM1FmNmZRV2tvVDVrWjZsQXFWa0pqS3dpNkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPd2d2MGhmK3FseUtkQ3VhQmhnVVEzVVRZN01lVFpvWFBPNW5LejJYMFpEOFhuNjMvUW9NdGtvVjBxaEhkOFpyTForNUpUcUMyQTdxVTZ4NjJxNWZBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTkyMjI4MTgzNDoyMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRSG8wL082Q2VNQXJpRnRRSzNpbUovdmU4S3Y3dmJ6UHMzaEh1OTl6dTl4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNDIzMzgzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhFbyJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By ‼️𝘕 𝘰 _ 𝘔 𝘦 𝘳 𝘊 𝘺‼️*",
  author: process.env.PACK_AUTHER || "‼️𝘕 𝘰 _ 𝘔 𝘦 𝘳 𝘊 𝘺‼️",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Raͥp_ͣDͫeMon",
  ownername: process.env.OWNER_NAME || "SanDy",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
