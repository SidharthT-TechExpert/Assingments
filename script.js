//Getting size of Array
let size = Number(prompt("Enter a arry size:"));

//Getting Array1 Value 
console.log('Enter the '+(size*size)+' values to array 1')
 let array1 = getArray();
 
//Getting Array2 Value  
console.log('Enter the '+(size*size)+' values to array 2')
 let array2 = getArray();

//Adding Two Array
let array = addingArrays();

//Printing Result
console.log('The sum of two given arrays : ')
 DisplayArray()

// Fun Getting Array Values
function getArray(){
    let array=[];
     for(let i = 0 ; i < size ; i++){
        array[i]=[];
     for(let j = 0 ; j < size ; j++){
         array[i][j] = Number(prompt())
     }
  }
  return array;
}

// Fun Adding Array Values
function addingArrays(){
    let arraySum = [];
    for(let i = 0 ; i < size ; i++){
        arraySum[i] = [];
    for(let j = 0 ; j < size ; j++){
        arraySum[i][j] = array1[i][j] + array2[i][j]
    }
  }
  return arraySum;
}

//Printing Array 
function DisplayArray(){
  for(let i= 0 ; i < size ; i++){
      console.log(array[i]+" ");
  }
}