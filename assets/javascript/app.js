// VARIABLES
var countingDown = true;
var timeRemaining;
var timeNextQuestion;
var intervalId;
var questionDisplayed = 0;
var newButton;
var numCorrect = 0;
var numIncorrect = 0;
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
        options: ["Groucho Marx", "Charlie Chaplin", "Mark Twain", "Hitler \n(Incorrect)"]
    }, {
        name: "Albert Einstein",
        imageSmall: "./assets/images/einstein-mustache.jpg",
        imageLarge: "./assets/images/einstein-full.jpg",
        options: ["Mark Twain", "Teddy Roosevelt", "Burt Reynolds", "Albert Einstein"]
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
    timeRemaining = 15;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $(".timeRemainingText").html("<h3>Time Remainging:<h3>");
    $(".timeRemaining").html("<h3>" + timeRemaining + "</h3>");
}
function decrement() {
    timeRemaining--;
    $(".timeRemaining").text(timeRemaining);
    if (timeRemaining === 0) {
        stopTimer();
        incorrectImg();
    }
}

function stopTimer() {
    clearInterval(intervalId);
}
// FUNCTION FOR NEW QUESTIONS
function newQuestion() {
    $(".holder1").empty();
    $(".answerText").empty();
    $(".question").html("<img src='" + questions[questionDisplayed].imageSmall + "'></img>");

}
// FUNCTION TO CREATE ANSWER BUTTONS
function answerButton() {
    for (var i = 0; i < questions[questionDisplayed].options.length; i++) {
        newButton = $("<div>")
        newButton.html("<button>" + questions[questionDisplayed].options[i] + "</button>");
        newButton.attr("class", "answerButtons")
        newButton.attr("id", "button" + (i+1));
        newButton.attr("data-name", questions[questionDisplayed].options[i]);
        $(".answers").append(newButton);
    }
}

// CORRECT AND INCORRECT ANSWER FUNCTION
// CORRECT
function correctImg() {
    $(".answers").empty();
    $(".answerText").html("<h2>" + questions[questionDisplayed].name + "<h2>");
    numCorrect++;
    $(".question").html("<img src='" + questions[questionDisplayed].imageLarge + "'></img>");
    $(".timeRemainingText").empty();
    $(".timeRemaining").empty();
    stopTimer();
    $(".holder1").html("<h3>Correct!!<h3>");
    $(".correctAnswers").html("<h3>Correct: " + numCorrect + " <h3>");
    $(".incorrectAnswers").html("<h3>Incorrect: " + numIncorrect + " <h3>");
    nextQuestion();
    endGame()


}
// INCORRECT
function incorrectImg() {
    $(".answerText").html("<h2>" + questions[questionDisplayed].name + "<h2>");
    $(".answers").empty();
    $(".question").html("<img src='" + questions[questionDisplayed].imageLarge + "'></img>");
    numIncorrect++;
    $(".timeRemainingText").empty();
    $(".timeRemaining").empty();
    stopTimer();
    $(".holder1").html("<h3>Incorrect!!<h3>");
    $(".correctAnswers").html("<h3>Correct: " + numCorrect + " <h3>");
    $(".incorrectAnswers").html("<h3>Incorrect: " + numIncorrect + " <h3>");
    nextQuestion();
    endGame()

}
// NEXT QUESTION FUNCTION
function nextQuestion() {
    stopTimer();
    timeNextQuestion = 4;
    intervalId = setInterval(decrement2, 1000);
}
function decrement2() {
    timeNextQuestion--;
    if (timeNextQuestion === 0) {
        questionDisplayed++;
        stopTimer();
        countDown();
        newQuestion();
        answerButton();
        console.log(questionDisplayed);
    }
}
// ENDGAME FUNCTION
function endGame() {
    if (questionDisplayed === (questions.length-1)) {
        stopTimer();
        $(".answerText").empty();
        $(".question").empty();
        $(".answers").empty();
        $(".timeRemaining").empty();
        $(".timeRemainingText").empty();
        $(".holder1").empty();
        $(".finished").html("<h1>Finished</h1>");
        $(".correctAnswers").html("<h3>Correct: " + numCorrect + " <h3>");
        $(".incorrectAnswers").html("<h3>Incorrect: " + numIncorrect + " <h3>");
    }
}


// START FUNCTION

$(".start").on("click", function () {
    $(".start").remove();
    countDown();
    newQuestion();
    answerButton();
})

// CLICK ON ANSWER FUNCTION
$(".answers").on("click", ".answerButtons", function () {

    if ($(this).attr("data-name") === questions[questionDisplayed].name) {
        correctImg();
    }
    else {
        incorrectImg();
    }
})







// EVENTS


