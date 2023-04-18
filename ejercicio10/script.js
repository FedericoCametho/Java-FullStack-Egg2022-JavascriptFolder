let funcion = () => {
    let frase = prompt("Ingrese una palabra");
    return frase.split("").reverse().join("");
}

console.log(funcion())