/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
Create a variable and assign to it an array containing the first 5 positive numbers.

ANSWER:
*/

let firstFiveNumbers = [1, 2, 3, 4, 5]
console.log(`ANSWER Q1 - The First Five Numbers Are ${firstFiveNumbers}`)

/* EXERCISE 2
Create a variable and assign to it an object containing your name, surname, email address and age.

ANSWER:
*/

let myself = {
    firstName: 'Hasan', 
    lastName: 'Sattar', 
    email: 'hasan@sattar.com', 
    age: 23
}

console.log(`\n ANSWER Q2 - Myself As An Object Looks Like`, myself)


/* EXERCISE 3
Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.

ANSWER:
*/

myself.drivingLicense = true
console.log(`\n ANSWER Q3 - I've Added If I Have A Drivers License`, myself)


/* EXERCISE 4
Remove from the previously created object the age property.

ANSWER:
*/

delete myself.age
console.log(`\n ANSWER Q4 - I've Deleted The Age Property`, myself)



/* EXERCISE 5
Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.

ANSWER:
*/

let anotherPerson = {
    firstName: 'John', 
    lastName: 'Smith',
    email: 'hasan@saar.com'
}

if (anotherPerson.email === myself.email) {
    console.log(`\n ANSWER Q5 - ERROR THIS EMAIL IS ALREADY IN USE`)
} else {
    console.log(`\n ANSWER Q5 - THIS EMAIL IS DIFFERENT`)
}

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.

ANSWER:
*/

let totalShoppingCart = 51
let ShippingCost = 10
let totalShoppingAndShippingPrice = totalShoppingCart + ShippingCost

if (totalShoppingCart > 50) {
    console.log(`\n ANSWER Q6 - You Spent More Than £50. Your Shipping Is Free. The Total Cost is £${totalShoppingCart}`)
} else {
    console.log(`\n ANSWER Q6 - You Spent £50 Or Less. Your Shipping Is £10. The Total Cost is £${totalShoppingAndShippingPrice}`)
}

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.

ANSWER:
*/


/* EXERCISE 8
Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.

ANSWER:
*/

let car = {
    brand: 'Ford',
    model: 'Focus',
    licensePlate: 'AB01 CDE'
}

let car2 = Object.assign({}, car)
let car3 = Object.assign({}, car)
let car4 = Object.assign({}, car)
let car5 = Object.assign({}, car)

car2.licensePlate = 'FG23 HJK'
car3.licensePlate = 'LM45 NOP'
car4.licensePlate = 'QR67 STU'
car5.licensePlate = 'VW89 XYZ'

console.log(`\n Answer Q8`)
console.log('Car License Plate - ', car.licensePlate)
console.log('Car2 License Plate - ', car2.licensePlate)
console.log('Car3 License Plate - ', car3.licensePlate)
console.log('Car4 License Plate - ', car4.licensePlate)
console.log('Car5 License Plate - ', car5.licensePlate)


/* EXERCISE 9
Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.

ANSWER:
*/

let carsForRent = [car, car2, car3, car4, car5]
console.log(`\n Answer Q9 - Cars For Rent - `, carsForRent)



/* EXERCISE 10
Remove the first and the last car from the carsForRent array.

ANSWER:
*/

let firstCarRemoved = carsForRent.shift()
let lastCarRemoved = carsForRent.pop()
console.log(`\n Answer Q10 - Remaining Cars For Rent - `, carsForRent)
console.log(`\n We Removed The First Car - `, firstCarRemoved, `\n And The Last Car`, lastCarRemoved)


/* EXERCISE 11
Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.

ANSWER:
*/


/* EXERCISE 12
Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForSale arrays.

ANSWER:
*/

let carsForSale = []
carsForSale.push({
    brand: 'BMW',
    Model: 'Series 1', 
    licensePlate: 'AA00 AAA'
})

carsForSale.push({
    brand: 'BMW',
    Model: 'Series 2', 
    licensePlate: 'BB11 BBB'
})

carsForSale.push({
    brand: 'BMW',
    Model: 'Series 3', 
    licensePlate: 'CC22 CCC'
})

let totalCars = carsForRent.concat(carsForSale)

console.log(`\n ANSWER Q12 - See All Of Our Cars`, totalCars)

/* EXERCISE 13
Using a loop, print to the console all the data for each car in the carsForSale array.

ANSWER:
*/

for (let car of carsForSale) {
    console.log(`\n ANSWER Q13 - Our Cars For Sale - `, car)
}


/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/