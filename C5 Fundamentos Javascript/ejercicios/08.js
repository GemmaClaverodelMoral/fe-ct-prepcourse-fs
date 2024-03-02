function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  return (numero % 1 === 0 && Number.isInteger(numero))
}  
console.log(esNumeroEntero(" "))
module.exports = esNumeroEntero;