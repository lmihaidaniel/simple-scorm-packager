`version 0.1.3`

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
    * `name` {String} Package name, defaults to scorm title
    * `version` {String} Package version (major.minor.patch), defaults to `1.0.0`
    * `date` {String} Package date, defaults to now date(YYYYMMDD)
    * `zip` {Boolean} Archives package (`NAME_VERSION_DATE.zip`), false by default
    * `outputFolder` {String} The folder path where you want the zip file

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
  source: './myProjectFolder',
  package: {
    version: "0.0.1",
    zip: true,
    outputFolder: './scormPackages'
  }
}, function(msg){
  console.log(msg);
});
```