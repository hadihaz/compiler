const compile = require("./src/compiler");
const { read, write } = require("./src/file");
const syntaxCompiler = require("./src/syntaxCompiler");

let lexims = read("../program.txt").split("\n");
code = lexims.map((lexim) => {
  return lexim.split(" ");
});
let c = compile(code);
tokens = c.tokens;
codes = c.codes;

if (tokens) {
  write(tokens.join("\n"), "../token.txt");
}
let tokensToString = tokens.join(" ");
let tokenList = tokensToString.split(" ");
let result = syntaxCompiler(tokenList, codes);

if (result) console.log("   Accepted");
else console.log("   Rejected");
