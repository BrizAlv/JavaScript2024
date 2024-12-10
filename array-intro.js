//¿Cómo crear un array?
//1. new Array() o Array()
const fruits= Array('apple', 'banana', 'orange')
    console.log(fruits)

const justOneNumber = Array(12) //incorrecto
console.log(justOneNumber)

const number =Array (1,2,3,4,5)
console.log(number)

//2. Array de sintaxis literal 
const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)
 
const sports=['soccer','tennis','rugby'] // array de strings
console.log(sports)

//acceder a un elemento del array
const firstFruit = fruits[0]
console.log(firstFruit)

//lengitud de un array
const numberOfFruits = fruits.length
console.log(numberOfFruits)

//mutabilidad de un array
fruits.push('watermelon')
console.log(fruits)

//inmutabilidad de un array
const newFruits = fruits.concat('grape', 'kiwi')
console.log(fruits)
console.log(newFruits)

//Validar cuando es un array con Array,isArray()
// const isArray = Array.isArrai(fruits)
// console.log(isArray)

// practical excercise: sum all elements of array
const numbersArray = [1,2,3,4,5]
let sum = 0
for(let i=0; i<numbersArray.length; i++){
    sum += numbersArray[i]
}
console.log(sum)

//methods that modify the original array (mutability)

/* MUTABILITY**********************************
push() - Agrega elementos al final.
pop() - Elimina el último elemento.
shift() - Elimina el primer elemento.
unshift() - Agrega elementos al inicio.
splice() - Agrega, elimina o reemplaza elementos en cualquier posición.
sort() - Ordena el array.
reverse() - Invierte el orden del array.
*/

/* IMMUTABILITY**********************************
push(): Agrega elementos al final.
pop(): Elimina el último elemento.
shift(): Elimina el primer elemento.
unshift(): Agrega elementos al inicio.
splice(): Agrega, elimina o reemplaza elementos en cualquier posición.
sort(): Ordena los elementos.
reverse(): Invierte el orden de los elementos.
copyWithin(): Copia elementos dentro del array.
fill(): Rellena el array con un valor.
filter():  crea un nuevo array con los elementos que cumplen una condición dada. 
reduce(): reduce el contenido de una array a un solo valor
*/

const countries =['USA', 'Canada', 'UK']
const newCountries = countries.push('Germany', 'Australia') //push agrega los nuevos valores al array anterior y muestra el tamaño
console.log(countries)  
console.log(newCountries)

const removedCountry = countries.pop() //pop elimina el último valor del array y lo devuelve(el eliminado)    
console.log(countries)  
console.log(removedCountry)

//map, iteración con cada elemento, ejecuta la función y crea un nuevo array con los nuevos valores
const numbers = [1,2,3,4,5]
const squaredNumbers = numbers.map(num => num * num)
console.log(numbers)  // array original
console.log(squaredNumbers) //new array

//foreach itera cada elemento ejecutando una función pero no crea un nuevo array, modifica el original
const colors = ['red', 'green', 'blue']
const iteratedColors = colors.forEach(color=> console.log(color))
console.log(colors) 
console.log(iteratedColors) 

//exercice: conversion fahrenheit to celsius
const fahrenheitTemps = [32, 68, 95, 104, 212]
const celsiusTemps = fahrenheitTemps.map(fahrenheit => (5/9)*(fahrenheit - 32))
console.log('Temperatures in Celcius is: ', celsiusTemps)
console.log('Temperatures in Fahrenheit is: ',fahrenheitTemps)

//exercice: sum of number in an array
const nwNumbers = [1,2,3,4,5]
let suma = 0
nwNumbers.forEach(num => {suma += num})
console.log('Sum of numbers: ',suma)

//filter even numbers in an array //filtrar numeros pares de un array
const allNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersArrayEven = allNumbersArray.filter(num => (num % 2 === 0))
console.log(allNumbersArray)
console.log(numbersArrayEven)

//reduce array to one number
const numberReducre= [1, 2, 3, 4, 5]
const sumReduce = numberReducre.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(numberReducre)
console.log(sumReduce)

//reduce array to repeat word

const words = ['I', 'am', 'a', 'developer', 'I', 'I', 'am', 'am', 'am']
const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if(accumulator [currentValue]){
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})
console.log(wordFrecuency)

//find(), primer valor del array que cumple con la condición
const multipleOf5 =[5, 10, 15, 20]
const firstNumberGreaterThanTen = multipleOf5.find(number => number > 10)

console.log(multipleOf5)
console.log(firstNumberGreaterThanTen)

//findIndex(), índice (posición) del primer valor del array que cumple con la condición
const randomNumbers=[6, 14, 27, 56, 40]
const indexNuber= randomNumbers.findIndex(number => number > 50)
console.log(randomNumbers)
console.log(indexNuber)

//slice(), toma una parte específica del array
const months = ['January', 'February', 'March', 'April', 'May', 'June']

console.log(months.slice(2)) //toma desde el indice 2 hasta el final
console.log(months.slice(1, 4)) //toma los indices entre 1 y 4: February, March, April
console.log(months.slice(-1)) //toma el último elemento o reverso

//coping an array
const originalArray = [1, 2, 3, 4, 5]
const copiedArray = [...originalArray] //spread operator hace una copia de un array existente para poder manejarlo sin modificar el original

console.log(originalArray)
console.log(copiedArray)

//combining arrays

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]    

console.log(array1)
console.log(array2)
console.log(combinedArray)

//crear arrays con elementos adicionales
const base = [1, 2, 3]
const arrayWithAdditionalElements = [...base, 4, 5, 6]

console.log(base)
console.log(arrayWithAdditionalElements)

// utilizar los elementos de un array en una función

function fsuma (a, b, c){
    return a + b + c
}
const numbersToSum = [1, 2, 3]
const result = fsuma(...numbersToSum)
console.log(result)