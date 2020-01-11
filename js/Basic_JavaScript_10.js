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