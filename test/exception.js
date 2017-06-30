var assert = require('assert'),
	sh = require('../index.js'),
	jsdom = require('jsdom'),
	obj = {
		a : 1,
		b : {
			a : 2
		},
		str : 'string' 
	},
	arr = [1,2,3,4,1,2,3,1,2,1];


const { JSDOM } = jsdom;

var domNode = new JSDOM(`<div>Hello world</div>`),
	domObj = {
		innerHTML : domNode,
		b : 1
	};

describe('complete coverage', function() {
	describe('should find only one element in obj due to limit param', function() {
		var results = sh.forKey(obj, 'a', 1);
		it('should find 1 element ', function() {
			assert.equal(1, results.length);
		});
	});
	describe('should find only one element in array due to limit param', function() {
		var results = sh.forValue(arr, 1, 1);

		it('should find 1 element ', function() {
			assert.equal(1, results.length);
		});
	});
	describe('should not dig domNodes', function() {
		var results = sh.forKey(domObj, 'innerHTML');

		it('should find 1 element ', function() {
			assert.equal(1, results.length);
		});
	});

	describe('keyvalue', function() {
		var results = sh.forKeyValue(obj, {key : 'str', value : /str/});
		it('should find 1 element ', function() {
			assert.equal(1, results.length);
		});
	});
	describe('keyvalue', function() {
		var results = sh.forKeyValue(obj, {key : /str/, value : /str/});
		it('should find 1 element ', function() {
			assert.equal(1, results.length);
		});
	});
	describe('key', function() {
		var results = sh.forKey(obj, /str/);
		it('should find 1 element ', function() {
			assert.equal(1, results.length);
		});
	});
});