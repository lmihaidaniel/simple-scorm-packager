#!/usr/bin/env node
var path = require("path"),
    fs = require("fs"),
    inquirer = require("inquirer"),
    utils = require(path.join(__dirname, "lib"+path.sep+"utils.js")),
    scopackage = require(path.join(__dirname, "lib"+path.sep+"index.js")),
    generateDefaultSettings = require(path.join(__dirname,"lib"+path.sep+"schemas"+path.sep+"config.js"));

inquirer.registerPrompt("directory", require("inquirer-directory")); 

function getPackageName () {
    try {
      const pkg = require(path.join(process.cwd(), "package.json"))
      return pkg.name
    } catch (e) {
      return ""
    }
  }

var validators = {
  notEmpty: function(value){
    if(value&&utils.cleanAndTrim(value)!="") return true;
    return "Please enter a valid information";
  },
  number: function(value) {
    return !isNaN(parseFloat(value)) || "Please enter a number";
  }
};

var settings = {
  source: process.cwd(),
  uuid: utils.uuid(),
  version: "1.2",
  language: "en",
  organization: "",
  title: getPackageName(),
  identifier: "",
  masteryScore: 80,
  startingPage: "index.html",
  package: {
    zip: true
  }
};

var cli_init = function(next){
  inquirer
  .prompt([{
    type: "list",
    name: "version",
    message: "Select scorm version:",
    choices: [
      "1.2",
      new inquirer.Separator(),
      {
        name: "2004 1st Edition",
        disabled: "Unavailable at this time"
      },
      {
        name: "2004 2nd Edition",
        disabled: "Unavailable at this time"
      },
      "2004 3rd Edition",
      "2004 4th Edition"
    ]},{
      type: "input",
      name: "title",
      message: "Select title:",
      default: settings.title,
      validate: validators.notEmpty,
      filter: function(value) {
        return value.trim();
      }
    },{
      type: "input",
      name: "organization",
      message: "Select organization:",
      validate: validators.notEmpty,
      filter: function(value) {
        return value.trim();
      }
    },
    {
      type: "input",
      name: "language",
      message: "Select language:",
      default: settings.language,
      validate: validators.notEmpty,
      filter: function(value) {
        return value.trim().toLowerCase();
      }
    },
    {
      type: "input",
      name: "masteryScore",
      message: "Select mastery score [Range 0-100]:",
      default: settings.masteryScore,
      filter: Number,
      validate: validators.number
    },
    {
      type: "input",
      name: "startingPage",
      message: "Select starting page:",
      default: settings.startingPage,
      validate: validators.notEmpty,
      filter: function(value) {
        return value.trim();
      }
    }
    ]).then(function(answers) {
      settings.version = answers.version;
      settings.title = answers.title;
      settings.organization = answers.organization;
      settings.language = answers.language;
      settings.masteryScore = answers.masteryScore;
      settings.startingPage = answers.startingPage;
      next();
    });
}

var cli_identifier = function(next){
  inquirer
  .prompt([
    {
      type: "input",
      name: "identifier",
      message: "Select an identifier:",
      default: (utils.acronym(settings.organization)+"00").toUpperCase(),
      validate: validators.notEmpty,
      filter: function(value) {
        return value.trim();
      }
    },{
      type: "input",
      name: "uuid",
      message: "Select an unique identifier:",
      default: settings.uuid,
      validate: validators.notEmpty,
      filter: function(value) {
        return value.trim();
      }
    }
  ])
  .then(function(answers) {
    settings.identifier = answers.identifier;
    settings.uuid = answers.uuid;
    next();
  });
}

var cli_source = function(next){
  inquirer
  .prompt([
    {
      type: "directory",
      name: "from",
      message: "Select source directory:",
      basePath: settings.source
    }
  ])
  .then(function(answers) {
    var dir = (answers.from || settings.source) + path.sep;
    settings.source = path.resolve(dir);
    next();
  });
}

cli_init(function(){
  cli_identifier(function(){
    cli_source(function(){
      var config = generateDefaultSettings(settings);
      /*TODO 
       - add cli input for package
       - add cli helper
       - add cli input config file
      */
      scopackage(config);
    });
  })
});