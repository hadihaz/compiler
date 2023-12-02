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
  if (char3(lexim, "[+]")) return "TOKEN_plus";
  else if (char3(lexim, "[-]")) return "TOKEN_minus";
  else if (char3(lexim, "[*]")) return "TOKEN_multiplication";
  else if (char3(lexim, "[/]")) return "TOKEN_division";
  else if (char3(lexim, "[=]")) return "TOKEN_equal";
  else if (char3(lexim, "[>]")) return "TOKEN_bigger";
  else if (char3(lexim, "[<]")) return "TOKEN_smaller";
  else if (char2(lexim, "=>")) return "TOKEN_assign";
  else if (char2(lexim, "##")) return "TOKEN_comment";
  else if (char1(lexim, ":")) return "TOKEN_:";
  else if (char1(lexim, ",")) return "TOKEN_,";
  else if (char1(lexim, "{")) return "TOKEN_{";
  else if (char1(lexim, "}")) return "TOKEN_}";
  else if (char1(lexim, "(")) return "TOKEN_(";
  else if (char1(lexim, ")")) return "TOKEN_)";
  else if (char1(lexim, ">>")) return "TOKEN_>>";
  //======
  else if (char5(lexim, "this?")) return "TOKEN_this?";
  else if (char7(lexim, "thence?")) return "TOKEN_thence?";
  else if (char5(lexim, "noth?")) return "TOKEN_noth?";
  else if (char4(lexim, "play")) return "TOKEN_play";
  else if (char4(lexim, "loop")) return "TOKEN_loop";
  else if (char5(lexim, "until")) return "TOKEN_until";
  else if (char2(lexim, "do")) return "TOKEN_do";
  else if (char3(lexim, "run")) return "TOKEN_run";
  //======
  else if (char3(lexim, "int")) return "TOKEN_TYPEint";
  else if (char3(lexim, "str")) return "TOKEN_TYPEstr";
  else if (char5(lexim, "float")) return "TOKEN_TYPEfloat";
  else if (variableID(lexim)) return "TOKEN_var_" + lexim;
  else if (functionID(lexim)) return "TOKEN_func_" + lexim;
  else if (intNumber(lexim)) return "TOKEN_int_" + lexim;
  else if (floatNumber(lexim)) return "TOKEN_float_" + lexim;
  else if (string(lexim)) return "TOKEN_string_" + lexim;
  console.log(`ERROR!: this lexim(${lexim})in line ${line} is not Defined`);
  return "ERROR_" + lexim;
};

module.exports = lexicalReview;
