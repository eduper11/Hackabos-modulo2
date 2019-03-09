let isAdmin = prompt("Who are you?")
  .trim()
  .toLocaleLowerCase();

if (isAdmin == "admin") {
  prompt("Hello Master");
} else if (isAdmin == "user") {
  prompt("Hello User");
} else {
  prompt("I dont know you");
}

isAdmin == "admin"
  ? alert("Hola Admin")
  : isAdmin == "user"
  ? alert("Hola User")
  : alert("I dont know you");

if (isAdmin === "admin" || isAdmin === "user") {
  alert(`Hello ${isAdmin}`);
} else {
  alert("I dont know you");
}

isAdmin == "admin" || isAdmin == "user"
  ? alert(`Hello ${isAdmin}`)
  : alert("I dont know you");
