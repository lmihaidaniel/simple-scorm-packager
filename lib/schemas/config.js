var path = require('path');

var now = new Date();
var timestamp = now.getTime();

var nowDate = function() {
    now.setDate(now.getDate());
    return now.getFullYear() + '-' + ('0' + (now.getMonth() + 1)).slice(-2) + '-' + ('0' + now.getDate()).slice(-2);
}

var stringToArray = function(value){
    if(value instanceof Array){
        return value;
    }else if(typeof value === "string"){
        var arr = [];
        if(value) arr.push(value);
        return arr;
    }else{
        var arrOfVals = [];
        for( var k in value ) {
            if(value[k]) arrOfVals.push( value[k] );
        }
        return arrOfVals;
    }
}

var uuid = function() {
    var d = timestamp;
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

module.exports = function(obj) {
    if (!obj.package) obj.package = {};
    if (!obj.package.vcard) obj.package.vcard = {};
    return {
        uuid: obj.uuid || uuid(),
        version: obj.version || '1.2',
        language: obj.language || 'en',
        organization: obj.organization || '',
        title: obj.title || '',
        identifier: obj.identifier,
        masteryScore: obj.masteryScore != null ? obj.masteryScore : 80,
        startingPage: obj.startingPage || 'index.html',
        package: {
            name: obj.package.name || obj.title || '',
            author:  obj.package.author || '',
            description: obj.package.description || obj.description || '',
            organization: obj.package.organization || obj.organization || '',
            date: obj.package.date || nowDate(),
            timestamp: timestamp,
            size: obj.package.size || '',
            version: obj.package.version || '1.0.0',
            outputFolder: obj.package.outputFolder || './scorm',
            duration : obj.package.duration || 'PT0H0M0S',
            typicalDuration: obj.package.typicalDuration || obj.package.duration || 'PT0H0M0S',
            educational: obj.package.educational || obj.package.description || obj.description || '',
            rights: obj.package.rights || 'Pourvu que-est; à utiliser uniquement à titre d\'exemple.',
            requirements: obj.package.requirements || [],
            keywords: stringToArray(obj.package.keywords || ''),
            status: obj.package.status || 'final',
            vcard: {
                version: obj.package.vcard.version || obj.package.version || '1.0.0',
                author: obj.package.vcard.author || obj.package.author || '',
                org: obj.package.vcard.org || obj.package.organization || obj.organization || '',
                tel: stringToArray(obj.package.vcard.tel || ''),
                address: stringToArray(obj.package.vcard.address || ''),
                mail: stringToArray(obj.package.vcard.mail || ''),
                url: obj.package.vcard.url || ''
            },
            zip: obj.package.zip
        },
        source: obj.source ? path.normalize(obj.source) : path.normalize('./')
    };
};