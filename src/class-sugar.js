const makeClassSugar = function(Feat) {
  // create an instance
  const feat = new Feat()
  // create an instance without new keyword
  feat.feat = function(opts) {
    return new Feat(opts)
  }
  // bind Class to property
  feat.Feat = Feat
  return feat
}

export default makeClassSugar
