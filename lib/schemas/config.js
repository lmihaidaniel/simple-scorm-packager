var path = require('path');

var nowDate = function() {
    var now = new Date();
    now.setDate(now.getDate());
    return now.getFullYear() + '' + ('0' + (now.getMonth() + 1)).slice(-2) + '' + ('0' + now.getDate()).slice(-2);
}

module.exports = function(obj) {
    if (!obj.package) obj.package = {};
    return {
        version: obj.version || '1.2',
        author: obj.author || '',
        organization: obj.organization || '',
        title: obj.title || '',
        identifier: obj.identifier || 0,
        masteryScore: obj.masteryScore || 80,
        startingPage: obj.startingPage || 'index.html',
        package: {
            author: obj.author || '',
            name: obj.package.name || obj.title || '',
            organization: obj.package.organization || obj.organization || '',
            date: obj.package.date || nowDate(),
            version: obj.package.version || '1.0.0',
            outputFolder: obj.package.outputFolder || './scorm',
            zip: obj.package.zip || true
        },
        source: obj.source ? path.normalize(obj.source) : path.normalize('./')
    };
};