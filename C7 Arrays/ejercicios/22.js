function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  const arr = [0]
  for (let i = 1; i <= 10; i++){
    arr.push( i * 6 )
  }
  return arr
}

console.log(tablaDelSeis())
module.exports = tablaDelSeis;
