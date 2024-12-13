function main() {
    // Declare Arrays
    let array = [];
    let array2 = [];
    
    // Array Size    
    let size = Number(prompt("Enter a array size: "));
    
    // Array Values Getting
    console.log("Enter array 1 values:");
      array = getArray(size); // Get first array
    console.log("Enter array 2 values:");
      array2 = getArray(size); // Get second array
     
    // Sum of two arrays
    let arrayA = sumArray(array, array2, size);
    
    // Displaying Array
    displayArray(arrayA);
}

// Function to get Array Values
function getArray(size) {
    let array = [];
    let k = 1;
    for (let i = 0; i < size; i++) {
        array[i] = [];
        for (let j = 0; j < size; j++) {
            let value = Number(prompt(`Enter value for position [${i + 1},${j + 1}]: `));
            array[i][j] = value; // Corrected this line to assign the value to the correct position
        }
    }
    return array;
}

// Function to Display Array Values
function displayArray(array) {
    console.log("Entered Array Values are:");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(" ")); // Print each row of the array
    }
}

// Function to Sum Arrays
function sumArray(array1, array2, size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array[i] = [];
        for (let j = 0; j < size; j++) {
            array[i][j] = array1[i][j] + array2[i][j]; // Summing corresponding elements
        }
    }
    return array;
}

main();
