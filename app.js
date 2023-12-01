//user to enter marks for each subject
var marksSubject1 = parseInt(prompt("Enter marks for Computer:"));
var marksSubject2 = parseInt(prompt("Enter marks for Math:"));
var marksSubject3 = parseInt(prompt("Enter marks for Urdu:"));
var marksSubject4 = parseInt(prompt("Enter marks for English:"));
var marksSubject5 = parseInt(prompt("Enter marks for Science:"));

// Log input for debugging
console.log("Marks for Subject 1:", marksSubject1);
console.log("Marks for Subject 2:", marksSubject2);
console.log("Marks for Subject 3:", marksSubject3);
console.log("Marks for Subject 4:", marksSubject4);
console.log("Marks for Subject 5:", marksSubject5);

// Calculate total marks
var totalMarks = marksSubject1 + marksSubject2 + marksSubject3 + marksSubject4 + marksSubject5;

// Calculate percentage
var percentage = (totalMarks / 500) * 100;

// Display total marks and percentage in an alert
alert("Total Marks: " + totalMarks + "\nPercentage: " + percentage.toFixed(2) + "%");

