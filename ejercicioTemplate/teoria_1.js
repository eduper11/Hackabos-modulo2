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

// let obj = {
//     name: "Alex",
//     oranges: 23,
//     apples: 234
// };

let loquesea = prompt("dame apples o oranges")
obj[loquesea]; para pedir propiedades dinámicas (aquí saldría 234, le está pidiendo la propiedad oranges)

funcion generadora de objetos o constructora

function Persons(name, lasName) { //se diferencia porque se empieza con mayuscula
    this.name = name; 
    this.lastName = lastName;
}

let person1 = new Persons("Murillo", "Ferreira")
console.log(person1);

// //OJO, los métodos son los que tienen funciones, y live en este caso es la propiedad, (repasar sintaxis objetos JS)

let obj = {
    live: 100,
    increaseLive: function() {
      this.live += 50; 
      return this;
    },
    decreaseLive: function {
      this.live -= 50; 
      return this;//este return nos permite hacer métodos abajo
    },
    showLive: function {
  console.log(this.live);
    }
  }
  //a esto me refiero con la nota del return
  personaje.increaseLive().increaseLive().decreaseLive()

   CLASES   //
Cambiar sintaxis object constructor a "clases"

Acumulador:
class Acumulador2 {
    constructor(defaultvalue){
  this.defaultvalue = defaultvalue
    }
    introduce() {
      let x = +prompt ("acumulame");
      this.defaultvalue += x;
      return this;
    }
    samecolor (coche1, coche2) { //static sirve para hacer esta función global, y que no pertenezca a cada coche en concreto, en este caso//
        static samecolor () { //static sirve para hacer esta función global, y que no pertenezca a cada coche en concreto, en este caso//
            al ser estática, si nosotros lo llamamos desde c1 o c2, nos va a dar error, porque este método no pertenece a ningun coche, si no que es global
        return coche1.color === coche2.color;
    }
  }


  //errores, fechas, tipos mas a fondo, asincronía

  try {
//código que queremos probar

  }catch(e) {
    let car1 = new Car(3200, true);
let van1 = new Van("red", 3400, tru
//si hay un error, va a entrar automáticamente dentro
console.error(e); //imprime por pantalla pero en rojo
// console.warn(e); //otro tipo de console
  }

  error = {
    name : "ReferenceError",
    message: "";
    stack: "hay un error at." //es de donde viene el error

  }
// logging -> elastisearch (base de datos sobre todo de texto (full search text)) o kibana también es otro tipo

class LoginError extends Error { //muy útil para crear varios tipos de errores
  constructor() {
      super();
      this.name = "LoginError";
    }
  }
  //shift + f12 Te abre un pequeño editor donde aparece donde aparece más esa clase, etc
  // ctrl + click sobre una clase para ver sus métodos



  //haz una función que diga "hola" c/ 3 ses

  setTimeout(() {
//podemos hacer cualquier cosa dentro de setTimeout, como una función
  }
  ), timeout) //timeout está en ms(milisegundos)

  setTimeout(function() {
    console.log("Hola");
  }, 3000);
  
  setInterval(() => {
    console.log("adios");
  }, 3000);

  //funcion para conocer cómo accede el this (2 arriba) en un array


  let obj = {
    name: "pepe",
    hola: function() {
      setTimeout(() => {
        console.log("Hello " + this.name);
      }, 3000);
    }
  };
  
  obj.hola();

//TYPOS

  //numeros

  Math.ceil() //lo contrario que el floor, devuelve el entero más pequeño mayor o igual a un número dado.

  Math.floor()
//Math.floor((1.74837 * 100) /100) para redondear a 2 decimales
  //4.1 4
  //4.6 4

  Math.round()
  //redonde matemáticamente

  Math.trunc()

  toFixed

  let num = 4.32324 //toFixed redondea a "2" en este caso, y devuelve en string
  num.toFixed(2)

  console.log(parseFloat("58458.3352.3565")); 

  Math.max(2,3,4,8) //min hace lo inverso

  Math.random()

  //STRINGS

  let cadena = "ñlaksdjflkjsad";

  //for of (let "" of "string", array...etc)

  //for in (let key in objetc)

  for (let letra of cadena) {
    console.log(letra); // coge cada una de las letras del string
  }

  cadena. charAt(1)
cadena.includes() //retorna un true si se incluye el parámetro en un string
cadena.indexOf() //retorna la posicion donde se encuentra el parámetro en la cadena. si no está, devuelve un -1
  cadena.normalize()
  cadena.join()


  //ARRAYS

  let name = [a, r, r, a, y]

  name.length

  name.push() //mete un elemento en el array, siempre en ultima posición, y return la nueva longitud del elemento, que será un number

  name.pop() elimina el ultimo valor del Array, y returna el que elimina
  name.unshift() //mete lo que pongas en el parametro, y te devuelve la nueva longitud
  name.shift() //borra el primer parámetro de un array y retorna el que borra

  for(let name of names) {

  }
  name.splice( , ) //a partir de su param borra tantos elementos como se indique en el segundo param y devuelve los borrados

  name.map() //(son métodos funcionales) creas un array(name2) donde map recorre name (es como un for of) y segun esta función, retorna name + 2, siendo name2 = [a+2, r+2, r+2.......]

  name.filter() //funciona igual que map, pero filter filtra, es decir, map recorre todos, y filter recorre solo los que tu le digas

  let name2 = name.map((name)=> {
    return name + "2"
  })
//       ó

[1,3,5,8].reduce(() => {
  
});

//DESTRUCTURING

let arrayNormal = ["Abel", "Pepe"]

let [name1, name2] = arrayNormal //se puede decir que así estamos desestructurando, para estructurarlo en un nuevo elemento

console.log(name2); //name2 será "Abel"

let arrayNormal = ["ruben", "Costa"]

let obj4 = {}

[obj4.name, obj4.lastName] = arrayNormal



let obj = {
  window: 100,
  innerHeight: "2oopx" //...rest => significa "todo el resto", pero no tiene por que llevar rest, se puede llamar de cualquier forma. el quiz son los ..., que asocian el resto de propiedades a los ...
};

let { window: w = 0, innerheight } = obj; //con el ejemplo de window estamos llamando a window "w". Si no hubiese nada en window, valdría 0, pero si hay window, prevalece el valor que tiene en el objeto

DEBERES //JSON JS Y FECHAS como manejar una fecha?

let fecha1 = new Date()
ler ahora = Date.now()

//json no puede llevar comentarios. porque se busca la mayor eficiencia, por eso tiene una estructura muy marcada, para que el flow sea el más óptimo.

librería de fechas: momentjs, dayjs, npmjs(web) para libreríasjs

asincronía

let promesa = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve("los datos me han llegado perfecto")
  }, 1000);
}

promesa
.then(resultado => console.log(resultado))
.catch(err => clg(err));

