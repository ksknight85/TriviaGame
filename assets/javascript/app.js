// VARIABLES
var countingDown = true;
var timeRemaining = 25;
var intervalId;
var questionDisplayed = 0;
var newButton;
var numCorrect;
var numIncorrect;
var questions = [
    {
        name: "Hulk Hogan",
        imageSmall: "./assets/images/hulkhogan-mustache.jpg",
        imageLarge: "./assets/images/hulkhogan-full.jpg",
        options: ["Albert Einstein", "Mark Twain", "Hulk Hogan", "Borat"]
    },
    {
        name: "Burt Reynolds",
        imageSmall: "./assets/images/burtreynolds-mustache.jpg",
        imageLarge: "./assets/images/burtreynolds-full.jpg",
        options: ["Tom Selleck", "Borat", "Burt Reynolds", "Teddy Roosevelt"]
    }, {
        name: "Borat",
        imageSmall: "./assets/images/borat-mustache.jpg",
        imageLarge: "./assets/images/borat-full.jpg",
        options: ["Borat", "Emiliano Zapata", "Salvador Dali", "Charlie Chaplin"]
    }, {
        name: "Charlie Chaplin",
        imageSmall: "./assets/images/charlieChaplin-mustache.jpg",
        imageLarge: "./assets/images/charlieChaplin-full.jpg",
        options: ["Albert Einstein", "Charlie Chaplin", "Mark Twain", "Hitler \n(Its not this one)"]
    }, {
        name: "Einstein",
        imageSmall: "./assets/images/einstein-mustache.jpg",
        imageLarge: "./assets/images/einstein-full.jpg",
        options: ["Mark Twain", "Theodore Roosevelt", "Burt Reynolds", "Einstein"]
    }, {
        name: "Groucho Marx",
        imageSmall: "./assets/images/grouchomarx-mustache.jpg",
        imageLarge: "./assets/images/grouchomarx-full.jpg",
        options: ["Charlie Chaplin", "Albert Einstein", "Groucho Marx", "Mark Twain"]
    }, {
        name: "Teddy Roosevelt",
        imageSmall: "./assets/images/teddyRoosevelt-mustache.jpg",
        imageLarge: "./assets/images/teddyRoosevelt-full.jpg",
        options: ["Teddy Roosevelt", "Walter Cronkite", "Groucho Marx", "Freddie Mercury"]
    }, {
        name: "Tom Selleck",
        imageSmall: "./assets/images/tomSellect-mustache.jpg",
        imageLarge: "./assets/images/tomSellect-full.jpg",
        options: ["Geraldo Rivera", "Burt Reynolds", "Walter Cronkite", "Tom Selleck"]
    }
];


// FUNCTIONS
// Function for timer countdown
function countDown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $(".timeRemainingText").html("<h3>Time Remainging:<h3>");
    $(".timeRemaining").html("<h3>" + timeRemaining + "</h3>");
}
function decrement() {
    timeRemaining--;
    $(".timeRemaining").text(timeRemaining);
    if (timeRemaining === 0) {
        alert("Times up!!")
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(intervalId);
}
// FUNCTION FOR NEW QUESTIONS
function newQuestion() {
    $(".question").html("<img src='" + questions[questionDisplayed].imageSmall + "'></img>");

}
// FUNCTION TO CREATE ANSWER BUTTONS
function answerButton() {
    for (var i = 0; i < questions[questionDisplayed].options.length; i++) {
        newButton = $("<div>")
        newButton.html("<button>" + questions[questionDisplayed].options[i] + "</button>");
        newButton.attr("id", "answerButton")
        newButton.attr("data-name", questions[questionDisplayed].options[i]);
        $(".answers").append(newButton);
    }
}

// CORRECT AND INCORRECT ANSWER FUNCTION
function correctImg() {
    $(".question").html("<img src='" + questions[questionDisplayed].imageLarge + "'></img>");
    $(".timeRemainingText").empty();
    $(".timeRemaining").empty();
    stopTimer();
    $(".holder1").html("<h3>Correct!!<h3>");
    $(".correctAnswers").html("<h3>Correct: " + numCorrect + " <h3>");

}

function incorrectImg() {
    $(".question").html("<img src='" + questions[questionDisplayed].imageLarge + "'></img>");
    $(".timeRemainingText").empty();
    $(".timeRemaining").empty();
    stopTimer();
    $(".holder1").html("<h3>Incorrect!!<h3>");
    $(".incorrectAnswers").html("<h3>Incorrect: " + numIncorrect + " <h3>");

}



// INCORRECT ANSWER FUNCTION




// START FUNCTION

$(".start").on("click", function () {
    $(this).remove();
    countDown();
    newQuestion();
    answerButton();
})

// CLICK ON ANSWER FUNCTION
$(".answers").on("click", "#answerButton", function () {

    if ($(this).attr("data-name") === questions[questionDisplayed].name) {
        numCorrect++;
        correctImg();

    }
    else {
        numIncorrect++;
        incorrectImg();

    }

})





// EVENTS


