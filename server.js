const compiler = require("./compile");
const fs = require("fs");

if (!fs.existsSync("./md_blog/")) {
  console.log("Directory md_blog doesn't exist, create one...");
  fs.mkdirSync("md_blog/");
}

gitdiff = require("child_process")
  .execSync("git diff --name-only HEAD HEAD~1")
  .toString()
  .trim()
  .split(" ");

for (let i = 0; i < gitdiff.length; i++) {
  if (gitdiff[i].startsWith("md_blog/")) {
    fs.readFile(gitdiff[i], "utf8", function (err, data) {
      compiler(data, gitdiff[i]);
    });
  } else
    console.log(
      "File " + gitdiff[i] + " is deleted or it isn't in the md_blog folder"
    );
}
