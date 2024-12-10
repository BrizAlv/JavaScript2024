//*******forma explicita******************
const string = '42'
const integer = parseInt(string) //convertir el string '42' a number
//console.log(integer)
//console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal) //convertir el string '3.14' a decimal
//console.log(float)
//console.log(typeof float)

const binary ='1010'
const decimal = parseInt(binary,2)
//console.log(decimal)
//console.log(typeof decimal)

//*********forma implícita*********************
const sum = '5' + 3
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber =2 + true
console.log(sumWithNumber)

const stringValue ='10'
const numberValue = 10
const booleanValue = true

console.log('-------- Primero Sitring --------')

console.log(stringValue + stringValue) //concatena
console.log(stringValue + numberValue) //concatena
console.log(stringValue + booleanValue)//concatena

console.log('-------- Primero Number --------')

console.log(numberValue + numberValue)  //suma
console.log(numberValue + stringValue)  //concatena 
console.log(numberValue + booleanValue) //suma

console.log('-------- Primero Boolean --------')

console.log(booleanValue + booleanValue) //concatena
console.log(booleanValue + numberValue)  //suma
console.log(booleanValue + stringValue)  //suma

