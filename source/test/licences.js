const assert = require('assert'),
	sh = require('../dist/index.js'),
	objs = require('./data/licenses.json');


describe('Search starts', () => {
	describe('search for MIT', () => {
		const search = sh.forValue(objs, "MIT");
		it('should find 4 elements', () => {
			assert.equal(4, search.results.length);
		});
	});

	describe('search for name:MIT', () => {
		const search = sh.forKeyValue(objs, {key:"name", value:"MIT"});
		it('should find 1 elements', () => {
			assert.equal(1, search.results.length);
		});
	});
});
