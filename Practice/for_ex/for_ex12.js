let N = 2; 
let multiply = 1;

for (let i = 1; i <= N; i++) {
    multiply *= (1 + i / 10);
}

console.log("Произведение 1.1 * 1.2 * ... *", (1 + N / 10), "=", multiply);