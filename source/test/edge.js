const assert = require('assert'),
    JSDOM = require('jsdom').JSDOM,
    objs = require('./data/licenses.json'),
    sh = require('../dist/index.js');

describe('edge cases', () => {
    describe('min max', () => {
        it('should find 114 elements ', () => {
            const search = sh.forKey(objs, 'note', { min:3, max: 1});
            assert.equal(search.results.length, 114)
        });
        it('should as well find 114 elements ', () => {
            const search = sh.forKey(objs, 'note', { min: -1, max: 3 });
            assert.equal(search.results.length, 114)
        });
        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
        it('should compare using === ', () => {
            try {
                sh.forKey(dom.window.document.body, 1);
            } catch (e) {
            }
        });
    });
});