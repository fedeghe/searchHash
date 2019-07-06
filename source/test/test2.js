const assert = require('assert'),
	sh = require('../dist/index.js'),
	

	objs = require('./data/laureate.json');


describe('Search starts', () => {
	describe('search `Albert` valued elements', () => {
		const search = sh.forValue(objs, 'Albert');

		it('should find 6 elements', () => {
			assert.equal(6, search.results.length);
		});
		it('one of those has to be Einstein', () => {
			const Einstein = sh.forValue(search.results, 'Einstein');
			assert.equal(1, Einstein.results.length);
		});
	});
	describe('search `Albert` valued elements', () => {
		const search = sh.forValue(objs, 'Albert');

		it('should find 6 elements', () => {
			assert.equal(6, search.results.length);
		});
		it('one of those has to be Einstein', () => {
			const Einstein = sh.forValue(search.results, 'Einstein');
			assert.equal(1, Einstein.results.length);
		});
	});
	describe('search objs containing key:value = firstame:Albert', () => {
		const search = sh.forKeyValue(objs, {key : 'firstname', value : 'Albert'});
		it('should find 6 elements', () => {
			assert.equal(6, search.results.length);
		});
	});
	describe('search objs containing key:value = surname:Einstein', () => {
		const search = sh.forKeyValue(objs, {key : 'surname', value : 'Einstein'});
		it('should find 1 elements', () => {
            assert.equal(1, search.results.length);
		});
	});

});
