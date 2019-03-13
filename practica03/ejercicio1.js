//Cual es el ultimo valor que alerta este bloque:

// let i = 4;

// while(i) {
//     alert(i--)
// }

// //Solución: 1

// //que valores alerta este bloque

// ler i = 0
// while (++i < 3) alert(i) //1,2

// let x = 0
// while x (x++ < 3) alert(x)// 1,2,3

//buscador de numeros primos
//teniendo x => n.....n+
//hacer un código que muestre los numeros primos de x

let x = prompt("numeros primos?");

pepe: for (i = 2; i <= x; i++) {
  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      continue pepe;
    }
  }
  console.log(i);
}
