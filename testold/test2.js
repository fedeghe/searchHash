const assert = require('assert'),
	sh = require('../dist/index.js'),
	

	objs = require('./data/laureate.json');


describe('Search starts', () => {
	describe('search `Albert` valued elements', () => {
		const search = sh.forValue(objs, 'Albert');

		it('should find 6 elements', () => {
			assert.strictEqual(6, search.length);
		});
		it('one of those has to be Einstein', () => {
			const Einstein = sh.forValue(search, 'Einstein');
			assert.strictEqual(1, Einstein.length);
		});
	});
	describe('search `Albert` valued elements', () => {
		const search = sh.forValue(objs, 'Albert');

		it('should find 6 elements', () => {
			assert.strictEqual(6, search.length);
		});
		it('one of those has to be Einstein', () => {
			const Einstein = sh.forValue(search, 'Einstein');
			assert.strictEqual(1, Einstein.length);
		});
	});
	describe('search objs containing key:value = firstame:Albert', () => {
		const search = sh.forKeyValue(objs, {key : 'firstname', value : 'Albert'});
		it('should find 6 elements', () => {
			assert.strictEqual(6, search.length);
		});
	});
	describe('search objs containing key:value = surname:Einstein', () => {
		const search = sh.forKeyValue(objs, {key : 'surname', value : 'Einstein'});
		it('should find 1 elements', () => {
            assert.strictEqual(1, search.length);
		});
	});

});
