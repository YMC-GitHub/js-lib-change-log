# change-log

## desc

genrate change log for git repo


## how to use for production?
### install

```sh
#npm install change-log --save-dev
npm install https://github.com/YMC-GitHub/js-lib-change-log.git --save-dev
```

### config

```js
const path = require('path');

const rootPath = path.resolve(__dirname, '..');
// eslint-disable-next-line no-unused-vars
const resolve = file => path.resolve(rootPath, file);

module.exports = {
  PATH_TO_SAVE: rootPath,
  FILE_TO_SAVE: 'CHANGELOG.md'
};
```

### usage

```js
import He from 'change-log'
He.config(config).writeToFs()
```

## how to use for developer?

### install

```sh
#get the code
git clone https://github.com/ymc-github/js-lib-change-log.git
#get his dep
npm install
```

### usage

```sh
#dev
npm run dev

#build
npm run build

#release
npm run release

#lint
npm run lint
npm run lint:no-fix

#format
npm run beautify

#test
npm run test
npm run test:unit
npm run test:coverage
```


## Author

yemiancheng <ymc.github@gmail.com>

## License

MIT
