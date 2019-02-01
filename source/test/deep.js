var assert = require('assert'),
	sh = require('../dist/index.js'),
	objs = require('./data/deeper.json');


describe('Search starts', function() {
	describe('search for a value in a branch with more results gives the expected result', function() {
		var results = sh.forValue(objs, /ede/);

		it('should find 3 elements', function() {
			assert.equal(3, results.length);
		});
	});
});
