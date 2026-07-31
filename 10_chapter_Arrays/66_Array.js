//Array constructor
let ut = new Array(5);// This creates an array with a length of 5, but it doesn't contain any elements yet.
console.log(ut);
console.log(ut.length);
ut.push(55,78,89,1,500,252,475);
console.log(ut);
console.log(ut.length);


let ut01= new Array("utkarsh",27,"Mahadev","Varanasi");// This creates an array with the specified elements.
console.log(ut01);

//Array.from() method creates a new array instance from an array-like or iterable object.
cha = Array.from("Utkarsh Singh Mahadev");
console.log(cha);
