/*
    Un estudiante esta aprendiendo JavaScript, y estaba intentando hacer una función.
    Su código debería concatenar un nombre de cadena pasado con la cadena 'Edabit'
    y almacenarlo en una variable llamada resultado.

    function nameString(name){
	    var b == "Edabit"
	    var result == name + b
  	    return result
    }
*/ 

// solucion
/*function nameString(name){
	var b = "Edabit"
	var result = name + b
  	return result
}*/


// solucion 2
/* 

*/
const nameString = name => {
	let concate = name + 'Edabit'
	return concate
}

// solucion 3
// const nameString = name => name + "Edabit"

console.log(nameString("Mubashir")) // MubashirEdabit
console.log(nameString("Matt")) // MattEdabit
console.log(nameString("javaScript")) // javaScriptEdabit
console.log(nameString("Airforce")) // AirforceEdabit