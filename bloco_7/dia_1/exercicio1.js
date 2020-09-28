const fatorial = (number) => {
  let resul = 1;
  for (let i = 1; i <= number; i += 1) {
    resul *= i;
  }
  return resul;
}
console.log(fatorial(4));
