//Shallow copying..
let original = [44,85,96,36,25,14,52,36];
let copy = [...original];
console.log(copy);

let copy1= original.slice();
console.log(copy1);

let copy2= original.concat()
console.log(copy2);

let copy3= Array.from(original);
console.log(copy3);

//Deep copy
let arr= [1,2,3,4,5,6,7,8,9];
let cop_y = arr;
console.log(arr);
console.log(cop_y);
cop_y.push("Deep copy");
console.log(arr);


