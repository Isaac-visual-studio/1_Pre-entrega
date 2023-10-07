/* Bienvenida */
alert("Bienvenido a banca pirulo");

alert("Vamos a crearte una cuenta");

/*Crear cuenta */
let usuario = prompt("Escribi tu nombre de usuario");

let gmail = prompt("Escribi tu gmail");

let contraseña = prompt("Escribi tu contraseña");

alert("vamos a iniciar sesion");

let nombre = prompt("Ingrese un nombre");

/* login */
if (nombre != "" && (nombre === usuario || nombre === usuario)) {
  alert("Hola " + usuario);
} else {
  alert("nombre invalido");
}

let contraseña2 = prompt("Ingrese su contraseña");
if (nombre != "" && (nombre === usuario || nombre === usuario)) {
    alert("Bienvenido usuario " + usuario);
} else {
    alert("contraseña invalida");
}

/* cuenta */
alert("Empezemos " + usuario + ", tenemos una cuenta de ahorro con un interes del 1.7% anual.");

let deposito = Number(prompt("Ingrese la cantidad q quiere depositar"));
let multiplicado = Number(1.7);
let dividido = Number(100);
let deposito1 = deposito * multiplicado;
let deposito2 = deposito1 / dividido;
let depositoTotal = deposito2 + deposito;
alert("Su deposito en un año va a se de $" + depositoTotal); 
let depositoAños = Number(prompt("¿A cauntos años le gustaria q este su dinero guardado?"))
let depositoFuturo = deposito2 * depositoAños;  
alert(" Su deposito a " + depositoAños + " años va a ser de $" + depositoFuturo);
alert("Muchas gracias " + usuario + " por ahora ser parte del Banco Pirulo.")