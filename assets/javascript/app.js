var timeRemaining = 31;
var wins = 0;
var losses = 0;
var unanswered = 0;

$(document).ready(function() {
    $('#buttonStart').on('click', function() {
        $('#start').hide();
        $('#results').hide();
        $('#gamePlay').show();
        run();
    });

    $('#btnSubmit').on('click', function(){
        onSubmit();
        $('#gamePlay').hide();
        $('#results').show();
    });
});
    
function run(){
    counter = setInterval(decrement, 1000);
}

function decrement(){
    timeRemaining--;
    $('#show-timeRemaining').html('<h2>' + 'Time Remaining:' + timeRemaining + '</h2>');

    if (timeRemaining === 0){
        stop();
    }
}

function stop(){
    clearTimeout(counter);
    jQuery('#btnSubmit').click();
}

function onSubmit() {
    for (var i = 1; i < 9;  i++) {
      determineAnswer("question" + i);
    }

    //Set results to screen ids
    $('#numCorrect').html(wins);
    $('#numIncorrect').html(losses);
    $('#numUnanswered').html(unanswered);
}
//Determine where point goes to
function determineAnswer(questionId) {
   var answer = jQuery('[name="'+questionId+'"]:checked').val();

    if (answer === "true"){
        wins++;
    }
    else if(answer === "false"){
        losses++;
    }
    else{
        unanswered++;
    }
}      