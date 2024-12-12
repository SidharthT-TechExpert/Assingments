// Accept input from the user
let Num = Number(prompt("Enter a Multiplication Table Number:")); 

// Display Multiplecation Table 
mTable();

function mTable(){
    for (let i = 1 ; i <=10 ; i ++){
        console.log(i +" X "+Num+" = "+(i * Num) );
    }
}