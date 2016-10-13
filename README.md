## Documentation

Creates SCORM package from source directory.

* Supported Scorm versions:
    * SCORM 1.2
    * SCORM 2004 3rd Edition
    * SCORM 2004 4th Edition

## Installation

```bash
npm install simple-scorm-packager
```

## Initialization Options

* `version` {String} Version of schema. Available options:
    * '1.2'
    * '2004 3rd Edition'
    * '2004 4th Edition'
* `author` {String} Author name
* `organization` {String} Company name
* `title` {String}
* `identifier` {String} Uses 0 and course title if left empty
* `masteryScore` {Number} Uses 80 if left empty
* `startingPage` {String} Uses index.html if left empty
* `source` {String} The path to files from which the package will be created
* `package` {Object} Available options:
    * `version` {Number} Package version
    * `name` {String} Package name
    * `date` {String} Package date
    * `output` {String} The folder path where the zip file is created
    * `zip` {Boolean} Enable zip automated packaging

## USAGE

```javascript
var ssp = require('simple-scorm-packager');

ssp({
  version: '2004 4th Edition',
  author: 'Your Name',
  organization: 'Test Company',
  title: 'Test Course',
  identifier: '00',
  masteryScore: 80,
  startingPage: 'index.html',
  source: 'path to your files',
  package: {
    version: 1.0,
    zip: true,
    outpup: 'scorm.zip'
  }
}, function(msg){
  console.log(msg);
});
```