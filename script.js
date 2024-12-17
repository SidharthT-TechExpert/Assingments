function myFilter(myArray, callback) {
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }
    return callback(sum);
}


// callback function to check if the sum is even or odd
function checkIfEvenOrOdd(sum) {
    if (sum % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


let myArray = [1, 2, 3, 4, 5];
let result = myFilter(myArray, checkIfEvenOrOdd);


console.log(result);  