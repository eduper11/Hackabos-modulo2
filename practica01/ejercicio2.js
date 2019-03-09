let user = prompt("Edad del participante");

let participanType = "";
let years = "";
let isNumber = isFinite(user);

if (isNumber) {
  if (user >= 18 && user <= 28) {
    participanType = "Junior";
    years = +prompt("Cuantos años llevas programando?");
  } else if (user > 28) {
    participanType = "Senior";
    years = +prompt("Cuantos años llevas programando?");
  } else {
    participanType = null;
  }
}

if (participanType == "Junior" || participanType == "Senior") {
  alert(
    `Eres un programador ${participanType} y llevas programando ${years} años`
  );
}
