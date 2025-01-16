const version = require("../../../package.json").version;
const defaultOptions = require("../../constants/defaultOptions");

/*
 * Default options for browser worker
 */
module.exports = {
  ...defaultOptions,
  workerPath: `${__dirname}/../../worker.min.js`,
};
