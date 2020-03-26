const fs = require('fs');

class Lex {
    constructor(fileName) {
        this.fileName = fileName;
    }
    getContent(){
        return(fs.readFileSync(this.fileName, "utf8"));
    }
}
module.exports = Lex;
