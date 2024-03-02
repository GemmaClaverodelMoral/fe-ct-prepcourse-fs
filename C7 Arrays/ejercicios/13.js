function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  //       arr = [...arrayPares] TAMBIEN PASA el ARRAY
  // Tu código:

  return array.filter((num) => (num % 2 === 0)).slice()
}

var arr= [1,2,3,4,5,6,7,8,0]
arr = filtrarNumerosPares(arr)

console.log(arr)

module.exports = filtrarNumerosPares;
