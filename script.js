class Operation{
  addition(){
      let result = num1 + num2;
     console.log('Result is : '+result);
 }
 substraction(){
   let result = num1 - num2;   
  console.log('Result is : '+result);
 }
  multiplication(){
      let result = num1 * num2;
     console.log('Result is : '+result);
 }
 division(){
      let result = num1 / num2;
     console.log('Result is : '+result);
 }
}


// Gatting a two numbers 
let num1=Number(prompt("enter first number : "))
let num2=Number(prompt("enter second number : "))

let opr = new Operation();
console.log("1 for addithion\n2 for substraction\n3 for multiplication\n4 fordivision");
let choice =Number(prompt("Enter your choice : "));
if(choice==1){
 opr.addition();
}else if(choice==2){
 opr.substraction();
}else if(choice==3){
 opr.multiplication()
}else if(choice==4){
 opr.division();
}else{
 consosle.log("wrong choice....!!!!!!!!")
}