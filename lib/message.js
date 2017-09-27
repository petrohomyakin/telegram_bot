const findProp  = require('./findProp');
const parseHTML  = require('./parseHTML');
const { getChannelType }  = require('./channels');
const err_log = require('./log/log');
const log = console.log;

const logError = function(e){
    log('ERROR while creating message');
    log(e);
    err_log('ERROR while creating message');
    err_log(e);
}

class Message {
    constructor(chatID, title, description) {
        this.chatType = getChannelType(chatID);
        this.title = title;
        this.description = description;
        this.attachments = [];
        
        for (let i = 3; i < arguments.length; i++) {
            this.attachments.push(arguments[i]);
        }
    }
}

const isUrl = function(msg) {
    return (msg.entities && Array.isArray(msg.entities) && msg.entities.length > 0 && msg.entities[0].type === 'url');
}

const getFile = function(msg) {
    return findProp(msg, 'document');
}

const emptyText = function(str, ifEmpty = '') {
    return (str||ifEmpty);
}

const _createMessage = async function(bot, chatID, parsed, file) {

    if (!parsed) { parsed = {} }

    const desc = parsed.description;
    let title = (desc) ? desc.substr(0, 100) : parsed.title;
    const description = emptyText(parsed.title) + '\n' + emptyText(parsed.author) + '\n' + emptyText(parsed.description);
    let file_id = null;
    let file_name = null;
    let file_url = null;

    if (file && typeof file === 'object' && !Array.isArray(file) ) {
        file_id = file.file_id;
        file_name = file.file_name;

        if (!title) {
            title = file_name;
        }

        file_url = await bot.getFileLink(file_id);
    }

    return new Message(
        chatID,
        title,
        description,
        file_url,
        parsed.image,
        parsed.vk_image,
        parsed.url,                
    );

}

const _createSimpleMessage = async function(chatID, text) {
    return new Message(chatID, text);
}

const createMessage = function(bot, msg) {
    const chatID = msg.chat.id;
    const file = getFile(msg);
    if (isUrl(msg)) {
        return parseHTML(msg.text).then(
            parsed => _createMessage(bot, chatID, parsed, file),
            e => logError(e)
        );
    } else if (file) {
        return _createMessage(bot, chatID, null, file);
    } else {
        return _createSimpleMessage(chatID, msg.text);
    }
}

module.exports = createMessage