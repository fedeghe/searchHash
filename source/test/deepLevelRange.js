var assert = require('assert'),
	sh = require('../index.js'),
	objs = require('./data/deeper.json');


describe('Search deeper with level range', () => {
	describe('search for a value in a branch with more results gives the expected result', function() {

		const exps = [
			{opts: { min: 0, max: 0 }, expected: 1},
			
			{opts: { min: 0, max: 1 }, expected: 2},
			{opts: { min: 1, max: 1 }, expected: 1},
			
			{opts: { min: 0, max: 2 }, expected: 3},
			{opts: { min: 1, max: 2 }, expected: 2},
			{opts: { min: 2, max: 2 }, expected: 1},

			{opts: { min: 0, max: 3 }, expected: 4},
			{opts: { min: 1, max: 3 }, expected: 3},
			{opts: { min: 2, max: 3 }, expected: 2},
			{opts: { min: 3, max: 3 }, expected: 1},

			{opts: { min: 0, max: 4 }, expected: 7},
			{opts: { min: 1, max: 4 }, expected: 6},
			{opts: { min: 2, max: 4 }, expected: 5},
			{opts: { min: 3, max: 4 }, expected: 4},
			{opts: { min: 4, max: 4 }, expected: 3},

			{opts: { min: 5, max: 5 }, expected: 0},
			{opts: { min: 6, max: 6 }, expected: 0},
			{opts: { min: 6, max: 6 }, expected: 0},
			{opts: { min: 7, max: 7 }, expected: 0},
			{opts: { min: 8, max: 8 }, expected: 0},
			{opts: { min: 9, max: 9 }, expected: 0},
			{opts: { min: 10, max: 10 }, expected: 1},
		];

		exps.forEach((exp) => {
			
			const opts1 = exp.opts,
				res1 = sh.forValue(objs, /^oNe$/i, opts1);
			it(`should find ${res1.length} elements with options ${JSON.stringify(opts1)}`, () => {
				assert.equal(res1.length, exp.expected);
			});

			const opts2 = Object.assign(exp.opts, {}, { limit: 1 }),
				res2 = sh.forValue(objs, /^oNe$/i, opts2);
			it(`should find ${res2.length} elements with options ${JSON.stringify(opts2)}`, () => {
				assert.equal(res2.length, exp.expected > 0 ? 1 : 0);
			});
		});
	});
});
