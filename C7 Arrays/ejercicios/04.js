function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento)

  return array
}
var result = agregarItemAlFinalDelArray([14, 15, 16, 12], 10)
console.log(result)
console.log(agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94], 'Hola'))
console.log(agregarItemAlFinalDelArray([], true))

module.exports = agregarItemAlFinalDelArray;
