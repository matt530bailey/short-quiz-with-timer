var start_quiz_btn = document.querySelector(".start_quiz_btn")
console.log(start_quiz_btn)
var timerEl = $('.timer')
var timeRemaining = 30
// timeRemaining = timeRemaining - 1
// console.log(timeRemaining)
// timeRemaining--
// console.log(timeRemaining)
// timeRemaining-=9
start_quiz_btn.addEventListener('click', () => {
    timer ();
    // initiate first question
})

function hideStart () {
    firstChildBody.setAtribute = 'none';
}
// addEventListener('click', "start_quiz_btn.style.display = 'none'");

function startGame () {
    console.log("LINE 9")

}

function timer() {
    setInterval( () => {
        timeRemaining--
        console.log(timeRemaining)
    }, 1000 )
}



// let timer = document.getElementsByClassName('timer');

// function startTimer () {
//     EventTarget.addEventListener('click',)
// }


// console.log(document.getElementsByClassName('start_quiz_btn'));
