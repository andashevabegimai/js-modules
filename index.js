import { add as binaryAdd, isValid as binaryIsValid } from './binary.js';
import { add as hexAdd, isValid as hexIsValid } from './hex.js';

const isValidMap = {
   bin: binaryIsValid,
   hex: hexIsValid,
};

const addMap = {
   bin: binaryAdd,
   hex: hexAdd,
};

var type = prompt(`Addition type ('bin' for binary; 'hex' for hexadecimal):`);

if (type !== 'bin' && type !== 'hex') {
   alert('Invalid addition type.');
}
else {
   var isValid = isValidMap[type];
   var a = prompt('Enter number 1:');
   if (!isValid(a)) {
      alert('Invalid number entered!');
   }
   else {
      var b = prompt('Enter number 2:');
      if (!isValid(b)) {
         alert('Invalid number entered!');
      }
      else {
         var add = addMap[type];
         alert(add(a, b));
      }
   }
}
