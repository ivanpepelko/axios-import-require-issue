/**
 * Works.
 * It's not import statement though (as it's done in ts).
 */
const axios = require('axios')

console.log({
  static: axios,
  factory: axios.create,
  instance: axios.create(),
});
