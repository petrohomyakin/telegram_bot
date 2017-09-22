const channels = {
    '-1001149375282': 'my_books',
    '-1001080392609': 'my_music',
    '-1001100119189': 'my_sport',
    '-1001149509327': 'my_work_notes',
    '-1001097752175': 'my_films'
};

const getChannels = function(){
    return channels;
}

const getChannelType = function(id){
    if(!channels[id]){
        console.log('WRONG CHANNEL ID!');
        return null;
    }
    return channels[id];
}

module.exports = {
    getChannels,
    getChannelType
}