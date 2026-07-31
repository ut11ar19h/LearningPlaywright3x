let a = [55,65,23,32,78,98];
let b = a.every(s=> s>=35);
console.log(b);// This will check if every element is satisfying the condition- if yes then output true else false.
console.log([44,56,28,36,75].every(s=> s>25));//condition should satisfy every element.

//Some - At least one must pass
console.log([85,35,75,69,24].some(s=> s<35));



