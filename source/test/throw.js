var assert = require('assert'),
    JSDOM = require('jsdom').JSDOM,
    sh = require('../dist/index.js');

describe('throw on node', function () {
    describe('should throw an BAD_PARAMS error', function () {
        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);    
        it('should find 1 element ', function () {
            try{
                sh.forKey(dom.window.document.body, 'a', { limit: 1 });
            } catch(e) {
                assert.equal(e.type, 'BAD_PARAMS');
            }
        });
    });
});