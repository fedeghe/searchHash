var assert = require('assert'),
	sh = require('../index.js'),
	

	objs = [

		/**
		 * Obj-zero
		 */
		{
			a : 1,
			b : {
				a : 2,
				b : {
					a : 3,
					b : {
						a : 4,
						c : 'end'
					},
					cc : 1,
					ccc : 3
				},
				c : 45,
				s : [{
					c : 11
				},{
					c : 22
				},{
					c : {
						c : 33
					}
				}]
			}
		},


		/**
		 * Obj-Wan Kenobi
		 */
		{
			o : 2
		}
	];




describe('Search for keys', function() {
	describe('search `a` keyed elements', function() {
		var results = sh.forKey(objs[0], 'a');
		it('should find 4 elements', function() {
			assert.equal(4, results.length);
		});
		console.dir(results)
	});
	describe('search /^c/ keyed elements', function() {
		var results = sh.forKey(objs[0], 'a');
		it('should find 4 elements', function() {
			assert.equal(4, results.length);
		});
	});

});

