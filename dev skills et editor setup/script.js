'use strict';
 


/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 


const calcTip = function(bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
};

console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));

*/


//Problem:
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be some sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1. Understanding the problem
// - what is temperature amplitude: difference between highest and lowest temp
//- how to compute the max and min temperatures in array?
//- what is a sensor error and what to do when one occurs?

//2. Breaking up into sub-problems
//- how to ignore errors?
//- find max value in temperature array
//- find min value in temperature array
//- substract min from max and return it

/*

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
        if (typeof currentTemp !== "number") continue;

    }
    
    console.log(max, min);
    return max - min;
    };
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM 2:
//Function should now receive 2 arrays

// 1. Understanding the problem
// - with 2 arrays, we should implement the functionality twice? NO, we just need to merge the two arrays

// 2. Breaking up into sub-problems
// - Merge 2 arrays


const calcTempAmplitudeNew = function (t1, t2) {

    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];
    
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
        if (typeof currentTemp !== "number") continue;

    }
    
    console.log(max, min);
    return max - min;
    };
const amplitudeNew = calcTempAmplitudeNew([2, 5, 8, 6], [12, 1, 17, 4]);
console.log(amplitudeNew);

*/