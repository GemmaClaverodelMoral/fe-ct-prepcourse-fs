function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  for (let i = 0 ; i < secuencia.length ; i++){
    if (secuencia[i] % n === 0){
      return secuencia[i]
    }
  }
  
}
console.log(encontrarPrimerMultiploDeN(2,[1,2,4,5,7,8,10]))
console.log(encontrarPrimerMultiploDeN(9,[1,2,4,5,7,8,10]))

module.exports = encontrarPrimerMultiploDeN;