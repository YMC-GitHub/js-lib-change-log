import Model from './Model'
import mixin from './mixin'
import makeSugar from './class-sugar'

// console.log(mixin);
Object.keys(mixin)
  .sort()
  .forEach(element => {
    Model.prototype[element] = mixin[element]
  })
const pro = makeSugar(Model)
export default pro
