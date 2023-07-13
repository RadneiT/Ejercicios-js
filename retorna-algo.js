/*
    Write a function that returns the string "something" joined with a space " "
    and the given argument a.
*/ 

// solución

// function giveMeSomething(a) {
//     return 'something ' + a
// }

// solución 2

const giveMeSomething = a => 'something ' + a 


console.log(giveMeSomething("a")) // "something  a "
console.log(giveMeSomething("is cooking")) // "something is cooking "
console.log(giveMeSomething(" is cooking")) // "something  is cooking "