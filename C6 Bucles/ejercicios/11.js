function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  return (num > 20 && num < 50)
}
console.log(estaEnRango(20))
console.log(estaEnRango(21))
console.log(estaEnRango('A'))
console.log(estaEnRango('21'))
console.log(estaEnRango(50))
module.exports = estaEnRango;
