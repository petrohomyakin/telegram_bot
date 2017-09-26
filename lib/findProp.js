const findProp = function(obj, propname) {
    for ( k in obj ) {
        if ( k === propname ) {
            return obj[k]
        }
        if ( typeof obj[k] === 'object' && !Array.isArray(obj[k]) ) {
            return findProp(obj[k], propname);
        }        
    };
    return false;
}

module.exports = findProp;