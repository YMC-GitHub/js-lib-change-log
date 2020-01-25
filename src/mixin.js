import curdConfig from './curd-config';
import writeToFs from './write-to-fs';

// console.log(curdConfig)
const { get, set, config } = curdConfig;

export default {
  get,
  set,
  config,
  writeToFs
};
