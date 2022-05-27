`version 0.2.5`

## Documentation

Creates SCORM package from source directory.

- Supported Scorm versions:
  - SCORM 1.2
  - SCORM 2004 3rd Edition
  - SCORM 2004 4th Edition

## Installation

```bash
npm install simple-scorm-packager
```

## Initialization Options Object

{type} [default]

- `version` {string} ['1.2'] Version of SCORM schema. Available options:
  - '1.2'
  - '2004 3rd Edition' alias '2004.3' alias '2004v3'
  - '2004 4th Edition' alias '2004.4' alias '2004v4'
- `organization` {string} [''] Company name
- `language` {string} ['en'] Language of the package ( ISO )
- `title` {string} ['']
- `identifier` {string} [null] If empty, identifier is generated using:
  \`${package.author || 'com'}.${organization || 'company'}.${title || ''}.${generated uuid}\`
- `masteryScore` {number} [80]
- `startingPage` {string} ['index.html']
- `source` {string} ['./'] The path to files from which the package will be created
- `package` {object} Available options:
  - `zip` {boolean} [false] Archives package (`NAME_VERSION_DATE.zip`)
  - `appendTimeToOutput` {boolean} [false] Add full Unix time milliseconds to the zip file output, so repeated builds are unique (`NAME_VERSION_DATE_TIMESTAMP.zip`)
  - `outputFolder` {string} ['./scorm'] The folder path where you want the zip file
  - `size` {number} [null] Provide the package size in bytes, automatically calculated when not set,
  - `name` {string} [\`{$title}\`] Package name, defaults to scorm title
  - `author` {string} [''] Author name, used as default for vcard if not provided
  - `version` {string} [process.env.npm_package_version || '1.0.0'] Package version
  - `organization` {string} [\`${organization}\`] Company name
  - `date` {string} [current date YYYY-MM-DD] Package date
  - `vcard` {object} :
    - `author` {string} [\`${package.author}\`] Author name
    - `org` {string} [\`${package.organization}\` || \`${organization}\`] Organization name, defaults to `organization`
    - `tel` {string} [''] Telephone number(s)
    - `address` {string} [''] Address
    - `mail` {string} [''] E-mail contact
    - `url` {string} [''] website url
  - `description` {string} [''] Provide the course description or the Project Information
  - `keywords` {array} [[]] Keywords
  - `duration` {string} ['PT0H0M0S'] The time the media takes to play through, format PT#H#M#S
  - `typicalDuration` {string} [\`${package.duration}\` || 'PT0H0M0S'] The time it will take for a typical learner to fully experience the program, format PT#H#M#S
  - `requirements` {array of objects of the following structure} [[]]
    - `type` {string} The type of requirement, eg.: Browser, Os
    - `name` {string} The name of the type of requirement, eg.: Microsoft Internet Explorer
    - `version` {string} The minimum version of the requirement
  - `rights` {string} [\`© ${organization || ''}. All rights reserved.\`] Copyright information

## Programatic usage

```javascript
var scopackager = require("simple-scorm-packager")

scopackager(
  {
    version: "2004 4th Edition",
    organization: "Test Company",
    title: "Test Course",
    language: "fr-FR",
    identifier: "00",
    masteryScore: 80,
    startingPage: "index.html",
    source: "./myProjectFolder",
    package: {
      version: "0.0.1",
      zip: true,
      outputFolder: "./scormPackages",
    },
  },
  function (msg) {
    console.log(msg)
  }
)
```

## Adding it to npm scripts

If you are packaging a project which utilizes npm and has a package.json file, follow the instructions below for adding a SCORM packager to your npm scripts.

1. Create a JavaScript file (typically at the root of your project in the same directory as package.json) `scoPackager.js`
2. The file should contain code to execute this package. Example:

```javascript
var scopackager = require("simple-scorm-packager")
var path = require("path")

const config = {
  version: "1.2",
  organization: "My Amazing Company",
  title: "Test Course",
  language: "en-US",
  masteryScore: 80,
  startingPage: "index.html",
  source: path.join(__dirname, "build"),
  package: {
    version: process.env.npm_package_version,
    zip: true,
    author: "Firstname Lastname",
    outputFolder: path.join(__dirname, "scorm_packages"),
    description: "A test of the course packaging module",
    keywords: ["scorm", "test", "course"],
    typicalDuration: "PT0H5M0S",
    rights: `©${new Date().getFullYear()} My Amazing Company. All right reserved.`,
    vcard: {
      author: "Firstname Lastname",
      org: "My Amazing Company",
      tel: "(000) 000-0000",
      address: "my address",
      mail: "my@email.com",
      url: "https://mydomain.com",
    },
  },
}

scopackager(config, function (msg) {
  console.log(msg)
  process.exit(0)
})
```

3. In the scripts portion of your package.json, add the following: `"package-scorm": "node scoPackager.js"` (replace the .js file name with the name (and path) of the file containing your script from step 2)
4. You can now package your project for SCORM by running `npm run package-scorm` from the command line.

## USE IT AS CLI

if installed globally you can use it directly in command line

```bash
$ simple-scorm-packager
or
$ scopackager
```

## LICENSING

The following files are fall under this [LICENSE](./lib/schemas/definitionFiles/license.txt)

- [scorm 1.2 - ims](./lib/schemas/definitionFiles/scorm12edition/ims_xml.xsd)
- [scorm 1.2 - imscp](./lib/schemas/definitionFiles/scorm12edition/imscp_rootv1p1p2.xsd)
- [scorm 2004 v3 - imscp](./lib/schemas/definitionFiles/scorm20043rdedition/imscp_v1p1.xsd)
- [scorm 2004 v4 - imscp](./lib/schemas/definitionFiles/scorm20044thedition/imscp_v1p1.xsd)
