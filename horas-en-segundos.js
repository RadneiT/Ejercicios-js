// Escribe una función que convierta horas en segundos

// Solución
/**/
const howManySeconds = hours => {
    const seconds = hours * 60 * 60
    return seconds
}

// Solución 2
/*
const howManySeconds = hours => {
    const seconds = hours * 3600
    return seconds
}
*/

// Solución 3
/* 
function howManySeconds(hours) {
    const minutes = hours * 60
    const seconds = minutes * 60
    return seconds E
}
*/

console.log(howManySeconds(2)) // 7200
console.log(howManySeconds(10)) // 36000
console.log(howManySeconds(24)) // 86400
console.log(howManySeconds(36)) // 129600