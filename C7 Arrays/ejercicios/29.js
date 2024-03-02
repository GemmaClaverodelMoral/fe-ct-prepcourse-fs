function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  
  if (numeros.length == 0){
    return null
  }else {
    var comp = 0
    let i = comp = 0    
    for (i = 0 ; i < numeros.length ; i++){
      valor = i + 1 
      if (numeros[i] != (i + 1)) {
        return (i + 1)
      }
    }
    return null 
  }
}
var num = [1,2,3,5,6,7]
console.log(encontrarNumeroFaltante(num))
console.log(encontrarNumeroFaltante([]))
console.log(encontrarNumeroFaltante([1,2,3,4]))

module.exports = encontrarNumeroFaltante;