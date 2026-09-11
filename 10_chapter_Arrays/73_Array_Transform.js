let score=[2,5,85,96,75];
console.log(score.map(s=> s+1055));
//
let ut1055= [88,90,58,75,96,28,80];
console.log(ut1055.map(s=> s>80? "Grade A":"Grade B"));
console.log(ut1055);//Output: [ 88, 90, 58, 75, 96, 28, 80 ] because map() method does not change the original array. It returns a new array with the results of calling a provided function on every element in the calling array.

//map () method creates a new array populated with the results of calling a provided function on every element in the calling array. It does not change the original array.

//filter() method creates a new array with all elements that pass the test implemented by the provided function. It does not change the original array.
let Raj=[99,58,75,63,98,25,75,62,15];
let out= Raj.filter(x=> x>=75);
console.log(out);