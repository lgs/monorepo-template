const serviceGenerator = require("./service");

module.exports = function(plop) {
  plop.setGenerator("service", serviceGenerator(plop));
};
