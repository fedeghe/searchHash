const JSDOM = require('jsdom').JSDOM,
    sh = require('../dist/index.js'),
    objs = require('./data/deeper.json');

describe('Search starts', () => {
    describe('few edge cases', () => {
        it('should find 2 elements', () => {
            const search = sh.forValue({}, 'y');
            expect(search.length).toBe(0);
        });
        it('should find 2 elements', () => {
            const search = sh.forValue(objs, {}, { min: 2, max: 1 });
            expect(search.length).toBe(1);
        });
        it('should find 2 elements', () => {
            const search = sh.forValue(objs, {}, { min: -1, max: 1 });
            expect(search.length).toBe(1);
        });

        it('should return a working getter', () => {
            const search = sh.forValue(objs, "y");
            expect(search.length).toBe(2);
            expect("y").toBe(search[0].getter());
            expect("y").toBe(search[1].getter());
        });

        it('should skip elements', () => {
            const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
            const trg = dom.window.document.querySelector("p");
            trg.sss = 'hei'
            const search = sh.forValue({ s: trg, hoho: 'hei' }, 'hei');
            expect(search.length).toBe(1);
        });
        describe('should throw an error', () => {
            const f = () => sh.forKey('str', /str/);

            it('should throw 1 error', () => {
                try {
                    f()
                } catch (e) {
                    expect('BAD PARAM: must search into an object or an array').toBe(e.message);
                }

            });
        });
    });
});