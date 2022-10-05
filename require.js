/**
 * Works.
 * It's not import statement though (as it's done in ts).
 */
var axios = require('axios');
console.log({
    static: axios,
    factory: axios.create,
    instance: axios.create()
});
