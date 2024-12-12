// Accept input from the user
let limit = Number(prompt("Enter a limit:")); 

// Display Sum of odd Number b/w Limit
console.log("Sum of odd numbers = "+oddSum());

function oddSum(){
    let sum = 0;
   for (let i = 1 ; i < limit ; i ++){
       if (i % 2 == 1){
           sum +=i;
       }
   }
  if (sum == 0){
      sum ="No Number In Odd Between this Limit";
  }
  
  return sum ;
}