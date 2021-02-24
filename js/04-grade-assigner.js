let grade = Number(prompt("Enter student's grade between 1-100."));
if (grade <= 100 && grade >= 0) {
    if (grade >= 90) {
        console.log("You receved an A!");
    } else if (grade >= 80) {
        console.log("You receved a B.");
    } else if (grade >= 70) {
        console.log("You receved a C.");
    } else if (grade >= 60) {
        console.log("You receved a D.");
    } else if (grade <= 59) {
        console.log("Your receved a F.");
    } 
}else {
    alert("Please enter a number between 1-100.");
}
