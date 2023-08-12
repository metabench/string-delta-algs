const test = require('node:test');
const assert = require('node:assert/strict');

const Delta_Processor = require('../string_delta');
// See about loading the fairly large JS sample???


test('Short sphinx strings', () => {
    //const message = 'Hello'
    //assert.equal(message, 'Hello', 'checking the greeting')
    const dp = new Delta_Processor();

    const test_a_b = (a, b) => {
        const d = dp.create(a, b);
        console.log('d', d);

        const b2 = dp.apply(a, d);
        //console.log('b2 === b', b2 === b); // does it work?

        assert.equal(b, b2, 'Create delta, apply it');

    }

    //const a = 'Sphinx in the quartz mirror, judge of vowels and verbs';
    //const b = 'Sphinx of black quartz, judge my vow';

    test_a_b(
        'Sphinx in the quartz mirror, judge of vowels and verbs',
        'Sphinx of black quartz, judge my vow'
    );

        

})