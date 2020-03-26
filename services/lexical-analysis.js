const { file } = require("../utils/index");
const { tokenize } = require("../utils/lex-tools");

module.exports.lex = async () => {
  try {
    // let text = await file.read(filepath);
    let tokens = tokenize(text);
    return tokens;
  } catch (error) {
    console.log(error);
  }
};
