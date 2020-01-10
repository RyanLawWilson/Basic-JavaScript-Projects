function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds--;

        /**************************************************
         * This is not necessarily shorthand.  It works because when an ID is
         *         
        **************************************************/
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
        if (seconds == 1) {
            alert("Time's Up!");
        }
    }

    tick();
}


/******************************
 * Slide Show functions
 *****************************/
var slideIndex = 1;
showSlides(slideIndex);

//Next / Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    //When the Index goes over the total number of slides, loop back to the first slide.
    if (n > slides.length) {
        slideIndex = 1;
    }

    //When index goes below 1 (when you click previous when you are on the first slide) loop to the last slide.
    if (n < 1) {
        slideIndex = slides.length;
    }

    //Hide all of the slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //Make's all of the dots not "active".  Turns them all to the non-active color.
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}