const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "uJciEQjI#U0dMJ7FGkMQ6luQMwZ3O9JACxYzZU5un6o89qDwF-So",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/whar66.jpg",
SUDO_NB: process.env.SUDO_NB || "254114127157",
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: "true"
};
