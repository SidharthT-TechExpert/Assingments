// get a Array size 
let size = Number(prompt("Enter a array Size:"));

// geting array value 
const array = getArrayInput();

console.log("Array is :"+array);

//Sorting Of Array Desending Odear
console.log("After Sorting Of Array Is: "+desSort());

// Array Values Geting 
function getArrayInput(){
    let array = [];
    
    for(let i = 0 ;i < size ;i++){
        let value = Number(prompt(`value ${i+1} : `));
        array.push(value);
    }
  return array;
}
// Sorting Of Array Desending Odear
function desSort(){
    let temp=0;
    for(let i = 0;i < size ;i++){
        for(let j = i+1 ;j < size;j++){
            if(array[i] < array[j]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
  return array;
}