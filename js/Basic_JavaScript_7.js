var number = 77;
var cubeResult;

function globalVSLocal() {
    cubeResult = Math.pow(number, 3);
    console.log("Successfully cubed!");

    var cubeRootResult;
    cubeRootResult = Math.pow(number, 1/3);
    console.log("Successfully cubed rooted!");
}

function displayResults() {
    // There should be an error because cubeRootResult is local.
    console.log("The cube is " + cubeResult + ".  The cube root is " + cubeRootResult);
}



// Using the Date function
function get_date() {
    if (new Date().getHours() >= 12) {
        document.getElementById("greeting").innerHTML = "How are you doing this afternoon?";
    } else {
        document.getElementById("greeting").innerHTML = "How are you doing this morning?";
    }
}



//Using Else, Else If, and If
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon";
    } else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}



/*****************************
    Guessing Game
*****************************/
//Declare variables
var numberToGuess = Math.ceil(100 * Math.random());
var life = parseInt(document.getElementById("newLifeAmount").value);
//Called when the user clicks the guess button.  Takes their input, determines if it's right or wrong.
function checkGuess() {
    var guess = parseInt(document.getElementById("guess").value);

    //If statements.
    if (guess == numberToGuess) {
        document.getElementById("answerFeedback").innerHTML = guess + " WAS CORRECT!!<br>You won with "
            + life + " lives!<br>Play Again?" + showReplayButton();
    }
    if (guess > numberToGuess) {
        document.getElementById("answerFeedback").innerHTML = guess + " was too big<br>You have " + (life-1) + " lives!<br>Try Again!";
        loseLife();
    } else if (guess < numberToGuess) {
        document.getElementById("answerFeedback").innerHTML = guess + " was too small<br>You have " + (life-1) + " lives!<br>Try Again!";
        loseLife();
    } else {
        document.getElementById("answerFeedback").innerHTML = "That is " + guess + "<br>No lives taken<br>Try Again!";
    }
}

//When you get a wrong guess, take 1 life, update the <3, and check to see if you are dead.
function loseLife() {
    life--;
    document.getElementById("life").innerHTML = "&#10084;" + life;
    isDead();
}

//Specifically checks if there are no more lives.
function isDead() {
    if (life <= 0) {
        document.getElementById("answerFeedback").innerHTML = "You\'re out of &#10084;<br>The answer was " + numberToGuess + showReplayButton();
    }
}

//A simple function that returns the replay button when you win or lose
function showReplayButton() {
    return "<button onclick=\"restartGame()\" type=\"button\" class=\"btn btn-success mb-1\">Retry?</button>"
}

// Restart the game | reset variables and text.
function restartGame() {
    life = parseInt(document.getElementById("newLifeAmount").value);
    numberToGuess = Math.ceil(100 * Math.random());
    document.getElementById("life").innerHTML = "&#10084;" + life;
    document.getElementById("answerFeedback").innerHTML = "This will tell you if you are correct or not.";
}



//This is for Assignment on Page 136 but I use it in the game.
function changeLife() {
    life = parseInt(document.getElementById("newLifeAmount").value);
    if (life <= 0) {
        document.getElementById("answerFeedback").innerHTML = "You\'re out of &#10084;<br>The answer was " + numberToGuess + showReplayButton();
    }
    document.getElementById("life").innerHTML = "&#10084;" + life;
    document.getElementById("statusUpdate").innerHTML = "Lives have been updated!";
}



// Added functionality.  Allows you to clear console when called.
function clearConsole() {
    console.clear();
}