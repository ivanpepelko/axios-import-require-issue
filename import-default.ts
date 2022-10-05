/**
 * See produced code.
 *
 * `default` from require is undefined.
 */
import axios from 'axios';

console.log({
  static: axios,
  factory: axios.create,
  instance: axios.create(),
});
