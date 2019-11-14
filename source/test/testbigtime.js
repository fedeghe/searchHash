const assert = require('assert'),
    sh = require('../dist/index.js'),
    objs = require('./data/citylots.json');


describe('Search on a big file', () => {
    describe('TIME: How many lots numbered 119? (value used)', () => {
        const search = sh.forKeyValue(objs, { key: "LOT_NUM", value: "119" }),
            expectedNum = 89;
        console.log('value based search', `${search.timeElapsed}ms`)
        it(`should find the right amount of lots`, () => {
            assert.equal(expectedNum, search.results.length);
        });
    });
    describe('TIME: How many lots numbered 119? (function used for value)', () => {
        const search = sh.forKeyValue(objs, { key: "LOT_NUM", value: v => v === "119" }),
            expectedNum = 89;
            console.log('function based seach:', `${search.timeElapsed}ms`)
        it(`should find the right amount of lots`, () => {
            assert.equal(expectedNum, search.results.length);
        });
    });
});
