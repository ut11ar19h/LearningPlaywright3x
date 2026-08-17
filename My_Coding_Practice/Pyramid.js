/*
Pyramid
n=3
  *
 ***
*****
*/
let n=3;
for(let i=1;i<=n;i++){
  for(let j=i;j<n;j++){
    process.stdout.write(" ")
  }
  for(let k=1; k<=(i*2-1);k++){
    process.stdout.write("*");
  }
  console.log();
}
