var assert = require('assert'),
	sh = require('../dist/index.js'),
	objs = require('./data/licenses.json');


describe('Search starts', function() {
	describe('search for MIT', function() {
		var search = sh.forValue(objs, "MIT");
		it('should find 4 elements', function() {
			assert.equal(4, search.results.length);
		});
	});

	describe('search for name:MIT', function() {
		var search = sh.forKeyValue(objs, {key:"name", value:"MIT"});
		it('should find 1 elements', function() {
			assert.equal(1, search.results.length);
		});
	});
});
