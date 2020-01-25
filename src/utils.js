const fs = require('fs');
const path = require('path');

exports.mkdirsSync = function(dirname) {
  // has dir?
  if (fs.existsSync(dirname)) {
    return true;
  }
  // does not?create dir
  if (exports.mkdirsSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname);
    return true;
  }
};

// exports.camelCase = x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
exports.camelCase = str =>
  exports.startWithSmall(
    str
      .split(/[_.-]/)
      .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
      .join('')
  );

exports.startWithSmall = x => x.charAt(0).toLowerCase() + x.slice(1);
exports.funcName = exports.camelCase;

exports.readyPromise = function() {
  return Promise.resolve();
};
