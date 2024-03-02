function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  return (booleano1 && booleano1 === booleano2)
}
console.log(esVerdaderoYFalso(true,true))
console.log(esVerdaderoYFalso(true,false))
console.log(esVerdaderoYFalso(false,true))
console.log(esVerdaderoYFalso(false,false))

module.exports = esVerdaderoYFalso;
