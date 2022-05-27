"use strict";
module.exports = {
  cleanAndTrim: function(text) {
    //Escape all non alphanum characters
    // a;s,ç!('d123[שץ,דתג] => asçd123שץדתג
    var textClean = text.replace(/[^\p{L}0-9]+/gu, "");
    return textClean.replace(/\s/g, "");
  },
  acronym: function(words) {
    if (!words) {
      return "";
    }
    var first_letter = function(x) {
      if (x) {
        return x[0];
      } else {
        return "";
      }
    };
    return words.split(" ").map(first_letter).join("");
  },
  uuid: function() {
    var now = new Date();
    var d = now.getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : r & 0x3 | 0x8).toString(16);
      }
    );
    return uuid;
  }
};
