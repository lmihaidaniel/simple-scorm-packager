## Documentation

Creates SCORM package from source directory.

* Supported are:
    * SCORM 1.2
    * SCORM 2004 3rd Edition
    * SCORM 2004 4th Edition
* Automatic .zip file creation is not implemented yet.

## Initialization Options

* `version` {String} Version of schema. Available options:
    * '1.2'
    * '2004 3rd Edition'
    * '2004 4th Edition'
* `organization` {String} Company name
* `title` {String}
* `identifier` {String} Uses 0 and course title if left empty
* `masteryScore` {Number} Uses 80 if left empty
* `startingPage` {String} Uses index.html if left empty
* `source` {String} The path to files from which the package will be created
* `destination` {String} The path to where the package will be created

## USAGE

```javascript
var scopackage = require('scorm-scorm-packager');

scopackage({
  version: '2004 4th Edition',
  organization: 'Test Company',
  title: 'Test Course',
  identifier: '00',
  masteryScore: 80,
  startingPage: 'index.html',
  source: 'path to your files',
  destination: 'path to where the package should be saved'
}, function(msg){
  console.log(msg);
});
```