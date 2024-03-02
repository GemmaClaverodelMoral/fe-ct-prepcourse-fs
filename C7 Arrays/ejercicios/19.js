function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  console.log('largo:',arguments.length)
  if (arguments.length === 0) {
    return 0
  } else {
    return Array.from(arguments).reduce((producto, num) => producto * num, 1)
  }
}

console.log("2.3:",multiplicarArgumentos(2,3))
console.log('():',multiplicarArgumentos())
console.log('2,3,4:',multiplicarArgumentos(2,3,4))
console.log('2:',multiplicarArgumentos(2))
module.exports = multiplicarArgumentos;
