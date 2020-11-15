const assert = require('assert'),
    sh = require('../dist/index.js'),
    objs = require('./data/deeper.json');

describe('Search starts', () => {
    describe('search for key as string', () => {
        it('should find 4 elements', () => {
            const search = sh.forKey(objs, 'a');
            assert.strictEqual(4, search.length);
        });

        it('should find 1 elements, using limit 1', () => {
            const search = sh.forKey(objs, 'a', {limit:1});
            assert.strictEqual(1, search.length);
        });
    
        it('should find 0 elements, with limit 0 (edge case)', () => {
            const search = sh.forKey(objs, 'a', {limit:0});
            assert.strictEqual(0, search.length);
        });

        it('should find 0 elements on first level; arrays has no keys indeed :)', () => {
            const search = sh.forKey(objs, 'a', {max: 0});
            assert.strictEqual(0, search.length);
        });
    });


    
});
