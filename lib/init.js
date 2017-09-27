const Telegram = require('node-telegram-bot-api');
const { HappyMTrello } = require('happy-m-post-to-trello');
const createMessage = require('./message');
const err_log = require('./log/log');
const log = console.log;

const BOT_TOKEN = '442527643:AAE2ukHpeX6Slnsvr2Eiy3ZaictGanqMEfA';

const init = function(TEST){

    const bot = new Telegram(BOT_TOKEN, {polling:true});
    const trello = new HappyMTrello();
    
    bot.on('channel_post', (msg) => {
        createMessage(bot, msg).then(
            m => {
                if (TEST) {

                    log(msg);
                    log('________________________');
                    log(m);

                } else {

                    if (m) {
                        trello.addCard(m.chatType, m.title, m.description, m.attachments).then(
                            card => true,
                            err => err_log(err)
                        );
                    } else {
                        log('ERROR! No message in init.js!!!');
                        log(msg);
                        err_log('ERROR! No message in init.js!!!');
                    }
                    

                }                
            },
            err => {
                log(err);
                err_log(err);
            },
        );
    });

}

module.exports = {
    init,
    BOT_TOKEN
};