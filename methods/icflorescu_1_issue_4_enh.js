const create = require('textdiff-create');
const apply = require('textdiff-patch');

const method_name = "icflorescu-textdiff-issue-4-enh";

const method_codename = 'icfl4e';


// Seems like a deeper compression system would help more.
//  But wrapping it around the existing delta method.

// A compressed format here could help.
//  Either JSON or a form of binary.
//   Could also try messagepack and some other standard ones.

// And could have a stringtable at the beginning.
//  Could make improvements to lookup words in the original too.
// Could have 2 bits for what the instruction is, then 6 bits (up to 64) for the item.

// Anyway, a simple but small / tiny binary representation will help here.
//  As in typed arrays / buffers. No need to go via JSON.



// Then will make the improved version, using the array maps.
//  

// A compression mapping / wrapping enhancement.
//  Seems like making something like this would be a different challenge

// But then a further wrapping for compression around this would help further.

// Seems worth having different layers of compression / formats.
//  Could have a stringtable so that strings refer to the value in the stringtable.

// Could even see about micro / 1 byte / 1.5 byte codes for this.






const res = {
    codename: method_codename,
    create: (a, b) => {
        const r1 = create(a, b).map(x => {
            const [i_op, value] = x;
            if (i_op === -1) {
                return value * -1;
            }
            if (i_op === 0) {
                return value;
            }
            if (i_op === 1) {
                return value;
            }
        });

        return {
            m: method_codename,
            v: r1
        }
    },
    apply: (a, o_delta) => {
        const value = (o_delta.value || o_delta.v).map(x => {
            if (typeof x === 'string') {
                return [1, x]
            } else {
                if (x < 0) {
                    return [-1, -1 * x]
                } else {
                    return [0, x]
                }
            }
        });
        if (o_delta.method_name === method_name || o_delta.m === method_codename) {
            return apply(a, value);
        } else {
            console.log('o_delta.codename', o_delta.codename);
            throw 'Unsupported method_name: ' + o_delta.method_name;
        }

    }
}

module.exports = res;



