let keywords = require("../models/keywords/index");

module.exports = (word, tokens) =>
  // to see if word matches any keyword

  [
    [...Object.keys(keywords)].reduce((tokens, keyword_type) => {
      let keyword = keywords[keyword_type].find(keyword =>
        word.includes(keyword)
      );
      if (keyword) {
        tokens.push({ type: "keyword", value: keyword });
        word = word.replace(keyword, "");

        // retain the charectors which are not part of the keyword
        // for further matching with number or id
      }
      // return whatever tokens are obtained from matching with keywords
      // returns previously found tokens if nothing is found
      return tokens;
    }, tokens),
    word
  ]; // I pass previously obtained tokens to the
// keyword matching function
