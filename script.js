function main() {
    // Declare Arrays
    let array = [];
    // Array Size    
    let size = Number(prompt("Enter a array size: "));
    
    // Array Values Getting
    console.log("Enter array values:");
      array = getArray(size); // Get first array
    // Displaying Array
    displayArray(array);
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

main();
