/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
 
  let arrSalida = [] //Areglo de salida que va acumulando los arreglos dupla
  //bucle que recorre el objeto en busca de las duplas
  for (let propiedad in objeto) {
      let arrAux = []  //Areglo auxiliar para guardar las duplas clave y valor
      arrAux[0] = propiedad
      arrAux[1] = objeto[propiedad]
      //console.log("arrAux:", arrAux)
      //console.log("arrSalida:",arrSalida)
      arrSalida.push(arrAux)
      //console.log("arrSalida:",arrSalida)
  }
  return arrSalida
  }

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  //console.log(string)
  // Convierte la cadena en un array de caracteres
  let stringOrdenado = string.split('').sort();
  //console.log(stringOrdenado)
  const objeto = {}
  stringOrdenado.forEach(element => {
    //console.log(element)
    if(objeto.hasOwnProperty(element)) {
      objeto[element] ++
    }else{
      objeto[element] = 1
    }
  })
  
  return objeto
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let stringCaps=""
  let stringMins=""

  for (let i = 0 ; i < string.length ; i++){
    if(string[i] == string[i].toUpperCase()){
      stringCaps += string[i]
    }else{
      stringMins += string[i]
    } 
  }
  
  return (stringCaps + stringMins)
}
function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let arrAux = frase.split(" ")
  for (let i = 0; i < arrAux.length ; i++){
    arrAux[i] = arrAux[i].split('').reverse().join('')
  }
  
  return arrAux.join(' ')

}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let numeroEnLetras = numero.toString().toUpperCase()
  for (let i = 0 ; i < numeroEnLetras.length /2 ; i++){
    if(numeroEnLetras[i] !== numeroEnLetras[numeroEnLetras.length - 1 - i] ){
      return 'No es capicua'
    }
  }
  return 'Es capicua'

}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let arrAux = string.split('')
  console.log(arrAux)
  console.log()
  return string.split('').filter(letra => (!(letra == 'a') && !(letra == 'b') && !(letra == 'c'))).join('')

}
//funcion adicional para comparar en el sort
function compararLongitud(a, b) {
  //console.log(a.length - b.length)
  return a.length - b.length;
}
function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  //console.log(arrayOfStrings)
  let arrayOrdenado = arrayOfStrings.sort(compararLongitud);
  return arrayOrdenado
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  
  let elementosComunes = array1.filter(elemento => array2.includes(elemento));
    return elementosComunes;
}

//console.log(numberOfCharacters('abcdefghdjkabcdefgabcdeabcaba123'))
//console.log(deObjetoAarray({D: 1, B: 2, C: 3}))
//console.log(capToFront("soyHENRY"))
//console.log(asAmirror("The Henry Challenge is close!"))
//console.log(capicua('gemma'))
//console.log(capicua('amima'))
//console.log(capicua('Gemmeg'))
//console.log(deleteAbc("abcGemmaabca"))
//console.log(sortArray(["You", "are", "beautiful", "looking"]))
console.log(buscoInterseccion([4,2,3],[1,3,4]))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
