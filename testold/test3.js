const assert = require('assert'),
	sh = require('../dist/index.js'),
	

	objs = require('./data/porsche.json');


describe('Search starts', () => {
	describe('search Porsche models with model name starting with 91', () => {
		const search = sh.forValue(objs, /^91/);

		it('should find 6 elements', () => {
			assert.strictEqual(6, search.length);
		});
	});
	describe('search Porsche models with model name starting with 911', () => {
		const search = sh.forValue(objs, /^911/);

		it('should find only one element', () => {
			assert.strictEqual(1, search.length);
		});
	});
	describe('search Porsche models with model name Panamera', () => {
		const search = sh.forValue(objs, /^pANAMEra/i);
		it('should find only one element', () => {
			assert.strictEqual(1, search.length);
		});
	});
	describe('search Porsche models with model name containing GT', () => {
		const search = sh.forValue(objs, /GT/);
		it('should find 4 elements', () => {
			assert.strictEqual(4, search.length);
		});
	});
	

});
