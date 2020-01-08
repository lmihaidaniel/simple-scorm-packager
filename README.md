`version 1.0.0`

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

## Initialization Options Object
{type} [default]

* `version` {string} ['1.2'] Version of SCORM schema. Available options:
    * '1.2'
    * '2004 3rd Edition' alias '2004.3' alias '2004v3'
    * '2004 4th Edition' alias '2004.4' alias '2004v4'
* `organization` {string} [''] Company name
* `language` {string} ['en'] Language of the package ( ISO )
* `title` {string} ['']
* `identifier` {string} [null] If empty, identifier is generated using:
\`${package.author || 'com'}.${organization || 'company'}.${title || ''}.${generated uuid}\`
* `masteryScore` {number} [80]
* `startingPage` {string} ['index.html']
* `source` {string} ['./'] The path to files from which the package will be created
* `package` {object} Available options:
    * `zip` {boolean} [false] Archives package (`NAME_VERSION_DATE_TIMESTAMP.zip`)
    * `outputFolder` {string} ['./scorm'] The folder path where you want the zip file
    * `size` {number} [null] Provide the package size in bytes, automatically calculated when not set,
    * `name` {string} [\`{$title}\`] Package name, defaults to scorm title
    * `author` {string} [''] Author name, used as default for vcard if not provided
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


## Programatically usage

```javascript
var scopackager = require('simple-scorm-packager');

scopackager({
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

## USE IT AS CLI
if installed globally you can use it directly in command line

```bash
$ simple-scorm-packager
or
$ scopackager
```