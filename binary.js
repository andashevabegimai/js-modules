export function add(a, b) {
   return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
}
export function isValid(str) {
   return /^[01]+$/.test(str);
}
