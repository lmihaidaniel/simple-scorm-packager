var os = require("os"),
  builder = require("xmlbuilder"),
  path = require("path"),
  schema = require("./schema.js"),
  files = require("./files.js");

var metadata = function(obj) {
  var configObj = schema.config(obj);

  return builder
    .create("lom", {
      version: "1.0",
      encoding: "utf-8"
    })
    .ele(schema["metadata"](configObj))
    .end({
      pretty: true,
      newline: os.EOL
    });
};

module.exports = metadata;
