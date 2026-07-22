let responcetime = 850;
let sla = 1000;// sla = Service Level Agreement
let testresult = responcetime <= sla ? "Within SLA" : "SLA Breached";
console.log(`The Result is: ${testresult} and the responcetime is: ${responcetime}ms`);
// template literal is used to print the result in a single line with variables