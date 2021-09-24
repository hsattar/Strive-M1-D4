// Additional assignments for Day 4

/* EXTRA 1
Write a piece of code for reverting an array.
es:
[1, 3, 5] ==> [5, 3, 1]

ANSWER:
*/

let array = [1, 3, 5, 7, 9]
let revertedArray = []
console.log(`ANSWER Q1 \nOriginal Array`, array)

while (array.length > 0) {
    revertedArray.push(array.pop())
}

console.log(`Reverted Array - `, revertedArray)


/* EXTRA 2
Write a piece of code for getting the maximum numerical value from an array.

ANSWER:
*/

let randomNumbers = [2, 73, 12, 98, 7, 36]

const findBiggestNumber = () => {
    randomNumbers.sort(function(a, b){return a - b})
}

console.log(`\nANSWER Q2`)
console.log('Random Numbers - ', randomNumbers)

findBiggestNumber()
let biggestNumber = randomNumbers.pop()
console.log(`The Biggest Number is ${biggestNumber}`)


/* EXTRA 3
Write a piece of code for getting the minimum numerical value from an array.

ANSWER:
*/

let moreRandomNumbers = [51, 73, 12, 98, 7, 36]

const findSmallestNumber = () => {
    moreRandomNumbers.sort(function(a, b){return a - b})
}

console.log(`\nANSWER Q3`)
console.log('Random Numbers - ', moreRandomNumbers)

findSmallestNumber()

let smallestNumber = moreRandomNumbers.shift()
console.log(`The Smallest Number is ${smallestNumber}`)



/* EXTRA 4
Write a piece of code for getting only even numerical values from an array.

ANSWER:
*/

let mixedNumbers = [1, 2, 3, 4, 5, 6]
let evenNumbers = []

for (let number of mixedNumbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number)
    } 
}

console.log(`\nANSWER Q4`)
console.log('Mixed Number Array -', mixedNumbers)
console.log('The Even Numbers From The Above Array Are -', evenNumbers)


/* EXTRA 5
Write a piece of code for deleting only even entries from an array.

ANSWER:
*/

console.log(`\nANSWER Q5`)
console.log('Mixed Number Array -', mixedNumbers)

// FIND THE INDEX OF EVEN NUMBERS IN MIXED ARRAY
// USE THE SPLICE METHOD TO REMOVE THEM
// WILL WORK ON THIS SILUTION BUT HERE IS ANOTHER WAY TO ACHIEVE THE SAME RESULT


let oddNumbers = []

for (let number of mixedNumbers) {
    if (number % 2 === 1) {
        oddNumbers.push(number)
    } 
}

mixedNumbers = oddNumbers
console.log('New Mixed Number Array With Only Odd Numbers -', mixedNumbers)



/* EXTRA 6
Write a piece of code for removing all the vowels from a string.

ANSWER:
*/



/* EXTRA 7
Write a piece of code for increasing all the numerical values in a array by 1.

ANSWER:
*/

// let mixedArray = [12, 'string', 2, true, 64]

// console.log('\nANSWER Q7')
// console.log(mixedArray[0]+1)



/* EXTRA 8 
Replace all the strings contained in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]

ANSWER:
*/

let arrayOfStrings = ['Strive', 'Is', 'Great']
let stringsLength = []

for (string of arrayOfStrings) {
    stringsLength.push(string.length)
}

console.log('\nANSWER Q8')
console.log('My Array Of Strings Is', arrayOfStrings)
console.log('The Length Of Each String Is', stringsLength)



/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/