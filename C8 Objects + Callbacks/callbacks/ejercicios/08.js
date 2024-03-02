const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  // Utilizar el método find para buscar el elemento
  let elementoEncontrado = array.find(callback);
  // Verificar si el elemento fue encontrado
  if (elementoEncontrado !== undefined) {
    return elementoEncontrado;
  } else {
    return "No se encontró el elemento";
  }
};


module.exports = buscarElemento;
