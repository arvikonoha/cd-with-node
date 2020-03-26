const { file } = require("../utils/index");
const { tokenizer } = require("../utils/index");

module.exports.lex = async () => {
  try {
    // let text = await file.read(filepath);
    let tokens = tokenizer("hello world");
    return tokens;
  } catch (error) {
    console.log(error);
  }
};
