// ! NOT

let isTall = true; 
isTall = !isTall;

let isRed = 0;
isRed = !isRed;

alert(!!"hola") //true
alert(boolean("hola"0)) //true

//bucles

let flag = false;

while (true) {
    console.log("hola");
    flag = true;
    if(flag ==true) {
        brake;
    }
}

let cont = 0;

while (cont <= 3) {
    console.log(cont);
    cont++;
}

let cont2 = 0

while (true) {
    console.log(cont2);
    cont2++;
    if (cont2 == 3){
        break;
    }
}

let limit = 0
do {
    console.log(limit);
    limit++;
}while (limit < 5);

let array = [1,2,3,4,5];
for (let i = 0, i < array.length; i++) {
    const element = array [i];
    console.log(element);
}
// mostrará los elementos dentro de array uno a uno, hasta 

let array = [
    {name: "pepe", isAdmin: true}
    {name: "paco", isAdmin: false}
    {name: "julia", isAdmin: true}
    {name: "sancho", isAdmin: false}
    {name: "abel", isAdmin: true}
]
// [i] es cada uno de los items de array
for(let i = 0; i < array.length; i++) {
    if (array[i].isAdmin) {
        console.log(array[i].name);
    }
}

// hacer con ifs

let array = [
    {name: "pepe", isAdmin: true}
    {name: "paco", isAdmin: false}
    {name: "julia", isAdmin: true}
    {name: "sancho", isAdmin: false}
    {name: "abel", isAdmin: true}
]

//continue solo se usa con el for SOLO

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
// /cambiar el nombre a los users que no sean admins a "default" usando continue

un bucle puede tener un nombre: 

principal: for (let index = 0; index < array.length; index++) {
    for (let index = 0; index < array.length; index++) {
        if (condition) {
            break pepe ;
        }
        
    }
    
}