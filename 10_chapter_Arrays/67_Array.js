let status = ["Passed", "Failed", "Pending", "Completed"];
console.log(status.at(4)); //output: undefined
console.log(status[1]);
console.log(status[-1]);//output: undefined

//modifying the array
status[0]="Pass";
console.log(status);

let arr= new Array(5);//creating an array of length 5
arr[1]=1;
arr[3]=4;
console.log(arr);

