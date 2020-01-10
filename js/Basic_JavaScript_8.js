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