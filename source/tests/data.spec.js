const sh = require('../dist/index.js'),
    countries = require('./data/countries.json'),
    licences = require('./data/licenses.json'),
    laureate = require('./data/laureate.json'),
    big = require('./data/big.json'),
    theme = require('./data/theme.json');


describe('Search starts', () => {

    describe('Countrynames search', () => {
        it('should find 3 elements containing `az`', () => {
            const search = sh.forValue(countries, /az/);
            expect(search.length).toBe(3);
        });
        it('should find 27 elements containing `al`', () => {
            const search = sh.forValue(countries, /al/);
            expect(search.length).toBe(27);
        });
    });

    describe('Licences search', () => {
        it('should find 4 elements containing `MIT`', () => {
            const search = sh.forValue(licences, 'MIT');
            expect(search.length).toBe(4);
        });
        it('should find 1 elements name:MIT', () => {
            const search = sh.forKeyValue(licences, { key: "name", value: "MIT" });
            expect(search.length).toBe(1);
        });
    });

    describe('Laureate search', () => {
        const search = sh.forValue(laureate, 'Albert');
        it('should find 6 elements with value `Albert`', () => {
            expect(search.length).toBe(6);
        });
        it('one of those has to be `Einstein`', () => {
            const Einstein = sh.forValue(search, 'Einstein');
            expect(Einstein.length).toBe(1);
        });
    });

    describe('Search in a big file', () => {
        it('should find 181 companies with a double `l` on the name', () => {
            const search = sh.forKeyValue(big, { key: "company", value: /LL/ })
            expect(search.length).toBe(181);
        });
        it('should find 3245 companies with an `A` on the name', () => {
            const search = sh.forKeyValue(big, { key: "company", value: /A/ })
            expect(search.length).toBe(3245);
        });
        it('should find 2109 companies with an `A` in the address', () => {
            const search = sh.forKeyValue(big, { key: "address", value: /A/ })
            expect(search.length).toBe(2109);
        });
        it('should find 6137 companies with an `A` in the address, caseinsensitive', () => {
            const search = sh.forKeyValue(big, { key: "address", value: /A/i })
            expect(search.length).toBe(6137);
        });
    });

    describe('Search in a deep file using less trivial regexp', () => {
        it('should find 13 elements hex3', () => {
            const search = sh.forValue(theme, /^#[0-9a-z]{3}$/i);
            expect(search.length).toBe(13);
        });
        it('should find 4 elements hex6', () => {
            const search = sh.forValue(theme, /^#[0-9a-z]{6}$/i);
            expect(search.length).toBe(4);
        });
        it('should find 10 elements rgb', () => {
            const search = sh.forValue(theme, /^rgb\(/);
            expect(search.length).toBe(10);
        });
        it('should find 12 elements rgba', () => {
            const search = sh.forValue(theme, /^rgba\(/);
            expect(search.length).toBe(12);
        });
        it('should find 13 elements hex3 and sort them by kety desc', () => {
            const search = sh.forValue(theme, /^#[0-9a-z]{3}$/i, {
                sorter: (a, b) => a.key > b.key ? -1 : 1
            });
            expect(search[0].key).toBe('superdark');
            expect(search[12].key).toBe('dark');
        });
    });

});