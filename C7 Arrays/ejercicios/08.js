function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   return (array.includes(num) ? array.indexOf(num): -1)
}

console.log(encontrarElemento(3,'12345'))
console.log(encontrarElemento(3,'1245'))
module.exports = encontrarElemento;
