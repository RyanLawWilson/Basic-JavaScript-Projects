var num1 = 30;
var num2 = 15;

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;

function add() {
    var addition = num1 + num2;
    document.getElementById("math1").innerHTML = "Result: " + num1 + " + " + num2 + " = " + addition;
}

function sub() {
    var subtraction = num1 - num2;
    document.getElementById("math2").innerHTML = "Result: " + num1 + " - " + num2 + " = " + subtraction;
}

function mul() {
    var multiply = num1 * num2;
    document.getElementById("math3").innerHTML = "Result: " + num1 + " * " + num2 + " = " + multiply;
}

function div() {
    var div = num1 / num2;
    document.getElementById("math4").innerHTML = "Result: " + num1 + " / " + num2 + " = " + div;
}

// Utilizing Math.random to perform all operations
function allOps() {
    var rand1 = Math.round(100 * Math.random());
    var rand2 = Math.round(100 * Math.random());
    var rand3 = Math.round(100 * Math.random());
    var rand4 = Math.round(100 * Math.random());
    var expression = (rand1 + rand2) / rand3 * rand4;
    document.getElementById("math5").innerHTML = "Result: (" + rand1 + " + " + rand2 + ") / " + rand3 + " * " + rand4 + " = " + expression;
}

function mod() {
    var modulus = num1 % num2;
    document.getElementById("math6").innerHTML = "Result: " + num1 + " % " + num2 + " = " + modulus;
}

function neg() {
    document.getElementById("math7").innerHTML = "Result: " + -num1 + " and " + -num2;
}

// Using the Math object again.  based on (x,y) -> (num1, num2) and (random, random)
function dist() {
    var xRand = Math.round(Math.random()*25), yRand = Math.round(Math.random()*25);
    var distance = Math.sqrt(Math.pow(num2 - yRand,2) + Math.pow(num1 - xRand,2))
    document.getElementById("math8").innerHTML = "Point 1: (" + num1 + ", " + num2 + ") | Point 2: (" + xRand + ", " + yRand + ") | Distance: " + distance;
}


// Incrementing and decrementing functionality
function num1Inc() {
    num1++;
    document.getElementById("num1").innerHTML = num1;
}

function num1Dec() {
    num1--;
    document.getElementById("num1").innerHTML = num1;
}

function num2Inc() {
    num2++;
    document.getElementById("num2").innerHTML = num2;
}

function num2Dec() {
    num2--;
    document.getElementById("num2").innerHTML = num2;
}