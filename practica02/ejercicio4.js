let array = [
  { name: "pepe", isAdmin: true },
  { name: "paco", isAdmin: false },
  { name: "julia", isAdmin: true },
  { name: "sancho", isAdmin: false },
  { name: "abel", isAdmin: true }
];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (!array[i].isAdmin) {
    //el ! ahi es una mala practica clean code
    array[i].name = "Default"; //el default se hace después, porque si no tiene que recurrir a todo el código antes de hacer el continue (en este caso sería un login, y corre todo el código seas o no un admin, es cleancode hacer la selección antes y luego cambiar el nombre del resto a default)
  } else if (array[i].isAdmin) {
    continue;
  }
  console.log(array[i].name);
}

//solucion

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (array[i].isAdmin) continue;
  array[i].name = "Default";
}
