class Feat {
  constructor(opts, data) {
    this.init(opts, data);
  }
  init(opts, data) {
    this.options = Object.assign(
      {},
      {
        PATH_TO_SAVE: './',
        FILE_TO_SAVE: 'CHANGELOG.md'
      },
      opts || {}
    );
    this.data = Object.assign({}, data || {});
    return this;
  }
}

export default Feat;
