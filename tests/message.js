const { createMessage } = require('../lib/message');

const test_msg1 = {
    chat: {
        id: '-1001149509327'
    },
    entities: [
        {
            offset: 0,
            length: 34,
            type: 'url'
        }
    ],
    text: 'https://vk.com/wall-74984782_17083'
};

const test_msg2 = {
    chat: {
        id: '-1001100119189'
    },
    entities: [
        {
            offset: 0,
            length: 36,
            type: 'url'
        }
    ],
    text: 'https://vk.com/wall-140927803_207458'
};

const test_msg3 ={
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

// createMessage(null, test_msg1)
//     .then( res => console.log(res) );

createMessage(null, test_msg2)
    .then( res => console.log(res) );

// createMessage(null, test_msg3)
    // .then( res => console.log(res) );
