function char7(lexim, pattern) {
  let state = 1;
  for (let ch = 0; ch <= lexim.length; ch++) {
    switch (state) {
      case 1:
        lexim[ch] == pattern[0] ? (state = 2) : (state = 9);
        break;
      case 2:
        lexim[ch] == pattern[1] ? (state = 3) : (state = 9);
        break;
      case 3:
        lexim[ch] == pattern[2] ? (state = 4) : (state = 9);
        break;
      case 4:
        lexim[ch] == pattern[3] ? (state = 5) : (state = 9);
        break;
      case 5:
        lexim[ch] == pattern[4] ? (state = 6) : (state = 9);
        break;
      case 6:
        lexim[ch] == pattern[5] ? (state = 7) : (state = 9);
        break;
      case 7:
        lexim[ch] == pattern[6] ? (state = 8) : (state = 9);
        break;
      case 8:
        if (ch == lexim.length) {
          return true;
        }
        return false;
      case 9:
        return false;
    }
  }
}

function char6(lexim, pattern) {
  let state = 1;
  for (let ch = 0; ch <= lexim.length; ch++) {
    switch (state) {
      case 1:
        lexim[ch] == pattern[0] ? (state = 2) : (state = 8);
        break;
      case 2:
        lexim[ch] == pattern[1] ? (state = 3) : (state = 8);
        break;
      case 3:
        lexim[ch] == pattern[2] ? (state = 4) : (state = 8);
        break;
      case 4:
        lexim[ch] == pattern[3] ? (state = 5) : (state = 8);
        break;
      case 5:
        lexim[ch] == pattern[4] ? (state = 6) : (state = 8);
        break;
      case 6:
        lexim[ch] == pattern[5] ? (state = 7) : (state = 8);
        break;
      case 7:
        if (ch == lexim.length) {
          return true;
        }
        return false;
      case 8:
        return false;
    }
  }
}

function char5(lexim, pattern) {
  let state = 1;
  for (let ch = 0; ch <= lexim.length; ch++) {
    switch (state) {
      case 1:
        lexim[ch] == pattern[0] ? (state = 2) : (state = 7);
        break;
      case 2:
        lexim[ch] == pattern[1] ? (state = 3) : (state = 7);
        break;
      case 3:
        lexim[ch] == pattern[2] ? (state = 4) : (state = 7);
        break;
      case 4:
        lexim[ch] == pattern[3] ? (state = 5) : (state = 7);
        break;
      case 5:
        lexim[ch] == pattern[4] ? (state = 6) : (state = 7);
        break;
      case 6:
        if (ch == lexim.length) {
          return true;
        }
        return false;
      case 7:
        return false;
    }
  }
}

function char4(lexim, pattern) {
  let state = 1;
  for (let ch = 0; ch <= lexim.length; ch++) {
    switch (state) {
      case 1:
        lexim[ch] == pattern[0] ? (state = 2) : (state = 6);
        break;
      case 2:
        lexim[ch] == pattern[1] ? (state = 3) : (state = 6);
        break;
      case 3:
        lexim[ch] == pattern[2] ? (state = 4) : (state = 6);
        break;
      case 4:
        lexim[ch] == pattern[3] ? (state = 5) : (state = 6);
        break;
      case 5:
        if (ch == lexim.length) {
          return true;
        }
        return false;
      case 6:
        return false;
    }
  }
}

function char3(lexim, pattern) {
  let state = 1;
  for (let ch = 0; ch <= lexim.length; ch++) {
    switch (state) {
      case 1:
        lexim[ch] == pattern[0] ? (state = 2) : (state = 5);
        break;
      case 2:
        lexim[ch] == pattern[1] ? (state = 3) : (state = 5);
        break;
      case 3:
        lexim[ch] == pattern[2] ? (state = 4) : (state = 5);
        break;
      case 4:
        if (ch == lexim.length) {
          return true;
        }
        return false;
      case 5:
        return false;
    }
  }
}

function char2(lexim, pattern) {
  let state = 1;
  for (let ch = 0; ch <= lexim.length; ch++) {
    switch (state) {
      case 1:
        lexim[ch] == pattern[0] ? (state = 2) : (state = 4);
        break;
      case 2:
        lexim[ch] == pattern[1] ? (state = 3) : (state = 4);
        break;
      case 3:
        if (ch == lexim.length) {
          return true;
        }
        return false;
      case 4:
        return false;
    }
  }
}

function char1(lexim, pattern) {
  let state = 1;
  for (let ch = 0; ch <= lexim.length; ch++) {
    switch (state) {
      case 1:
        lexim[ch] == pattern[0] ? (state = 2) : (state = 3);
        break;
      case 2:
        if (ch == lexim.length) {
          return true;
        }
        return false;
      case 3:
        return false;
    }
  }
}

