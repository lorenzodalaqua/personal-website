const fs = require("fs");
const { render } = require("jsonresume-theme-autumn");
const resume = JSON.parse(fs.readFileSync("./_data/resume.json"));
fs.writeFileSync(`./resume/index.html`, render(resume));
