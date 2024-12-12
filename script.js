function main(){
    // Declare a Array
     let array = [];
   //Array Values Getting
     array = getArray(array);
   //Displaying Array
     displayArray(array);
}

// function Array Values Getting 
function getArray(array){
    let size = Number(prompt("Enter a array size: "))
    for(let i = 0;i < size ;i++){
        let value = Number(prompt(`Value ${i+1}: `))
        array.push(value);
    }
  return array;
}

// Function Display Array Values
function displayArray(array){
    console.log("Entered Array Values is: "+array);
}

main();