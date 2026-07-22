/*
Task

You are given a variable, . Your task is to print:

- ONE, if num is equal to 1.
- TWO, if num is equal to 2.
- THREE, if num is equal to 3.
- FOUR, if num is equal to 4.
- FIVE, if num  is equal to 5.
- SIX, if num is equal to 6.
- SEVEN, if num is equal to 7.
- EIGHT, if num is equal to 8.
- NINE, if num is equal to 9.
- PLEASE TRY AGAIN, if num is none of the above.
*/ 

function processData(input) {
    var num = Number(input);
    var NUMBER_TEST = num;
    //Head Ends Here
switch (num){
    case 1:
    console.log("ONE");
    break;
    case 2:
    console.log("TWO");
    break;
    case 3:
    console.log("THREE");
    break;
    case 4:
    console.log("FOUR");
    break;
    case 5:
    console.log("FIVE");
    break;
    case 6:
    console.log("SIX");
    break;
    case 7:
    console.log("SEVEN");
    break;
    case 8:
    console.log("EIGHT");
    break;
    case 9:
    console.log("NINE");
    break;
    default:
    console.log("PLEASE TRY AGAIN")
    
    
}
//Do not declare variable num.
//Write your code below this line.

    //Tail Begins
    try {
        if(num != NUMBER_TEST){
            console.log("It seems you have edited the value of variable 'num'. Please try again.");
        } 
    } 
    catch(err) {
        console.log(err.message);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});