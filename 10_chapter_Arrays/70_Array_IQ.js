let Arr= ["US","Varanasi",1055,27];
console.log(Arr.find(R=> R==="Varanasi"));
//find() method returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.

//findIndex() method returns the index of the first element in the provided array that satisfies the provided testing function. Otherwise -1 is returned.
let out=[5,55,78,96,35,78,96,66,66,35,48];
console.log(out.findIndex(R=> R>55));
//findIndex() method returns the index of the first element in the provided array that satisfies the provided testing function. Otherwise -1 is returned.


//findLast() method returns the value of the last element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.
console.log(out.findLast(R=> R>55));
//findLast() method returns the value of the last element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.  
