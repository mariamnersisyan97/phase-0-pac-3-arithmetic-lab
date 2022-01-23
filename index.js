
function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}
function increment(n){
    return ++n;
}
function decrement(n){
    return --n;
}
function makeInt(n) {
    return parseInt(n, 10);
}
function preserveDecimal(n) {
     return parseFloat(n);
}

// describe('preserveDecimal(n)', function() {
//     it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
//       expect(preserveDecimal('2.222')).toBe(2.222)
//     })
  
//     it('returns NaN as appropriate', function() {
//       expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
//     })
//   })
  