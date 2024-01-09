const compile = require("./src/compiler");
const { read, write } = require("./src/file");
const syntaxCompiler = require("./src/syntaxCompiler");

let lexims = read("../program.txt").split("\n");

code = lexims.map((lexim) => {
  return lexim.split(" ");
});
tokens = compile(code);

if (tokens) {
  write(tokens.join("\n"), "../token.txt");
}
let tokensToString=tokens.join(" ");
let tokenList=tokensToString.split(" ")
let result = syntaxCompiler(tokenList);

if (result)console.log("Accepted")
else console.log("Rejected")
