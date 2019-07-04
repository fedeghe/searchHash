var assert = require('assert'),
	sh = require('../dist/index.js'),
	

	objs = require('./data/laureate.json');


describe('Search starts', function() {
	describe('search `Albert` valued elements', function() {
		var search = sh.forValue(objs, 'Albert');

		it('should find 6 elements', function() {
			assert.equal(6, search.results.length);
		});
		it('one of those has to be Einstein', function() {
			var Einstein = sh.forValue(search.results, 'Einstein');
			assert.equal(1, Einstein.results.length);
		});
	});
	describe('search `Albert` valued elements', function() {
		var search = sh.forValue(objs, 'Albert');

		it('should find 6 elements', function() {
			assert.equal(6, search.results.length);
		});
		it('one of those has to be Einstein', function() {
			var Einstein = sh.forValue(search.results, 'Einstein');
			assert.equal(1, Einstein.results.length);
		});
	});
	describe('search objs containing key:value = firstame:Albert', function() {
		var search = sh.forKeyValue(objs, {key : 'firstname', value : 'Albert'});
		it('should find 6 elements', function() {
			assert.equal(6, search.results.length);
		});
	});
	describe('search objs containing key:value = surname:Einstein', function() {
		var search = sh.forKeyValue(objs, {key : 'surname', value : 'Einstein'});
		it('should find 1 elements', function() {
            assert.equal(1, search.results.length);
		});
	});

});
