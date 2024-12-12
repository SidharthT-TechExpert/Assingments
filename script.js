//Getting Students Scores
console.log("Enter the marks scored by the students,");
let W = Number(prompt("Written test = "));
let L = Number(prompt("Lab exam = "));
let A = Number(prompt("Assingments = "));

// Overol Grade Calculating
 let grade = ( (W * 70) / 100 ) + ( (L * 20) / 100 ) + ((A * 10) / 100);
 
 //Display in Grede
 
 console.log("Grade of the student is : "+grade);