const assert = require('assert'),
    sh = require('../dist/index.js'),
    objs = require('./data/citylots.json');


describe('Search on a big file', () => {
    describe('TIME: How many lots numbered 119?', () => {
        const search = sh.forKeyValue(objs, { key: "LOT_NUM", value: "119" }),
            expectedNum = 89;

        it(`should find the right amount of lots`, () => {
            assert.equal(expectedNum, search.results.length);
        });
    });
});
