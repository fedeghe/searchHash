var assert = require('assert'),
    sh = require('../index.js'),
    objs = require('./data/big.json');


describe('Search goes deeper', function () {
    describe('How many companies with dubbed L?', function () {
        var results = sh.forKeyValue(objs, { key: "company", value: /LL/ }),
            expectedNum = 181;

        it(`should find ${expectedNum} elements`, function () {
            assert.equal(expectedNum, results.length);
        });
    });
    describe('How many companies has a A in the name?', function () {
        var results = sh.forKeyValue(objs, { key: "company", value: /A/ }),
            expectedNum = 3245;

        it(`should find ${expectedNum} elements`, function () {
            assert.equal(expectedNum, results.length);
        });
    });

    describe('How many companies has a A in the address?', function () {
        var results = sh.forKeyValue(objs, { key: "address", value: /A/ }),
            expectedNum = 2109;

        it(`should find ${expectedNum} elements`, function () {
            assert.equal(expectedNum, results.length);
        });
    });
    describe('How many companies has a A in the address (caseinsensitive)?', function () {
        var results = sh.forKeyValue(objs, { key: "address", value: /A/i }),
            expectedNum = 6137;

        it(`should find ${expectedNum} elements`, function () {
            assert.equal(expectedNum, results.length);
        });
    });
});
