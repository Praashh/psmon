const constant  = require('../lib/constant');

const logger = (type, message) => {
    console.log(constant.COLOR[type], `[psmon] ${message}`); 
}

module.exports = logger; 