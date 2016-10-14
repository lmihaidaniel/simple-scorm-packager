var
  os = require('os'),
  builder = require('xmlbuilder'),
  path = require('path'),
  schema = require('./schema.js'),
  files = require('./files.js');

var manifest = function (version, obj) {
  var
    configObj = schema.config(obj),
    lisOfFiles = files(path.normalize(obj.source), "excludeManifestFiles");

  configObj.files = lisOfFiles.map(function(value){
    var rObj = {};
    rObj['@href'] = value;
    return rObj;
  });

  return builder.create('manifest', {
    version: '1.0',
    encoding: 'utf-8',
    standalone: false
  })
    .ele(schema[version](configObj))
    .end({
      pretty: true,
      newline: os.EOL
    });
};

module.exports = manifest;