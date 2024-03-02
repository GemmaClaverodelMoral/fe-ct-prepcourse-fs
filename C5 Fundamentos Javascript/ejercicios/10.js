function esFechaValida(fecha) {

  //var fechaVerificable = new Date(fecha);

  // Verifica si el objeto Date es un objeto de fecha válido
  
  return (!isNaN(fecha) && fecha instanceof Date);
}

//console.log(esFechaValida('2022-01-01'))
//ESTA FECHA DEVUELVE true y el test dice que deberia devolver false
module.exports = esFechaValida;