function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  //console.log(letra.toLowerCase())
  let resp = "Dato incorrecto";
  if (letra.length == 1 && 'aeiou'.includes(letra.toLowerCase()) ){
    resp = "Es vocal"
  }
  return resp
  
}
console.log(esVocal("A"))
module.exports = esVocal;
