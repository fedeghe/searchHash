var assert = require('assert'),
	sh = require('../dist/index.js'),
	objs = require('./data/theme.json');


describe('Search on theme starts', function() {
	describe('search for hex3', function() {
		var search = sh.forValue(objs, /^#[0-9a-z]{3}$/);
		it('should find 13 elements', function() {
			assert.equal(13, search.results.length);
		});
	});

	describe('search for hex6', function() {
		var search = sh.forValue(objs, /^#[0-9a-z]{6}$/);
		it('should find 4 elements', function() {
			assert.equal(4, search.results.length);
		});
    });
    describe('search for rgb', function() {
		var search = sh.forValue(objs, /^rgb\(/);
		it('should find 10 elements', function() {
			assert.equal(10, search.results.length);
		});
	});

	describe('search for rgba', function() {
		var search = sh.forValue(objs, /^rgba\(/);
		it('should find 12 elements', function() {
			assert.equal(12, search.results.length);
		});
	});
});
