function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  
  console.log(num.toString())
  return (num.toString().length === 3)
}
console.log(tieneTresDigitos(333))
module.exports = tieneTresDigitos;
