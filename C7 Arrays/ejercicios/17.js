function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  /* 1era opcion
  var suma = 0
  arrayOfNums.every((num)=>(suma +=num))
  return suma
  */

  // 2da opcion
  return arrayOfNums.reduce((suma, num) => suma + num, 0);
  
}
var arr= [1,2,3,4,5,6]
console.log(agregarNumeros(arr))
module.exports = agregarNumeros;
