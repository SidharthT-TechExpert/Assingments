// getting size of array
let size = Number(prompt("Enter a array limit: "));

console.log(`Enter array ${size} values : `);
// Getting Array Values in array
let array = getArray();

// Array Values Printing
let array2 = mult();
console.log("Output is: "+array2);
//Fun getting array values
function getArray(){
    let array = [];
     for(let i = 0; i < size ; i++){
        let value = Number(prompt(`value ${i+1}: `));
        array.push(value);
     }
  return array;
}

//Fun Mulit of adj value
function mult(){
    let marray = [];
    for(let i = 0;i < size;i++){
        if(i == size-1)break;
       marray[i] = array[i] * array[i+1];
    }
  return marray;
}