// list of questions

var questions = [{
    text: "Question 1",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "A"
},
{
    text: "Question 2",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "C"
},
{
    text: "Question 3",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "B"
}]

// initial game setup

var counter = 10

function countdown() {
    counter --;
    $("#timer").text(counter);
    if (counter === 0) {
        clearInterval(timer);
    }
};

var timer = setInterval(countdown, 1000)

// send lists of questions to the dom

//start timer

//send questions to the dom

// get user's answers

// display results