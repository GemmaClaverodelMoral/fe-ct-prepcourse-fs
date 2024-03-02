function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   return array[parseInt(Math.random()*(array.length))]
}
console.log(obtenerElementoAleatorio([1,2,3,4,5,6]))
console.log(obtenerElementoAleatorio([1,2,3,4,5,6]))
console.log(obtenerElementoAleatorio([1,2,3,4,5,6]))
console.log(obtenerElementoAleatorio([1,2,3,4,5,6]))
module.exports = obtenerElementoAleatorio;
