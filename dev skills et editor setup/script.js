'use strict';
 
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

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];
        if (typeof currentTemp !== "number") continue;

        if (currentTemp > max) {
            max = currentTemp
        };
        if (currentTemp < min) {
            min = currentTemp
        };
    }
    console.log(max, min);
    return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);