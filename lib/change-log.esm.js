/**
 * change-log v1.0.0
 * (c) 2018-2020 yemiancheng <ymc.github@gmail.com>
 * @license MIT
 */
// include some lib
var path = require('path');

var rootPath = process.cwd();

var options = {
  PATH_TO_SAVE: rootPath,
  FILE_TO_SAVE: 'CHANGELOG.md'
};

var Feat = function Feat(opts) {
  this.init(opts);
};
Feat.prototype.init = function init (opts) {
  this.options = Object.assign(
    {},
    {
      PATH_TO_SAVE: './',
      FILE_TO_SAVE: 'CHANGELOG.md'
    },
    opts || {}
  );
  return this;
};

var mixins = {
  set: function(key, val) {
    var hasVal;
    var ref = this;
    var options = ref.options;
    if (val || val === '' || val === 0 || val === false) {
      hasVal = true;
    } else {
      hasVal = false;
    }
    // set when (key,val)
    if (key && hasVal) {
      options[key] = val;
    }
    return this;
  },
  get: function(key) {
    var ref = this;
    var options = ref.options;
    return key in options ? options[key] : null;
  },
  config: function(args) {
    if ( args === void 0 ) args = {};

    var options = Object.assign({}, this.options, args);
    this.options = options;
    return this;
  }
};

var fs = require('fs');
var gitToChangelog = require('conventional-changelog');

// he.config(options).writeToFs()
var writeToFs = function() {
  var ref = this.options;
  var FILE_TO_SAVE = ref.FILE_TO_SAVE;
  var PATH_TO_SAVE = ref.PATH_TO_SAVE;

  var hasHim = fs.existsSync((PATH_TO_SAVE + "/" + FILE_TO_SAVE));
  // 缓存旧的
  var cache;
  if (hasHim) {
    // console.log('read old');
    cache = fs.readFileSync((PATH_TO_SAVE + "/" + FILE_TO_SAVE));
  }
  // console.log(cache.toString())
  // 获取新的
  var newData = gitToChangelog({ preset: 'angular', releaseCount: 1 });
  var result = fs.createWriteStream((PATH_TO_SAVE + "/" + FILE_TO_SAVE), { encoding: 'utf-8', flags: 'w' });
  // 写入新的
  newData.pipe(result);
  // 写入旧的
  result.on('finish', function () {
    // console.log('写入完成。');
    if (cache) {
      fs.createWriteStream((PATH_TO_SAVE + "/" + FILE_TO_SAVE), { encoding: 'utf-8', flags: 'a' }).write(cache);
    }
  });
};

// console.log(curdConfig)
var get = mixins.get;
var set = mixins.set;
var config = mixins.config;

var mixin = {
  get: get,
  set: set,
  config: config,
  writeToFs: writeToFs
};

var makeClassSugar = function(Feat) {
  // create an instance
  var feat = new Feat();
  // create an instance without new keyword
  feat.feat = function(opts) {
    return new Feat(opts);
  };
  // bind Class to property
  feat.Feat = Feat;
  return feat;
};

console.log(mixin);
Object.keys(mixin)
  .sort()
  .forEach(function (element) {
    Feat.prototype[element] = mixin[element];
  });
var pro = makeClassSugar(Feat);

pro.config(options);

export default pro;
