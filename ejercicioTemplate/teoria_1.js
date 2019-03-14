//switch es bastante básico, usar solo para condiciones muy muy básicas
// let key

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// Fuciones DRY (dont repeat yourself)

// function getPepe(params) {
//   console.log("Soy Pepe");
// }

// function sum(num1, num2) {
//   return num1 + num2;
// } // EN UNA FUNCION SI NO SE RETORNA NADA, RETORNA UN "UNDEFINED"

// function isEven(num) {
//   if (URLSearchParams.isAdmin == false) return "no estas autentificado";
//   if (num % 2 == 0) {
//     return true;
//   }
//   return false;
// }

// Funciones declarativas

// function name(params) {

// }

// funciones expresivas

// let sum = function(params) {

// }

// callbacks
// parámetros de una funcion que se llaman si algo ha salido bien o mal

// function checkAge(age, accept, decline) {
//   if (age >= 18) {
//     accept();
//   } else {
//     decline();
//   }
// }

// function accept() {
//   console.log("Todo ok");
// }

// function decline() {
//   console.log("Todo mal");
// }

// checkAge(18, accept, decline);

//
//funcion ARROW
// quitamos la palabra function, y ponemos despues de los params una flecha (=>)

// const nombte = (num1, num2) => {
//   return num1 + num2;
// }

// const suma = (num1, num2) => {
//   let acces = checkPermissions();
//   if (!acces) return "no puedes entrar":
//   num1 + num2;

// Son funciones anónimas( no tienen nombre)
// POdemos obviar el return si es una sola línea, y si es un arrow function

// const cube = num1 => {
//   debugger;
//   console.log("loquesea");
//   return num1 **3;
// };

// cube(3;

// Symbol crea valores únicos, es decir

// Objects

// let Objects = {

// }

// las propiedades pueden ser string o symbol (recuerda que symbol crea valores únicos, es decir, name = symbol (x) y name2 = symbol (x) name y name2 serán diferentes)

let obj = {
    name: "Alex",
    oranges: 23,
    apples: 234
};

let loquesea = prompt("dame apples o oranges")
obj[loquesea]; para pedir propiedades dinámicas (aquí saldría 234, le está pidiendo la propiedad oranges)