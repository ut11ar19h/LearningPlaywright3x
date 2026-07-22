/*Task

You are given a variable marks. Your task is to print:

- AA if marks is greater than .
- AB if marks is greater than  and less than or equal to .
- BB if marks is greater than  and less than or equal to .
- BC if marks is greater than  and less than or equal to .
- CC if marks is greater than  and less than or equal to .
- CD if marks is greater than  and less than or equal to .
- DD if marks is greater than  and less than or equal to .
- FF if marks is less than or equal to 30 .
*/
function processData(input) {
    var marks = Number(input);
    var MARKS_TEST = marks;
    //Head Ends Here

//Do not declare variable marks.
//Write your code below this line.
if (marks >90 && marks<=100){
    console.log("AA");
}else if (marks > 80 && marks<=90){
    console.log("AB");
}else if (marks >70 && marks<=80){
    console.log("BB");
}else if (marks >60 && marks<=70){
    console.log("BC");
}else if (marks >50 && marks<=60){
    console.log("CC");
}else if (marks >40 && marks<=50){
    console.log("CD");
}else if (marks >30 && marks<=40){
    console.log("DD");
}else{
    console.log("FF");
}
    





//Tail Begins
    try {
        if(marks != MARKS_TEST){
            console.log("It seems you have edited the value of variable 'marks'. Please try again.");
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