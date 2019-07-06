const assert = require('assert'),
    sh = require('../dist/index.js'),
    objs = require('./data/big.json');


describe('Search goes deeper', () => {
    describe('How many companies with dubbed L?', () => {
        const search = sh.forKeyValue(objs, { key: "company", value: /LL/ }),
            expectedNum = 181;

        it(`should find ${expectedNum} elements`, () => {
            assert.equal(expectedNum, search.results.length);
        });
    });
    describe('How many companies has a A in the name?', () => {
        const search = sh.forKeyValue(objs, { key: "company", value: /A/ }),
            expectedNum = 3245;

        it(`should find ${expectedNum} elements`, () => {
            assert.equal(expectedNum, search.results.length);
        });
    });

    describe('How many companies has a A in the address?', () => {
        const search = sh.forKeyValue(objs, { key: "address", value: /A/ }),
            expectedNum = 2109;

        it(`should find ${expectedNum} elements`, () => {
            assert.equal(expectedNum, search.results.length);
        });
    });
    describe('How many companies has a A in the address (caseinsensitive)?', () => {
        const search = sh.forKeyValue(objs, { key: "address", value: /A/i }),
            expectedNum = 6137;

        it(`should find ${expectedNum} elements`, () => {
            assert.equal(expectedNum, search.results.length);
        });
    });
});
