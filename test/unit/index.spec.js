import engine from '../../src/index.js';

// engine.writeShields().writeToFs()
// engine.config(options).writeShields().writeToFs()

import { expect } from 'chai';
// include some data for test
import fs from 'fs';
import path from 'path';
const rootPath = path.resolve(__dirname, '../../');
const resolve = file => path.resolve(rootPath, file);
const exp = fs.readFileSync(resolve('test/unit/data/index.output.md')).toString();

describe('get the result', function() {
  it('equal', function() {
    expect(exp).to.be.equal(engine.writeShields().data.result);
  });
});
