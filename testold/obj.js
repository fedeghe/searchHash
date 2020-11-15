const assert = require('assert'),
    sh = require('../dist/index.js');

describe('search an object', () => {
    it('should find 1 element ', () => {
        var t = sh.forValue([{a:{a: {a: {a: 1}}}}], {a:1}, { limit: 2 });
        assert.strictEqual(
            JSON.stringify(t),
            JSON.stringify([{
                obj:{
                    a:{
                        a:1
                    }
                },
                value:{
                    a:1
                },
                key:"a",
                parentKey:"a",
                path:"0/a/a/a",
                container:"0/a/a",
                parentContainer:"0/a",
                regexp:true,
                level:3
            }])
        );
    });
});