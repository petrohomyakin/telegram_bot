const Metascraper = require('metascraper');

const MY_RULES = {
    description: [
        ...Metascraper.RULES.description,
        $ => $('.pi_text').first().text()
    ],
    vk_image: [
        $ => {
            let url = null;
            const dirty_url = $('.wi_body .pi_medias a [data-src_big]').first().attr('data-src_big');

            if(dirty_url) {
                url = dirty_url.replace(/\|.*/g, '');
            } else {
                const video_url = $('.wi_body .pi_medias a div').first().attr('style');
                if(video_url) {
                    url = video_url.replace(/(.*)(background-image)(.*)/g, '$3').replace(/.*url\(/g, '').replace(/\).*/g, '');
                }                
            }

            return url;
        }
    ]
}

const RULES = Object.assign({}, Metascraper.RULES, MY_RULES);

const parseHTML = function(url) {
    return Metascraper.scrapeUrl(url, RULES);
}

module.exports = parseHTML;