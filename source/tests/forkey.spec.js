const sh = require('../dist/index.js'),
    objs = require('./data/deeper.json');

describe('Search for key', () => {

    describe('string based research', () => {
        it('should find 4 elements', () => {
            const search = sh.forKey(objs, 'a');
            expect(search.length).toBe(4);
        });
        it('should find 1 elements, using limit 1', () => {
            const search = sh.forKey(objs, 'a', {limit:1});
            expect(search.length).toBe(1);
        });
        it('should find 0 elements, with limit 0 (edge case)', () => {
            const search = sh.forKey(objs, 'a', {limit:0});
            expect(search.length).toBe(0);
        });
        it('should find 0 elements on first level; arrays has no keys indeed :)', () => {
            const search = sh.forKey(objs, 'a', {max: 0});
            expect(search.length).toBe(0);
        });
        it('should find 2 elements on first 4 level', () => {
            const search = sh.forKey(objs, 'a', {max: 4});
            expect(search.length).toBe(2);
        });
        it('should find 1 elements on first 4 level limiting to one', () => {
            const search = sh.forKey(objs, 'a', {max: 4, limit: 1});
            expect(search.length).toBe(1);
        });
        it('should find 0 elements between levels 3 and 4', () => {
            const search = sh.forKey(objs, 'a', {min: 3, max: 4});
            expect(search.length).toBe(0);
        });
    });

    describe('regexp based research', () => {
        it('should find 10 elements', () => {
            const search = sh.forKey(objs, /a/);
            expect(search.length).toBe(10);
        });
        it('should find 1 elements, using limit 1', () => {
            const search = sh.forKey(objs, /a/, {limit:1});
            expect(search.length).toBe(1);
        });
        it('should find 0 elements, with limit 0 (edge case)', () => {
            const search = sh.forKey(objs, /a/, {limit:0});
            expect(search.length).toBe(0);
        });
        it('should find 0 elements on first level; arrays has no keys indeed :)', () => {
            const search = sh.forKey(objs, /a/, {max: 0});
            expect(search.length).toBe(0);
        });
        it('should find 5 elements on first 4 level', () => {
            const search = sh.forKey(objs, /a/, {max: 4});
            expect(search.length).toBe(5);
        });
        it('should find 1 elements on first 4 level limiting to one', () => {
            const search = sh.forKey(objs, /a/, {max: 4, limit: 1});
            expect(search.length).toBe(1);
        });
        it('should find 1 elements between levels 7 and 9', () => {
            const search = sh.forKey(objs, /a/, {min: 7, max: 9});
            expect(search.length).toBe(1);
        });
        it('should find 3 elements deeper', () => {
            const search = sh.forKey(objs, /a/, {min: 11});
            expect(search.length).toBe(3);
        });
    });

    describe('function based research', () => {
        it('should find 4 elements', () => {
            const search = sh.forKey(objs, k => k === "a");
            expect(search.length).toBe(4);
        });
        it('should find 1 elements, using limit 1', () => {
            const search = sh.forKey(objs, k => k === "a", {limit:1});
            expect(search.length).toBe(1);
        });
        it('should find 0 elements, with limit 0 (edge case)', () => {
            const search = sh.forKey(objs, k => k === "a", {limit:0});
            expect(search.length).toBe(0);
        });
        it('should find 0 elements on first level; arrays has no keys indeed :)', () => {
            const search = sh.forKey(objs, k => k === "a", {max: 0});
            expect(search.length).toBe(0);
        });
        it('should find 2 elements on first 4 level', () => {
            const search = sh.forKey(objs, k => k === "a", {max: 4});
            expect(search.length).toBe(2);
        });
        it('should find 1 elements on first 4 level limiting to one', () => {
            const search = sh.forKey(objs, k => k === "a", {max: 4, limit: 1});
            expect(search.length).toBe(1);
        });
        it('should find 0 elements between levels 7 and 9', () => {
            const search = sh.forKey(objs, k => k === "a", {min: 7, max: 9});
            expect(search.length).toBe(0);
        });
        it('should find 2 elements deeper', () => {
            const search = sh.forKey(objs, k => k === "a", {min: 11});
            expect(search.length).toBe(2);
        });
    });


    
});
