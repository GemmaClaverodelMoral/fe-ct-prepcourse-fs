function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:

  let resp3 = ""
  let resp5 = ""

  if (num % 3 == 0) resp3 = "fizz"
  if (num % 5 == 0) resp5 = "buzz"
  if (resp3 == resp5) return false
  else return (resp3 + resp5) 
  
}  
console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))
console.log(fizzBuzz(1))

module.exports = fizzBuzz;
