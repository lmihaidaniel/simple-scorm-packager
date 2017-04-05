var fs = require("fs"), path = require("path"), url = require("url");

var _walk = function(dir, excludeSchemaFiles, callback) {
  var fileList = fs.readdirSync(dir), finalFileList = [];

  fileList.forEach(function(file) {
    var isDirectory = fs.statSync(path.join(dir, file)).isDirectory();
    if (isDirectory) {
      var newDir = path.join(dir, file);
      _walk(newDir, excludeSchemaFiles, function(results) {
        finalFileList = finalFileList.concat(results);
      });
    } else {
      var newFile = path.join(dir, file);
      var ext = path.extname(file);
      if (!excludeSchemaFiles) {
        finalFileList.push(newFile);
      } else {
        if (
          ext !== ".xsd" &&
          ext !== ".dtd" &&
          file !== "metadata.xml" &&
          file !== "imsmanifest.xml"
        ) {
          finalFileList.push(newFile);
        }
      }
    }
  });

  return callback(finalFileList);
};

var files = function(dir, excludeSchemaFiles) {
  var fileList = [];

  dir = path.normalize(dir);

  _walk(dir, excludeSchemaFiles, function(results) {
    results.forEach(function(value) {
      value = value.split(dir + path.sep)[1] || value;
      fileList.push(url.format(value));
    });
  });

  return fileList;
};

module.exports = files;
