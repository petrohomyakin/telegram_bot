const findProp = function(obj, propname) {
    for ( k in obj ) {
        console.log(k)
        if ( k === propname ) {
            return obj[k]
        }
        if ( typeof obj[k] === 'object' && !Array.isArray(obj[k]) ) {
            const result = findProp(obj[k], propname);
            if ( result ) {
                return result;
            }
        }        
    };
    return false;
}

module.exports = findProp;