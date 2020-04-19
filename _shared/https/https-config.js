const { readFileSync } = require('fs');
const { join } = require('path');

module.exports = {
  cert: readFileSync(join(__dirname, 'localhost.crt')),
  key: readFileSync(join(__dirname, 'localhost.key')),
};
