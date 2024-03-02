function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  var fecha = new Date(fechaNacimiento);
  var hoy = new Date()

  var diferencia = hoy - fecha
  // Calcular la edad en años - funciona desde 1970
  var edad = Math.floor(diferencia / (365.25 * 24 * 60 * 60 * 1000));

  // Comparar con la edad mínima requerida
 // console.log(edad)
  return edad >= 18;
}
//console.log(esMayorDeEdad('13-feb-2006'))
module.exports = esMayorDeEdad;