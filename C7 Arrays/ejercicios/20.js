function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  return array.every(ele => ele === array[0])
}
console.log(todosIguales([1]))
console.log(todosIguales([1,2]))
console.log(todosIguales([1,1]))
console.log(todosIguales([3,3,3]))
console.log(todosIguales([1,1,1,2]))
console.log(todosIguales(['1']))
console.log(todosIguales(['1','1']))
module.exports = todosIguales;
