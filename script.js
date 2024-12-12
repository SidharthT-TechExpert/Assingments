// Accept input from the user
let Num = Number(prompt("Enter a Number ( 1 to 7):")); 

// Display Carespond Day
console.log(Day());

function Day(){
    switch(Num){
        case 1 :
             result = "Sunday";
             break;
        case 2 :
             result = "Monday";
             break;
        case 3 :
             result = "Tuesday";
             break;
        case 4 :
            result = "Wednesday";
            break;
        case 5 :
             result = "Thursday";
             break;
        case 6 :
             result = "Friday";
             break;
        case 7 :
             result = "Saturday";
             break;
        default :
             result = "Invalid Entry !!!"
    }
  return result;
}