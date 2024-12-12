//Getting Value
let num = Number(prompt("Enter a Number:"));
//clecking entered value is prime or not
let result = primeOrNot();
//Printing OutPuts
console.log(result);

// Function Of Prime or Not
function primeOrNot(){
     if(num < 2){
          return "Enterd Number is not a prime number";
        }
    for(i = 2;i <= num/2;i++){
         if(num % i == 0){
           return "Enterd Number is not a prime number";
          }
      }

  return "Enterd Number is a prime number";
}