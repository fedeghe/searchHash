var assert = require('assert'),
	sh = require('../index.js'),
	objs = require('./data/countries.json');


describe('Search starts', function() {
	describe('How many countrynames contains `az`?', function() {
		var results = sh.forValue(objs, /az/);
		it('should find 3 elements', function() {
			assert.equal(3, results.length);
			/*
			for (var i = 0; i < results.length; i++) {
				console.log('> ' + results[i].value);
			}*/
		});
	});
	describe('How many countrynames contains `al`?', function() {
		var results = sh.forValue(objs, /al/);
		it('should find 27 elements', function() {
			assert.equal(27, results.length);
			/*
			for (var i = 0; i < results.length; i++) {
				console.log('> ' + results[i].value);
			}*/
		});
	});
});
