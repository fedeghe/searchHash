const assert = require('assert'),
	sh = require('../dist/index.js'),
	objs = require('./data/theme.json');


describe('Search on theme starts', () => {
	describe('search for hex3', () => {
		const search = sh.forValue(objs, /^#[0-9a-z]{3}$/i);
		it('should find 13 elements', () => {
			assert.equal(13, search.results.length);
		});
	});

	describe('search for hex6', () => {
		const search = sh.forValue(objs, /^#[0-9a-z]{6}$/i);
		it('should find 4 elements', () => {
			assert.equal(4, search.results.length);
		});
    });
    describe('search for rgb', () => {
		const search = sh.forValue(objs, /^rgb\(/);
		it('should find 10 elements', () => {
			assert.equal(10, search.results.length);
		});
	});

	describe('search for rgba', () => {
		const search = sh.forValue(objs, /^rgba\(/);
		it('should find 12 elements', () => {
			assert.equal(12, search.results.length);
		});
	});
});
