const fs = require("fs");
const path = require("path");

const read = (fileName) => {
  const filePath = path.join(__dirname, fileName);
  const data = fs.readFileSync(filePath);
  return data.toString();
};
module.exports = read;
