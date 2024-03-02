function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let resp = 0
  for (i=1; i<=n;i++){
    resp +=i
  }
  return resp

}
console.log(sumarHastaN(0))
console.log(sumarHastaN(1))
console.log(sumarHastaN(3))
console.log(sumarHastaN(5))
module.exports = sumarHastaN;
