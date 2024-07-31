
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
global.devs = "923072380380";
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZ1S3pOS2ZFZDkyZ2l2ZytrdVJRcE1UekpOYlJBdnRBcXRFelFDMTNFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXA5UkVkeHV1S2RzcXBUazRvNDRRVjE4YXJNTWFTMzNEbHVXcjRlOUFBST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTmFiVHc1MFhYWGRGVFhxOGc4R2owaE9BR1RmZ3U3TnVBWUMrcUUveFdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGeHNGNnF5YU41NElUOCsxdFpUOGxoaUNRSTJ5L0szbGtnTEVHVFVPU1VNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktKMS9hcGRuQ3o4UW5FSVA2aUdOVkZ3a1l6YUgxUHh5T1NpZnBvTE9zWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVGK3Q4VGlxVTQvb0U2ZXh0bVJnYXF4UTVOenhoSnNES0UycndYUlJpaE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0k0S2wyamRjaldzRk05MTJEZ0ZkdDFSUHdJSzNqZHR1Sll4a3d0UkhtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWQ2VnVHa3lVSzhhbGNTa1lqNlhGOE1CV01hcWN2ZGlibTFtZ3R1WkFnZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIzQWdsUnlkVTRNT1RFZytwUkhmZHFpNUVRTnNqZU1nNnAzSFJYM3BEZ1g2cE11WjhZRmNoZ1Vuc1JobEhtUXJOK0Zka09mcVhyYkQ3Z216TytGeGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIzLCJhZHZTZWNyZXRLZXkiOiIyYnZNVHdiMDJ6UUxnZDBxbnB0bDJJeW16U003Nk4yVnh1UW5DR0pwMDl3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYYXBCOEFzVVNhR1RvdjRWN1AwY1dBIiwicGhvbmVJZCI6IjNiMDBmYjMyLWU1ZjMtNGE1Ni05MWU0LWU5YzQ1NDA0OGEwMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUWRTTFhwZHVnSStGQk5KZ1RvemwrL0gwdFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2N1Q1Y4RHVEQ1NXMi9jK3VrWDRXaDJibFZzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFaWEJMNDZLIiwibWUiOnsiaWQiOiI5MTk5MjIyODE4MzQ6MTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09UcXdKY0VFTWZ2cDdVR0dBMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFlalQ4N29KNHdDdUlXMUFyZUtZbis5N3dxL3U5dk0remVFZTczM083M0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImY0akdLSVE5aFdDQWs4OEdnM3FFaVJFdkZHbTdCc2F0aHJnZlI4TGJJcjB2cWpwQk9uMHk0QWxoendtcHdnU0xGMWhGbkVFN1luTDBONjNydlFJMENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyaVRDYWo0RmVvRXI3NzVUNmNSZ0dVOHVsOGo4dGRUWGhkL00vaU03Qko0ZS9LYXgwcUZXNURHbGtKbUwwcGNtZzNZSU80WHAyeEpNTjEvR1FGTnJodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTkyMjI4MTgzNDoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRSG8wL082Q2VNQXJpRnRRSzNpbUovdmU4S3Y3dmJ6UHMzaEh1OTl6dTl4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNDE1MDYwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhFbyJ9" //Make sure session id starts with Byte;;;



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
