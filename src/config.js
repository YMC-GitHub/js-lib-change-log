// include some lib
const path = require('path');

const rootPath = path.resolve(__dirname, '..');
// eslint-disable-next-line no-unused-vars
const resolve = file => path.resolve(rootPath, file);

export default {
  PATH_TO_SAVE: rootPath,
  FILE_TO_SAVE: 'CHANGELOG.md'
};
