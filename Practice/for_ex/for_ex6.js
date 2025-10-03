let price = 15;

for(let p=1, kg=1.2; kg<=2; p++, kg=kg+0.2){
    console.log(`${kg.toFixed(1)} kg`," - ", price*p);
}