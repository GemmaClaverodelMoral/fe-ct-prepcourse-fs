function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  return array.filter((num)=> ( num > 10 )).length
}

var arr= [1,2,3,4,5,6,7,8,0,11,15,13,14,29,35]
console.log(contarElementosMayoresA10(arr))
module.exports = contarElementosMayoresA10;
