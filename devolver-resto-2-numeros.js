/*
    Crea una función en la que se pasen 2 parametros 
    y en base a eso obtengas el resto de la división
*/ 

// Solucion 
// const remainder = (x, y) => {return x % y}

// Solucion 2
// const remainder = (x, y) => x % y

// Solucion 3
function remainder(x, y) {
    return x % y
}


console.log(remainder(7, 2)) // -> 1
console.log(remainder(3, 4)) // -> 3
console.log(remainder(-9, 45)) // -> -9
console.log(remainder(5, 5)) // -> 0