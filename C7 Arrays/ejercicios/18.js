function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  if (resultadosTest.length == 0){
    return 0
  } else {
  return resultadosTest.reduce((suma, num) => suma + num, 0) / resultadosTest.length}
}
var arr= [1,2,3,4,5,6,7]
console.log(promedioResultadosTest(arr))
module.exports = promedioResultadosTest;
