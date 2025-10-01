let num = 345;
let unit = num %10
let ten = Math.floor(num/10)%10
let hundred = Math.floor(num/100)
console.log(hundred+ten+unit)
console.log("unit-",unit)
console.log("ten-",ten)
console.log("hundred-",hundred)