//Pide una nota (número). Muestra la calificación según la nota:

// let quali = prompt("Que nota tienes?");

// if (Number(quali)) {        <--> Fíjate en los checks, porque en estos if son importantes para no tener problemas luego con "cancel" y "OK"
//   if ((quali >= 0, quali <= 3)) {
//     console.log(quali);
//     alert("Muy deficiente");
//   } else if ((quali >= 3, quali <= 5)) {
//     alert("Isuficiente");
//   } else if ((quali >= 6, quali < 7)) {
//     alert("Bien");
//   } else if ((quali >= 7, quali <= 8)) {
//     alert("Notable");
//   } else if ((quali >= 9, quali <= 10)) {
//     alert("Sobresaliente");
//   }
// } else if (quali == null) {
// } else {
//   alert("El valor introducido es incorrecto");
// }

//pide cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -

// let resultado = "";     <-->

// do {
//   let cadena = prompt("Dame una cadena de texto");
//   if (cadena == "") {
//     resultado = resultado + cadena;
//     console.log(resultado);
//   } else {
//     resultado = resultado + "-" + cadena;
//   }
// } while (confirm("Desea seguir"));

// console.log(resultado);

// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un “alert” y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// let resultado = 0;

// do {
//   let num1 = prompt("dame un número porfa");
//   if (Number(num1)) {
//     resultado = resultado + +num1;
//     console.log(resultado);
//   }
//   if (String.num1 || num1 == "") {
//     alert("Has introducido un valor erroneo");
//   } else if (num1 == null) {
//     break;
//   }
// } while (confirm("Desea seguir?"));

// console.log(resultado);

// programa que escribe una pirámide del 1 al 30

// for (let i = 1; i <= 30; i++) {
//   for (let res = 0; res < i; res++) {
//     console.log(i);
//   }
// }

// let num1 = prompt("Dame un número para la pirámide inversa");

// for (let i = num1; i > 0; i--) {
//   for (let res = 0; res < i; res++) {
//     console.log(i);
//   }
// }

// let num1 = prompt("Dime el límite de numeros de la pirámide");

// for (let i = 1; i <= num1; i++) {
//   for (let rep = 1; rep <= i; rep++) {
//     console.log(rep);
//   }
// }
// ("faltan las comprobaciones en algunos ejercicios")

let num = prompt("Dime un número tope para el ejercicio (no te pases)");

// for (let i = 1; i < num; i++) {
//   if (i % 4 != 0 && i % 9 != 0) {
//     console.log(i);
//   } else if (i % 4 == 0) {
//     console.log(i + " " + "múltiplo de 4");
//   } else if (i % 9 == 0) {
//     console.log(i + " " + "múltiplo de 9");
//   } else if (i % 5 == 0) {
//     console.log("<hr>");
//   }
// }

//hacemos una variante(que no muestras los num que son múltiplos de 4 o 9)
