const parseHTML  = require('./parseHTML');
const { getChannelType }  = require('./channels');
const log = console.log;

class Message {
    constructor(chatID, title, descriprion, img, url) {
        this.chatType = getChannelType(chatID);
        this.title = title;
        this.descriprion = descriprion;
        this.img = img;
        this.url = url;
    }
}

const isUrl = function(msg) {
    return (msg.entities && Array.isArray(msg.entities) && msg.entities.length > 0 && msg.entities[0].type === 'url');
}

const logError = function(e){
    log('ERROR while creating message');
    log(e);
}

const createMessage = function(msg) {
    const chatID = msg.chat.id;
    if (isUrl(msg)) {
        return parseHTML(msg.text).then(
            parsed => {
                return new Message(
                    chatID,
                    parsed.descriprion,
                    parsed.author||parsed.title,
                    parsed.image,
                    parsed.url,
                );
            },
            e => logError(e)
        );
    } else {
        return new Promise((rs, rj) => rs(new Message(chatID, msg.text)) );
    }
}

module.exports = createMessage