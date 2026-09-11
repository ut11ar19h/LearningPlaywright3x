/*
Write a program to check if a given year is a leap year. A leap year is divisible by 4, except for century years which must be divisible by 400.
*/
const data = require('fs').readFileSync(0, 'utf8');
if (data % 100 == 0) {
    if (data % 400 == 0) {
        console.log("YES");
    } else {
        console.log("NO");
    } 
}
else {
    if (data % 4 == 0) {
        console.log("YES");
    }
    else {
        console.log("NO");
    }
}
