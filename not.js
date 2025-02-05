function isNumber(value) {
  return !isNaN(value) && typeof value !== "boolean";
}

console.log(isNumber(123));
console.log(isNumber("123"));
console.log(isNumber("Hello"));
console.log(isNumber(true));
console.log(isNumber(NaN));
console.log(isNumber(undefined));
