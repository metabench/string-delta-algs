const create = require('textdiff-create');
const apply = require('textdiff-patch');

const method_name = "icflorescu-textdiff";
const method_codename = 'icfl1';
// Then will make the improved version, using the array maps.
//  


// Msgpack could help here....
//  Though a custom format for the smallest HTML could help.
//   Diffs of small pieces of html could be extra-efficient.






const res = {
    codename: method_codename,
    create: (a, b) => {
        const r1 = create(a, b);
        return {
            m: method_codename,
            v: r1
        }
    },
    apply: (a, o_delta) => {
        const {value} = o_delta;
        if (o_delta.m === method_codename || o_delta.method_name === method_name) {
            return apply(a, value);
        } else {
            console.log('o_delta.m', o_delta.m);
            throw 'Unsupported method_name: ' + o_delta.method_name;
        }

    }
}

module.exports = res;



