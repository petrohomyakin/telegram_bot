const Telegram = require('node-telegram-bot-api');
const { HappyMTrello } = require('happy-m-post-to-trello');
const createMessage = require('./message');
const log = console.log;

const BOT_TOKEN = '442527643:AAE2ukHpeX6Slnsvr2Eiy3ZaictGanqMEfA';

const init = function(){

    const bot = new Telegram(BOT_TOKEN, {polling:true});
    const trello = new HappyMTrello();
    
    bot.on('channel_post', (msg) => {
        createMessage(msg).then( m => {            
            trello.addCard(m.chatType, m.title, m.descriprion, m.attachments);
        });
    });

}

module.exports = {
    init,
    BOT_TOKEN
};