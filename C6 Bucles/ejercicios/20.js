function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:

   let resp = 0
  for (i=1; i<=n;i++){
    if (resp > 100) break;
    else resp +=i
  }
  return resp
}
console.log(sumarHastaNConBreak(0))
console.log(sumarHastaNConBreak(1))
console.log(sumarHastaNConBreak(3))
console.log(sumarHastaNConBreak(30))


module.exports = sumarHastaNConBreak;
