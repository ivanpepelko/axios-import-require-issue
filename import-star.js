"use strict";
exports.__esModule = true;
/**
 * Fails at typescript check: TS2339: Property 'create' does not exist on type 'typeof
 * import("<redacted>/node_modules/axios/index")'.
 * It would produce working js if tsc passed.
 */
var axios = require("axios");
console.log({
    static: axios,
    factory: axios.create,
    instance: axios.create()
});
