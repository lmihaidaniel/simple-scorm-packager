"use strict";
module.exports = {
    cleanAndTrim : function(text){
        //Escape all non alphanum characters
        var textClean = text.replace(/[^a-zA-Z\d\s]/g, "");
        return textClean.replace(/\s/g, "");
    },
    acronym: function(words){
        if (!words) { return ''; }
        var first_letter = function(x){ if (x) { return x[0]; } else { return ''; }};
        return words.split(' ').map(first_letter).join('');
    }
}