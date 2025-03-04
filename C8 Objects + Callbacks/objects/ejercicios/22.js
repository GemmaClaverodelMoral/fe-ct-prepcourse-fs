function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   str1 = str1.toLowerCase()
   str2 = str2.toLowerCase()
   if (str1.length != str2.length){
      return false
   } else{
      arr1 = str1.split('')
      arr2 = str2.split('')
      for (let i=0; i<str1.length; i++){
         if (arr2.indexOf(arr1[i]) != -1) {
            arr2[arr2.indexOf(arr1[i])] = ''
            arr1[i] = ''
         } else {
            return false
         }
      }
   }
   return true
}
console.log(esAnagrama('Gemma', 'emmag'))
console.log(esAnagrama('Gemma', 'emmag'))
module.exports = esAnagrama;
