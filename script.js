// String Getting User
let string = String(prompt("Enter A String: "));
//Display Palindrome Or Not
console.log(paliOrNot());

// Function Checking whether a string is a palindrome or not
function paliOrNot(){
    size = string.length;
    for(let i = 0;i < string.length;i++){
        if((string[i])!=(string[size-i-1])){
            result = "Entered string is not a palindrome";
            break;
        }else{
            result = "Entered string is a palindrome";
        }
    }
  return result;
}