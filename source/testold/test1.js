const assert = require('assert'),
	sh = require('../dist/index.js'),
	

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




describe('Search for keys', () => {
	describe('search `a` keyed elements', () => {
		const search = sh.forKey(objs[0], 'a');
		it('should find 4 elements', () => {
			assert.strictEqual(4, search.length);
		});
	});
	describe('search /^c/ keyed elements', () => {
		const search = sh.forKey(objs[0], 'a');
		it('should find 4 elements', () => {
			assert.strictEqual(4, search.length);
		});
	});
});

