var start_quiz_btn = document.querySelector(".start_quiz_btn")
var questionContainer = document.querySelector("#question_box")
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector(".question")
var answerGrid = document.querySelector(".answers")
var score = document.querySelector('.score_card')
var scoreKeeper = 0
var questionIndex = 0
var timeRemaining = 15

start_quiz_btn.addEventListener('click', () => {
    timer();
    setNextQuestion();
    start_quiz_btn.classList.add("hide");
    questionContainer.classList.remove("hide");
    timerEl.classList.remove('hide')



})

function timer() {
    setInterval(() => {
        timeRemaining--
        if (timeRemaining < 1) {
            return;
        }
        console.log(timeRemaining);
    }, 1000);
}

function checkGameOver() {
    // if questionIndex < questions.length 
    if (questionIndex < questions.length) {
        true
    } else {
        document.querySelector('.score_card').innerHTML = 
    }
    // display score
    // return false
}

function setNextQuestion() {
    var currentQuesiton = questions[questionIndex];
    var optionsContainer = document.querySelector('.options');
    optionsContainer.innerHTML = ''
    // find header element
    console.log(document.querySelector('.question'));
    // Get question 
    console.log(questions[questionIndex].question);
    // Set text cont for header
    document.querySelector('.question').textContent = currentQuesiton.question
    for (var i = 0; i < currentQuesiton.answers.length; i++) {
        var choice = currentQuesiton.answers[i];
        var button = document.createElement('button')
        button.textContent = choice.text
        button.addEventListener('click', selectAnswer)
        button.setAttribute('data-is-correct', choice.correct)
        optionsContainer.appendChild(button)

    }

}

function showQuestion() {
    // grabs first question & answer in array

}

function selectAnswer(event) {
    event.preventDefault()
    console.log(event.target);
    var button = event.target;
    var isCorrect = Boolean(button.getAttribute('data-is-correct'));
    // need to add -- to timer() for incorrect 
    if ('data-is-correct') {
        scoreKeeper++
    } else {
        timeRemaining -= 5
    }
    questionIndex++
    setNextQuestion()
    console.log(scoreKeeper);
}


var questions = [
    {
        question: 'When does Benedictine claim to be invented?',
        answers: [
            { text: '1775', correct: false },
            { text: '1738', correct: false },
            { text: '1313', correct: false },
            { text: '1510', correct: true }
        ]
    },
    {
        question: 'How many different classes of Rum are there?',
        answers: [
            { text: '3', correct: false },
            { text: '8', correct: true },
            { text: '5', correct: false },
            { text: '2', correct: false }
        ]
    },
    {
        question: 'Agave that claims to be 100% agave can still contain how much additive?',
        answers: [
            { text: '0%', correct: false },
            { text: '1%', correct: true },
            { text: '5%', correct: false },
            { text: '10%', correct: false }
        ]
    },
    {
        question: 'Natural wine means?',
        answers: [
            { text: 'No/minimal intervention is made in the process ', correct: true },
            { text: 'No yeast is added ', correct: false },
            { text: 'Grapes are certified organic', correct: false },
            { text: 'No suffer is added', correct: false }
        ]
    },
    {
        question: 'The 1751 depiction of Gin Ally shows:',
        answers: [
            { text: 'The joys that are, Gin', correct: false },
            { text: 'The process of making Gin', correct: false },
            { text: 'The taverns full of drunks', correct: false },
            { text: 'The lewd behaviors of people consuming Gin ', correct: true }
        ]
    }
]
