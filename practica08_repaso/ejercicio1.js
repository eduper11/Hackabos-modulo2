// Reemplazar en este código las expresiones de función con funciones de flecha:

// ```js run
// function preguntar(pregunta, si, no) {
//   if (confirm(pregunta)) si();
//   else no();
// }

// preguntar(
//   "Estás de acuerdo con las condiciones de uso?",
//   function() {
//     alert("Aceptaste las condiciones de uso.");
//   },
//   function() {
//     alert("No aceptaste las condiciones de uso.");
//   }
// );
// ```

// let preguntar = (pregunta, si, no) => {
//   confirm(pregunta) ? si : no;
// };

// preguntar(
//   "Estás de acuerdo con las condiciones de uso?",
//   () => alert("Aceptaste las condiciones"),
//   () => alert("No aceptaste las condiciones de uso")
// );

// Escribir una función `isEmpty(objeto)` que devuelve `true` si el objeto no tiene propiedades y `false` de lo contrario.Escribir

// let calendar = {};

// function isEmpty(calendar) {
//   for (let key in calendar) {
//     if (calendar.hasOwnProperty(key)) return false;
//   }
//   return true;
// }

// alert(isEmpty(calendar)); // true

// calendar["June"] = "Es mi cumple!";

// alert(isEmpty(calendar)); // false

// let calendar = {};

// function isEmpty(calendar) {
//   for (let key in calendar) {
//     if (calendar.hasOwnProperty(key)) return false;
//   }
//   return true;
// }

// alert(isEmpty(calendar));

// calendar["Mayo"] = "cumpleaños";

// alert(isEmpty(calendar));

// const city = {
//   name: "Madrid"
// };

// // Esto funciona?
// city.name = "Coruna";

// console.log(city.name);

// check las siguientes expresiones:

// let user = {
//   name: "Pepe",
//   sayName: function() {
//     alert(this.name);
//   }
// };
// user.sayName();

// let user = {
//   name: "John",
//   sayName: function() {
//     alert(this.name);
//   }
// };
// user.sayName();
// user.sayName();

// function createPost() {
//   return {
//     name: "New Website",
//     description: this
//   };
// }

// let post = createPost();

// console.log(post.description); // resultado? por que?

// function createPost() {
//   return {
//     name: "New Website",

//     description() {
//       return this;
//     }
//   };
// }

// let post = createPost();

// console.log(post.description()); // ??? por que??

// function timeConvert(num) {
//   if (isFinite(num)) {
//     let hours = Math.floor(num / 60);
//     let mins = num % 60;
//     return num1 + ":" + num2;
//   }
// }

// console.log(timeConvert(65));

// function getAlph(str) {
//   return str
//     .split("")
//     .sort()
//     .join("");
// }

// console.log(getAlph("hello my friend"));
