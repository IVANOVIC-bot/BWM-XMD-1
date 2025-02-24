const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVaY+jOBT8L/4aesKZhEgtLQFykYSQqxNWo5XBBpxwGkNCRvnvK/pQz0o7s718soypV35V9fgB0oyU2MINGP4AOSU1ZLhdsibHYAhGVRBgCjiAIINgCEpblo1rN6OHsQLPF0u2xaP1EglJMdaOTR3TOh+cg/ggpvIzeHAgr7yY+L8B5NficddMx2vDmOmuvB/51x5/2Ql+7PS6fcHbqXKcbMO4nPjP4NEiQkJJGpp5hBNMYWzhZg0J/Rp9cSWYhboWcpJVVT1QvFGIa8UTFjtnkyBXoQeDjxOUpuPZ1+ifar2LrMyzJcPZuovlrOsJUiXp+qXy+uMjCrYetB26X+/MN/olCVOMZginjLDmy33HxqnvVGefOTkepCLqVvZMU2b6Ms7PKTWZpM3PUqdxg/3ga8SdZDFzx1dDvIXniF9tFtC6GVPRHNQvtDtIe4rjqosCmS/xP4iv6YdXLv+n75eZmp7udlHMDxv9zs+rLeST4z5e+Z20cgpm35TFyT34/stX6W8ybL6cywMz7CYvXm7XzkgSUA92CS3ua+0UnyPXKuLx/vJJH7KK/o6lN5FW1jqaatm91gvrJKfVcublGVPkqSLlx7BQ1avlwOnplkwbo47Gx7QuJ1tERmpSYd9hU+Rm5XLPr5gU5t4ysMzw+vx6owtuZggMhQcHKA5JyShkJEvbPVEacACieot9itlre0FaTGaBUtD1phRFWdOyTgY72lRRbim78uHiFLFkY/MsQNdnwIGcZj4uS4ympGQZbZa4LGGISzD88zsHUnxjb8K15SSBAwGhJdunVR5nEH2o+vES+n5WpWzbpL7eLjAFQ/5zGzNG0rBs+1ilkPoRqbEeQVaCYQDjEj84gHBNfNzigazqPTX69rYxq9DU4F+LjD/Y15ZylKVvR1QsSj4fqE+I99UnWZLgE5Q99UmSfLnXFz1BDWTAAfKemfabX0rYk/jxHYsd2wm66DY9ZU4YLS1L3QqnVxneeo8pRmDIaIU54EH/UuW77ILT3+Aqst25Hi/2ipTNnPpRHS9EqdYWL2T/E+6bpmD443NO6Rlq8cRpz3THugE4kLxakLQ3F5VeXxYktSfw/aEg/VF+u7aNhHn+LcUMcCCF7WkwO2gr+zDT20rvMrQYCDNI4hIMgW7pTiwvR6YldvuUn0w0J9T0UAOfsn34/81f1Wncl2z9cNCtotTMXFlEIyPT5LXAj5W+u+kb3cRIo7E0GTz/C0g7kY6i2ikMT/R2JqHuNZtE2uI2tvh6YS8uaD8po5lpTOl2KpQInsN0rgzmZO6e60q8G9Ikmu4Kd9rF6HbOA71JJ92dqrVh+bDPz8WcMC5k1CNHKRPul3K0CVGVDFykqO5EYne7OaHuFtqYRuJtzqfXMEGbrX8jOLQn4n1Vu2vaGy0XIT7Om0am/V1MrtF7Ml8nQ/w+kclrZn68my0g+HXAvcvwn3J9+p5/cD9hvI/MX3hr5CUjrN7D+OCQgmojC29lx+lptqGiEcbiHl+7SqjIG3SrwePxnQN5DFmQ0aT9ISceBByIYcm0z9zuSIJLBpMcDIW+zEuyKvUFDiSNludbBtlH3IHWPuZCA4+/AYDVRqsKCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
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

