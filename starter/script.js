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
/*
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
*/

//type conversion 
/*
const inputYear = "1997";
console.log(Number(inputYear) + 26);
console.log(inputYear + 26);

console.log(Number("Barniee"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am "+ 23 + " years old" );

console.log("23" - "10" - 3);

console.log("23" * "2");

console.log("23" / "2");


let n = "1" + 1;
n = n - 1;
console.log(n);
*/

//Truthy and falsy values
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Barniee"));
console.log(Boolean(""));
console.log(Boolean({}));

const money = 10;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("Go get a job amigo");
}

let height = 123;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}
*/

//Equality operators
/*
const age = "18";
if (age === 18) console.log("You just became an adult(strict)");

if (age == 18) console.log("You just became an adult(loose)");


const favourite = Number (prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 23 === 23
    console.log("Cool! 23 is an amazing number!")
} else if (favourite === 7) {
    console.log("7 is an amazing number!")
} else if (favourite === 9) {
    console.log("9 is an amazing number!")
} else {
    console.log("Number isn't 23, 7, or 9.")
}

if (favourite !== 23) console.log("why not 23?");

*/

 const hasDriversLicense = true; // A
 const hasGoodVision = true; // B


 console.log(hasDriversLicense && hasGoodVision);
 console.log(hasDriversLicense || hasGoodVision);
 console.log(!hasDriversLicense);

//  if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah should drive");
//  } else {
//     console.log("Someone else should drive");
//  }

 const isTired = false; // C
 console.log(hasDriversLicense && hasGoodVision && isTired);

  if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah should drive");
 } else {
    console.log("Someone else should drive...");
 }