// prompt {
    
// }
var counter = 5;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var timer;
function nextQuestion(){
    const ifQuestionOver = (quizQuestions.length - 1) === currentQuestion;
    if(ifQuestionOver){
console.log("game is over");
displayResult();    
    } else {    
    currentQuestion++;
    loadQuestion();
}
}   
function timeUp(){
    clearInterval(timer);
    
    lost++; 
    nextQuestion();
}
function countDown(){
    counter --;
    $('#time').html('Timer:' + counter);
    if (counter === 0){
timeUp();
    }
}

function loadQuestion() {
    counter = 5;
    timer = setInterval(countDown, 1000);
    const question = quizQuestions[currentQuestion].question;
    const choices = quizQuestions[currentQuestion].choices;
    $('#time').html('Timer:' + counter);
    $('#game').html(`<h4>${question}</h4>
    ${loadChoices(choices)}
    ${loadRemainingQuestion()}
    `);
    
    
    
 function loadChoices(choices) {
     var result = '';

     for (var i=0; i < choices.length; i++){
         result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
     }
     return result;
 }   
}
$(document).on('click', '.choice', function(){
    clearInterval(timer);
    const seletedAswwer = $(this).attr('data-answer');
    const correctAswer= quizQuestions[currentQuestion].correctAnswer;
    if(correctAswer === seletedAswwer){
        score ++;
        nextQuestion();

        console.log('win');
    } else {
        lost ++;
        nextQuestion();
        console.log('lost');
    }

    // console.log('It worked!!!', seletedAswwer);
});
function displayResult(){
    const result = `
    <p>You Get: ${score} question(s) right</p>
    <p>You  guessed wrong: ${lost} question(s) wrong    </p>
    <p>Total questions: ${quizQuestions.length}</p>
    <button class="btn btn-primary" id="reset">Start over</button>
    `;
    $('#game').html(result);
}
$(document).on('click', '#reset', function(){
 counter = 5;
 currentQuestion = 0;
 score = 0;
 lost = 0;
 timer= null;
 loadQuestion();

})
function loadRemainingQuestion(){
    const loadRemainingQuestion= quizQuestions.length- (currentQuestion + 1);
    const totalQuestion = quizQuestions.length;

    return `Remaining Question: ${requestAnimationFrame}/${totalQuestion}`;
}
loadQuestion();
