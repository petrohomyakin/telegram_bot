const findProp = require('../lib/findProp');

const test_obj = {
    a: {
        b: 'c',
        d: {
            kek: 'lul'
        }
    }
}

console.log(findProp(test_obj, 'a'))
console.log(findProp(test_obj, 'b'))
console.log(findProp(test_obj, 'c'))
console.log(findProp(test_obj, 'd'))
console.log(findProp(test_obj, 'kek'))
console.log(findProp(test_obj, 'lul'))