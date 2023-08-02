
// This Code is Coded And Designed By @Naim
// Original Author And Developer is @Naim
// Give Proper Credit If u use it.
// All Rights Reserved By @Naim
// https://github.com/FollowNaim



// JS START

const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word");
const guessesText = document.querySelector(".guesses-txt");
const gameModel = document.querySelector(".game-model");
const correctWord = document.querySelector(".correct-word");
const tryAgain = document.querySelector(".try-again");
const hangImg = document.querySelector(".img-box img");
const mainContainer = document.querySelector(".container");
let currentWord;
let wrongGuess = 0;
let maxGuess = 6;
let imagesIndex = -1;
let correctLetters = [];
const clickedLetters = [];

const images = [
  "/images/hangman-1.svg",
  "/images/hangman-2.svg",
  "/images/hangman-3.svg",
  "/images/hangman-4.svg",
  "/images/hangman-5.svg",
  "/images/hangman-6.svg"
];

// Adding All buttons 

for (let i = 97; i < 123; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.append(button);

  button.addEventListener("click", (e) => {
    console.log("btn clicked");
    initGame(e.currentTarget, String.fromCharCode(i));
  });
}

// Iniatlizing The Game

const initGame = (button,clickedLetter)=>{
 if(currentWord.includes(clickedLetter)){
 [...currentWord].forEach((letter,index)=>{
  if(letter === clickedLetter){
   correctLetters.push(letter);
   wordDisplay.querySelectorAll("li")[index].innerText = letter;
   wordDisplay.querySelectorAll("li")[index].classList.add("gussed");
  }
 })
 }else{
  wrongGuess++;
  imagesIndex++;
  hangImg.src = images[imagesIndex]
 }
  button.disabled = true;
  guessesText.innerText = `${wrongGuess} / ${maxGuess}`;
  
  if(wrongGuess == maxGuess) return gameOver (false);
  if(correctLetters.length === currentWord.length) return gameOver (true);
}

// Game Over Functionality

const gameOver = (isVictory) => {
 if (isVictory) {
  gameModel.style.display = "block";
  const gameResults = document.querySelector(".game-results");
  gameResults.querySelector("img").src = "/images/victory.gif";
  gameResults.querySelector("h3").innerHTML = `You Found The Word <span class>${currentWord}</span>`
  gameResults.querySelector("button").textContent = "Play Again";
  gameModel.classList.add("show")
  
 } else {
  gameModel.classList.add("show")
  gameModel.style.display = "block";
  correctWord.innerText = currentWord;
 }

}


tryAgain.addEventListener("click", () => {
  location.reload();
});


//Generating Word Dynamatically

const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  document.querySelector(".hint-txt b").innerText = hint;
  console.log(word);
  wordDisplay.innerHTML = word
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  currentWord = word;
};

getRandomWord();

// JS END

// This Code is Coded And Designed By @Naim
// Original Author And Developer is @Naim
// Give Proper Credit If u use it.
// All Rights Reserved By @Naim
// https://github.com/FollowNaim