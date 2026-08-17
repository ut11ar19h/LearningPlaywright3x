const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0].toLowerCase();
let C = 0;
let V = 0;
for (let x of data) {
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
        V++
    }
    else if(x==" ") {
    }
    else {
        C++
    }
}
console.log(`Vowels: ${V} Consonants: ${C}`);




