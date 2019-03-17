//Crear un objeto personaje que tenga un cotador de vida y que tenga dos metodos: increaseLife que incrementa la vida en 50 puntos y decreaseLife que la baja en 50 puntos. Tiene que tener otra función que muestre la vida total

//que los métodos del objeto de arriba se puedan llamar encadenadamente:

//OJO, los métodos son los que tienen funciones, y live en este caso es la propiedad, (repasar sintaxis objetos JS)

// let obj = {
//   live: 100,
//   increaseLive: function() {
//     this.live += 50;
//     return this;
//   },
//   decreaseLive = function() {
//     this.live -= 50;
//     return this;//este return nos permite hacer métodos abajo
//   },
//   showLive: function() {
// console.log(this.live);
//   }
// }
// //a esto me refiero con la nota del return
// personaje.increaseLive().increaseLive().decreaseLive()

// cree un objeto acumulador usando la funcion constructora acumulador con un valor inicial. Ese objeto debe tener un metodo "introduce" que te salta un prompt y te lo suma en el acumulador

// function Acumulador(defaultvalue) {
//   this.defaultvalue = 4,
//   this.introduce = function() {
//     let x = +prompt ("acumulame");
//     this.defaultvalue += x;
//     return this;
//   };
// }
//   let acumulador1 = new acumulador(21)

//   acumulador1.introduce();

//   console.log(acumulador1);

// investigar como funciona proto

// Cambiar sintaxis object constructor a "clases"
// class Acumulador2 {
//   constructor(defaultvalue){
// this.defaultvalue = defaultvalue
//   }
//   introduce() {
//     let x = +prompt ("acumulame");
//     this.defaultvalue += x;
//     return this;
//   }
// }

// crear una clase  delfin, el delfin que tenga un nombre, un peso, longitud, color y los metodos saltar que console.log(salntando); y un método general de reproducción que al pasarle dos delfines con el mismo color nos da un true (mini dolphin)

class Animal {
  constructor(eyes) {
    this.eyes = eyes;
  }
  jump() {
    console.log("Animal saltando");
  }
}

class Dolphin extends Animal {
  constructor(name, peso, longitud, color) {
    super(2);
    this.name = name;
    this.peso = peso;
    this.longitud = longitud;
    this.color = color;
  }
  jump() {
    console.log("saltando");
    return this;
  }

  static reproduction(dolphin1, dolphin2) {
    dolphin1.color === dolphin2.color ? "Mini dolphin" : false;
    // if (dolphin1.color === dolphin2.color) {
    //   return console.log("minidolphin");
  }
}

let dolphin1 = new Dolphin("Paco", 50, 2, "azul");
let dolphin2 = new Dolphin("Suso", 20, 3, "azul");

dolphin1.jump();

Dolphin.reproduction(dolphin1, dolphin2);
