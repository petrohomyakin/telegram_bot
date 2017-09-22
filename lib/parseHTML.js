const Metascraper = require('metascraper');

const MY_RULES = {
    descriprion: [
        ...Metascraper.RULES.description,
        $ => $('.pi_text').first().text()
    ]
}

const RULES = Object.assign({}, Metascraper.RULES, MY_RULES);

const parseHTML = function(url) {
    return Metascraper.scrapeUrl(url, RULES);
}

module.exports = parseHTML;