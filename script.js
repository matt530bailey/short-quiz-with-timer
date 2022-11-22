var start_quiz_btn = document.querySelector(".start_quiz_btn")
var questionContainer = document.querySelector("#question_box")
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector(".question")
var answerGrid = document.querySelector(".answers")
var timeRemaining = 5
var shuffledQuestions, currentQuestionIndex

start_quiz_btn.addEventListener('click', () => {
    timer ();
    setNextQuestion();
    start_quiz_btn.classList.add("hide");
    questionContainer.classList.remove("hide");
    timerEl.classList.remove('hide')
    

})

function timer() {
    setInterval( () => {
        timeRemaining--
        if (timeRemaining < 1) {
            clearInterval(timerEl);
            alert("Out of time!!");
            return;

        }
        console.log(timeRemaining);
    }, 1000 );
}


function setNextQuestion() {
}

function showQuestion () {
}

function selectAnswer () {

}

let questions = [
    {
        question: 'When does Benedictine claim to be invented?',
        answers: [
            { text: '1775', correct: false},
            { text: '1738', correct: false},
            { text: '1313', correct: false},
            { text: '1510', correct: true}
        ]    
    },
    {
        question: 'How many different classes of Rum are there?',
        answers: [
            {text: '3', correct: false},
            {text: '8', correct: true},
            {text: '5', correct: false},
            {text: '2', correct: false}
        ]
    },
    {
        question: 'Agave that claims to be 100% agave can still contain how much additive?',
        answers: [
            {text: '0%', correct: false},
            {text: '1%', correct: true},
            {text: '5%', correct: false},
            {text: '10%', correct: false}
        ]
    },
    {
        question: 'Natural wine means?',
        answers: [
            {text: 'No/minimal intervention is made in the process ', correct: true},
            {text: 'No yeast is added ', correct: false},
            {text: 'Grapes are certified organic', correct: false},
            {text: 'No suffer is added', correct: false}
        ]
    },
    {
        question: 'The 1751 depiction of Gin Ally shows:',
        answers: [
            {text: 'The joys that are, Gin', correct: false},
            {text: 'The process of making Gin', correct: false},
            {text: 'The taverns full of drunks', correct: false},
            {text: 'The lewd behaviors of people consuming Gin ', correct: true}
        ]
    }
]
 