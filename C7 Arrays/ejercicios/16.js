function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  return array.map((num) => (num * array.indexOf(num))).slice()
}
var arr= [1,2,3,4,5,6,7,48,8,0,11,15,13,14,29,35]
arr = multiplicarElementosPorIndice(arr)
console.log(arr)
module.exports = multiplicarElementosPorIndice;
