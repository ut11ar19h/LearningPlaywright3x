let food = ["veg", "fruits", "meat", "fish", "eggs"];
food.sort();
console.log(food);

let num=[5,55,12,21,26,22,2,1,7,9,75,88,28];
console.log(num.sort());//output: [ 1, 12, 2, 21, 22, 26, 28, 5, 55, 7, 75, 88, 9 ] because sort() method converts the elements into strings and sorts them according to the UTF-16 code unit values.

//proper sorting ASD or DESC
let num1=[44,9,8,88,90,42,35,14,75,36];
console.log(num1.sort((a,b)=> a-b));
/*
Here's what's happening:

  let num1=[44,9,8,88,90,42,35,14,75,36]; — Just declares an array of numbers.

  num1.sort((a,b)=> a-b) — This is the interesting part. JavaScript's .sort() without a comparator converts elements to strings and
  sorts lexicographically (dictionary order). So [44,9,8,88,...] would incorrectly become [14,35,36,42,44,75,8,88,9,90] — notice 8
  comes after 75 because "8" > "75" alphabetically.

  The comparator (a,b) => a-b fixes this. It tells sort how to compare:

  - If a - b is negative → a comes before b (ascending)
  - If a - b is positive → b comes before a
  - If zero → they're equal

  So the result is a proper numeric ascending sort: [8, 9, 14, 35, 36, 42, 44, 75, 88, 90]. For descending, you'd use (a,b) => b - a.
  */
 

// Reverse an array 
let num2 = [45,85,96,36,25,75,95,2];
console.log(num2.reverse());
