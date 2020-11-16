const assert = require('assert'),
    objs = require('./data/licenses.json'),
    sh = require('../dist/index.js');

describe('edge cases', () => {
    describe('min max', () => {
        it('should find 114 elements ', () => {
            const search = sh.forKey(objs, 'note', { min:3, max: 1});
            assert.strictEqual(search.length, 114)
        });
        it('should as well find 114 elements ', () => {
            const search = sh.forKey(objs, 'note', { min: -1, max: 3 });
            assert.strictEqual(search.length, 114)
        });
    });
});