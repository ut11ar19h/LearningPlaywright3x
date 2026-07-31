//push() method adds one or more elements to the end of an array and returns the new length of the array.
let ut=[1,2,3,4,5];
ut.push(6,7,8,9,10);
console.log(ut.push("Utkarsh"));
//why it is returning 11 because the push() method returns the new length of the array after adding the new elements. In this case, the original array had 10 elements, and after pushing "Utkarsh", the new length becomes 11.
console.log(ut);
console.log(ut.push());//why it is returning 11 because the push() method returns the new length of the array after adding the new elements. In this case, the original array had 10 elements, and after pushing "Utkarsh", the new length becomes 11.


//pop() method removes the last element from an array and returns that element. This method changes the length of the array.

ut.pop();
console.log(ut);//Removed the last element "Utkarsh" from the array and returned it. The array now has 10 elements again.
console.log(ut.pop());//Removed the last element 10 from the array and returned it. The array now has 9 elements again.)
// Constructing a reverse array....
let ut_1055 = [1,2,3,4,5,6];
let j=ut_1055.length;
let Rev_Ar= [];
for(i=0;i<j;i++){
  Rev_Ar.push(ut_1055.pop())
}
console.log(Rev_Ar);


//Add to the beginning of an array using unshift() method

let ut_007=["Utkarsh","Singh","Mahadev","Varanasi","India"];
console.log(ut_007.unshift("Hello"));//why it is returning 6 because the unshift() method returns the new length of the array after adding the new elements. In this case, the original array had 5 elements, and after unshifting "Hello", the new length becomes 6.
console.log(ut_007);


//Remove from the beginning of an array using shift() method

console.log(ut_007.shift());//Removed the first element "Hello" from the array and returned it. The array now has 5 elements again.
console.log(ut_007);


//splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let Arr=[40,50,60,70,80,90];
Arr.splice(1,1,"Utkarsh");//Removed the element at index 1 (50) and added "Utkarsh" in its place.
console.log(Arr);

Arr.splice(-1,1,55);//Removed the last element (90) and added 55 in its place.
console.log(Arr);

Arr.splice(6,0,100);//Added 100 at index 6 without removing any elements.)
console.log(Arr);

Arr.splice(3,2,44,56);
console.log(Arr);
