let A = 8;
let B = 3;

let count = 0;

for (let i = A; i > B; i--) {
  console.log(i-1);
  count++;
}

console.log("Количество чисел: " + count);