const words = [
  'resume',
  'refactor',
  'repeat',
  'render',
  'exclaim',
  'remain',
  'contain',
  'retain',
  "about",
  "also",
  "because",
  "come",
  "could",
  "even",
  "find",
  "first",
  "from",
  "give",
  "into",
  "just",
  "know",
  "like",
  "look",
  "make",
  "many",
  "more",
  "only",
  "other",
  "people",
  "some",
  "take",
  "tell",
  "than",
  "that",
  "the",
  "their",
  "them",
  "then",
  "there",
  "these",
  "they",
  "thing",
  "think",
  "this",
  "those",
  "time",
  "very",
  "want",
  "well",
  "what",
  "when",
  "which",
  "will",
  "with",
  "would"
];
const unseenWords = [
  'resume',
  'refactor',
  'repeat',
  'render',
  'exclaim',
  'remain',
  'contain',
  'retain',
  "about",
  "also",
  "because",
  "come",
  "could",
  "even",
  "find",
  "first",
  "from",
  "give",
  "into",
  "just",
  "know",
  "like",
  "look",
  "make",
  "many",
  "more",
  "only",
  "other",
  "people",
  "some",
  "take",
  "tell",
  "than",
  "that",
  "the",
  "their",
  "them",
  "then",
  "there",
  "these",
  "they",
  "thing",
  "think",
  "this",
  "those",
  "time",
  "very",
  "want",
  "well",
  "what",
  "when",
  "which",
  "will",
  "with",
  "would"
];
const seenWords = [
  
];

const wordContainer = document.getElementById('word');

let score = 0;

function displayFirstWord() {
  wordContainer.innerHTML = unseenWords[randomNum()];
}

function randomNum() {
  return Math.floor(Math.random()* 55);
};

function viewInfoCard() {
  const infoBox = document.querySelector('.info_box');
  infoBox.classList.remove('active_info_box');
}

function setScore() {
  const scoreContainer = document.getElementById('score');
  scoreContainer.innerHTML = score;
}

document.addEventListener('DOMContentLoaded', () => {
  displayFirstWord();
});

document.querySelector('.indicator_icon').addEventListener('mouseover', () => {
  const infoBox = document.querySelector('.info_box');
  infoBox.classList.add('active_info_box');
});

document.querySelector('.indicator_icon').addEventListener('mouseout', () => {
  setTimeout(viewInfoCard, 3000)
});

//button event listeners
const buttons = document.querySelectorAll('.btnChoice');
buttons.forEach(button => {
  button.addEventListener('click', (event) => displayNextWord(event));
});

function displayNextWord(event) {
  
  const clickedBtnTxt = event.target.innerHTML;

  const lastWord = wordContainer.innerHTML;
  const lastWordIndex = words.indexOf(lastWord);

  const currentWord = words[randomNum()];
  const currentWordIndex = words.indexOf(currentWord);


  //If seen btn is clicked
  if (clickedBtnTxt === 'Seen') {

    //check if the word has been seen before
    if (seenWords.indexOf(lastWord) !== -1) {
      console.log('correct');
      score++;
      setScore();

      unseenWords.splice(lastWordIndex, 1);
      seenWords.push(lastWord);

      wordContainer.innerHTML = currentWord;

      const indicator_icon = document.querySelector('.indicator_icon');
      indicator_icon.classList.remove('indicator_icon');
      indicator_icon.classList.add('indicator_icon_correct');
      setTimeout(() => {
        indicator_icon.classList.remove('indicator_icon_correct');
        indicator_icon.classList.add('indicator_icon');
      }, 1000);
    }else {
      console.log('incorrect');
      score = 0;
      setScore();
      displayFirstWord();

      const indicator_icon = document.querySelector('.indicator_icon');
      indicator_icon.classList.remove('indicator_icon');
      indicator_icon.classList.add('indicator_icon_incorrect');
      setTimeout(() => {
        indicator_icon.classList.remove('indicator_icon_incorrect');
        indicator_icon.classList.add('indicator_icon');
      }, 1000);
    }
    console.log(`last word: \"${lastWord}"\ index: ${lastWordIndex} ||`, `current word: \"${currentWord}"\ index: ${currentWordIndex}`, `unseen words: ${unseenWords}`, `seen words: ${seenWords}`);
  }


  //If not seen btn is clicked
  if (clickedBtnTxt === 'Not Seen') {

    //check if the word has not been seen before
    if (unseenWords.indexOf(lastWord) !== -1) {
      console.log('correct');
      score++;
      setScore();
      

      unseenWords.splice(lastWordIndex, 1);
      seenWords.push(lastWord);
      
      wordContainer.innerHTML = currentWord;

      const indicator_icon = document.querySelector('.indicator_icon');
      indicator_icon.classList.remove('indicator_icon');
      indicator_icon.classList.add('indicator_icon_correct');
      setTimeout(() => {
        indicator_icon.classList.remove('indicator_icon_correct');
        indicator_icon.classList.add('indicator_icon');
      }, 1000);
    }else {
      console.log('incorrect');
      score = 0;
      setScore();
      displayFirstWord();

      const indicator_icon = document.querySelector('.indicator_icon');
      indicator_icon.classList.remove('indicator_icon');
      indicator_icon.classList.add('indicator_icon_incorrect');
      setTimeout(() => {
        indicator_icon.classList.remove('indicator_icon_incorrect');
        indicator_icon.classList.add('indicator_icon');
      }, 2000);
    }
    console.log(`last word: \"${lastWord}"\ index: ${lastWordIndex} ||`, `current word: \"${currentWord}"\ index: ${currentWordIndex}`, `unseen words: ${unseenWords}`, `seen words: ${seenWords}`);
  }
}
