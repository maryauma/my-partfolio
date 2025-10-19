//not by me
let N = 5; // любое целое число > 0
let sum = 0;

for (let i = 1; i <= N; i++) {
    sum = 0;
    for (let j = 1; j <= 2 * i - 1; j += 2) {
        sum += j;
        console.log(`Квадрат числа ${i}: текущее значение суммы = ${sum}`);}
    }