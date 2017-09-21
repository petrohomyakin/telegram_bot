'use strict'

const bot_token = '442527643:AAE2ukHpeX6Slnsvr2Eiy3ZaictGanqMEfA';

const Telegram  = require('node-telegram-bot-api');
const bot       = new Telegram(bot_token, {polling:true});

bot.on('message', (msg) => {
    let text = msg.text;
    
    bot.sendMessage(msg.chat.id, 'received'+text);
})

bot.on('channel_post', (msg) => {
    let text = msg.text;
    
    bot.sendMessage(msg.chat.id, 'received'+text);
})