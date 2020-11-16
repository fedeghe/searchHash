const assert = require('assert'),
    sh = require('../dist/index.js'),
    objs = require('./data/deeper.json');

describe('Search for value', () => {
    describe('string based research', () => {
        it('should find 2 elements', () => {
            const search = sh.forValue(objs, 'y');
            assert.strictEqual(2, search.length);
        });
        it('should find 1 elements, using limit 1', () => {
            const search = sh.forValue(objs, 'y', {limit:1});
            assert.strictEqual(1, search.length);
        });
        it('should find 0 elements, with limit 0 (edge case)', () => {
            const search = sh.forValue(objs, 'y', {limit:0});
            assert.strictEqual(0, search.length);
        });
        it('should find 0 elements on first level; arrays has no keys indeed :)', () => {
            const search = sh.forValue(objs, 'y', {max: 0});
            assert.strictEqual(0, search.length);
        });
        it('should find 2 elements on first 7 level', () => {
            const search = sh.forValue(objs, 'y', {max: 7});
            assert.strictEqual(2, search.length);
        });
        it('should find 1 elements from the 7th level', () => {
            const search = sh.forValue(objs, 'y', {min: 7});
            assert.strictEqual(1, search.length);
        });
        it('should find 1 elements on first 4 level limiting to one', () => {
            const search = sh.forValue(objs, 'y', {max: 7, limit: 1});
            assert.strictEqual(1, search.length);
        });
        it('should find 0 elements between levels 3 and 4', () => {
            const search = sh.forValue(objs, 'y', {min: 3, max: 4});
            assert.strictEqual(0, search.length);
        });
    });

    describe('regexp based research', () => {
        it('should find 5 elements', () => {
            const search = sh.forValue(objs, /a/);
            assert.strictEqual(5, search.length);
        });
        it('should find 1 elements, using limit 1', () => {
            const search = sh.forValue(objs, /a/, {limit:1});
            assert.strictEqual(1, search.length);
        });
        it('should find 0 elements, with limit 0 (edge case)', () => {
            const search = sh.forValue(objs, /a/, {limit:0});
            assert.strictEqual(0, search.length);
        });
        it('should find 0 elements on first level; arrays has no keys indeed :)', () => {
            const search = sh.forValue(objs, /a/, {max: 0});
            assert.strictEqual(0, search.length);
        });
        it('should find 5 elements on first 4 level', () => {
            const search = sh.forValue(objs, /a/, {max: 4});
            assert.strictEqual(4, search.length);
        });
        it('should find 1 elements on first 4 level limiting to one', () => {
            const search = sh.forValue(objs, /a/, {max: 4, limit: 1});
            assert.strictEqual(1, search.length);
        });
        it('should find 0 elements between levels 7 and 9', () => {
            const search = sh.forValue(objs, /a/, {min: 7, max: 9});
            assert.strictEqual(0, search.length);
        });
        it('should find 1 elements deeper', () => {
            const search = sh.forValue(objs, /a/, {min: 11});
            assert.strictEqual(1, search.length);
        });
        it('should find 3 elements using caseinsensitive regexp', () => {
            const search = sh.forValue(objs, /^y$/i);
            assert.strictEqual(3, search.length);
        });
        it('should find 2 elements using casesensitive regexp', () => {
            const search = sh.forValue(objs, /^y$/);
            assert.strictEqual(2, search.length);
        });
    });

    describe('function based resarch', () => {
        it('should find 2 elements', () => {
            const search = sh.forValue(objs, k => k === "name");
            assert.strictEqual(2, search.length);
        });
        it('should find 1 elements, using limit 1', () => {
            const search = sh.forValue(objs, k => k === "name", {limit:1});
            assert.strictEqual(1, search.length);
        });
        it('should find 0 elements, with limit 0 (edge case)', () => {
            const search = sh.forValue(objs, k => k === "name", {limit:0});
            assert.strictEqual(0, search.length);
        });
        it('should find 0 elements on first level; arrays has no keys indeed :)', () => {
            const search = sh.forValue(objs, k => k === "a", {max: 0});
            assert.strictEqual(0, search.length);
        });
        it('should find 2 elements on first 4 level', () => {
            const search = sh.forValue(objs, k => k === null, {max: 4});
            assert.strictEqual(2, search.length);
        });
        it('should find 1 elements on first 4 level limiting to one', () => {
            const search = sh.forValue(objs, k => k === null, {max: 4, limit: 1});
            assert.strictEqual(1, search.length);
        });
        it('should find 1 element1 between levels 7 and 9', () => {
            const search = sh.forValue(objs, k => k === null, {min: 7, max: 9});
            assert.strictEqual(1, search.length);
        });
        it('should find 1 elements deeper', () => {
            const search = sh.forValue(objs, k => k === null, {min: 11});
            assert.strictEqual(1, search.length);
        });
    });


    
});
