export function add(a, b) {
   return (parseInt(a, 16) + parseInt(b, 16)).toString(16);
}
export function isValid(str) {
   return /^[0-9a-fA-F]+$/.test(str);
}
