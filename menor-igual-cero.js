/*
    Crea una función que toma un número como único argumento 
    y devuelve true si es menor o igual que cero, en caso contrario
    devuelve false
*/ 

// solucion
function lessThanOrEqualToZero(num) {
    return num <= 0
}

// solucion 2
// const lessThanOrEqualToZero = num => num <= 0

console.log(lessThanOrEqualToZero(5)) //false
console.log(lessThanOrEqualToZero(0)) //true
console.log(lessThanOrEqualToZero(-5)) //true