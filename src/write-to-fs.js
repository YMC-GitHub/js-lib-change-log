const fs = require('fs')
const gitToChangelog = require('conventional-changelog')

// he.config(options).writeToFs()
const writeToFs = function() {
  const { FILE_TO_SAVE, PATH_TO_SAVE, preset = 'yemiancheng' } = this.options

  const hasHim = fs.existsSync(`${PATH_TO_SAVE}/${FILE_TO_SAVE}`)
  // 缓存旧的
  let cache
  if (hasHim) {
    // console.log('read old');
    cache = fs.readFileSync(`${PATH_TO_SAVE}/${FILE_TO_SAVE}`)
  }
  // console.log(cache.toString())
  // 获取新的
  const newData = gitToChangelog({ preset, releaseCount: 1 })
  const result = fs.createWriteStream(`${PATH_TO_SAVE}/${FILE_TO_SAVE}`, {
    encoding: 'utf-8',
    flags: 'w',
  })
  // 写入新的
  newData.pipe(result)
  // 写入旧的
  result.on('finish', () => {
    // console.log('写入完成。');
    if (cache) {
      fs.createWriteStream(`${PATH_TO_SAVE}/${FILE_TO_SAVE}`, {
        encoding: 'utf-8',
        flags: 'a',
      }).write(cache)
    }
  })
}
export default writeToFs
