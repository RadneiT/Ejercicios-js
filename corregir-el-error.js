/*
    Arregla el error en el código (solo fallos de sintaxis)

    function squaed(b) {
	    return a * a
    }
*/ 

// solucion
const squared = a => a * a

// solución 2
// function squared(b) {
//     return b * b
// }

// solución3
// function squared(a) {return a*2}

// solución4
// const squared = a => a**2

console.log(squared(10)) // -> 100
console.log(squared(69)) // -> 4761
console.log(squared(666)) // -> 443556
console.log(squared(-21)) // -> 441
console.log(squared(21)) // -> 441