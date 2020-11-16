const assert = require('assert'),
    sh = require('../dist/index.js'),
    objs = require('./data/deeper.json');

describe('Search for key and value', () => {
    describe('search for key-value as string', () => {
        it('should find 2 elements', () => {
            const search = sh.forKeyValue(objs, {key: 'a', value: false});
            assert.strictEqual(1, search.length);
        });
        it('should find 1 elements, using limit 1', () => {
            const search = sh.forKeyValue(objs, {key: /\w/, value: null}, {limit:1});
            assert.strictEqual(1, search.length);
        });
        it('should find 0 elements, with limit 0 (edge case)', () => {
            const search = sh.forKeyValue(objs, {key: /\w/, value: null}, {limit:0});
            assert.strictEqual(0, search.length);
        });
        it('should find 0 elements on first level; arrays has no keys indeed :)', () => {
            const search = sh.forKeyValue(objs, {key: /\w/, value: null}, {max: 0});
            assert.strictEqual(0, search.length);
        });
        it('should find 3 elements on first 7 level', () => {
            const search = sh.forKeyValue(objs, {key: /\w/, value: null}, {max: 7});
            assert.strictEqual(3, search.length);
        });
        it('should find 1 elements from the 9th level', () => {
            const search = sh.forKeyValue(objs, {key: /\w/, value: null}, {min: 9});
            assert.strictEqual(1, search.length);
        });
        it('should find 1 elements on first 4 level limiting to one', () => {
            const search = sh.forKeyValue(objs, {key: /\w/, value: null}, {max: 7, limit: 1});
            assert.strictEqual(1, search.length);
        });
        it('should find 0 elements between levels 9 and 10', () => {
            const search = sh.forKeyValue(objs, {key: /\w/, value: null}, {min: 9, max: 10});
            assert.strictEqual(0, search.length);
        });
    });

    


    describe('search for value as function', () => {
        it('should find 1 element', () => {
            const search = sh.forKeyValue(objs, {key: k => k === 'sw', value: v => v === 'y'});
            assert.strictEqual(1, search.length);
        });

    });
});
