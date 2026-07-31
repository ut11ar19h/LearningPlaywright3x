let result = ["pass","fail","pass","error","fail"];
console.log(result.indexOf("fail"));
//gives the index of first occurrence of "fail" in the array

console.log(result.indexOf("utkarsh")); // output: -1, as "utkarsh" is not present in the array

console.log(result.lastIndexOf("fail")); //gives the index of last occurrence of "fail" in the array

console.log(result.includes("error"));

console.log(result.includes("utkarsh")); // output: false, as "utkarsh" is not present in the array
