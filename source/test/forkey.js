const assert = require('assert'),
    sh = require('../dist/index.js'),
    objs = require('./data/deeper.json');

describe('Search for key', () => {

    describe('string based research', () => {
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
        it('should find 2 elements on first 4 level', () => {
            const search = sh.forKey(objs, 'a', {max: 4});
            assert.strictEqual(2, search.length);
        });
        it('should find 1 elements on first 4 level limiting to one', () => {
            const search = sh.forKey(objs, 'a', {max: 4, limit: 1});
            assert.strictEqual(1, search.length);
        });
        it('should find 0 elements between levels 3 and 4', () => {
            const search = sh.forKey(objs, 'a', {min: 3, max: 4});
            assert.strictEqual(0, search.length);
        });
    });

    describe('regexp based research', () => {
        it('should find 10 elements', () => {
            const search = sh.forKey(objs, /a/);
            assert.strictEqual(10, search.length);
        });
        it('should find 1 elements, using limit 1', () => {
            const search = sh.forKey(objs, /a/, {limit:1});
            assert.strictEqual(1, search.length);
        });
        it('should find 0 elements, with limit 0 (edge case)', () => {
            const search = sh.forKey(objs, /a/, {limit:0});
            assert.strictEqual(0, search.length);
        });
        it('should find 0 elements on first level; arrays has no keys indeed :)', () => {
            const search = sh.forKey(objs, /a/, {max: 0});
            assert.strictEqual(0, search.length);
        });
        it('should find 5 elements on first 4 level', () => {
            const search = sh.forKey(objs, /a/, {max: 4});
            assert.strictEqual(5, search.length);
        });
        it('should find 1 elements on first 4 level limiting to one', () => {
            const search = sh.forKey(objs, /a/, {max: 4, limit: 1});
            assert.strictEqual(1, search.length);
        });
        it('should find 1 elements between levels 7 and 9', () => {
            const search = sh.forKey(objs, /a/, {min: 7, max: 9});
            assert.strictEqual(1, search.length);
        });
        it('should find 3 elements deeper', () => {
            const search = sh.forKey(objs, /a/, {min: 11});
            assert.strictEqual(3, search.length);
        });
    });

    describe('function based research', () => {
        it('should find 4 elements', () => {
            const search = sh.forKey(objs, k => k === "a");
            assert.strictEqual(4, search.length);
        });
        it('should find 1 elements, using limit 1', () => {
            const search = sh.forKey(objs, k => k === "a", {limit:1});
            assert.strictEqual(1, search.length);
        });
        it('should find 0 elements, with limit 0 (edge case)', () => {
            const search = sh.forKey(objs, k => k === "a", {limit:0});
            assert.strictEqual(0, search.length);
        });
        it('should find 0 elements on first level; arrays has no keys indeed :)', () => {
            const search = sh.forKey(objs, k => k === "a", {max: 0});
            assert.strictEqual(0, search.length);
        });
        it('should find 2 elements on first 4 level', () => {
            const search = sh.forKey(objs, k => k === "a", {max: 4});
            assert.strictEqual(2, search.length);
        });
        it('should find 1 elements on first 4 level limiting to one', () => {
            const search = sh.forKey(objs, k => k === "a", {max: 4, limit: 1});
            assert.strictEqual(1, search.length);
        });
        it('should find 0 elements between levels 7 and 9', () => {
            const search = sh.forKey(objs, k => k === "a", {min: 7, max: 9});
            assert.strictEqual(0, search.length);
        });
        it('should find 2 elements deeper', () => {
            const search = sh.forKey(objs, k => k === "a", {min: 11});
            assert.strictEqual(2, search.length);
        });
    });


    
});
