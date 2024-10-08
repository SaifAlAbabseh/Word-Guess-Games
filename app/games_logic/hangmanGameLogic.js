import styles from '../hangman_game/page.module.css';
import styles2 from '../common_css/common.module.css';

// Global Variables
let lowerBox;
let lettersBox;

let wordLength;
let correctEnteredLetters;
let currentInvalidNumber;
let numberOfTries;
let language;
let word;

// Functions
function InitGame() {
    lowerBox = document.getElementById(`${styles.gameLowerBoxContainer}`);
    lettersBox = document.getElementById(`${styles.lettersBox}`);
    wordLength = 6;
    correctEnteredLetters = [];
    currentInvalidNumber = 0;
    numberOfTries = 7;
    language = "en";
    word = "";
    // Initialize a word
    initWord();
    if (word === "") {
        setTimeout(function () {
            if (word === "") {
                endGame("Server Error, reload the page please..");
            }
        }, 2000);
    }
    // Initialize the input fields
    initInputFields();
    // Initialize the letters buttons
    initLettersButtons();
}

function initInputFields() {
    for (let i = 1; i <= wordLength; i++) {
        let inputField = document.createElement("div");
        inputField.classList.add(`${styles.inputField}`);
        inputField.id = "field_" + i;
        lowerBox.appendChild(inputField);
    }
}

function initLettersButtons() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < letters.length; i++) {
        let letterButton = document.createElement("button");
        letterButton.classList.add(`${styles.letterButton}`);
        letterButton.innerHTML = letters.charAt(i);
        letterButton.addEventListener("click", letterClicked);
        lettersBox.appendChild(letterButton);
    }
}

function letterClicked() {
    let clickedLetter = this.innerHTML;
    if (word.includes(clickedLetter)) {
        let countLetterInWord = countLetterOccurrencesInWord(clickedLetter);
        let countLetterInArray = countLetterOccurrencesInArray(clickedLetter);
        if (countLetterInWord.length > countLetterInArray.length) {
            let possiblePlaces = getPossiblePlaces(countLetterInWord, countLetterInArray);
            for (let i = 0; i < possiblePlaces.length; i++) {
                let field = document.getElementById("field_" + (possiblePlaces[i] + 1));
                field.innerHTML = clickedLetter;
                correctEnteredLetters[possiblePlaces[i]] = clickedLetter;
            }
            this.disabled = true;
            this.classList.remove(`${styles.letterButton}`);
            this.classList.add(`${styles.letterButtonDisabled}`);
            if (correctEnteredLetters.join("") === word) endGame("You Won :) The Word Is: \"" + word + "\"", "green");
        }
        else invalid(this);
    }
    else invalid(this);
}

function getPossiblePlaces(occurrencesInWordArray, occurrencesInArrayArray) {
    let possiblePlaces = [];
    let index = 0;
    for (let i = 0; i < occurrencesInWordArray.length; i++) {
        if (!occurrencesInArrayArray.includes(occurrencesInWordArray[i])) {
            possiblePlaces[index] = occurrencesInWordArray[i];
            index++;
        }
    }
    return possiblePlaces;
}

function countLetterOccurrencesInWord(letter) {
    let count = [];
    let index = 0;
    for (let i = 0; i < wordLength; i++) {
        if (word.charAt(i) === letter) {
            count[index] = i;
            index++
        }
    }
    return count;
}

function countLetterOccurrencesInArray(letter) {
    let count = [];
    let index = 0;
    for (let i = 0; i < correctEnteredLetters.length; i++) {
        if (correctEnteredLetters[i] === letter) {
            count[index] = i;
            index++
        }
    }
    return count;
}

function invalid(clickedLetterButton) {
    clickedLetterButton.disabled = true;
    clickedLetterButton.classList.remove(`${styles.letterButton}`);
    clickedLetterButton.classList.add(`${styles.letterButtonDisabled}`);
    currentInvalidNumber++;
    let hangedManPartReveal = document.querySelector(`[id*="hangedManInvalid_${currentInvalidNumber}"]`);
    hangedManPartReveal.classList.remove(`${styles.hiddenPart}`);
    if (currentInvalidNumber == numberOfTries) endGame("You've Lost :( The Word Was: \"" + word + "\"", "red");
}

function endGame(message, textColor) {
    let endGameBox = document.createElement("div");
    endGameBox.innerHTML = message;
    endGameBox.style.color = textColor;
    endGameBox.classList.add(`${styles.afterGameBox}`);
    endGameBox.classList.add(`${styles.flexBoxCenter}`);
    document.getElementById(`${styles2.mainContainer}`).appendChild(endGameBox);
    let letterButtons = document.querySelectorAll(`[class*="letterButton"]`);
    letterButtons.forEach(element => {
        element.style.pointerEvents = "none";
    });
}

function initWord() {
    fetch("https://random-word-api.herokuapp.com/word?length=" + wordLength + "&lang=" + language)
        .then(response => {
            response.text()
                .then(data => {
                    let jsonData = JSON.parse(data);
                    word = jsonData[0].toUpperCase();
                })
        })
}

export default InitGame;