//alert("Hello, World!");           //A way to display text - Popup
//window.alert("Hello, World!");    //Another way to display text - Popup
//document.write("Hello, World!");  //A third way to display text - Text is written on the page

var a = "This is a String<br>";
document.write(a);
//window.alert(a);

var quote = "Bob said, \"Where is the lamb sauce!\".<br>" +
    "I said, \"I haven't made any yet\"<br><br>";
document.write(quote);

var yrden = "Yrden", quen = "Quen", igni = "Igni", axii = "Axii", aard = "Aard";
yrden = yrden.fontcolor("purple");
quen = quen.fontcolor("yellow");
igni = igni.fontcolor("red");
axii = axii.fontcolor("green");
aard = aard.fontcolor("blue");


document.write("You encounter a wraith and use " + yrden + "<br>");
document.write("The wraith is slowed" + "<br>");
document.write("You protect yourself with " + quen + "<br>");
document.write("The wraith attacks... 0 dmg.  Your " + quen + " is broken <br>");
document.write("You use " + igni + "... 56 dmg.<br><br>");

document.write(Math.PI + Math.E);

function myFirstFunction() {
    document.getElementById("Green_Text").innerHTML = 
        document.getElementById("Green_Text").innerHTML.fontcolor("green");
}