// Array Size from User

let size = Number(prompt("Enter A Array Size:"));

// Checking Size is Valid or not 

if (isNaN(size) || size <= 0){
    console.log("Invalid Array Size Entered!!");
}else{
    console.log("Enter Array 1 values:")
     let array1 = getArrayInput( size );
    
    
    console.log("Enter Array 2 Values:")
      let array2 = getArrayInput(size);
      
      swapArray(array1,array2);
      
    // Desplay After Swapping  
      console.log("Arrays after swapping:");
      console.log("Array 1: "+array1);
      console.log("Array 2: "+array2);
}
// get Array elements
function getArrayInput(arraysize){
    let array = [];
    
    for(i = 0 ;i < arraysize ;i++){
      let value = Number(prompt(`Value ${i+1} :`));
      array.push(value);
    }
    return array;
}

// Swaping of Array
function swapArray(arr1 , arr2){
    let temp = 0 ; 
    
    for(let i = 0 ;i < size ;i++){
        temp = arr1[i];
        arr1[i] = arr2[i];
        arr2[i] = temp;
    }
}