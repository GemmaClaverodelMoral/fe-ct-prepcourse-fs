function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código: 
 
  var arrayMayusculas = array.map((cadena) => cadena.toUpperCase())
  return arr = [...arrayMayusculas]
}
var arr= ['a','bas','casa','']
console.log(arr)
convertirStringAMayusculas(arr)
console.log(arr)
console.log(convertirStringAMayusculas(['hello']))

module.exports = convertirStringAMayusculas;
