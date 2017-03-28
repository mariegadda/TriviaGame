// Global Variables
// ============================================================================
var questionsAnswers = [{
    question: "Which of Jupiter's Moons is thought to have twice as much water as Earth?",
    choices: ["Ganymede", "Io", "Europa", "Callisto"],
    correctAnswer: "Europa"
  }, {
    question: "How big is the big red dot on Jupiter?",
    choices: ["As big as Texas", "As big as the Moon", "About the size of a hummer", "As big as two Earths"],
    correctAnswer:"As big as two Earths"
  }, {
    question: "How long is a year on Pluto?",
    choices: ["500 earth-days", "247 earth-years", "500 earth-years", "50 earth-years"],
    correctAnswer: "247 earth-years"
  }, {
    question: "how long does it take light from the Sun to reach the Earth?",
    choices: ["8 minutes", "10 days", "45 seconds", "15 minutes"],
    correctAnswer: "8 minutes"
  }, {
    question: "Whats the difference in Gravity between Earth and Mars?",
    choices: ["Twice as strong", "62 percent weaker", "35 percent weaker", "25 percent stronger"],
    correctAnswer:"62 percent weaker"
  }];

var panel = $('#quiz-area');


//CLICK EVENTS
// ================================================================


// load the quiz when page is ready
$(document).ready(function() {
  game.start();
});

// run done function when done button is clicked
$(document).on('click', '#done', function() {
  game.done();
});

// =================================================

// variable game holding the count of correct and incorrect, and the countdown function
var game = {
  correct:0,
  incorrect:0,
  counter:45,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  // start function adds the countdown and questions and answers
  start: function() {
  	// delays the counter by one second
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
    


    for (var i = 0; i < questionsAnswers.length; i++) {
      panel.append('<h2>' + questionsAnswers[i].question + '</h2>');
      for (var j = 0; j < questionsAnswers[i].choices.length; j++) {
        panel.append('<input type="radio" id="choiceButton" name="question' + '" value="' + questionsAnswers[i].choices[j] + '">' +  questionsAnswers[i].choices[j]);
      }
    }
    panel.append("<br>" + "<br>")
    panel.append('<button id="done" class="btn btn-primary">Done</button>');
  },
  
  // done function checks if the checked input is equal to the correct answer. 
  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questionsAnswers[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questionsAnswers[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questionsAnswers[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questionsAnswers[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questionsAnswers[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
   
// runs result function inside the done function
    this.result();
  },
// result function stops timer, removes the timer from htm, and prints to the html results!
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>Times Up!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questionsAnswers.length - (this.incorrect + this.correct)) + '</h3>');
  }

};



