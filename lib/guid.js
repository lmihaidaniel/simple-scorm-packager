'use strict';
function acronym(words)
{
    if (!words) { return ''; }
    var first_letter = function(x){ if (x) { return x[0]; } else { return ''; }};
    return words.split(' ').map(first_letter).join('');
}

function cleanAndTrim(text){
	//Espace all non alphanum characters
	var textClean = text.replace(/[^a-zA-Z\d\s]/g, "");
	return textClean.replace(/\s/g, "");
}

module.exports = function(obj){
	var com = acronym(obj.package.author || 'c o m');
	var company = cleanAndTrim(obj.package.organization || 'company');
	var project = cleanAndTrim(obj.title, '');
	return com+'.'+company+'.'+project+'.'+obj.uuid;
}