const Telegram  = require('node-telegram-bot-api');
const parseHTML  = require('./parseHTML');
const log = console.log;

const isUrl = function(msg) {
    return (msg.entities && Array.isArray(msg.entities) && msg.entities.length > 0 && msg.entities[0].type === 'url');
}

class Message {
    constructor(title, desc, img, url) {}
}

const createMSG = function(msg) {
    if (isUrl(msg)) {
        return parseHTML(msg.text);
    } else {
        return new Promise( 
            rs => rs(new Message(msg.text)),
            rj => log('ERROR while creating message')
        );
    }
}

const init = function(){

    const BOT_TOKEN = '442527643:AAE2ukHpeX6Slnsvr2Eiy3ZaictGanqMEfA';
    const bot = new Telegram(BOT_TOKEN, {polling:true});
    
    bot.on('channel_post', (msg) => {
        createMSG(msg).then( message => log(message) )
    });

}

module.exports = init;