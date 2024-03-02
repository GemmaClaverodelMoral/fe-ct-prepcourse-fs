function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let i=0; i < array.length; i++) {
    //console.log(array[i], array[i].length)
    if (array[i].length > 5) {
      return array[i]
    }
  }
  return undefined

}
console.log(obtenerPrimerStringLargo(['hello', 'world', 'this', 'is', 'a', 'test']))

module.exports = obtenerPrimerStringLargo;
