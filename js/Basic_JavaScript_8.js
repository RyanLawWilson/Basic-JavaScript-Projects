//Gets the strings from the text boxes, concatenates them, and shows them.
function concatenate() {
    var str1 = document.getElementById("string1").value;
    var str2 = document.getElementById("string2").value;
    var str3 = document.getElementById("string3").value;
    var str4 = document.getElementById("string4").value;
    var combined = str1.concat(" ", str2, " ", str3, " ", str4);

    document.getElementById("concatString").innerHTML = combined;
}

//Uses the typed string, start, and end values to slice
function slicing() {
    var str = document.getElementById("string").value;
    var startNum = document.getElementById("start").value;
    var endNum = document.getElementById("end").value;

    document.getElementById("slicedText").innerHTML = str.slice(parseInt(startNum), parseInt(endNum));
    refresh();
}

//Refreshes the max # so that the user knows how long the string is.
function refresh() {
    var str = document.getElementById("string").value;
    var maxNum = str.length;

    document.getElementById("maxNum").innerHTML = "Max " + maxNum;
}

/*******************************
 * The toUpperCase() function retruns the string
 * but all of the alphabetical characters are 
 * uppercase.
*******************************/
function convertUpperCase() {
    var str = document.getElementById("modifyString").value;
    var strUpperCase = str.toUpperCase();

    document.getElementById("upperCaseText").innerHTML = strUpperCase;
}

/*****************************************
 * search() finds the specified string in a string and returns
 * the position of that string.  If I had var string = "A cool cat";
 * then string.search("cool") would return 3.  Returns -1 if no match.
 *****************************************/
function searchString() {
    var str = document.getElementById("modifyString").value;
    var searchWord = document.getElementById("word").value;
    var searchWord_index = str.search(searchWord);

    if (searchWord_index == -1) {
        document.getElementById("searchText").innerHTML = "I couldn't find " + searchWord + ".  Sorry.";
    } else {
        document.getElementById("searchText").innerHTML = searchWord + " starts at position " + searchWord_index;
    }
}

/******************************************
 * Technically, text boxes always give you strings.
 * So fisrt, I parsed the string to an integer then
 * used the toString() method.
 *****************************************/
function convertToString() {
    var str = document.getElementById("toStringTextBox").value;
    var num = parseInt(str);
    
    //Making sure that I'm actually converting a number to a string.
    document.getElementById("toStringText").innerHTML = (typeof num == "number") ?
        "Your number as a string:<br>" + num.toString() :
        "Something went wrong!";
}

/******************************************
 * Takes the number and precision, turns the number into
 * a float, and uses toPrecision() to output the modified
 * number with specified precision.
 *****************************************/
function useToPrecision() {
    var num = parseFloat(document.getElementById("toPrecisionTextBox").value);
    var prec = document.getElementById("precision").value;
    
    document.getElementById("toPrecisionText").innerHTML = 
        "Using toPrecision(),<br>" + num + "<br>becomes<br>" + num.toPrecision(prec);
}

/******************************************
 * toFixed() is used to convert a decimal into a string
 * with a specific number of decimal points.
 *****************************************/
function useToFixed() {
    var num = parseFloat(document.getElementById("toFixedTextBox").value);

    document.getElementById("toFixedButton").innerHTML = num.toFixed(2);
}

/******************************************
 * valueOf() returns to primitive value of a
 * string or a number.
 *****************************************/
function useValueOf() {
    var input = document.getElementById("valueOfTextBox").value;

    document.getElementById("valueOfButton").innerHTML = input.valueOf();
}



