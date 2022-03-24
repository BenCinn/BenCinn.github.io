const marked = require("marked");
const sanitize = require("sanitize-html");
const fs = require("fs");
var path = require("path");

var compile = function (markdown, blogname) {
  fs.writeFile(
    path.extname(blogname) !== ".html"
      ? path.parse(blogname).name + ".html"
      : blogname,
    sanitize(marked.parse(blogname)),
    (err) => {
      if (err) console.log("ERROR:" + err);
      else console.log("Write successfully");
    }
  );
};
module.exports = compile;
