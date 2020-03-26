let { lex } = require("./services/lexical-analysis");
lex().then(tokens => console.log(tokens));
// pass path of the file to lex to get tokens
