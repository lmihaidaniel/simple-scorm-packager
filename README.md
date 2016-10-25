`version 0.1.5`

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
* `organization` {String} Company name
* `language` {String} Language of the package ( ISO )
* `title` {String}
* `identifier` {String} Uses 0 and course title if left empty
* `masteryScore` {Number} Uses 80 if left empty
* `startingPage` {String} Uses index.html if left empty
* `source` {String} The path to files from which the package will be created
* `package` {Object} Available options:
    * `zip` {Boolean} Archives package (`NAME_VERSION_DATE.zip`), false by default
    * `outputFolder` {String} The folder path where you want the zip file
    * `size` {Bytes} Provide the package size, automatically calculated when not set,
    * `name` {String} Package name, defaults to scorm title
    * `author` {String} Author name, used as default for vcard if not provided
    * `version` {String} Package version (major.minor.patch), defaults to `1.0.0`
    * `date` {String} Package date, defaults to now date(YYYY-MM-DD)
    * `vcard` {Object} :
      * `author` {String} Author name, when not provided defaults to package.author
      * `org` {String} Organization name, defaults to `organization`
      * `tel` {String} Telephone number(s)
      * `address` {String} Address
      * `mail` {String} E-mail contact
      * `url` {String} website url
    * `description` {String} Provide the course description or the Project Information
    * `keywords` {Array} Keywords
    * `duration` {String} The time the media takes to play through, format PT#M#S
    * `typicalDuration` {String} The time it will take for a typical learner to fully experience the program, format PT#M#S
    * `requirements` {Array of Objects of the following structure} : 
      * `type` {String} The type of requirement, eg.: Browser, Os
      * `name` {String} The name of the type of requirement, eg.: Microsoft Internet Explorer
      * `version` {String} The minimum version of the requirement
    * `rights` {String} Copyright informations


## USAGE

```javascript
var ssp = require('simple-scorm-packager');

ssp({
  version: '2004 4th Edition',
  organization: 'Test Company',
  title: 'Test Course',
  language: 'fr-FR',
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