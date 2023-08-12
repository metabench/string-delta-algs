const create = require('textdiff-create');
const apply = require('textdiff-patch');

const method_name = "icflorescu-textdiff-issue-4-enh";

// Then will make the improved version, using the array maps.
//  

const res = {
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
            method_name,
            value: r1
        }
    },
    apply: (a, o_delta) => {
        const value = o_delta.value.map(x => {
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
        if (o_delta.method_name === method_name) {
            return apply(a, value);
        } else {
            throw 'Unsupported method_name: ' + o_delta.method_name;
        }

    }
}

module.exports = res;



