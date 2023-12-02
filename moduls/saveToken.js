const fs = require("fs");

const save = (tokenList, idList) => {
  fs.writeFileSync("./tokens/token.txt", tokenList.join("\n"));
  fs.writeFileSync("./tokens/id.json", JSON.stringify(idList));
};
module.exports = save;
