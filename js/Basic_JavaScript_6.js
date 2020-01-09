function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

function ageValidation() {
    var age, vote;
    age = document.getElementById("age").value;
    vote = (age >= 18) ? "You can vote!":"You need to be at least 18 to vote";
    document.getElementById("vote").innerHTML = vote;
}


// Object constructor and variables from the example.
function Vehicle(make, model, year, color) {
    this.Vehicle_make = make;
    this.Vehicle_model = model;
    this.Vehicle_year = year;
    this.Vehicle_color = color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_color + "-colored " + Erik.Vehicle_model + " manufactured in " + Erik.Vehicle_year;
}

// My Object constructor function and variables.
function Jigglypuff(name, height, weight, age, sound) {
    this.Jigglypuff_name = name;
    this.Jigglypuff_height = height;
    this.Jigglypuff_weight = weight;
    this.Jigglypuff_age = age;
    this.Jigglypuff_sound = sound;
}
var Kyle = new Jigglypuff("Kyle", 1.5, 20, 7, "Jiggly!");
var Bob = new Jigglypuff("Bob", 1.5, 50, 23, "jiggly...");
function describeJigglypuff() {
    document.getElementById("jigglypuff").innerHTML = "Kyle is a " +
    Kyle.Jigglypuff_age + " year old puff and weighs " + Kyle.Jigglypuff_weight + "lbs.  " + 
    "Kyle says " + Kyle.Jigglypuff_sound + ".";
}

// I tried using a reserved word for a variable name.  All JavaScript stopped working.
//var true = "yo";

// Nested Function
function buttonClicked() {
    var textboxValue = document.getElementById("num").value;
    var text = document.getElementById("nested_function").innerHTML;
    document.getElementById("nested_function").innerHTML = text + textboxValue + "<sup>2</sup> = " + square() + " | ";
    function square() {
        var textboxValue_squared = Math.pow(textboxValue, 2);
        return textboxValue_squared;
    }
}
