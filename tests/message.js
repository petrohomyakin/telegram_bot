const { createMessage } = require('../lib/message');

const test_msg1 = {
    chat: {
        id: '-1001149509327'
    },
    entities: [
        {
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
            type: 'url'
        }
    ],
    text: 'https://vk.com/wall-140927803_207458'
};

// createMessage(test_msg1)
    // .then( res => console.log(res) );

createMessage(test_msg2)
    .then( res => console.log(res) );
