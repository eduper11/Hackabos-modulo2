// Coderbyte pruebas de challenges

// //escoge la más larga del tring

// let anyString = prompt("Dame una cadena de palabras");

// let anyString.split(``);

// if (typeof anyString == "string") {
//   let pepe = anyString.split(` `);

//   let lenghtword = 0;
//   let word = null;

//   for (let i = 0; i < pepe.length; i++) {
//     // console.log("hola");
//     if (pepe[i].length > lenghtword) {
//       // console.log("pp");
//       lenghtword = pepe[i].length;
//       word = pepe[i];
//     }
//   }
//   console.log(word);

//   debugger;
// }

// console.log(palindromo("asa"));

// function palindrome(name) {
//   name = name.toLowerCase().replace(/\s+/g, "");
//   rename = name
//     .split("")
//     .reverse()
//     .toString()
//     .replace(/,/g, ""); // ojo con el replace, si no se define su ámbito de aplicación "g" (global) en caso de signos solo sustituye el primero que se encuentra
//   //
//   // console.log(rename);
//   // for (let i = 0; i < rename.length - 1; i++) {
//   if (name === rename) {
//     alert("esto es un palíndromo");
//   } else {
//     alert("no es un palíndromo");
//   }
// }
// }

// palindrome("jaimiti y sus bicis");
// Se van sus naves

//como encontrar una letra en un string, y validarla solo si está rodeada del simbolo +

// function characterSearch(str) {
//   str = str.toLowerCase().split("");

//   for (let i = 0; i < str.length; i++) {
//     console.log("hola");
//     if (str[i] > "a" && str[i] < "z") {
//       console.log("hola2");
//       if (i === 0 || i === str.length) {
//         console.log("hola3");
//         return false;
//       }
//     } else if (str[i - 1] !== "+" && str[i + 1] !== "+") {
//       console.log("hola4");
//       return false;
//     } else {
//       console.log("hola5");

//       return true;
//     }
//   }
// }
// Coderbyte me ha tangadooooooooo, funciona perfecto!!!!
// characterSearch("+d===+a+"); //"+d===+a+

// conversor sexagesimal.

// function TimeConvert(num) {
//   let hour = num / 60;
//   let minute = (num - hour) / 60;
//   console.log(minute);
// }

// TimeConvert(64);

// function letVowels(str) {
//   let m = str.match(/[aeiou]/gi);
//   return m === null ? 0 : m.length;
// }

// console.log(letVowels("jaimito y su ladrillo"));
