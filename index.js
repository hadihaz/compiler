const compile = require("./src/compiler");
const { read, write } = require("./src/file");
const syntaxCompiler = require("./src/syntaxCompiler");

let lexims = read("../program.txt").split("\n");

code = lexims.map((lexim) => {
  return lexim.split(" ");
});
tokens = compile(code);

const save = (tokenList, idList) => {
  write(tokenList.join("\n"), "../token.txt");
  // write(JSON.stringify(idList), "../tokens/id.json");
  // write(tokenList.join(" "), "../tokens/compiled.txt");
};
if (tokens) {
  save(tokens.tokenList);
}
let compiled=tokens.tokenList.join(" ");

let result = syntaxCompiler(compiled.split(" "));

if (result)console.log("Accepted")
else console.log("Rejected")
