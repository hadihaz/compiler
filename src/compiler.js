const lexicalReview = require("./lexicalReview");

let tokens = [];
const compile = (program) => {
  let line = [];
  let lineCounter = 0;
  program.map((row) => {
    lineCounter += 1;
    row = row.filter((el) => el != "");
    if (row != "") {
      line = row.map((lexim) => {
        let token = lexicalReview(lexim, lineCounter);
        return token;
      });
      tokens.push(line.join(" "));
    }
  });
  return tokens;
};
module.exports = compile;
