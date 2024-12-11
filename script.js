// Accept input from the user
let mark = Number(prompt("Enter Your Mark out of 100:")); 

// Display Pass or Failed 

console.log(PorF());

function PorF(){
    if(mark < 50){
        result="Sorry, Your Failed";
    }else if(mark>100){
        result="Mark out of 100!!!\nEnter a valid mark"
    }else{
        result="Congratulation ,Your Passed";
    }
  return result;
}