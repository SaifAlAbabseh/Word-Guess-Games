import styles from '../hangman_game/page.module.css';
import styles2 from '../common_css/common.module.css';

// Global Variables
let lowerBox: HTMLElement | null;
let lettersBox: HTMLElement | null;

let wordLength: number;
let correctEnteredLetters: Array<string>;
let currentInvalidNumber: number;
let numberOfTries: number;
let language: string;
let word: string;

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
                endGame("Server Error, reload the page please..", "red");
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
        lowerBox?.appendChild(inputField);
    }
}

function initLettersButtons() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < letters.length; i++) {
        let letterButton = document.createElement("button");
        letterButton.classList.add(`${styles.letterButton}`);
        letterButton.innerHTML = letters.charAt(i);
        letterButton.addEventListener("click", letterClicked);
        lettersBox?.appendChild(letterButton);
    }
}

function letterClicked(this: HTMLButtonElement) {
    let clickedLetter = this.innerHTML;
    if (word.includes(clickedLetter)) {
        let countLetterInWord = countLetterOccurrencesInWord(clickedLetter);
        let countLetterInArray = countLetterOccurrencesInArray(clickedLetter);
        if (countLetterInWord.length > countLetterInArray.length) {
            let possiblePlaces = getPossiblePlaces(countLetterInWord, countLetterInArray);
            for (const element of possiblePlaces) {
                let field = document.getElementById("field_" + (element + 1));
                if(field) field.innerHTML = clickedLetter;
                correctEnteredLetters[element] = clickedLetter;
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

function getPossiblePlaces(occurrencesInWordArray: Array<number>, occurrencesInArrayArray: Array<number>) {
    let possiblePlaces = [];
    let index = 0;
    for (const element of occurrencesInWordArray) {
        if (!occurrencesInArrayArray.includes(element)) {
            possiblePlaces[index] = element;
            index++;
        }
    }
    return possiblePlaces;
}

function countLetterOccurrencesInWord(letter: string) {
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

function countLetterOccurrencesInArray(letter: string) {
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

function invalid(clickedLetterButton: HTMLButtonElement) {
    clickedLetterButton.disabled = true;
    clickedLetterButton.classList.remove(`${styles.letterButton}`);
    clickedLetterButton.classList.add(`${styles.letterButtonDisabled}`);
    currentInvalidNumber++;
    let hangedManPartReveal = document.querySelector(`[id*="hangedManInvalid_${currentInvalidNumber}"]`);
    hangedManPartReveal?.classList.remove(`${styles.hiddenPart}`);
    if (currentInvalidNumber == numberOfTries) endGame("You've Lost :( The Word Was: \"" + word + "\"", "red");
}

function endGame(message: string, textColor: string) {
    let endGameBox = document.createElement("div");
    endGameBox.innerHTML = message;
    endGameBox.style.color = textColor;
    endGameBox.classList.add(`${styles.afterGameBox}`);
    endGameBox.classList.add(`${styles.flexBoxCenter}`);
    document.getElementById(`${styles2.mainContainer}`)?.appendChild(endGameBox);
    let letterButtons = document.querySelectorAll(`[class*="letterButton"]`);
    letterButtons.forEach(element => {
        (element as HTMLButtonElement).style.pointerEvents = "none";
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