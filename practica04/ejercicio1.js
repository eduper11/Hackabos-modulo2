function test(num) {
  return isEven(num);
}

function isEven(num) {
  if (URLSearchParams.isAdmin == false) return "no estas autentificado";
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

console.log(test(2));
