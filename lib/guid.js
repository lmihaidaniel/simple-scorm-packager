'use strict';
function acronym(words)
{
    if (!words) { return ''; }
    var first_letter = function(x){ if (x) { return x[0]; } else { return ''; }};
    return words.split(' ').map(first_letter).join('');
}

function trim(text){
	return text.replace(/\s/g, "");
}

module.exports = function(obj){
	var com = acronym(obj.package.author || 'c o m');
	var company = trim(obj.package.organization || 'company');
	var project = trim(obj.title, '');
	return com+'.'+company+'.'+project+'.'+obj.uuid;
}