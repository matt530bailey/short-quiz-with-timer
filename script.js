var start_quiz_btn = document.querySelector(".start_quiz_btn");
var questionContainer = document.querySelector("#question_box");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector(".question");
var answerGrid = document.querySelector(".answers");
var score = document.querySelector('.score_card');
var scoreKeeper = 0;
var questionIndex = 0;
var timeRemaining = 5;

start_quiz_btn.addEventListener('click', () => {
    timer();
    setNextQuestion();
    start_quiz_btn.classList.add("hide");
    questionContainer.classList.remove("hide");
    timerEl.classList.remove('hide');
})

function timer() {
    setInterval(() => {
        timeRemaining--
        if (timeRemaining <= 0) {
            endGameScreen();
            return;
        }
        document.getElementById('timer').innerHTML = timeRemaining.toString();
        console.log(timeRemaining);
    }, 1000);
}

// do i need to check if game is over if i can write it in to a end of game sequence?
// breaking appart functions concept - check game over y/n if yes run end game sequence
// 
function checkGameOver() {
    // // if questionIndex < questions.length 
    // have boolean is game over
    if (questionIndex < questions.length - 1) {
        return false
        // else 
    } else {
        return true
    }
    // display score
    // return false
}
function endGameScreen() {
        console.log('please work');
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
    // trying to create a space between questionNum and other hardcoded HTML
    var questionNum = (questionIndex + 1).toString()
    questionNum = (questionNum + " ");
    document.getElementById('questionNo').innerHTML = questionNum + " ";

}
function selectAnswer(event) {
    event.preventDefault()
    console.log(event.target);
    var button = event.target;
    var isCorrect = Boolean(button.getAttribute('data-is-correct'));
    // problem with for loop - both if else noted
    if (true) {
        // scoreKeeper is adding no matter correct or not 
        scoreKeeper++
    } else {
        // time subtract not working need to link to timer()
        timeRemaining -= 5
    }
    if (checkGameOver()) {
        // call new func or give statement of what to do -wtf do i need to do? 
        // populate window or popup
        // prompt user to input name to add to record of score
        // show final tally of all attempts
        console.log('GameOver?');
        endGameScreen()
    } else {
        questionIndex++
        setNextQuestion()

    }
    // console.log(scoreKeeper); 
}

// can be referened to as data set arrow down
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
