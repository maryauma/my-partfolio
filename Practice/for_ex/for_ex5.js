/*toFixed()- Это метод числа в JavaScript, который округляет число 
до заданного количества знаков после запятой.(number.toFixed(digits))*/
let price = 15;

for(let p=1, kg=0.1; kg<=1; p++, kg=kg+0.1){
    console.log(`${kg.toFixed(1)} kg`," - ", price*p);
}