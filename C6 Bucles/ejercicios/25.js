function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   string = string.toLowerCase()
   let string2 = string.split('').reverse().join('');
   return string2 == string
}
console.log(esPalindromo("abCdedcba"))
console.log(esPalindromo("A"))
console.log(esPalindromo("abcdcb"))
module.exports = esPalindromo;
