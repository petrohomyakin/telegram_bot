const { extractURL } = require('../lib/message');

const msg ={
    message_id: 22,
    chat: {
        id: -1001097752175,
        title: 'My films',
        type: 'channel'
    },
    date: 1506518551,
    text: 'в порядке выхода:\nпервая https://youtu.be/Vn-csFKhQCg\nвторая https://youtu.be/yJYH9aGEEGg\nтретья https://sova.ponominalu.ru/novosti/black-out-2022/',
    entities:
     [
        {
            offset: 25,
            length: 28,
            type: 'url'
        },
        {
            offset: 61,
            length: 28,
            type: 'url'
        },
        {
            offset: 97,
            length: 50,
            type: 'url'
         }
    ]
    
}

console.log(extractURL(msg))