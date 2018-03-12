/**
 * LR parser generated by the Syntax tool.
 *
 * https://www.npmjs.com/package/syntax-cli
 *
 *   npm install -g syntax-cli
 *
 *   syntax-cli --help
 *
 * To regenerate run:
 *
 *   syntax-cli \
 *     --grammar ~/path-to-grammar-file \
 *     --mode <parsing-mode> \
 *     --output ~/path-to-output-parser-file.js
 */

'use strict';

/**
 * Matched token text.
 */
let yytext;

/**
 * Length of the matched token text.
 */
let yyleng;

/**
 * Storage object.
 */
let yy = {};

/**
 * Result of semantic action.
 */
let __;

/**
 * Result location object.
 */
let __loc;

function yyloc(start, end) {
  if (!yy.options.captureLocations) {
    return null;
  }

  // Epsilon doesn't produce location.
  if (!start || !end) {
    return start || end;
  }

  return {
    startOffset: start.startOffset,
    endOffset: end.endOffset,
    startLine: start.startLine,
    endLine: end.endLine,
    startColumn: start.startColumn,
    endColumn: end.endColumn,
  };
}

const EOF = '$';

/**
 * List of productions (generated by Syntax tool).
 */
const productions = [[-1,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[0,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);
      __ = {
        type: 'Script',
        commands: _1,
      };
     }],
[1,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = [_1]  }],
[1,2,(_1,_2,_1loc,_2loc) => { __loc = yyloc(_1loc, _2loc); _1.push(_2); __ = _1   }],
[2,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[2,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[3,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc);
      if (_1 === 'set') {
        _2[0] = parseName(_2[0]);
        _2[1] = parseValue(_2[1]);
      }
      __ = {
        type: 'SimulatorCommand',
        name: _1,
        arguments: _2,
        terminator: _3,
      }
     }],
