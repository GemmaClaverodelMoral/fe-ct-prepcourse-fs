function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  result = 1
  for (let i = a; i <=b; i++)
   result *= i
  return Math.abs(result)
}
console.log(productoEntreNúmeros(5,5))
console.log(productoEntreNúmeros(0,10))
console.log(productoEntreNúmeros(-3,10))
module.exports = productoEntreNúmeros;