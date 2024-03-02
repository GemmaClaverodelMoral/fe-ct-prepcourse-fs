function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  // esta solicuion estaria bien si no se necesitara mostrar el array de salida con los tres meses pero en desorden. Si es en orde, creo que se debe de recorrer 
  
  if (array.includes('Enero') &&
      array.includes('Marzo') &&
      array.includes('Noviembre')){
         const resultado = []
         for (let i = 0 ; i < array.length; i++) {
          if (array[i] == 'Enero' || array[i] == 'Marzo' || array[i] == 'Noviembre'){
            resultado.push(array[i])
          }
         }
         return resultado
  } else{
    return "No se encontraron los meses pedidos"
  }
 
}
const arr = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Marzo', 'Septiembre', 'Noviembre', 'Diciembre', 'Caca'] 
console.log(mesesDelAño(arr))
const arr2 = ['Marzo', 'Diciembre', 'Julio', 'Noviembre']
const arr3 =
[
  'Marzo',
  'Diciembre',
  'Abril',
  'Junio',
  'Julio',
  'Noviembre',
  'Enero',
  'Mayo',
  'Febrero',
]
console.log(mesesDelAño(arr2))
console.log(mesesDelAño(arr3))
module.exports = mesesDelAño;
