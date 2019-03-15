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

function palindrome(name) {
  name = name.toLowerCase().replace(/\s+/g, "");
  rename = name
    .split("")
    .reverse()
    .toString()
    .replace(/,/g, ""); // ojo con el replace, si no se define su ámbito de aplicación "g" (global) en caso de signos solo sustituye el primero que se encuentra
  //
  // console.log(rename);
  // for (let i = 0; i < rename.length - 1; i++) {
  if (name === rename) {
    alert("esto es un palíndromo");
  } else {
    alert("no es un palíndromo");
  }
}
// }

palindrome("jaimiti y sus bicis");
// Se van sus naves
