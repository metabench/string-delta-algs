const create = require('textdiff-create');
const apply = require('textdiff-patch');

const method_name = "icflorescu-textdiff";

// Then will make the improved version, using the array maps.
//  

const res = {
    create: (a, b) => {
        const r1 = create(a, b);
        return {
            method_name,
            value: r1
        }
    },
    apply: (a, o_delta) => {
        const {value} = o_delta;
        if (o_delta.method_name === method_name) {
            return apply(a, value);
        } else {
            throw 'Unsupported method_name: ' + o_delta.method_name;
        }

    }
}

module.exports = res;



