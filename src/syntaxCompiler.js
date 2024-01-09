let lookahead = "";
let i = 0;
const tokens = [];
let Accept = true;
let code = "";

function checkResult(tokenlist = tokens) {
  if (Accept == false) {
    console.log(Accept,"=>",code);
    code = "";
    return false;
  }

  return syntaxCompiler(tokenlist);
}
function syntaxCompiler(tokenlist) {
  tokens.splice(0, tokens.length);
  tokens.push(...tokenlist);
  lookahead = tokens[i];
  BASE();
  // console.log(i, tokens.length - 1, Accept);
  if (i >= tokens.length - 1 || Accept == false) {
    console.log(Accept,"=>",code);
    code = "";
    return Accept;
  } else {
    console.log(Accept,"=>",code);
    code = "";
    syntaxCompiler(tokenlist);
  }
  // console.log(Accept,"=>",code);
  code = "";
  return Accept;
}

function match(symbol) {
  // console.log(lookahead);

  if (lookahead === symbol) {
    code = code + " " + lookahead;
    i++;
    lookahead = tokens[i];
  } else {
    Accept = false;
    checkResult();
  }
}

const BASE = () => {
  if (
    lookahead == "this?" ||
    lookahead == "loop" ||
    lookahead == "until" ||
    lookahead == "do" ||
    lookahead == "run"
  ) {
    SYNTAX();
  } else if (
    lookahead == "int" ||
    lookahead == "str" ||
    lookahead == "float" ||
    lookahead == "id"
  ) {
    ASSIGNMENT();
  } else {
    Accept = false;
    checkResult();
  }
};
const SYNTAX = () => {
  switch (lookahead) {
    case "this?":
      match("this?");
      CONDITION();
      match("play");
      match("{");
      BASE();
      match("}");
      ELSE();
      break;
    case "loop":
      match("loop");
      CONDITION();
      match("{");
      BASE();
      match("}");
      break;
    case "until":
      match("until");
      CONDITION();
      match(">>");
      ASSIGNMENT();
      match(">>");
      OPERATION();
      match("{");
      BASE();
      match("}");
      break;
    case "do":
      match("do");
      match("(");
      FUNCINPUT();
      match(")");
      match("id");
      match("{");
      BASE();
      match("}");
      break;
    case "run":
      match("run");
      match("(");
      FUNCINPUT();
      match(")");
      match("id");
      break;
    default:
      Accept = false;
      checkResult();
  }
};
const FUNCINPUT = () => {
  switch (lookahead) {
    case "id":
      VALUE();
      D();
      break;
    case "number":
      VALUE();
      D();
      break;
  }
};
const D = () => {
  switch (lookahead) {
    case ",":
      match(",")
      VALUE();
      D();
      break;
  }
};
const ELSE = () => {
  switch (lookahead) {
    case "thence?":
      match("thence?");
      CONDITION();
      match("play");
      match("{");
      BASE();
      match("}");
      ELSE();
      break;
    case "noth?":
      match("noth?");
      match("play");
      match("{");
      BASE();
      match("}");
      break;
  }
};
const CONDITION = () => {
  switch (lookahead) {
    case "[<]":
      COMPARISON();
      match("(");
      C();
      match(",");
      C();
      match(")");
      break;
    case "[>]":
      COMPARISON();
      match("(");
      C();
      match(",");
      C();
      match(")");
      break;
    case "[=]":
      COMPARISON();
      match("(");
      C();
      match(",");
      C();
      match(")");
      break;
    case "[!=]":
      COMPARISON();
      match("(");
      C();
      match(",");
      C();
      match(")");
      break;
    case "true":
      match("true");
      break;
    case "false":
      match("false");
      break;
    default:
      Accept = false;
      checkResult();
  }
};
const C = () => {
  switch (lookahead) {
    case "[<]":
      CONDITION();
      break;
    case "[>]":
      CONDITION();
      break;
    case "[=]":
      CONDITION();
      break;
    case "[!=]":
      CONDITION();
      break;
    case "true":
      CONDITION();
      break;
    case "false":
      CONDITION();
      break;
    case "id":
      T();
      break;
    case "number":
      T();
      break;
    case "[+]":
      T();
      break;
    case "[-]":
      T();
      break;
    case "[*]":
      T();
      break;
    case "[/]":
      T();
      break;

    default:
      Accept = false;
      checkResult();
  }
};
const COMPARISON = () => {
  switch (lookahead) {
    case "[<]":
      match("[<]");
      break;
    case "[>]":
      match("[>]");
      break;
    case "[=]":
      match("[=]");
      break;
    case "[!=]":
      match("[!=]");
      break;
    default:
      Accept = false;
      checkResult();
  }
};

const VALUE = () => {
  switch (lookahead) {
    case "id":
      match("id");
      break;
    case "number":
      match("number");
      break;
    default:
      Accept = false;
      checkResult();
  }
};
const ASSIGNMENT = () => {
  switch (lookahead) {
    case "int":
      TYPE();
      match(":");
      A();
      break;
    case "str":
      TYPE();
      match(":");
      A();
      break;
    case "float":
      TYPE();
      match(":");
      A();
      break;
    case "id":
      A();
      break;
    default:
      Accept = false;
      checkResult();
  }
};
const A = () => {
  switch (lookahead) {
    case "id":
      match("id");
      match("=>");
      T();
      break;
    default:
      Accept = false;
      checkResult();
  }
};
const TYPE = () => {
  switch (lookahead) {
    case "int":
      match("int");
      break;
    case "str":
      match("str");
      break;
    case "float":
      match("float");
      break;
    default:
      Accept = false;
      checkResult();
  }
};
const OPERATION = () => {
  switch (lookahead) {
    case "[+]":
      OPERATOR();
      match("(");
      F();
      match(")");
      break;
    case "[-]":
      OPERATOR();
      match("(");
      F();
      match(")");
      break;
    case "[*]":
      OPERATOR();
      match("(");
      F();
      match(")");
      break;
    case "[/]":
      OPERATOR();
      match("(");
      F();
      match(")");
      break;
    default:
      Accept = false;
      checkResult();
  }
};
const OPERATOR = () => {
  switch (lookahead) {
    case "[+]":
      match("[+]");
      break;
    case "[-]":
      match("[-]");
      break;
    case "[*]":
      match("[*]");
      break;
    case "[/]":
      match("[/]");
      break;
    default:
      Accept = false;
      checkResult();
  }
};

const F = () => {
  switch (lookahead) {
    case "id":
      T()
      H()
      break;
    case "number":
      T()
      H()
      break;
    case "[+]":
      T()
      H()
      break;
    case "[-]":
      T()
      H()
      break;
    case "[*]":
      T()
      H()
      break;
    case "[/]":
      T()
      H()
      break;
  }
};
const H = () => {
  switch (lookahead) {
    case ",":
      match(",");
      F();
      break;
  }
};
const T = () => {
  switch (lookahead) {
    case "id":
      VALUE();
      break;
    case "number":
      VALUE();
      break;
    case "[+]":
      OPERATION();
      break;
    case "[-]":
      OPERATION();
      break;
    case "[*]":
      OPERATION();
      break;
    case "[/]":
      OPERATION();
      break;
    default:
      Accept = false;
      checkResult();
  }
};

module.exports = checkResult;