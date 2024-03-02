function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  //Para que un numero sea primo debe de ser entero superior a 1 y solo ser divisible por 1 y por si Mismo
  //por lo tanto se puede resolver iterando hasta la parte entera del numero /2 en busca de un divisor y si no lo encuentra, es primo.
  let resp = true
  if (numero > 1 && Number.isInteger(numero)){
     for (let i = 2; i <= Math.floor(numero / 2); i++) {
        if (numero % i === 0) {
        resp = false;
        }
     }
  }else {
    resp = false;
  }
  return resp 
}
//console.log(esNumeroPrimo(5))
module.exports = esNumeroPrimo;
