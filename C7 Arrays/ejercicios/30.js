function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código
  var aux = null
  //console.log(aux, numeros.length)
  for ( let i = 0 ; i < numeros.length ; i++ ) {
    aux = numeros[i]
    numeros[i] = ''
    //console.log(aux)
    if (numeros.indexOf(aux) !== -1 ) {
      return aux
    }
  }
  return undefined
}
var nums1 = [1,2,3,4,5,6,7,8,9,0]
var nums2 = [1,2,3,4,5,6,7,4,9,0]
var nums3 = [1,2,3,4,5,6,8,9,0]
var nums4 = []
console.log(encontrarElementoRepetido(nums1))
console.log(encontrarElementoRepetido(nums2))
console.log(encontrarElementoRepetido(nums3))
console.log(encontrarElementoRepetido(nums4))
module.exports = encontrarElementoRepetido;