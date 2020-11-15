const assert = require('assert'),
	sh = require('../dist/index.js'),
	objs = require('./data/countries.json');


describe('Search starts', () => {
	describe('How many countrynames contains `az`?', () => {
		const search = sh.forValue(objs, /az/);
		it('should find 3 elements', () => {
			assert.strictEqual(3, search.length);
		});
	});
	describe('How many countrynames contains `al`?', () => {
		const search = sh.forValue(objs, /al/);
		it('should find 27 elements', () => {
			assert.strictEqual(27, search.length);
		});
	});
});
