const words = [
  'Resume',
  'Refactor',
  'Repeat',
  'Render',
  'Exclaim',
  'Remain',
  'Contain',
  'Retain',
	'Alert',
  'Argue',
  'Above',
	'Alike',
	'Arise'	,
  'Abuse',
	'Alive',
  'Array'	,
  'Actor',
	'Allow',
  'Aside',
  'Began',
  'Blame',
  'Board',
  'Block',
  'Blind',
  'Below',
  'Beach',
  'Debut',
  'Entry',
  'Forth',
  'Group',
  'Delay',
  'Equal',
  'Grown',
  'Depth'
];
const unseenWords = [...words];
const seenWords = [];

const wordContainer = document.getElementById('word');

let score = 0;
let highScore = localStorage.getItem('highScore') || 0;

function displayFirstWord() {
  wordContainer.innerHTML = words[randomNum()];
  console.log('current word --> ', wordContainer.innerHTML);
  console.log('unseenWords:', unseenWords);
  console.log('seenWords:', seenWords);
}

function randomNum() {
  return Math.floor(Math.random() * words.length);
}

function setScore() {
  const scoreContainer = document.getElementById('score');
  scoreContainer.innerHTML = score;
}

function setHighScore() {
  const highScoreContainer = document.getElementById('highScore');
  highScoreContainer.innerHTML = highScore;
}

function updateHighScore() {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', highScore);
    setHighScore();
  }
}

function displayNextWord() {
  wordContainer.innerHTML = words[randomNum()];
  console.log('next word:', wordContainer.innerHTML);
}

function resetArrays() {
  seenWords.splice(0, seenWords.length);
  unseenWords.splice(0, unseenWords.length, ...words);
  console.log('Arrays reset.');
}

function correctAnswerAnimations() {

  const indicator_icon = document.querySelector('.indicator_icon');
  indicator_icon.classList.add('indicator_icon_correct');

  const scoreValue = document.getElementById('score');
  const scoreTxt = document.getElementById('scoreTxt');
  scoreValue.classList.add('correct_green_glow');
  scoreTxt.classList.add('correct_green_glow');

  setTimeout(() => {
    indicator_icon.classList.remove('indicator_icon_correct');
    scoreValue.classList.remove('correct_green_glow');
    scoreTxt.classList.remove('correct_green_glow');
  }, 800);
}

function incorrectAnswerAnimations() {

  const indicator_icon = document.querySelector('.indicator_icon');
  indicator_icon.classList.add('indicator_icon_incorrect');

  const scoreValue = document.getElementById('score');
  const scoreTxt = document.getElementById('scoreTxt');
  scoreValue.classList.add('incorrect_red_shake');
  scoreTxt.classList.add('incorrect_red_shake');

  setTimeout(() => {
    indicator_icon.classList.remove('indicator_icon_incorrect');
    scoreValue.classList.remove('incorrect_red_shake');
    scoreTxt.classList.remove('incorrect_red_shake');
  }, 800);
}

document.addEventListener('DOMContentLoaded', () => {
  displayFirstWord();
  setHighScore();
});

//button event listeners
const buttons = document.querySelectorAll('.btnChoice');
buttons.forEach(button => {
  button.addEventListener('click', (event) => wordCheck(event));
});

function wordCheck(event) {

  const currentWord = wordContainer.innerHTML;
  const clickedBtnId = event.target.id;

  if (clickedBtnId === 'btnSeen') {

    if (seenWords.includes(currentWord)) {

      score++;

      displayNextWord();
      setScore();
      updateHighScore();
      correctAnswerAnimations();

    } else {
    
      score = 0;

      setScore();
      resetArrays();
      displayFirstWord();
      incorrectAnswerAnimations();
    }
  }

  if (clickedBtnId === 'btnNotSeen') {

    if (unseenWords.includes(currentWord)) {

      score++;

      displayNextWord();
      setScore();
      updateHighScore();
      correctAnswerAnimations();

      seenWords.push(currentWord);
      unseenWords.splice(unseenWords.indexOf(currentWord), 1);

    } else {

      score = 0;

      setScore();
      resetArrays();
      displayFirstWord();
      incorrectAnswerAnimations();
    }
  }
}
