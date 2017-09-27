const findProp = require('../lib/findProp');

const test_obj = {
    a: {
        b: 'c',
        d: {
            kek: {
                kek_lol: {
                    some_prop: 'prop'
                },
                lol_kek: 'lul'
            }
        }
    }
}

// console.log(findProp(test_obj, 'a'))
// console.log(findProp(test_obj, 'b'))
// console.log(findProp(test_obj, 'c'))
// console.log(findProp(test_obj, 'd'))
// console.log(findProp(test_obj, 'kek'))
// console.log(findProp(test_obj, 'kek_lol'))
// console.log(findProp(test_obj, 'azaza'))
// console.log(findProp(test_obj, 'lol_kek'))
// console.log(findProp(test_obj, 'lul'))

const msg = {
    message_id: 24,
    chat: {
        id: -1001149375282,
        title: 'My books',
        type: 'channel'
    },
    date: 1506448612,
    forward_from_chat: {
        id: -1001149375282,
        title: 'My books',
        type: 'channel'
    },
    forward_from_message_id: 7,
    forward_date: 1505826991,
    document: {
        file_name: '08723204.fb2',
        mime_type: 'application/octet-stream',
        file_id: 'BQADAgAD1gADgSYRSltyPOXRc_F0Ag',
        file_size: 712828
    }
}

console.log(findProp(msg, 'document'))