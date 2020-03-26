let keyword_matcher = require("./keyword-matcher");

module.exports = text => {
  // regular expression for comment, so that comments are removed
  // still experimental not tested
  text = text.replace(/(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)/, ""); // removing comment
  let lines = text.split(/\n|;/);

  // trying to extract all the tokens
  let final_tokens = lines.reduce((line_tokens, line, index) => {
    let words = line.split(" ");

    // finding all the tokens in the given line
    line_tokens = [
      ...line_tokens,
      ...words.reduce((word_tokens, word) => {
        // checking if word has any keywords
        [word_tokens, word] = keyword_matcher(word, word_tokens);

        // check for number or identifier
        // if found then{ push({type:"number"value:word}); return word_tokens}

        // if nothing matches then it could be +,-,*,/,(,) or any relational operator
        if (word) word_tokens.push({ type: "other", value: word });
        return word_tokens;
      }, [])
    ];
    return line_tokens;
  }, []);
  return final_tokens;
};
