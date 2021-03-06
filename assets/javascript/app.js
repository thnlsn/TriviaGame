// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ timer
var timeRemaining = 10;
var timeBetweenQuestions = 2000;

var timing;

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ variables
var correct = 0;
var incorrect = 0;

var rightAnswer = 'You got it! The answer was... ';
var wrongAnswer = 'Sorry, the correct answer was... ';

var question = [
    "Which of these was Mozart's middle name?",
    'How many man made artifacts on Earth can be seen from space?',
    'Albert Einstein never learned to _____.',
    'The _____ originated in Croatia.'
];

var options = [
    ['Amadeus', 'Homer', 'Wolfgangus', 'Johannes'],
    ['One, the Great Wall', 'None', 'About 8, on a clear day', 'Thousands'],
    ['divide', 'drive a car', 'tie his shoes', 'read'],
    ['necktie', 'fork', 'ballpoint pen', 'chainsaw']
];

var answer = ['Wolfgangus', 'Thousands', 'drive a car', 'necktie'];

//add 1 to each when next quetion
var questionNumber;
var currentQuestion;
var currentOptionA;
var currentOptionB;
var currentOptionC;
var currentOptionD;
var currentAnswer;

//whether we are currently guessing
var guessing = false;

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ function start/restart game on button click
$('#start-button').click(function() {
    $('#options-row, #question-row, #time-row').show();
    $('#start-button').hide();
    //hide the final answer screen
    $('#correct').hide();
    $('#incorrect').hide();
    questionNumber = 0;
    currentQuestion = question[0];
    currentOptionA = options[0][0];
    currentOptionB = options[0][1];
    currentOptionC = options[0][2];
    currentOptionD = options[0][3];
    currentAnswer = answer[0];
    correct = 0;
    incorrect = 0;

    // ▓▓▓ starts 10 sec timer
    startTimer();
    updateGame();
    guessing = true;
});

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ answer click events
// A
$('#aa').click(function() {
    if (guessing === true && answer[questionNumber] === currentOptionA) {
        update('#current-question', rightAnswer + answer[questionNumber]);
        correct++;
    } else if (guessing === true && answer[questionNumber] !== currentOptionA) {
        update('#current-question', wrongAnswer + answer[questionNumber]);
        incorrect++;
    }
    clickOption();
});

// B
$('#bb').click(function() {
    if (guessing === true && answer[questionNumber] === currentOptionB) {
        update('#current-question', rightAnswer + answer[questionNumber]);
        correct++;
    } else if (guessing === true && answer[questionNumber] !== currentOptionB) {
        update('#current-question', wrongAnswer + answer[questionNumber]);
        incorrect++;
    }
    clickOption();
});

// C
$('#cc').click(function() {
    if (guessing === true && answer[questionNumber] === currentOptionC) {
        update('#current-question', rightAnswer + answer[questionNumber]);
        correct++;
    } else if (guessing === true && answer[questionNumber] !== currentOptionC) {
        update('#current-question', wrongAnswer + answer[questionNumber]);
        incorrect++;
    }
    clickOption();
});

// D
$('#dd').click(function() {
    if (guessing === true && answer[questionNumber] === currentOptionD) {
        update('#current-question', rightAnswer + answer[questionNumber]);
        correct++;
    } else if (guessing === true && answer[questionNumber] !== currentOptionD) {
        update('#current-question', wrongAnswer + answer[questionNumber]);
        incorrect++;
    }
    clickOption();
});

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ update whole game
function updateGame() {
    update('#current-question', currentQuestion);
    update('#remaining-time', timeRemaining);
    update('#a', currentOptionA);
    update('#b', currentOptionB);
    update('#c', currentOptionC);
    update('#d', currentOptionD);
}

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ move to next question, answers, etc.
function nextQuestion() {
    questionNumber++;
    if (questionNumber < question.length) {
        currentQuestion = question[questionNumber];
        currentOptionA = options[questionNumber][0];
        currentOptionB = options[questionNumber][1];
        currentOptionC = options[questionNumber][2];
        currentOptionD = options[questionNumber][3];
        currentAnswer = answer[questionNumber];
        $('#time-row').show();
        updateGame();
        guessing = true;
    } else if (questionNumber >= question.length) {
        //END GAME
        clearInterval(timing);
        endGame();
    }
}

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ timer function
function startTimer() {
    timing = setInterval(function() {
        timeRemaining--;
        update('#remaining-time', timeRemaining);
        if (timeRemaining === -1) {
            $('#time-row').hide();
            guessing = false;
            update('#current-question', wrongAnswer + answer[questionNumber]);
            incorrect++;
            $('.option').hide();
            setTimeout(function() {
                nextQuestion();
            }, timeBetweenQuestions);
            setTimeout(function() {
                $('.option').show();
            }, timeBetweenQuestions);
            setTimeout(function() {
                timeRemaining = 11;
            }, timeBetweenQuestions - 500);
        }
    }, 1000);
}

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ updates html elements
function update(id, value) {
    $(id).html(value);
}

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ function for all option clicks
function clickOption() {
    guessing = false;
    $('#time-row').hide();
    $('.option').hide();
    setTimeout(function() {
        nextQuestion();
    }, timeBetweenQuestions);
    setTimeout(function() {
        $('.option').show();
    }, timeBetweenQuestions);
    setTimeout(function() {
        timeRemaining = 11;
    }, timeBetweenQuestions - 500);
}

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ endgame function
function endGame() {
    console.log('done');
    $('#correct')
        .text('Correct Answers: ' + correct)
        .show();
    $('#incorrect')
        .text('Incorrect Answers: ' + incorrect)
        .show();
    $('#time-row, #question-row, #options-row').hide();
    $('#start-button').show();
    clearInterval(timing);
}

//RUN THIS BEFORE STARTIBNG NEW GAME
/*          clearInterval(startTimer);
            timeRemaining = 11; */

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ function to shake answer
jQuery.fn.shake = function(interval, distance, times) {
    interval = typeof interval == 'undefined' ? 100 : interval;
    distance = typeof distance == 'undefined' ? 10 : distance;
    times = typeof times == 'undefined' ? 3 : times;
    var jTarget = $(this);
    jTarget.css('position', 'relative');
    for (var iter = 0; iter < times + 1; iter++) {
        jTarget.animate(
            { left: iter % 2 == 0 ? distance : distance * -1 },
            interval
        );
    }
    return jTarget.animate({ left: 0 }, interval);
};
