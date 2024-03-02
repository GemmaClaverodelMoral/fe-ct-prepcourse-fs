function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
    const resultado = array.map((num) => {return num * 2})
    return resultado
    
}
//console.log(duplicarElementos([1,2,3,4,5]))
//console.log(duplicarElementos([]))

console.log(duplicarElementos([1, 2, 3])) //.toEqual([2, 4, 6]);
console.log(duplicarElementos([0, 4, 8])) //.toEqual([0, 8, 16]);
console.log(duplicarElementos([-1, -2, -3])) //.toEqual([-2, -4, -6]);
console.log(duplicarElementos([])) //.toEqual([]);

module.exports = duplicarElementos;