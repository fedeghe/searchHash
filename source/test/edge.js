const assert = require('assert'),
    JSDOM = require('jsdom').JSDOM,
    sh = require('../dist/index.js'),
    objs = require('./data/deeper.json');

describe('Search starts', () => {
    describe('few edge cases', () => {
        it('should find 2 elements', () => {
            const search = sh.forValue({}, 'y');
            assert.strictEqual(0, search.length);
        });
        it('should find 2 elements', () => {
            const search = sh.forValue(objs, {}, { min: 2, max: 1 });
            assert.strictEqual(1, search.length);
        });
        it('should find 2 elements', () => {
            const search = sh.forValue(objs, {}, { min: -1, max: 1 });
            assert.strictEqual(1, search.length);
        });

        it('should return a working getter', () => {
            const search = sh.forValue(objs, "y");
            assert.strictEqual(2, search.length);
            assert.strictEqual(search[0].getter(), "y");
            assert.strictEqual(search[1].getter(), "y");
        });

        it('should skip elements', () => {
            const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
            const trg = dom.window.document.querySelector("p");
            trg.sss = 'hei'
            const search = sh.forValue({ s: trg, hoho: 'hei' }, 'hei');
            assert.strictEqual(1, search.length);
        });
        describe('should throw an error', () => {
            const f = () => sh.forKey('str', /str/);

            it('should throw 1 error', () => {
                try {
                    f()
                } catch (e) {
                    assert.strictEqual(e.message, 'BAD PARAM: must search into an object or an array');
                }

            });
        });
    });
});