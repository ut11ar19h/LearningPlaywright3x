let temp = 35;
let weather = temp < 0 ? "Freezing" : temp < 10 ? "Cold" : temp < 20 ? "Cool" : temp < 30 ? "Warm" : "Hot";
console.log("The temperature is ", temp, "and the weather is", weather);
