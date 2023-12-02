const read = require("./moduls/readFile");
const save = require("./moduls/saveToken");
const compile = require("./moduls/compiler");

let lexims = read("../program.txt").split("\n");

code = lexims.map((lexim) => {
  return lexim.split(" ");
});

tokens = compile(code);
save(tokens.tokenList, tokens.idList);

console.log(tokens);
