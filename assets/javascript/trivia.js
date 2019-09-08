var counter = 5;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var timer;
function nextQuestion(){
    const ifQuestionOver = (quizQuestions.length - 1) === currentQuestion;
    if(ifQuestionOver){
console.log("game is over");
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
    const seletedAswwer = $(this).attr('data-answer');
    const correctAswer= quizQuestions[currentQuestion].correctAnswer;
    if(correctAswer === seletedAswwer){
        score ++;
        console.log('win');
    } else {
        lost ++;
        console.log('lost');
    }

    // console.log('It worked!!!', seletedAswwer);
})
loadQuestion();
