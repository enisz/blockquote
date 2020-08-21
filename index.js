console.clear();
const fs = require("fs");
const md2json = require("md-2-json");

const template = fs.readFileSync("template.md", { encoding : "utf-8"});

console.log(md2json.parse(template));