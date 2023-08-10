// @ts-check
const { seleniumWD, playwrightWD } = require('promod');

const { ENGINE } = process.env;
const engine = ENGINE === 'pw' ? playwrightWD : seleniumWD;

module.exports = {
  engine,
};
