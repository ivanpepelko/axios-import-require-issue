"use strict";
exports.__esModule = true;
/**
 * See produced code.
 *
 * `default` from require is undefined.
 */
var axios_1 = require("axios");
console.log({
    static: axios_1["default"],
    factory: axios_1["default"].create,
    instance: axios_1["default"].create()
});
