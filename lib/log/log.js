const fs = require('fs');
const path = require('path');

const log = function(err_text) {

    const str = '\n' + (new Date).toString() + ' | ' + err_text;
    const file = process.cwd() + path.sep + 'log.txt';

    fs.appendFile(file, str, (err) => {
        if (err) throw err;
    });

}

module.exports = log;