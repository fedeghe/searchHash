var assert = require('assert'),
    JSDOM = require('jsdom').JSDOM,
    objs = require('./data/licenses.json'),
    sh = require('../dist/index.js');

describe('edge cases', function () {
    describe('min max', function () {
        it('should find 114 elements ', function () {
            var t = sh.forKey(objs, 'note', { min:3, max: 1});
            assert.equal(t.length, 114)
        });
        it('should as well find 114 elements ', function () {
            var t = sh.forKey(objs, 'note', { min: -1, max: 3 });
            assert.equal(t.length, 114)
        });
        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
        it('should compare using === ', function () {
            try {
                sh.forKey(dom.window.document.body, 1);
            } catch (e) {
            }
        });
    });
});