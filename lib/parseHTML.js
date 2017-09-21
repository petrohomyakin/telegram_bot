const Metascraper = require('metascraper');

const RULES = {
    ...Metascraper.RULES,
    descriprion: [
        ...Metascraper.RULES.description,
        $ => $('.pi_text').first().text()
    ]
}

const parseHTML = function(url) {
    return Metascraper.scrapeUrl(url, RULES);
}

module.exports = parseHTML;