// Accept input from the user
let totalMark = Number(prompt("Enter Your Total Mark Percentage Out Of 100 (Float):")); 
// Display Pass or Failed 
console.log(Grade());

function Grade(){
    if(totalMark > 100){
        result = "Total Mark Percentage Out Of 100!!!\nEnter A Valid Total mark Pesentage";
    }else if(totalMark > 90){
        result = "Congratulation ,\n Your Grade Is 'A'";
    }else if(totalMark > 80){
        result = "Congratulation ,\n Your Grade Is 'B'";
    }else if(totalMark > 70){
        result = "Your Grade Is 'C'";
    }else if(totalMark > 60){
        result = "Your Grade Is 'D'";
    }else if (totalMark > 50){
        result = "Your Grade Is 'E'";
    }else{
        result="Sorry, Your Failed !!!";
    }
  return result;
}