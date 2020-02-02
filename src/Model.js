class Feat {
  constructor(opts) {
    this.init(opts)
  }

  init(opts) {
    this.options = Object.assign(
      {},
      {
        PATH_TO_SAVE: './',
        FILE_TO_SAVE: 'CHANGELOG.md',
      },
      opts || {}
    )
    return this
  }
}

export default Feat
