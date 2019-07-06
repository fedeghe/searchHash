const assert = require('assert'),
	sh = require('../dist/index.js'),
	obj = {
		a : 1,
		b : {
			a : 2
		},
		str : 'string' 
	},
	arr = [1,2,3,4,1,2,3,1,2,1];

describe('complete coverage', () => {
	describe('should find only one element in obj due to limit param', () => {
		const search = sh.forKey(obj, 'a', {limit: 1});
		it('should find 1 element ', () => {
			assert.equal(1, search.results.length);
		});
	});
	describe('should find only one element in array due to limit param', () => {
		const search = sh.forValue(arr, 1, {limit: 1});

		it('should find 1 element ', () => {
			assert.equal(1, search.results.length);
		});
	});
	describe('for keyValue key string value RegExp', () => {
		const search = sh.forKeyValue(obj, {key : 'str', value : /str/});
		it('should find 1 element ', () => {
			assert.equal(1, search.results.length);
		});
	});
	describe('for keyValue key RegExp value RegExp', () => {
		const search = sh.forKeyValue(obj, {key : /str/, value : /str/});
		it('should find 1 element ', () => {
			assert.equal(1, search.results.length);
		});
	});
	describe('for key RegExp', () => {
		const search = sh.forKey(obj, /str/);
		it('should find 1 element ', () => {
			assert.equal(1, search.results.length);
		});
	});
	describe('should throw errors', () => {
		const f = () => sh.forKey(document.createElement('div'), /str/);
		it('should throw 1 error', () => {
			assert.throws(f, Error, 'Either a Literal Object either an array should be passed as second parameter')
		});
	});
});