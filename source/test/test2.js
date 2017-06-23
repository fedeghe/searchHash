var assert = require('assert'),
	sh = require('../index.js'),
	

	objs = require('./data/laureate.json');


describe('Search starts', function() {
	describe('search `Albert` valued elements', function() {
		var results = sh.forValue(objs, 'Albert');

		it('should find 6 elements', function() {
			assert.equal(6, results.length);
		});
		it('one of those has to be Einstein', function() {
			var Einstein = sh.forValue(results, 'Einstein');
			assert.equal(1, Einstein.length);
		});
	});
	describe('search `Albert` valued elements', function() {
		var results = sh.forValue(objs, 'Albert');

		it('should find 6 elements', function() {
			assert.equal(6, results.length);
		});
		it('one of those has to be Einstein', function() {
			var Einstein = sh.forValue(results, 'Einstein');
			assert.equal(1, Einstein.length);
		});
	});
	describe('search objs containing key:value = firstame:Albert', function() {
		var results = sh.forKeyValue(objs, {key : 'firstname', value : 'Albert'});
		it('should find 6 elements', function() {
			assert.equal(6, results.length);
		});
	});
	describe('search objs containing key:value = surname:Einstein', function() {
		var results = sh.forKeyValue(objs, {key : 'surname', value : 'Einstein'});
		it('should find 1 elements', function() {
			assert.equal(1, results.length);
		});
	});

});
