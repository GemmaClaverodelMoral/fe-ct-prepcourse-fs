function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  while (numero >= 1) {
    if (numero % 2 == 0)
      numero /= 2
    else break
  }
  if (numero == 1) return true
  else return false

}
console.log(esPotenciaDeDos(2))
console.log(esPotenciaDeDos(4))
console.log(esPotenciaDeDos(1))
console.log(esPotenciaDeDos(16))
console.log(esPotenciaDeDos(15))
console.log(esPotenciaDeDos(100))
module.exports = esPotenciaDeDos;
