var start_quiz_btn = document.querySelector(".start_quiz_btn");
var questionContainer = document.querySelector("#question_box");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector(".question");
var answerGrid = document.querySelector(".answers");
var score = document.querySelector('.score_card');
var scoreKeeper = 0;
var questionIndex = 0;
var timeRemaining = 3;

start_quiz_btn.addEventListener('click', () => {
    timer();
    setNextQuestion();
    start_quiz_btn.classList.add("hide");
    questionContainer.classList.remove("hide");
    timerEl.classList.remove('hide');
})

function timer() {
    var time = setInterval(() => {
        timeRemaining--
        if (timeRemaining <= 0) {
            endGameScreen();
            clearInterval(time)
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
        timeRemaining = 0
        return true
    }
    // display score
    // return false
}
function endGameScreen() {
    var gameOverHeader = document.createElement('h3');
    gameOverHeader.textContent = 'Game Over';
    var nameInput = document.createElement('input');
    var parentSection = document.querySelector('#parentSection');
    var saveNameBtn = document.createElement('button');
    saveNameBtn.textContent = 'Save';
    // console.log not working cant find saved info
    // not sure if info is saving - need to add to local storage 
    // create local storage var or some shit to reference
    parentSection.appendChild(gameOverHeader);
    parentSection.appendChild(nameInput);
    parentSection.appendChild(saveNameBtn);
    questionContainer.classList.add('hide');
    timerEl.classList.add('hide');


    saveNameBtn.addEventListener('click', () => {
        localStorage.setItem('name', nameInput.value);
        console.log(localStorage);
    });
}



function setNextQuestion() {
    var optionsContainer = document.querySelector('.options');
    var currentQuesiton = questions[questionIndex];
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
        button.setAttribute('value', choice.text)
        optionsContainer.appendChild(button)
        button.setAttribute('class', 'answer_btn')
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
    // var isCorrect = Boolean(button.getAttribute('data-is-correct'));
    // problem with for loop - both if else noted
    if (event.target.value === questions[questionIndex].correctAnswer) {

        // scoreKeeper is adding no matter correct or not 
        scoreKeeper++
        console.log(scoreKeeper);
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
        ],
        correctAnswer: '1510'
    },
    {
        question: 'How many different classes of Rum are there?',
        answers: [
            { text: '3', correct: false },
            { text: '8', correct: true },
            { text: '5', correct: false },
            { text: '2', correct: false }
        ],
        correctAnswer: '8'
    },
    {
        question: 'Agave that claims to be 100% agave can still contain how much additive?',
        answers: [
            { text: '0%', correct: false },
            { text: '1%', correct: true },
            { text: '5%', correct: false },
            { text: '10%', correct: false }
        ],
        correctAnswer: '1%'
    },
    {
        question: 'Natural wine means?',
        answers: [
            { text: 'No/minimal intervention is made in the process', correct: true },
            { text: 'No yeast is added ', correct: false },
            { text: 'Grapes are certified organic', correct: false },
            { text: 'No suffer is added', correct: false }
        ],
        correctAnswer: 'No/minimal intervention is made in the process'
    },
    {
        question: 'The 1751 depiction of Gin Ally shows:',
        answers: [
            { text: 'The joys that are, Gin', correct: false },
            { text: 'The process of making Gin', correct: false },
            { text: 'The taverns full of drunks', correct: false },
            { text: 'The lewd behaviors of people consuming Gin', correct: true }
        ],
        correctAnswer: 'The lewd behaviors of people consuming Gin'
    }
]
