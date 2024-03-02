function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length == 0){
    return 0
  }else {
    return array.indexOf(Math.max(...array))
  }
}

var arr= [1,2,3,4,5,6,7,48,8,0,11,15,13,14,29,35]
console.log(encontrarIndiceMayor(arr))

module.exports = encontrarIndiceMayor;
