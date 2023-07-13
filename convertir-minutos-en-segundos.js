/*
    Escribe una función que tome un integer 'minutes' y lo convierta en segundos
*/ 

// Solucion 
// const convert = minutes => minutes * 60

// Solucion 2
function convert(minutes) {
    return minutes * 60
}


console.log(convert(6))  // -> 360
console.log(convert(4)) // -> 240
console.log(convert(8)) // -> 480
console.log(convert(60)) // -> 3600