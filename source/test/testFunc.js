const assert = require('assert'),
	sh = require('../dist/index.js'),
	

	objs = require('./data/porsche.json');


describe('Search with function', () => {
	describe('search Porsche models with model name starting with 91', () => {
		const search = sh.forValue(objs, v => `${v}`.match(/^91/));
		it('should find 6 elements', () => {
			assert.equal(6, search.results.length);
		});
    });
    
    describe('search Porsche models with model key as model', () => {
		const search = sh.forKey(objs, k => k === 'model_name');
		it('should find 45 elements', () => {
			assert.equal(45, search.results.length);
		});
    });
    
    describe('search Porsche models with model key as model and value that contains a 90', () => {
		const search = sh.forKeyValue(objs, {
            key: k => k === 'model_name',
            value: v => `${v}`.match(/93/)
        });
		it('should find 4 elements', () => {
			assert.equal(5, search.results.length);
		});
    });
    
    describe('mixed - search key using function, value as value', () => {
		const search = sh.forKeyValue(objs, {
            key: k => k === 'model_name',
            value: '911'
        });
		it('should find 4 elements', () => {
			assert.equal(1, search.results.length);
		});
    });
    
    describe('mixed - search key as key, value using a function', () => {
		const search = sh.forKeyValue(objs, {
            key: 'model_name',
            value: v => `${v}`.match(/93/)
        });
		it('should find 4 elements', () => {
			assert.equal(5, search.results.length);
		});
	});
});
