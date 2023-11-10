import { add as binaryAdd, isValid as binaryIsValid } from './binary.js';
import { add as hexAdd, isValid as hexIsValid } from './hex.js';

var type = prompt(`Addition type ('bin' for binary; 'hex' for hexadecimal):`);

if (type !== 'bin' && type !== 'hex') {
   alert('Invalid addition type.');
}
else {
   // The type is valid.
}
