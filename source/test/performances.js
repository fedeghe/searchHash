const assert = require('assert'),
    sh = require('../dist/index.js'),
    objs = require('./data/licenses.json');
const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0].duration);
    performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });


describe('Search starts', () => {
    describe('search for MIT', () => {

        const myFunction = () => sh.forValue(objs, "MIT");
        
        const fn = performance.timerify(myFunction);
        const obs = new PerformanceObserver((list) => {
            console.log(list.getEntries()[0]);
            obs.disconnect();
            performance.clearFunctions();
        });
        obs.observe({ entryTypes: ['function'] });

        it('should find 4 elements', () => {
            search = fn();
            assert.equal(4, search.results.length);
        });
    });

});
