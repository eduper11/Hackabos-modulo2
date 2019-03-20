//Crear una clase furgoneta que exteinda de vehiculo
//crear una clase coche que extienda de vehiculo
// vehiculo tiene propiedades por defecto: puertas 5, peso 3000kg
// furgoneta sustituye el peso a 5000
// coche sustituye el peso a 3500kg y añade radio (true/false)
// furgoneta además añade extra un color y un tipo que puede ser especial o no (true, false)

// class Vehicle {
//   constructor(doors = 5, weight = 3000) {
//     this.doors = doors;
//     this.weight = weight;
//   }
// }

// class Car extends Vehicle {
//   constructor(weight = 3500, radio = true) {
//     super();
//     this.weight = weight;
//     this.radio = radio;
//   }
// }

// class Van extends Vehicle {
//   // las propiedades que tienen un valor por defecto, ponlo al final siempre
//   constructor(color, weight = 5000,especial = false) {
//     super();
//     this.weight = 5000;
//     this.color = color;
//     this.especial = false;
//   }
// }

// let car1 = new Car(3200, true);
// let van1 = new Van("red", 3400, true);

// setTimeout(function() {
//   console.log("Hola");
// }, 3000);

// setInterval(() => {
//   console.log("adios");
// }, 3000);

// let obj = {
//   name: "pepe",
//   hola: function() {
//     setTimeout(() => {
//       console.log("Hello " + this.name);
//     }, 3000);
//   }
// };

// obj.hola();

// let cadena = "ñlaksdjflkjsad";

// for (let i = 0; i < cadena.length; i++) {
//   console.log(cadena[i]);
// }

// let names = ["pepe", "rafa", "tito", "maria"];

// names.splice();

// for (let i = 0; i < names.length; i++) {
//   if (i % 2 == 0) {
// names.splice(i,1)
//     console.log(names[i]);
//   }
// }

// function deletePair(names) {
//   for (let i = 1; i < names.length; i++) {
//     names.splice(i, 1);
//   }
// }

// ó

// let names2 = names.filter((name,i) => {
//   if(i % 2 == 0) {
//     return names
//   }
// })

// deletePair(names);
// console.log(names);

// Funcion que al pasarle un array de users que los pase a type = Admin, y luego otra que al pasarle el array, nos los filtre por la localización que le pasemos

// let people = [
//   {
//     name: "Pepe",
//     location: "Coruna",
//     type: "user"
//   },
//   {
//     name: "Andrea",
//     location: "Madrid",
//     type: "user"
//   },
//   {
//     name: "Maria",
//     location: "Coruna",
//     type: "user"
//   },
//   {
//     name: "Alex",
//     location: "Bcn",
//     type: "user"
//   }
// ];

// function changeAdmin(people) {
//   return people.map(person => {
//     person.type = "Admin";
//     return person;
//   });
// }

// // console.log(changeAdmin(people));
// // console.log(people);

// function changeLocation(people, location) {
//   return people.filter((person, index, array) => {
//     if (location == person.location) return true;
//     false;
//   });
// }

// console.log(changeLocation(people, "Coruna"));

// function changeAdminonlyEven(people) {
//   {
//     return people.map((person, index) => {
//       if (index % 2 !== 0) person.type = "Admin";
//       return person;
//     });
//   }
// }

// console.log(changeAdminonlyEven(people));

// let arrayNormal = ["Abel", "Pepe"];

// let [name1, name2] = arrayNormal;

// let name1 = arrayNormal[0];
// let name2 = arrayNormal[1];

// console.log(name2);

// let arrayNormal = ["ruben", "Costa"]

// let obj4 = {}

// [obj4.name, obj4.lastName] = arrayNormal

//EJERCICIO DE DESTRUCTURING

// let obj = {
//   window: 100,
//   innerHeight: "2oopx" //...rest => significa "todo el resto"
// };

// let { window: w = 0, innerheight } = obj; //con el ejemplo de window estamos llamando a window "w". Si no hubiese nada en window, valdría 0, pero si hay window, prevalece el valor que tiene en el objeto
