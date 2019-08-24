// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ timer
var timeRemaining = 10;
var timeBetweenQuestions = 3000;

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ variables
var correct = 0;
var incorrect = 0;

var rightAnswer = "You got it! The answer was... "
var wrongAnswer = "Sorry, the correct answer was... "

var question = ["Who?", "What?", "When?", "Where?"];

var options = [
    ["0one", "0two", "0three", "0four"],
    ["1one", "1two", "1three", "1four"],
    ["2one", "2two", "2three", "2four"],
    ["3one", "3two", "3three", "3four"],
];

var answer = ["0one", "1two", "2three", "3four"];

//add 1 to each when next quetion
var questionNumber = 0;
var currentQuestion;
var currentOptionA;
var currentOptionB;
var currentOptionC;
var currentOptionD;
var currentAnswer;

//whether we are currently guessing
var guessing = false;


// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ function start/restart game on button click
$("#start-button").click(function(){
    $("#options-row, #question-row, #time-row").show();
    $("#start-button").hide();
    //hide the final answer screen
    questionNumber = 0;
    currentQuestion = question[0];
    currentOptionA = options[0][0];
    currentOptionB = options[0][1];
    currentOptionC = options[0][2];
    currentOptionD = options[0][3];
    currentAnswer = answer[0];

    // ▓▓▓ starts 10 sec timer
    startTimer();
    updateGame();
    guessing = true;
  });


// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ answer click events
// A
$("#a").click(function(){
    if (guessing === true && (answer[questionNumber] === currentOptionA)) {
        update("#current-question", rightAnswer + answer[questionNumber]);
        correct++;
    } else if (guessing === true && (answer[questionNumber] !== currentOptionA)) {
        update("#current-question", wrongAnswer + answer[questionNumber]);
        incorrect++;
    };
    guessing = false;
    setTimeout(function(){nextQuestion(); }, timeBetweenQuestions);
  });

//B
$("#b").click(function(){
    if (guessing === true && (answer[questionNumber] === currentOptionB)) {
        update("#current-question", rightAnswer + answer[questionNumber]);
        correct++;
    } else if (guessing === true && (answer[questionNumber] !== currentOptionB)) {
        update("#current-question", wrongAnswer + answer[questionNumber]);
        incorrect++;
    };
    guessing = false;
    setTimeout(function(){nextQuestion(); }, timeBetweenQuestions);
  });

//B
$("#c").click(function(){
    if (guessing === true && (answer[questionNumber] === currentOptionC)) {
        update("#current-question", rightAnswer + answer[questionNumber]);
        correct++;
    } else if (guessing === true && (answer[questionNumber] !== currentOptionC)) {
        update("#current-question", wrongAnswer + answer[questionNumber]);
        incorrect++;
    };
    guessing = false;
    setTimeout(function(){nextQuestion(); }, timeBetweenQuestions);
  });

//D
$("#d").click(function(){
    if (guessing === true && (answer[questionNumber] === currentOptionD)) {
        update("#current-question", rightAnswer + answer[questionNumber]);
        correct++;
    } else if (guessing === true && (answer[questionNumber] !== currentOptionD)) {
        update("#current-question", wrongAnswer + answer[questionNumber]);
        incorrect++;
    };
    guessing = false;
    setTimeout(function(){nextQuestion(); }, timeBetweenQuestions);
  });


// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ update whole game
function updateGame() {
    update("#current-question", currentQuestion);
    update("#remaining-time", timeRemaining);
    update("#a", currentOptionA);
    update("#b", currentOptionB);
    update("#c", currentOptionC);
    update("#d", currentOptionD);
}


// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ move to next question, answers, etc.
function nextQuestion() {
    if (questionNumber < question.length) {
        questionNumber++;
        currentQuestion = question[questionNumber];
        currentOptionA = options[questionNumber][0];
        currentOptionB = options[questionNumber][1];
        currentOptionC = options[questionNumber][2];
        currentOptionD = options[questionNumber][3];
        currentAnswer = answer[questionNumber];
        $("#time-row").show();
    } else {
        //END GAME ▓ ▓ ▓ ▓ ▓ ▓ ▓
    }
    updateGame();
    guessing = true;
}


// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ timer function
function startTimer() {
    var timing = setInterval(function() {
        timeRemaining--;
        update("#remaining-time", timeRemaining);
        if (timeRemaining === 0) {
            $("#time-row").hide();
            guessing = false;
            update("#current-question", wrongAnswer + answer[questionNumber]);
            incorrect++;
            setTimeout(function(){nextQuestion(); }, timeBetweenQuestions);
            setTimeout(function(){timeRemaining = 10;}, 0);
        };
    }, 1000);
};


// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ updates html elements
function update(id, value) {
    $(id).html(value);
};


// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 
















//RUN THIS BEFORE STARTIBNG NEW GAME
/*          clearInterval(startTimer);
            timeRemaining = 10; */














































//if button clicked is true
    //show answer
    //set timer to 5
//else if button clicked is false
    //show answer
//else if timer reaches




//CLICK EVENT - start button click event
    //hide start game button
    //set timer to 10 seconds
        //when timer ends, run correct answer FUNCTION with wrong answer VAR
    //show time remaining, question, and options

//CLICK EVENT - option A, B, C, and D.
    //if a = false,
        //turn red while pressed
        //incorrect++
        //html --> wrong answer VAR
    //else,
        //turn green while pressed
        //correct++
        //html --> wrong answer VAR
    //

//FUNCTION - correct answer display
    // add a <p> that states right or wrong and says the correct answer above the buttons
    //timer for 5 seconds...
        //show the NEXT question, with then next options ect.
        //set timer to 10 again

//
















































































































































































//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ function to shake answer
jQuery.fn.shake = function(interval,distance,times){
    interval = typeof interval == "undefined" ? 100 : interval;
    distance = typeof distance == "undefined" ? 10 : distance;
    times = typeof times == "undefined" ? 3 : times;
    var jTarget = $(this);
    jTarget.css('position','relative');
    for(var iter=0;iter<(times+1);iter++){
       jTarget.animate({ left: ((iter%2==0 ? distance : distance*-1))}, interval);
    }
    return jTarget.animate({ left: 0},interval);
 }