let isAdmin = prompt("Who are you?");

if (isAdmin == "Admin") {
  prompt("Hello Master");
} else if (isAdmin == "User") {
  prompt("Hello Master");
} else {
  prompt("I dont know you");
}

isAdmin == "Admin"
  ? alert("esto es true")
  : isAdmin == "User"
  ? alert("esto es false")
  : alert("I dont know you");
