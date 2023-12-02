const lexicalReview = require("./lexicalReview");

let tokens = [];
let ID = 1;
let listID = {};

const hasValue = (obj, val) => Object.values(obj).includes(val);

const compile = (program) => {
  let line = [];
  let lineCounter = 0;

  program.map((row) => {
    lineCounter += 1;
    row = row.filter((el) => el != "");
    if (row == "\n") {
      tokens.push(["TOKEN_|n"]);
    } else if (row == "") {
    } else {
      line = row.map((lexim) => {
        let token = lexicalReview(lexim, lineCounter);

        if (
          token.slice(0, 10) == "TOKEN_var_" ||
          token.slice(0, 11) == "TOKEN_func_"
        ) {
          if (!hasValue(listID, lexim)) {
            token = `${token}_ID_${ID}`;
            listID[ID] = lexim;
            ID += 1;
          } else {
            Object.keys(listID).forEach((key) => {
              if (listID[key] == lexim) {
                token = `${token}_ID_${key}`;
              }
            });
          }
        }
        return token;
      });
      tokens.push(line.join(" . "));
    }
  });
  return { tokenList: tokens, idList: listID };
};
module.exports = compile;
