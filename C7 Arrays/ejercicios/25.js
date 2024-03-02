function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  return  numeros.filter((num) => (num % 2 === 0)).length
}
const numeros = [1,2,3,4,5,6,7,8,9,0,2]
console.log(contarParesConContinue(numeros))
module.exports = contarParesConContinue;
