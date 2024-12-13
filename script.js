function validateHeight(userHeight) {
    // Check if userHeight is NaN (Not-a-Number)
    if (isNaN(userHeight)) {
        throw new Error("not A Number Error");
    }else if (userHeight > 200) {
        throw new Error("HugeHeightError");
    }else if (userHeight < 40) {
        throw new Error("TinyHeightError");
    }else{
         console.log("valid");
    }
}

let userHeight = Number(prompt("Enter your valid Height :"));

try {
    validateHeight(userHeight);  
} catch (error) {
    console.log(error.message);  
}
