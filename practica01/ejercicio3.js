let operacion = "";
let resultado = 0;

let num1 = +prompt("indica primer número");
if (isFinite(num1)) {
  let num2 = +prompt("indica segundo número");
  if (isFinite(num2)) {
    operacion = prompt("Que operación quieres hacer?")
      .trim()
      .toLowerCase();
    if (operacion == "suma") {
      resultado = num1 + num2;
    } else if (operacion == "resta") {
      resultado = num1 - num2;
    } else if (operacion == "div") {
      resultado = num1 / num2;
    } else if (operacion == "mult") {
      resultado = num1 * num2;
    } else {
      ("Por favor, introduzca una operación válida");
    }

    alert(resultado);
  } else {
    alert("Por favor, indica un número válido");
  }
} else {
  alert("Por favor, indica un número válido");
}
