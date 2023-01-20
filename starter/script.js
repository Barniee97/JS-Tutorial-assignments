// Variable

/*
let js = "amazing";
console.log(4+5+6);

console.log("munir")

// Variable name conventions
let firstName = ("Amanda");
console.log(firstName);

let chi_barnes = ("thingy");
console.log(chi_barnes);

let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Baller";

console.log(myFirstJob);
*/

// Boolean
/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true); 
console.log(typeof javaScriptIsFun); 
// console.log(typeof 23); 
// console.log(typeof "cat"); 


javaScriptIsFun = "YES!";
console.log(javaScriptIsFun);

let school;
console.log(school);
console.log(typeof school);

school = 1997;
console.log(typeof school);


 let age = 30;
 age = 31;

 const birthYear = 1991;
*/

// maths operators
/*
const now = 2023;
const ageBarniee = now - 1997;
const ageMiya = now - 1999;
console.log(ageBarniee, ageMiya);

console.log(ageBarniee * 2, ageMiya / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2


const firstName = "Barniee";
const lastName = "Arah";
console.log(lastName + " " + firstName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4, // x = x * 4 = 100
x++; // x = x + 1;
x--; // x = x - 1;
console.log(x);



//  comparison operators
console.log(ageBarniee > ageMiya); // >, <, <=, >=
console.log(ageMiya >= 30);

const isFullAge = ageMiya >= 30;

console.log(now - 1997 > now - 1999);
*/


/*
const now = 2023;
const ageBarniee = now - 1997;
const ageMiya = now - 1999;

console.log(now - 1997 > now - 1999);



let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageBarniee + ageMiya) / 2
console.log(ageBarniee, ageMiya, averageAge);
*/


//Strings
/*
const firstName = "Barnabas";
const job = "Engineer";
const birthYear = 1997;
const year = 2023;

const barniee = "I'm " + firstName + ", a " + (year - birthYear) + "years old " + job + "!";

console.log(barniee);

const barnieeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(barnieeNew);

console.log(`bitches dey this world mehnnn`);

console.log("string with \n\
multiple \n\
lines");

console.log(`strings
with
multi-lines`)
*/


//to check drivers license age
const age = 30;

if (age >= 18) {
    console.log("Miya can start her driving license classes🚗");
} else {
    yearsLeft = 18 - age;
    console.log(`Miya is too young. wait another ${yearsLeft} years kiddo 😛`);
}



const birthYear = 2022;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);