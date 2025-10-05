let N = 2; 
let sum_minus = 0;

        for (let i = 1; i <= N; i++) {
            i % 2 == 0 ? sum_minus -= (1 + i / 10) : sum_minus += (1 + i / 10);
        }
console.log("Сумма и минус (знаки чередуются) 1.1 - 1.2 + ... +", (1 + N / 10), "=", sum_minus);