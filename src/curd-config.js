const mixins = {
  set: function(key, val) {
    let hasVal;
    let { options, data } = this;
    if (val || val === '' || val === 0 || val === false) {
      hasVal = true;
    } else {
      hasVal = false;
    }
    // set when (key,val)
    if (key && hasVal) {
      if (key in options) {
        data[key] = val;
      }
    }
    return this;
  },
  get: function(key) {
    let { options } = this;
    return key in options ? options[key] : null;
  },
  config: function(args = {}) {
    let options = Object.assign({}, this.options, args);
    this.options = options;
    return this;
  }
};
export default mixins;
