let limite;
do{
    limite = parseInt(prompt("Por favor ingrese un valor limite positivo:"));
} while (limite < 0)

let suma = 0;
let mensaje;
do {
    suma = suma + parseInt(prompt("Ingrese numeros hasta alcanzar el limite anteriormente seteado"));
    mensaje = `El limite setteado es ${limite} y el total acumulado hasta ahora es de: ${suma}`;
    alert(mensaje);
} while (suma < limite)