var assert = require('assert'),
	sh = require('../dist/index.js'),
	

	objs = require('./data/porsche.json');


describe('Search starts', function() {
	describe('search Porsche models with model name starting with 91', function() {
		var search = sh.forValue(objs, /^91/);

		it('should find 6 elements', function() {
			assert.equal(6, search.results.length);
		});
	});
	describe('search Porsche models with model name starting with 911', function() {
		var search = sh.forValue(objs, /^911/);

		it('should find only one element', function() {
			assert.equal(1, search.results.length);
		});
	});
	describe('search Porsche models with model name Panamera', function() {
		var search = sh.forValue(objs, /^pANAMEra/i);
		it('should find only one element', function() {
			assert.equal(1, search.results.length);
		});
	});
	describe('search Porsche models with model name containing GT', function() {
		var search = sh.forValue(objs, /GT/);
		it('should find 4 elements', function() {
			assert.equal(4, search.results.length);
		});
	});
	

});
