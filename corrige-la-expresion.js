/*
    Fix the code in the CODE tab so the function returns 'true' if and only if 'x'
    is equal to 7

    function isSeven(x) {
        return x="7"?false:true:false;
    }
*/ 

// solucion
function isSeven(x) {
    return x === 7
}

// solucion 2
// const isSeven = x => x === 7

console.log(isSeven(4)) //false
console.log(isSeven(9)) //false
console.log(isSeven(7)) //true
console.log(isSeven(10)) //false
console.log(isSeven(20)) //false
console.log(isSeven(7)) //true