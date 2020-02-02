// engine.config(options).writeToFs()
import engine from './engine'

// include some data
import options from './config'

// simple usage
engine.config(options).writeToFs()
// console.log(engine)
engine.config(options)

export default engine
