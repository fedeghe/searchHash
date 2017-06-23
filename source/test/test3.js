var assert = require('assert'),
	sh = require('../index.js'),
	

	objs = require('./data/porsche.json');


describe('Search starts', function() {
	describe('search Porsche models with model name starting with 91', function() {
		var results = sh.forValue(objs, /^91/);

		it('should find 6 elements', function() {
			assert.equal(6, results.length);
		});
	});
	describe('search Porsche models with model name starting with 911', function() {
		var results = sh.forValue(objs, /^911/);

		it('should find only one element', function() {
			assert.equal(1, results.length);
		});
	});
	describe('search Porsche models with model name Panamera', function() {
		var results = sh.forValue(objs, /^pANAMEra/i);
		it('should find only one element', function() {
			assert.equal(1, results.length);
		});
	});
	describe('search Porsche models with model name containing GT', function() {
		var results = sh.forValue(objs, /GT/);
		it('should find 4 elements', function() {
			assert.equal(4, results.length);
		});
	});
	

});
