const channels = {
    'my_books': '-1001149375282',
    'my_music': '-1001080392609',
    'my_sport': '-1001100119189',
    'my_work_notes': '-1001149509327',
    'my_films': '-1001097752175',
};

const getChannels = function(){
    return channels;
}

const getChannelID = function(type){
    if(!channels[type]){
        console.log('WRONG CHANNEL TYPE!');
        return null;
    }
    return channels[type];
}

module.exports = {
    getChannels,
    getChannelID
}