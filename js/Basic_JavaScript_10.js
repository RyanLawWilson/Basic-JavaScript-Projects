// Counts numbers from 1 to ###
function counting() {
    var str = document.getElementById("stringToCount").value;

    //String length tells you how many characters the string has (how long it is)
    var strLength = str.length;

    //Prints the numbers as long as it is not too long and not negative
    if (strLength > 0 && strLength <= 3) {
        var num = parseInt(str);
        var countedStr = "";

        var i
        for (i = 1; i < (num+1); i++) {
            //Add some spacing after a certain number of iterations.
            if (i % 20 == 0) {countedStr += ("<br>");}
            
            countedStr += ("&nbsp;" + i);
        }

        document.getElementById("loop").innerHTML += countedStr;

    } else {
        document.getElementById("loop").innerHTML = "The number can't be that long";
    }
}

//example of a loop and an array.
var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;
function forLoop() {
    for (y = 0; y < instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("listOfInstruments").innerHTML = content;
}

//Utilizing arrays
function catPics(n) {
    var catPicture = [];
    catPicture[0] = "Sleeping";
    catPicture[1] = "Playing";
    catPicture[2] = "Eating";
    catPicture[3] = "Purring";
    document.getElementById("cat").innerHTML = "The cat is " + catPicture[n];
}

//Demonstrating constants using objects
function constantFunction() {

    //Object called musical instrument
    const musicalInstrument = {
        type: "guitar",
        brand: "fender",
        color: "black"
    }
    
    musicalInstrument.color = "blue";
    musicalInstrument.price = "$900";

    document.getElementById("constant").innerHTML = "The cost of the " + musicalInstrument.type + " was " + musicalInstrument.price;
}

//Demonstrating constants using objects
function letKeyword() {
    var x = 100;
    document.getElementById("letText").innerHTML = x + " | ";
    x = 90;
    document.getElementById("letText").innerHTML += x + " | ";
    {
        let x = "Used let here"
        document.getElementById("letText").innerHTML += x + " | ";
    }
    x = 70;
    document.getElementById("letText").innerHTML += x;
}

//shows the result of sqrt or square
function usePowerFunction(i) {
    var number = document.getElementById("numToSQRT").value;

    if (i == 1) {
        document.getElementById("sqrtText").innerHTML = "The square of " + number + " is " + calcSquare(number);
    } else if (i == 2) {
        document.getElementById("sqrtText").innerHTML = "The square root of " + number + " is " + calcSQRT(number);
    }
}

//RETURNS the square root of a number
function calcSQRT(n) {
    return Math.pow(n, 1/2); 
}

//RETURNS the square of a number
function calcSquare(n) {
    return Math.pow(n, 2); 
}

//Making an object using the let keyword
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    //This is a method
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("carObject").innerHTML = car.description();

//Loop that uses break and continue | Creates boxes 
function createBoxes() {

    //Get the max number of boxes
    var numberOfBoxes = parseInt(document.getElementById("boxMakerTextBox").value);

    //counts how many loops have been completed or skipped.
    var iteration = 1;

    document.getElementById("boxContainer").innerHTML = "";

    //If the number is valid
    if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
        var rowsToMake = Math.floor(numberOfBoxes/10) + 1;
        
        var currentRow;
        //Rows for loop - r represent current row
        for (currentRow = 1; currentRow <= 10; currentRow++) {

            //The break keyword ends the entire loop.
            if (currentRow > rowsToMake) {break;}
            document.getElementById("boxContainer").innerHTML += startRow(currentRow);

            var currentCol;
            //Columns for loop
            for (currentCol = 1; currentCol <= 20; currentCol++) {

                //If odd, skip.  The continue keyword skips the current iteration.
                if (iteration % 2 == 1) {
                    iteration++;
                    continue;
                }

                //Get the row and put a column in it
                document.getElementById("boxMaker_row" + currentRow).innerHTML += startCol(iteration);

                //Get the column and put a p in it.
                document.getElementById("boxMaker_col" + iteration).innerHTML = startPTag(iteration);

                //Get the p and put a number in it.
                document.getElementById("boxMaker_p" + iteration).innerHTML = iteration;

                iteration++;
                if (iteration >= numberOfBoxes) {break;}
            }

            if (iteration >= numberOfBoxes) {break;}
        }

    } else {
        document.getElementById("boxMakerTitle").innerHTML = "Number needs to be between 1 and 100:"
    }

    //Returns the row element
    function startRow(r) {
        return "<div id=\"boxMaker_row" + r + "\" class=\"row justify-content-center\"></div>";
    }

    //Returns the column element
    function startCol(c) {
        return "<div id=\"boxMaker_col" + c + "\" class=\"col-1 p-1 m-1 bg-danger\"></div>";
    }

    //Returns the paragraph element
    function startPTag(p) {
        return "<p id=\"boxMaker_p" + p + "\" class=\"text-center font-weight-bold m-1 p-0\"></p>";
    }
}