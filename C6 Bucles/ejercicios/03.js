function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  return (x == y ? x: Math.max(x,y))
}
console.log(obtenerMayor(1000,1000))
module.exports = obtenerMayor;
