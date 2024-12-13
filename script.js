
let row = Number(prompt("Enter The Number Of Row : "));
k = 1;
for(let i = 1;i <= row ;i++){
    for(let j = 1 ;j <= i; j++){
        process.stdout.write((k++)+" ");
    }
  console.log()
}
