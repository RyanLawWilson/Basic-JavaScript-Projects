//document.write(typeof true + "<br>");
function func1() {
    // This will display NaN - Not a Number
    document.getElementById("test1").innerHTML = 0/0;
}

function func2() {
    //Displays true because that text is not a number.
    document.getElementById("test2").innerHTML = isNaN("This is some text");
}

function func3() {
    //Returns false because 646600 is not not a number
    document.getElementById("test3").innerHTML = isNaN("646600");
}

function showInfinityPos() {
    document.getElementById("posInfinityText").innerHTML = 2E310;
}

function showInfinityNeg() {
    document.getElementById("negInfinityText").innerHTML = -3E310;
}

// This is to make the button switch from > to < and back again.
function switchSigns() {
    if (document.getElementById("signButton").value == 1) {
        document.getElementById("signButton").innerHTML = "&lt;";
        document.getElementById("signButton").value = 0;
    } else {
        document.getElementById("signButton").innerHTML = "&gt;";
        document.getElementById("signButton").value = 1;
    }
}

// Determines whether the inequality of true of false
function calcResult() {
    // Turning the number value entered by the user into integers.
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if ((num1 > num2 && document.getElementById("signButton").value == 1) || 
        (num1 < num2 && document.getElementById("signButton").value == 0)) {
        document.getElementById("result").innerHTML = "True";
    } else {
        document.getElementById("result").innerHTML = "False";
    }
}

console.log(86 + 55);

document.write("<br><br>10" + 5 + " The 5 is tacked onto the end of \"10\" by coercion.<br><br>");

//Displaying false in the console.
console.log("forty" < 39);

//Displaying true and false in console using ==
console.log(true == true);
console.log((true == false) || (false == true));

//Displaying true and false 4 ways using ===
console.log("\"10\" === \"10\" returns " + ("10" === "10"));
console.log("\"11\" === \"10\" returns " + ("11" === "10"));
console.log("10 === \"10\" returns " + (10 === "10"));
console.log("\"11\" === \"9\" returns " + ("11" === "9"));

// Using AND and OR to make true and false.
document.write("11 > 10 && 22 < 23 ----> " + (11 > 10) + " AND " + (22 < 23) + " ----> " + (11 > 10 && 22 < 23) + "<br>")
document.write("1 == 1 && \"1\" === 1 ----> " + (1 == 1) + " AND " + ("1" === 1) + " ----> " + (1 == 1 && "1" === 1) + "<br>")
document.write("1 == 1 || \"1\" === 1 ----> " + (1 == 1) + " OR " + ("1" === 1) + " ----> " + (1 == 1 || "1" === 1) + "<br>")
document.write("11 == 10 || 22 == 23 ----> " + (11 == 10) + " OR " + (22 == 23) + " ----> " + (11 == 10 || 22 == 23) + "<br>")

