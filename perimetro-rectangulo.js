/*
    Crea una función que tome la longitud y el ancho 
    y busque el perimetro de un rectangulo.
*/ 

// Solución
// function findPerimeter(length, width) {
//     let perimeter = (length * 2) + (width * 2)
//     return perimeter
// }

// Solución 2
// const findPerimeter = (length, width) => (length * 2) + (width * 2)

// Solucion 3
const findPerimeter = (length, width) => length + length + width + width

console.log(findPerimeter(6, 7)) // -> 26
console.log(findPerimeter(20, 10)) // -> 60
console.log(findPerimeter(2, 9)) // -> 22