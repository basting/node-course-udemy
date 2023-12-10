const fs = require("fs");

const dataJSON = fs.readFileSync("1-json.json").toString();
const data = JSON.parse(dataJSON);
data.name = "bg";
data.age = 21;

fs.writeFileSync("1-json.json", JSON.stringify(data));
