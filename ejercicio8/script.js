let corte = 0;
let numeros = [];
let num;
do{
    num = parseInt(prompt("Por favor ingrese un numero:"));
    if (num !== NaN && num !== undefined && num !== 0){
        numeros.push(num);
    }
} while (num !== 0)

console.log(numeros)
console.log(Math.max(...numeros))
console.log(Math.min(...numeros))
function promedio (numeros){
    let suma = 0;
    numeros.forEach(n => {
        suma += n;
    })
    
    return (suma / numeros.length) 
}
console.log(promedio(numeros))