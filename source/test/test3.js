const assert = require('assert'),
	sh = require('../dist/index.js'),
	

	objs = require('./data/porsche.json');


describe('Search starts', () => {
	describe('search Porsche models with model name starting with 91', () => {
		const search = sh.forValue(objs, /^91/);

		it('should find 6 elements', () => {
			assert.equal(6, search.results.length);
		});
	});
	describe('search Porsche models with model name starting with 911', () => {
		const search = sh.forValue(objs, /^911/);

		it('should find only one element', () => {
			assert.equal(1, search.results.length);
		});
	});
	describe('search Porsche models with model name Panamera', () => {
		const search = sh.forValue(objs, /^pANAMEra/i);
		it('should find only one element', () => {
			assert.equal(1, search.results.length);
		});
	});
	describe('search Porsche models with model name containing GT', () => {
		const search = sh.forValue(objs, /GT/);
		it('should find 4 elements', () => {
			assert.equal(4, search.results.length);
		});
	});
	

});
