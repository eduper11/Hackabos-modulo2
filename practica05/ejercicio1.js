const obj = {
  name: "paco",
  cuerpo: "musculoso",
  test: "test"
};

// for (let key in obj) {
//   if (key == "name") {
//     delete obj[key];
//     console.log(key);
//   }
//   console.log(obj);
// }

// function deleteProperty(obj) {
//   for (let key in obj) {
//     if (key == "name") {
//       delete obj[key];
//       console.log(key);
//     }
//     console.log(obj);
//   }
// }

// deleteProperty(obj);

// crea una funcion que me de el total de manzanas

// let apples = {
//   red: 10,
//   green: 23,
//   golden: 72,
//   yellow: 2
// };

// function totalApples(apples) {
//   let sum = 0;
//   for (let key in apples) {
//     sum = sum + apples[key];
//   }
//   return sum;
// }

// totalApples(apples);

// crear una función que multiplique por 3 todas las propiedades numericas del objeto

let apples = {
  red: 10,
  green: 23,
  golden: 72,
  yellow: 2
};

function x3(obj) {
  for (let key in obj) {
    if (isFinite(key)) {
      obj[key] *= 3;
    }
  }
  return obj;
}

console.log(x3(apples));
