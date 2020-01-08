
// Take two numbers from the textboxes and multiplies them.
function calcProduct() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("results").innerHTML = "Results: " + num1 + " * " + num2 + " = " + num1*num2;
}

// Concatenates two strings
function concat() {
    var string1 = "I can touch my toes";
    string1 += " and my nose!";
    document.getElementById("concat").innerHTML = string1;
}