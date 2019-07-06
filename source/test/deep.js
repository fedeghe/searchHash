const assert = require('assert'),
    sh = require('../dist/index.js'),
    objs = require('./data/deeper.json');

describe('Search starts', () => {
    describe('search for a value in a branch with more results gives the expected result', () => {
        const search = sh.forValue(objs, /ede/);

        it('should find 3 elements', () => {
            assert.equal(3, search.results.length);
        });
    });
});
