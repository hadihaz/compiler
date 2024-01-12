const lexicalReview = require("./lexicalReview");

let tokens = [];
let codes = [];
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
      c = row.map((lexim) => {
        return lexim;
      });
      codes.push(c.join(" "));
    }
  });
  return { tokens, codes };
};
module.exports = compile;
