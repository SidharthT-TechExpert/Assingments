// get a Array size 

let size = Number(prompt("Enter a array Size:"));
// geting array value 
const array = getArrayInput();

console.log("Array is :"+array);

// count of even numbers in array 
console.log("Number of even numbers in the given array is "+nEven());

// Array Values Geting 
function getArrayInput(){
    let array = [];
    
    for(let i = 0 ;i < size ;i++){
        let value = Number(prompt(`value ${i+1} : `));
        array.push(value);
    }
  return array;
}

// Count of Even Number in Array
function nEven(){
  let count = 0 ;
    for(let i = 0 ;i < size ;i++){
        if(array[i] % 2 == 0)
            count++;
    }
     return count;
}