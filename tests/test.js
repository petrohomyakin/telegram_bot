const Telegram = require('node-telegram-bot-api');
const { BOT_TOKEN } = require('../lib/init');

const bot = new Telegram(BOT_TOKEN, {polling:false});

console.log('Everything is fine!');