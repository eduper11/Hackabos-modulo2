// let promesa = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     resolve("los datos me han llegado perfecto")
//   }, 1000);
// }

// Promise.then(resultado => console.log(resultado));

//Una función que tenga un setTimeout de 2 segundos que devuelva una respuesta al pasarle una url y llamar a un api público (que es url)

// let data = toOrderData ("https//randomuser.me/api/")

// async function example(params) {
//   return Promise.resolve("todo ha ido bien");
// }

// example().then(data=> console.log(data));

// let data = await example()

// escribir una function testNum que le pasas un parámetro y retorna una Promise que comprueba que el valor sea mayor que 10, si no la rechaza

//escribir 2  funciones que susen Promises que puedas encadenar. La primera función
// se llama transformToCaps(), que tomará un array de palabras y las pasara a mayusculas,
// y la segunda orderWords() ordenará las palabras en orden alfabético.
// Si el array tiene algun dato que no sea un string, debe lanzar un reject

// async function githubExample(url = "https://api.github.com/users/eduper11") {
//   try {
//     let res = await fetch(url);
//     let user = await res.json();
//     console.log(user);
//   } catch (e) {
//     console.log(e);
//   }
// }

// githubExample();

// function ArrayAddition(arr)

// async function githubExample (url = "https://api.github.com/users/eduper11") {
//   try {
//     let res = await fetch(url);
//     let user = await res.json();
//     console.log(user);
//   } catch (e) {
//     console.log(e);
//   }
// }

// function testNum (name) {
//   return promise = new Promise (function (resolve, reject) {
//     if (name > 10) {
//       resolve (console.log(param);)
//     }
//   })
// }

const users = [
  { id: 1, name: "ricardo", profesion_id: 1 },
  { id: 2, name: "alejandro", profesion_id: 1 },
  { id: 3, name: "diego", profesion_id: 2 }
];

const profesion = {
  1: "programador",
  2: "diseñador"
};

function getUser(callback) {
  setTimeout(() => {
    callback(null, users);
  }, 2000);
}

getUser ((err, users) => console.log(users));