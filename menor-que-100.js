/*
    Dado dos números, devuelve true si la suma de esos números es menor a 100.
    En el caso contrario devuelve falso
*/ 

// solucion 
/**/
function lessThan100(a, b) {
    return a + b < 100
}

// solucion 2
/**/ 
const lessThan100 = (a, b) => a + b < 100

// solucion 3 
/*
function lessThan100(a, b) {
    if (a + b < 100) {
        return true
    } else {
        return false
    }
}
*/
console.log(lessThan100(5, 57)) // true
console.log(lessThan100(77, 30)) //  false
console.log(lessThan100(0, 59)) // true
console.log(lessThan100(78, 35)) //  false
console.log(lessThan100(63, 11)) //  true
console.log(lessThan100(37, 99)) //  false
console.log(lessThan100(52, 11)) //  true
console.log(lessThan100(82, 95)) //  false
console.log(lessThan100(17, 44)) //  true
console.log(lessThan100(74, 53)) //  false
console.log(lessThan100(3, 77),) // true
console.log(lessThan100(25, 80)) //  false
console.log(lessThan100(59, 28)) //  true
console.log(lessThan100(69, 87)) //  false
console.log(lessThan100(10, 45)) //  true
console.log(lessThan100(43, 58)) //  false
console.log(lessThan100(50, 44)) //  true
console.log(lessThan100(74, 89)) //  false
console.log(lessThan100(3, 27),) // true
console.log(lessThan100(21, 79)) //  false