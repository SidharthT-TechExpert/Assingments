//Getting Anual income
let Income = Number(prompt("Enter Your Anual Income : "));

//Calling Tax 
console.log("Income Tax Amount Is : "+tax());
 
 
 //Fun Tax 
 function tax(){
     let L = 100000;
     if (Income > 10 * L){
         return (Income * 30) / 100;
     }else if(Income > 5 * L){
         return (Income * 20) / 100;
     }else if(Income > 2.5 * L){
         return (Income * 5) / 100;
     }else{
         return "No Tax"
     }
 }