function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  const arr =[]
  for (let i = 1; i <= 10; i++){
    if ( i != num ) {
      arr.push(num +=2)
    }else{
      return "Se interrumpió la ejecución"
    }
  }
  return arr
}
console.log(breakStatement(1)) 
console.log(breakStatement(2)) 
console.log(breakStatement(50))
module.exports = breakStatement;
