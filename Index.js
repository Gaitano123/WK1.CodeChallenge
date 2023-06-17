const marks = prompt("Enter Marks");

function gradeMarks() {
    let grade = "";
    if (marks >79) {
        grade = 'A'
        window.alert("You scored an A")
    }
    else {
        window.alert("You failed")
 
    }
    document.getElementById("grade").innerHTML=grade;
} 
gradeMarks()