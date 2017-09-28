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
            if(arguments[i]){
                this.attachments.push(arguments[i]);
            }            
        }
    }
}

const extractURL = function(msg) {
    const ent = msg.entities;
    let urls = [];
    if (ent && Array.isArray(ent) && ent.length) {
        for (let i = 0; i < ent.length; i++) {
            const entity = ent[i];
            if(entity.type === 'url') {
                const url = msg.text.split('').splice(entity.offset, entity.length).join('');
                urls.push(url);   
            }            
        }        
    }

    return (urls.length) ? urls : null;
}

const getFile = function(msg) {
    return findProp(msg, 'document');
}

const emptyText = function(str, ifEmpty = '') {
    return (str||ifEmpty);
}

const _createMessage = async function(bot, chatID, parsed, file, urls) {

    if (!parsed) { parsed = {} }

    const desc = parsed.description;
    let title = (desc) ? desc.substr(0, 100) : parsed.title;
    const description = emptyText(parsed.title) + '\n' + emptyText(parsed.author) + '\n' + emptyText(parsed.description);
    let file_id = null;
    let file_name = null;
    let file_url = null;

    if (bot && file && typeof file === 'object' && !Array.isArray(file) ) {
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
        ...urls
    );

}

const _createSimpleMessage = async function(chatID, text) {
    return new Message(chatID, text);
}

const createMessage = function(bot, msg) {
    const chatID = msg.chat.id;
    const file = getFile(msg);
    const urls = extractURL(msg);
    if (urls && urls[0].length) {        
        return parseHTML(urls[0]).then(
            parsed => _createMessage(bot, chatID, parsed, file, urls).then( r => r, e => logError(e) ),
            e => logError(e)
        );
    } else if (file) {
        return _createMessage(bot, chatID, null, file).then( r => r, e => logError(e) );
    } else {
        return _createSimpleMessage(chatID, msg.text).then( r => r, e => logError(e) );
    }
}

module.exports = {
    createMessage,
    extractURL
}