function functionID(lexim) {
  let state = 1;

  for (let ch = 0; ch < lexim.length; ch++) {
    switch (state) {
      case 1:
        lexim[ch] == "$" ? (state = 2) : (state = 5);
        break;
      case 2:
        (lexim[ch].charCodeAt() >= 97 && lexim[ch].charCodeAt() <= 122) ||
        (lexim[ch].charCodeAt() >= 65 && lexim[ch].charCodeAt() <= 90)
          ? (state = 3)
          : (state = 5);
        break;
      case 3:
        if (ch == lexim.length - 1) {
          return true;
        }
        (lexim[ch].charCodeAt() >= 97 && lexim[ch].charCodeAt() <= 122) ||
        (lexim[ch].charCodeAt() >= 65 && lexim[ch].charCodeAt() <= 90)
          ? (state = 3)
          : (state = 5);
        break;
      case 5:
        return false;
    }
  }
}
function variableID(lexim) {
  let state = 1;
  for (let ch = 0; ch < lexim.length; ch++) {
    switch (state) {
      case 1:
        lexim[ch] == "@" ? (state = 2) : (state = 5);
        break;
      case 2:
        (lexim[ch].charCodeAt() >= 97 && lexim[ch].charCodeAt() <= 122) ||
        (lexim[ch].charCodeAt() >= 65 && lexim[ch].charCodeAt() <= 90)
          ? (state = 3)
          : (state = 5);
        break;
      case 3:
        if (ch == lexim.length - 1) {
          return true;
        }
        (lexim[ch].charCodeAt() >= 97 && lexim[ch].charCodeAt() <= 122) ||
        (lexim[ch].charCodeAt() >= 65 && lexim[ch].charCodeAt() <= 90) ||
        (lexim[ch].charCodeAt() >= 48 && lexim[ch].charCodeAt() <= 57) ||
        lexim[ch] == "_"
          ? (state = 3)
          : (state = 5);
        break;

      case 5:
        return false;
    }
  }
}
function intNumber(lexim) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let state = 1;
  for (let ch = 0; ch < lexim.length; ch++) {
    switch (state) {
      case 1:
        if (numbers.includes(lexim[ch])) {
          state = 1;
          if (ch == lexim.length - 1) {
            return true;
          }
        } else {
          state = 2;
        }
        break;
      case 2:
        return false;
    }
  }
}
function floatNumber(lexim) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let state = 1;
  for (let ch = 0; ch <= lexim.length; ch++) {
    switch (state) {
      case 1:
        numbers.includes(lexim[ch]) ? (state = 2) : (state = 5);
        break;
      case 2:
        if (numbers.includes(lexim[ch])) state = 2;
        else if (lexim[ch] == ".") state = 3;
        else state = 5;
        break;
      case 3:
        numbers.includes(lexim[ch]) ? (state = 4) : (state = 5);
        break;
      case 4:
        if (ch == lexim.length) {
          return true;
        }
        numbers.includes(lexim[ch]) ? (state = 4) : (state = 5);
        break;
      case 5:
        return false;
    }
  }
}
function string(lexim) {
  let state = 1;

  for (let ch = 0; ch <= lexim.length; ch++) {
    switch (state) {
      case 1:
        lexim[ch] == '"' ? (state = 2) : (state = 4);
        break;
      case 2:
        if (ch == lexim.length) {
          return false;
        }
        lexim[ch] == '"' ? (state = 3) : (state = 2);
        break;
      case 3:
        if (ch == lexim.length) {
          return true;
        }
        state = 4;
        break;
      case 4:
        return false;
    }
  }
}

const lexicalReview = (lexim, line) => {
  // charecters
  if (char3(lexim, "[+]")) return "[+]";
  else if (char3(lexim, "[-]")) return "[-]";
  else if (char3(lexim, "[*]")) return "[*]";
  else if (char3(lexim, "[/]")) return "[/]";
  else if (char3(lexim, "[=]")) return "[=]";
  else if (char3(lexim, "[>]")) return "[>]";
  else if (char3(lexim, "[<]")) return "[<]";
  else if (char4(lexim, "[!=]")) return "[!=]";
  else if (char2(lexim, "=>")) return "=>";
  else if (char2(lexim, "##")) return "comment";
  else if (char1(lexim, ":")) return ":";
  else if (char1(lexim, ",")) return ",";
  else if (char1(lexim, "{")) return "{";
  else if (char1(lexim, "}")) return "}";
  else if (char1(lexim, "(")) return "(";
  else if (char1(lexim, ")")) return ")";
  else if (char1(lexim, ";")) return ";";
  else if (char2(lexim, ">>")) return ">>";
  //======  
  else if (char5(lexim, "this?")) return "this?";
  else if (char7(lexim, "thence?")) return "thence?";
  else if (char5(lexim, "noth?")) return "noth?";
  else if (char4(lexim, "play")) return "play";
  else if (char4(lexim, "loop")) return "loop";
  else if (char5(lexim, "until")) return "until";
  else if (char2(lexim, "do")) return "do";
  else if (char3(lexim, "run")) return "run";
  //======
  else if (char3(lexim, "int")) return "int";
  else if (char3(lexim, "str")) return "str";
  else if (char5(lexim, "float")) return "float";
  else if (char4(lexim, "true")) return "true";
  else if (char5(lexim, "false")) return "false";
  else if (variableID(lexim)) return "id";
  else if (functionID(lexim)) return "id";
  else if (intNumber(lexim)) return "number";
  else if (floatNumber(lexim)) return "number";
  else if (string(lexim)) return "number";
  console.log(`ERROR!: this lexim '${lexim}' in line ${line} is not Defined`);
  return "ERROR";
};

module.exports = lexicalReview;
