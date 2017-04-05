"use strict";
var utils = require("./utils");

module.exports = function(obj) {
  var com = utils.acronym(obj.package.author || "c o m");
  var company = utils.cleanAndTrim(obj.package.organization || "company");
  var project = utils.cleanAndTrim(obj.title, "");
  return com + "." + company + "." + project + "." + obj.uuid;
};
