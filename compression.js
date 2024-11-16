const compression = require("compression");

module.exports = function () {
  return compression({
    level: 6,
    threshold: 100 * 1000, // 100kb
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) {
        return false;
      }
      return compression.filter(req, res);
    },
  });
};
