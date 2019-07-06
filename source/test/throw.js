const assert = require('assert'),
    JSDOM = require('jsdom').JSDOM,
    sh = require('../dist/index.js');

describe('throw on node', () => {
    describe('should throw an BAD_PARAMS error', () => {
        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);    
        it('should find 1 element ', () => {
            try{
                sh.forKey(dom.window.document.body, 'a', { limit: 1 });
            } catch(e) {
                assert.equal(e.type, 'BAD_PARAMS');
            }
        });
    });
});