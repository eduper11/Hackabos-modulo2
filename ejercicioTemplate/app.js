/*
 *  1, 2, 3... GO!
 */

let isADmin = confirm("Eres el admin?");

let age = +prompt("Cuantos años tienes?", 10);

if(typeof age == "number") //typeof para saber si es un numeros nunca

if (isFinite(age)) //para saber si es un numeros nunca


// un programa que pida tu nombre por promt y lance una alerta si el nombre es "Admin"  "hello master"
//es "User" "hello user"
//es otra cosa "I dont know you"

let isAdmin = prompt("Who are you?").toLowerCase.trim;

if (isAdmin == "Admin") {
    prompt("Hello Master");
} else if (isAdmin == "User") {
    prompt("Hello Master");
} else  {
    prompt("I dont know you")
}

if (isAdmin === "admin" || isAdmin === "user") {
    alert("Hello `{user2}`")
}