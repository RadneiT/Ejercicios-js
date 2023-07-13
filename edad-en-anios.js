/*
    Crea una función que tome la edad en años y devuelva la edad en días
*/ 

// Solución
const calcAge = age => age * 365

// Solución 2
function calcAge(age) {
    return age * 365
}


console.log(calcAge(10)) // -> 3650
console.log(calcAge(0)) // -> 0
console.log(calcAge(73)) // -> 26645