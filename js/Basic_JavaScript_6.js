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