[4,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[4,0,() => { __loc = null; __ = []  }],
[5,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc); __ = [_1]  }],
[5,2,(_1,_2,_1loc,_2loc) => { __loc = yyloc(_1loc, _2loc); _1.push(_2); __ = _1  }],
[6,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[6,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[6,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[6,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[6,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[6,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[6,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[7,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[7,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[7,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[8,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc);
      __ = {
        type: 'ControllerCommand',
        name: _1,
        arguments: parseControllerCommandArgs(_2),
        terminator: _3
      }
     }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[9,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[10,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc);
      __ = {
        type: 'ControllerCommand',
        name: parseName(_1),
        times: parseValue(_2),
        commands: _3,
      }
     }],
[11,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc);
      __ = {
        type: 'ControllerCommand',
        name: _1,
        condition: _2,
        commands: _3,
      }
     }],
[12,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc);
      __ = {
        type: 'RelationalExpression',
        operator: _2,
        left: parseName(_1),
        right: parseValue(_3),
      }
     }],
[13,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[13,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[13,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[13,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[13,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[13,1,(_1,_1loc) => { __loc = yyloc(_1loc, _1loc);__ = _1 }],
[14,3,(_1,_2,_3,_1loc,_2loc,_3loc) => { __loc = yyloc(_1loc, _3loc);
      __ = _2
     }]];

/**
 * Encoded tokens map.
 */
const tokens = {"REF_VAL":"15","COMMAND_TERMINATOR":"16","NUMBER":"17","FORMATTED_NUMBER":"18","LOAD":"19","REPEAT":"20","WHILE":"21","STRING":"22","OUTPUT_FILE":"23","COMPARE_TO":"24","OUTPUT_LIST":"25","ECHO":"26","CLEAR_ECHO":"27","BREAKPOINT":"28","CLEAR_BREAKPOINTS":"29","EQUAL":"30","NOT_EQUAL":"31","LESS":"32","GREATER":"33","LESS_EQUAL":"34","GREATER_EQUAL":"35","'{'":"36","'}'":"37","$":"38"};

/**
 * Parsing table (generated by Syntax tool).
 */
const table = [{"0":36,"1":1,"2":2,"3":3,"7":4,"8":6,"9":9,"10":7,"11":8,"15":"s5","19":"s37","20":"s10","21":"s11","23":"s38","24":"s39","25":"s40","26":"s41","27":"s42","28":"s43","29":"s44"},{"2":12,"3":3,"7":4,"8":6,"9":9,"10":7,"11":8,"15":"s5","19":"s37","20":"s10","21":"s11","23":"s38","24":"s39","25":"s40","26":"s41","27":"s42","28":"s43","29":"s44","38":"r1"},{"15":"r2","19":"r2","20":"r2","21":"r2","23":"r2","24":"r2","25":"r2","26":"r2","27":"r2","28":"r2","29":"r2","37":"r2","38":"r2"},{"15":"r4","19":"r4","20":"r4","21":"r4","23":"r4","24":"r4","25":"r4","26":"r4","27":"r4","28":"r4","29":"r4","37":"r4","38":"r4"},{"15":"r5","19":"r5","20":"r5","21":"r5","23":"r5","24":"r5","25":"r5","26":"r5","27":"r5","28":"r5","29":"r5","37":"r5","38":"r5"},{"4":13,"5":14,"6":15,"15":"s18","16":"r8","17":"s16","18":"s17","19":"s19","20":"s20","21":"s21","22":"s22"},{"15":"r18","19":"r18","20":"r18","21":"r18","23":"r18","24":"r18","25":"r18","26":"r18","27":"r18","28":"r18","29":"r18","37":"r18","38":"r18"},{"15":"r19","19":"r19","20":"r19","21":"r19","23":"r19","24":"r19","25":"r19","26":"r19","27":"r19","28":"r19","29":"r19","37":"r19","38":"r19"},{"15":"r20","19":"r20","20":"r20","21":"r20","23":"r20","24":"r20","25":"r20","26":"r20","27":"r20","28":"r20","29":"r20","37":"r20","38":"r20"},{"4":25,"5":14,"6":15,"15":"s18","16":"r8","17":"s16","18":"s17","19":"s19","20":"s20","21":"s21","22":"s22"},{"6":27,"15":"s18","17":"s16","18":"s17","19":"s19","20":"s20","21":"s21","22":"s22"},{"12":32,"15":"s33"},{"15":"r3","19":"r3","20":"r3","21":"r3","23":"r3","24":"r3","25":"r3","26":"r3","27":"r3","28":"r3","29":"r3","37":"r3","38":"r3"},{"16":"s23"},{"6":24,"15":"s18","16":"r7","17":"s16","18":"s17","19":"s19","20":"s20","21":"s21","22":"s22"},{"15":"r9","16":"r9","17":"r9","18":"r9","19":"r9","20":"r9","21":"r9","22":"r9"},{"15":"r11","16":"r11","17":"r11","18":"r11","19":"r11","20":"r11","21":"r11","22":"r11","36":"r11"},{"15":"r12","16":"r12","17":"r12","18":"r12","19":"r12","20":"r12","21":"r12","22":"r12","36":"r12"},{"15":"r13","16":"r13","17":"r13","18":"r13","19":"r13","20":"r13","21":"r13","22":"r13","36":"r13"},{"15":"r14","16":"r14","17":"r14","18":"r14","19":"r14","20":"r14","21":"r14","22":"r14","36":"r14"},{"15":"r15","16":"r15","17":"r15","18":"r15","19":"r15","20":"r15","21":"r15","22":"r15","36":"r15"},{"15":"r16","16":"r16","17":"r16","18":"r16","19":"r16","20":"r16","21":"r16","22":"r16","36":"r16"},{"15":"r17","16":"r17","17":"r17","18":"r17","19":"r17","20":"r17","21":"r17","22":"r17","36":"r17"},{"15":"r6","19":"r6","20":"r6","21":"r6","23":"r6","24":"r6","25":"r6","26":"r6","27":"r6","28":"r6","29":"r6","37":"r6","38":"r6"},{"15":"r10","16":"r10","17":"r10","18":"r10","19":"r10","20":"r10","21":"r10","22":"r10"},{"16":"s26"},{"15":"r21","19":"r21","20":"r21","21":"r21","23":"r21","24":"r21","25":"r21","26":"r21","27":"r21","28":"r21","29":"r21","37":"r21","38":"r21"},{"14":28,"36":"s29"},{"15":"r30","19":"r30","20":"r30","21":"r30","23":"r30","24":"r30","25":"r30","26":"r30","27":"r30","28":"r30","29":"r30","37":"r30","38":"r30"},{"1":30,"2":2,"3":3,"7":4,"8":6,"9":9,"10":7,"11":8,"15":"s5","19":"s37","20":"s10","21":"s11","23":"s38","24":"s39","25":"s40","26":"s41","27":"s42","28":"s43","29":"s44"},{"2":12,"3":3,"7":4,"8":6,"9":9,"10":7,"11":8,"15":"s5","19":"s37","20":"s10","21":"s11","23":"s38","24":"s39","25":"s40","26":"s41","27":"s42","28":"s43","29":"s44","37":"s31"},{"15":"r39","19":"r39","20":"r39","21":"r39","23":"r39","24":"r39","25":"r39","26":"r39","27":"r39","28":"r39","29":"r39","37":"r39","38":"r39"},{"14":34,"36":"s29"},{"13":35,"30":"s45","31":"s46","32":"s47","33":"s48","34":"s49","35":"s50"},{"15":"r31","19":"r31","20":"r31","21":"r31","23":"r31","24":"r31","25":"r31","26":"r31","27":"r31","28":"r31","29":"r31","37":"r31","38":"r31"},{"6":51,"15":"s18","17":"s16","18":"s17","19":"s19","20":"s20","21":"s21","22":"s22"},{"38":"acc"},{"15":"r22","16":"r22","17":"r22","18":"r22","19":"r22","20":"r22","21":"r22","22":"r22"},{"15":"r23","16":"r23","17":"r23","18":"r23","19":"r23","20":"r23","21":"r23","22":"r23"},{"15":"r24","16":"r24","17":"r24","18":"r24","19":"r24","20":"r24","21":"r24","22":"r24"},{"15":"r25","16":"r25","17":"r25","18":"r25","19":"r25","20":"r25","21":"r25","22":"r25"},{"15":"r26","16":"r26","17":"r26","18":"r26","19":"r26","20":"r26","21":"r26","22":"r26"},{"15":"r27","16":"r27","17":"r27","18":"r27","19":"r27","20":"r27","21":"r27","22":"r27"},{"15":"r28","16":"r28","17":"r28","18":"r28","19":"r28","20":"r28","21":"r28","22":"r28"},{"15":"r29","16":"r29","17":"r29","18":"r29","19":"r29","20":"r29","21":"r29","22":"r29"},{"15":"r33","17":"r33","18":"r33","19":"r33","20":"r33","21":"r33","22":"r33"},{"15":"r34","17":"r34","18":"r34","19":"r34","20":"r34","21":"r34","22":"r34"},{"15":"r35","17":"r35","18":"r35","19":"r35","20":"r35","21":"r35","22":"r35"},{"15":"r36","17":"r36","18":"r36","19":"r36","20":"r36","21":"r36","22":"r36"},{"15":"r37","17":"r37","18":"r37","19":"r37","20":"r37","21":"r37","22":"r37"},{"15":"r38","17":"r38","18":"r38","19":"r38","20":"r38","21":"r38","22":"r38"},{"36":"r32"}];

/**
 * Parsing stack.
 */
const stack = [];

/**
 * Tokenizer instance.
 */
let tokenizer;
/**
 * Generic tokenizer used by the parser in the Syntax tool.
 *
 * https://www.npmjs.com/package/syntax-cli
 *
 * See `--custom-tokinzer` to skip this generation, and use a custom one.
 */

const lexRules = [[/^\/\/.*/, function() { /* skip comments */ }],
[/^\/\*(.|\s)*?\*\//, function() { /* skip comments */ }],
[/^\s+/, function() { /* skip whitespace */ }],
[/^"[^\"]*"/, function() {  yytext = yytext.slice(1, -1); return 'STRING'  }],
[/^'[^\']*'/, function() {  yytext = yytext.slice(1, -1); return 'STRING'  }],
[/^(;|,|!)/, function() { return 'COMMAND_TERMINATOR' }],
[/^<>/, function() { return 'NOT_EQUAL' }],
[/^<=/, function() { return 'LESS_EQUAL' }],
[/^>=/, function() { return 'GREATER_EQUAL' }],
[/^</, function() { return 'LESS' }],
[/^>/, function() { return 'GREATER' }],
[/^=/, function() { return 'EQUAL' }],
[/^load/, function() { return 'LOAD' }],
[/^output-file/, function() { return 'OUTPUT_FILE' }],
[/^compare-to/, function() { return 'COMPARE_TO' }],
[/^output-list/, function() { return 'OUTPUT_LIST' }],
[/^echo/, function() { return 'ECHO' }],
[/^clear-echo/, function() { return 'CLEAR_ECHO' }],
[/^breakpoint/, function() { return 'BREAKPOINT' }],
[/^clear-breakpoints/, function() { return 'CLEAR_BREAKPOINTS' }],
[/^repeat/, function() { return 'REPEAT' }],
[/^while/, function() { return 'WHILE' }],
[/^\b(B|X|D)\d+/, function() { return 'FORMATTED_NUMBER' }],
[/^(-?)\d+/, function() { return 'NUMBER' }],
[/^[\w\.%\[\]]+/, function() { return 'REF_VAL' }],
[/^\{/, function() { return "'{'"; }],
[/^\}/, function() { return "'}'"; }]];
const lexRulesByConditions = {"INITIAL":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]};

const EOF_TOKEN = {
  type: EOF,
  value: '',
};

tokenizer = {
  initString(string) {
    this._string = string;
    this._cursor = 0;

    this._states = ['INITIAL'];
    this._tokensQueue = [];

    this._currentLine = 1;
    this._currentColumn = 0;
    this._currentLineBeginOffset = 0;

    /**
     * Matched token location data.
     */
    this._tokenStartOffset = 0;
    this._tokenEndOffset = 0;
    this._tokenStartLine = 1;
    this._tokenEndLine = 1;
    this._tokenStartColumn = 0;
    this._tokenEndColumn = 0;

    return this;
  },

  /**
   * Returns tokenizer states.
   */
  getStates() {
    return this._states;
  },

  getCurrentState() {
    return this._states[this._states.length - 1];
  },

  pushState(state) {
    this._states.push(state);
  },

  begin(state) {
    this.pushState(state);
  },

  popState() {
    if (this._states.length > 1) {
      return this._states.pop();
    }
    return this._states[0];
  },

  getNextToken() {
    // Something was queued, return it.
    if (this._tokensQueue.length > 0) {
      return this._toToken(this._tokensQueue.shift());
    }

    if (!this.hasMoreTokens()) {
      return EOF_TOKEN;
    }

    let string = this._string.slice(this._cursor);
    let lexRulesForState = lexRulesByConditions[this.getCurrentState()];

    for (let i = 0; i < lexRulesForState.length; i++) {
      let lexRuleIndex = lexRulesForState[i];
      let lexRule = lexRules[lexRuleIndex];

      let matched = this._match(string, lexRule[0]);

      // Manual handling of EOF token (the end of string). Return it
      // as `EOF` symbol.
      if (string === '' && matched === '') {
        this._cursor++;
      }

      if (matched !== null) {
        yytext = matched;
        yyleng = yytext.length;
        let token = lexRule[1].call(this);

        if (!token) {
          return this.getNextToken();
        }

        // If multiple tokens are returned, save them to return
        // on next `getNextToken` call.

        if (Array.isArray(token)) {
          const tokensToQueue = token.slice(1);
          token = token[0];
          if (tokensToQueue.length > 0) {
            this._tokensQueue.unshift(...tokensToQueue);
          }
        }

        return this._toToken(token, yytext);
      }
    }

    if (this.isEOF()) {
      this._cursor++;
      return EOF_TOKEN;
    }

    this.throwUnexpectedToken(
      string[0],
      this._currentLine,
      this._currentColumn
    );
  },

  /**
   * Throws default "Unexpected token" exception, showing the actual
   * line from the source, pointing with the ^ marker to the bad token.
   * In addition, shows `line:column` location.
   */
  throwUnexpectedToken(symbol, line, column) {
    const lineSource = this._string.split('\n')[line - 1];
    let lineData = '';

    if (lineSource) {
      const pad = ' '.repeat(column);
      lineData = '\n\n' + lineSource + '\n' + pad + '^\n';
    }

    throw new SyntaxError(
      `${lineData}Unexpected token: "${symbol}" ` +
      `at ${line}:${column}.`
    );
  },

  getCursor() {
    return this._cursor;
  },

  getCurrentLine() {
    return this._currentLine;
  },

  getCurrentColumn() {
    return this._currentColumn;
  },

  _captureLocation(matched) {
    const nlRe = /\n/g;

    // Absolute offsets.
    this._tokenStartOffset = this._cursor;

    // Line-based locations, start.
    this._tokenStartLine = this._currentLine;
    this._tokenStartColumn =
      this._tokenStartOffset - this._currentLineBeginOffset;

    // Extract `\n` in the matched token.
    let nlMatch;
    while ((nlMatch = nlRe.exec(matched)) !== null) {
      this._currentLine++;
      this._currentLineBeginOffset = this._tokenStartOffset + nlMatch.index + 1;
    }

    this._tokenEndOffset = this._cursor + matched.length;

    // Line-based locations, end.
    this._tokenEndLine = this._currentLine;
    this._tokenEndColumn = this._currentColumn =
      (this._tokenEndOffset - this._currentLineBeginOffset);
  },

  _toToken(tokenType, yytext = '') {
    return {
      // Basic data.
      type: tokenType,
      value: yytext,

      // Location data.
      startOffset: this._tokenStartOffset,
      endOffset: this._tokenEndOffset,
      startLine: this._tokenStartLine,
      endLine: this._tokenEndLine,
      startColumn: this._tokenStartColumn,
      endColumn: this._tokenEndColumn,
    };
  },

  isEOF() {
    return this._cursor === this._string.length;
  },

  hasMoreTokens() {
    return this._cursor <= this._string.length;
  },

  _match(string, regexp) {
    let matched = string.match(regexp);
    if (matched) {
      // Handle `\n` in the matched token to track line numbers.
      this._captureLocation(matched[0]);
      this._cursor += matched[0].length;
      return matched[0];
    }
    return null;
  },
};

/**
 * Expose tokenizer so it can be accessed in semantic actions.
 */
yy.lexer = tokenizer;
yy.tokenizer = tokenizer;

/**
 * Global parsing options. Some options can be shadowed per
 * each `parse` call, if the optations are passed.
 *
 * Initalized to the `captureLocations` which is passed
 * from the generator. Other options can be added at runtime.
 */
yy.options = {
  captureLocations: true,
};

/**
 * Parsing module.
 */
const yyparse = {
  /**
   * Sets global parsing options.
   */
  setOptions(options) {
    yy.options = options;
    return this;
  },

  /**
   * Returns parsing options.
   */
  getOptions() {
    return yy.options;
  },

  /**
   * Parses a string.
   */
  parse(string, parseOptions) {
    if (!tokenizer) {
      throw new Error(`Tokenizer instance wasn't specified.`);
    }

    tokenizer.initString(string);

    /**
     * If parse options are passed, override global parse options for
     * this call, and later restore global options.
     */
    let globalOptions = yy.options;
    if (parseOptions) {
      yy.options = Object.assign({}, yy.options, parseOptions);
    }

    /**
     * Allow callers to do setup work based on the
     * parsing string, and passed options.
     */
    yyparse.onParseBegin(string, tokenizer, yy.options);

    stack.length = 0;
    stack.push(0);

    let token = tokenizer.getNextToken();
    let shiftedToken = null;

    do {
      if (!token) {
        // Restore options.
        yy.options = globalOptions;
        unexpectedEndOfInput();
      }

      let state = stack[stack.length - 1];
      let column = tokens[token.type];

      if (!table[state].hasOwnProperty(column)) {
        yy.options = globalOptions;
        unexpectedToken(token);
      }

      let entry = table[state][column];

      // Shift action.
      if (entry[0] === 's') {
        let loc = null;

        if (yy.options.captureLocations) {
          loc = {
            startOffset: token.startOffset,
            endOffset: token.endOffset,
            startLine: token.startLine,
            endLine: token.endLine,
            startColumn: token.startColumn,
            endColumn: token.endColumn,
          };
        }

        stack.push(
          {symbol: tokens[token.type], semanticValue: token.value, loc},
          Number(entry.slice(1))
        );
        shiftedToken = token;
        token = tokenizer.getNextToken();
      }

      // Reduce action.
      else if (entry[0] === 'r') {
        let productionNumber = entry.slice(1);
        let production = productions[productionNumber];
        let hasSemanticAction = typeof production[2] === 'function';
        let semanticValueArgs = hasSemanticAction ? [] : null;

        const locationArgs = (
          hasSemanticAction && yy.options.captureLocations
            ? []
            : null
        );

        if (production[1] !== 0) {
          let rhsLength = production[1];
          while (rhsLength-- > 0) {
            stack.pop();
            let stackEntry = stack.pop();

            if (hasSemanticAction) {
              semanticValueArgs.unshift(stackEntry.semanticValue);

              if (locationArgs) {
                locationArgs.unshift(stackEntry.loc);
              }
            }
          }
        }

        const reduceStackEntry = {symbol: production[0]};

        if (hasSemanticAction) {
          yytext = shiftedToken ? shiftedToken.value : null;
          yyleng = shiftedToken ? shiftedToken.value.length : null;

          const semanticActionArgs = (
            locationArgs !== null
              ? semanticValueArgs.concat(locationArgs)
              : semanticValueArgs
          );

          production[2](...semanticActionArgs);

          reduceStackEntry.semanticValue = __;

          if (locationArgs) {
            reduceStackEntry.loc = __loc;
          }
        }

        const nextState = stack[stack.length - 1];
        const symbolToReduceWith = production[0];

        stack.push(
          reduceStackEntry,
          table[nextState][symbolToReduceWith]
        );
      }

      // Accept.
      else if (entry === 'acc') {
        stack.pop();
        let parsed = stack.pop();

        if (stack.length !== 1 ||
            stack[0] !== 0 ||
            tokenizer.hasMoreTokens()) {
          // Restore options.
          yy.options = globalOptions;
          unexpectedToken(token);
        }

        if (parsed.hasOwnProperty('semanticValue')) {
          yy.options = globalOptions;
          yyparse.onParseEnd(parsed.semanticValue);
          return parsed.semanticValue;
        }

        yyparse.onParseEnd();

        // Restore options.
        yy.options = globalOptions;
        return true;
      }

    } while (tokenizer.hasMoreTokens() || stack.length > 1);
  },

  setTokenizer(customTokenizer) {
    tokenizer = customTokenizer;
    return yyparse;
  },

  getTokenizer() {
    return tokenizer;
  },

  onParseBegin(string, tokenizer, options) {},
  onParseEnd(parsed) {},
};

/**
 * Extracts name, and an optional subscript.
 */
function parseName(rawName) {
  const subIdx = rawName.indexOf('[');

  // Simple name: `a`
  if (subIdx === -1) {
    return {
      type: 'Name',
      value: rawName,
    };
  }

  // Name with an index: `a[1]`
  return {
    type: 'Name',
    value: rawName.slice(0, subIdx),
    index: Number(rawName.match(/\[(\d+)\]/)[1]),
  };
}

const formatRadix = {
  B: 2,
  X: 16,
  D: 10,
};

function parseValue(rawValue) {
  // Simple decimal value: 15
  if (rawValue[0] !== '%') {
    return {
      type: 'Value',
      value: Number(rawValue),
    };
  }

  // Formatted value: %B0101, %XFF, %D15
  const radix = formatRadix[rawValue[1]];
  return {
    type: 'Value',
    value: Number.parseInt(rawValue.slice(2), radix),
    format: rawValue[1],
    raw: rawValue,
  };
}

/**
 * Parses controller command arguments.
 */
function parseControllerCommandArgs(rawArguments) {
  if (!rawArguments) {
    return [];
  }

  return rawArguments.map(arg => {
    if (!arg.includes('%')) {
      return arg;
    }

    // Example: a%B3.1.3
    const [column, parts] = arg.split('%');
    const format = parts[0];

    // Offsets
    const [left, middle, right] = parts
      .slice(1)
      .split('.')
      .map(Number);

    return {
      column,
      format,
      left,
      middle,
      right,
    };
  });
}

function unexpectedToken(token) {
  if (token.type === EOF) {
    unexpectedEndOfInput();
  }

  tokenizer.throwUnexpectedToken(
    token.value,
    token.startLine,
    token.startColumn
  );
}

function unexpectedEndOfInput() {
  parseError(`Unexpected end of input.`);
}

function parseError(message) {
  throw new SyntaxError(message);
}

module.exports = yyparse;