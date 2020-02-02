const mixins = {
  set(key, val) {
    let hasVal
    const { options } = this
    if (val || val === '' || val === 0 || val === false) {
      hasVal = true
    } else {
      hasVal = false
    }
    // set when (key,val)
    if (key && hasVal) {
      options[key] = val
    }
    return this
  },
  get(key) {
    const { options } = this
    return key in options ? options[key] : null
  },
  config(args = {}) {
    const options = Object.assign({}, this.options, args)
    this.options = options
    return this
  },
}
export default mixins
