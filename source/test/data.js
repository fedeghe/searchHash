const assert = require('assert'),
    sh = require('../dist/index.js'),
    countries = require('./data/countries.json'),
    licences = require('./data/licenses.json'),
    laureate = require('./data/laureate.json'),
    big = require('./data/big.json'),
    theme = require('./data/theme.json');


describe('Search starts', () => {

    describe('Countrynames search', () => {
        it('should find 3 elements containing `az`', () => {
            const search = sh.forValue(countries, /az/);
            assert.strictEqual(3, search.length);
        });
        it('should find 27 elements containing `al`', () => {
            const search = sh.forValue(countries, /al/);
            assert.strictEqual(27, search.length);
        });
    });

    describe('Licences search', () => {
        it('should find 4 elements containing `MIT`', () => {
            const search = sh.forValue(licences, 'MIT');
            assert.strictEqual(4, search.length);
        });
        it('should find 1 elements name:MIT', () => {
            const search = sh.forKeyValue(licences, { key: "name", value: "MIT" });
            assert.strictEqual(1, search.length);
        });
    });

    describe('Laureate search', () => {
        const search = sh.forValue(laureate, 'Albert');
        it('should find 6 elements with value `Albert`', () => {
            assert.strictEqual(6, search.length);
        });
        it('one of those has to be `Einstein`', () => {
            const Einstein = sh.forValue(search, 'Einstein');
            assert.strictEqual(1, Einstein.length);
        });
    });

    describe('Search in a big file', () => {
        it('should find 181 companies with a double `l` on the name', () => {
            const search = sh.forKeyValue(big, { key: "company", value: /LL/ })
            assert.strictEqual(181, search.length);
        });
        it('should find 3245 companies with an `A` on the name', () => {
            const search = sh.forKeyValue(big, { key: "company", value: /A/ })
            assert.strictEqual(3245, search.length);
        });
        it('should find 2109 companies with an `A` in the address', () => {
            const search = sh.forKeyValue(big, { key: "address", value: /A/ })
            assert.strictEqual(2109, search.length);
        });
        it('should find 6137 companies with an `A` in the address, caseinsensitive', () => {
            const search = sh.forKeyValue(big, { key: "address", value: /A/i })
            assert.strictEqual(6137, search.length);
        });
    });

    describe('Search in a deep file using less trivial regexp', () => {
        it('should find 13 elements hex3', () => {
            const search = sh.forValue(theme, /^#[0-9a-z]{3}$/i);
            assert.strictEqual(13, search.length);
        });
        it('should find 4 elements hex6', () => {
            const search = sh.forValue(theme, /^#[0-9a-z]{6}$/i);
            assert.strictEqual(4, search.length);
        });
        it('should find 10 elements rgb', () => {
            const search = sh.forValue(theme, /^rgb\(/);
            assert.strictEqual(10, search.length);
        });
        it('should find 12 elements rgba', () => {
            const search = sh.forValue(theme, /^rgba\(/);
            assert.strictEqual(12, search.length);
        });
        it('should find 13 elements hex3 and sort them by kety desc', () => {
            const search = sh.forValue(theme, /^#[0-9a-z]{3}$/i, {
                sorter: (a, b) => a.key > b.key ? -1 : 1
            });
            assert.strictEqual('superdark', search[0].key);
            assert.strictEqual('dark', search[12].key);
        });
    });

});