// créer un quiz class
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    guess(answer) {
        if(this.getQuestionIndex().isCorrectANswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}
// create a question class
class question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer  = answer;
    }
    isCorrectANswer(choice) {
        return this.answer === choice;
    }
}
// display Question
function displayQuestion() {
    if(quiz.isEnded()){
        showScores();
    } else{
        // show question
     let questionElement =document.getElementById("question");
     questionElement.innerHTML = quiz.getQuestionIndex().text;
    //  show option
    let choices = quiz.getQuestionIndex().choices;
    for(let i = 0; i < choices.length; i++) {
        let choiceElement = document.getElementById("choice" + i);
        choiceElement.innerHTML = choices[i];
        guess("btn" + i, choices[i]);
    }
    showProgress();
    }
};
// GUESS FUNCTION
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        displayQuestion();
    }
}
// show quiz progress
function showProgress() {
    let currentQuestionNumber = Quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML =
    `Question ${currentQuestionNumbeer} of ${quiz.questions.length}`;
}
// show score
function showScores() {
    let quiEndHTML =
    `
    <h1>Quiz Complet</h1>
    <h2 id="score">Ton Score: ${quiz.score} of ${quiz.
    questions.length}</h2>
    <div class="quiz-repeat">
    <a href="index.html">Reprenez le Quiz
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quiEndHTML;
}
// create quiz Questions
let Questions = [
    new question(
        " Que signifie Hyper Text Markup Language?", ["JQery",
    "XHTML", "CSS", "HTML"], "HTML"
    ),

    new question(
        " Que signifie Cascading Style sheet?", ["XHTML", "JQery",
    "CSS", "XML"], "CSS"
    ),
    new question(
        "Qu'est ce qu'un Framework JavaScript?", ["React", "Laravel",
     "Django", "Sass"], "React"
    ),
    new question(
        "Qu'est qu'un language backend?", ["PHP", "HTML", "React",
    "All"], "PHP"
    ),
    new question(
        "Quelle est la meilleur intelligence artificielle?", ["React",
    "Laravel", "Python", "Sass"], "Python"
    )
];
let quiz = new Quiz(Questions);
// display question
 displayQuestion();

// ADD A COUNDOWN
let time = 1;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");
function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTimer <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTimer--;
            let sec = Math.floor(quizTimer % 60);
            let min = Math.floor(quizTimer / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000)
}

startCountdown();

