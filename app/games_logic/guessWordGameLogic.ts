import styles from '../guess_word_game/page.module.css';

// Global Variables

let language: string;
let word: string;
let wordLength: number;
let numberOfTries: number;
let numberOfHints: number;
let currentTryNumber: number;
let isWin: boolean;

let submitButton: HTMLElement | null;
let hintButton: HTMLElement | null;;
let hintLabel: HTMLElement | null;;
let wordBox: HTMLElement | null;;

// Functions

function LoadPage() {
    language = "en";
    word = "";
    wordLength = 6;
    numberOfTries = 5;
    numberOfHints = 3;
    currentTryNumber = 1;
    isWin = false;
    submitButton = document.getElementById(`${styles.submitButton}`);
    hintButton = document.getElementById(`${styles.hintButton}`);
    hintLabel = document.getElementById(`${styles.numberOfHints}`);
    wordBox = document.getElementById(`${styles.wordBox}`);
    // First we need to get the word to guess
    getWord();
    // Now we need to load the input fields for the game box(numberOfTries x wordLength)
    initGameBox();
    // Load how much hints we haves
    loadHints();
}

function getWord() {
    fetch("https://random-word-api.herokuapp.com/word?length=" + wordLength + "&lang=" + language)
        .then(response => {
            response.text()
                .then(data => {
                    let jsonData = JSON.parse(data);
                    word = jsonData[0].toUpperCase();
                })
        })
}

function moveLeft(colNum: number, rowNum: number) {
    if (colNum > 1) {
        for (let index = colNum - 1; index >= 1; index--) {
            if (!document.getElementById(rowNum + "_" + index)?.classList.contains(`${styles.inputFieldDisabled}`)) {
                let newId = rowNum + "_" + index;
                document.getElementById(newId)?.focus();
                break;
            }
        }
    }
}

function moveRight(colNum: number, rowNum: number) {
    if (colNum < wordLength) {
        for (let index = colNum + 1; index <= wordLength; index++) {
            if (!document.getElementById(rowNum + "_" + index)?.classList.contains(`${styles.inputFieldDisabled}`)) {
                let newId = rowNum + "_" + index;
                document.getElementById(newId)?.focus();
                break;
            }
        }
    }
}

function endGame(endMessage: string) {
    if (submitButton) {
        submitButton.style.pointerEvents = "none";
        submitButton.style.backgroundColor = "gray";
    }
    if (hintButton) {
        hintButton.style.pointerEvents = "none";
        hintButton.style.backgroundColor = "gray";
    }
    if (wordBox) wordBox.innerHTML = endMessage + word;
}

function checkLetter(isEnd: number, index: number) {
    let inputField = document.getElementById((currentTryNumber - isEnd) + "_" + index);
    inputField?.classList.remove(`${styles.inputFieldEnabled}`);
    inputField?.classList.add(`${styles.inputFieldDisabled}`);
    if (inputField && (inputField as HTMLInputElement).value === "") inputField.style.backgroundColor = "black"
    else if (word.includes((inputField as HTMLInputElement).value) && ("" + word.charAt(index - 1)) === (inputField as HTMLInputElement).value) (inputField as HTMLInputElement).style.backgroundColor = "green";
    else if (word.includes((inputField as HTMLInputElement).value) && ("" + word.charAt(index - 1)) !== (inputField as HTMLInputElement).value) (inputField as HTMLInputElement).style.backgroundColor = "orange";
    else (inputField as HTMLInputElement).style.backgroundColor = "black";
}

function initGameBox() {
    let gameBox = document.getElementById(`${styles.gameBox}`);
    for (let row = 1; row <= numberOfTries; row++) {
        let inputFieldsRow = document.createElement("div");
        inputFieldsRow.classList.add(`${styles.flexBox}`);
        inputFieldsRow.classList.add(`${styles.inputFieldsRow}`);
        let tryNumberLabel = document.createElement("h2");
        tryNumberLabel.id = "try_" + row;
        tryNumberLabel.innerHTML = "TRY #" + row;
        tryNumberLabel.classList.add(`${styles.tryNumberLabel}`);
        inputFieldsRow.appendChild(tryNumberLabel);
        for (let col = 1; col <= wordLength; col++) {
            let inputField = document.createElement("input");
            inputField.type = "text";
            inputField.id = row + "_" + col;
            inputField.classList.add(`${styles.inputField}`);
            inputField.autocomplete = "off";
            inputField.addEventListener("keyup", function (event) {

                let indexes = ("" + this.id).split("_");
                let rowNum = Number(indexes[0]);
                let colNum = Number(indexes[1]);

                if (event.key == "Tab" || event.key == "ArrowLeft" || event.key == "ArrowRight" || event.key == "Backspace") {
                    if (event.key == "Tab") if (this.classList.contains(`${styles.inputFieldDisabled}`)) this.blur();
                    if (event.key == "ArrowLeft" || event.key == "Backspace") moveLeft(colNum, rowNum);
                    else if (event.key == "ArrowRight") moveRight(colNum, rowNum);
                }
                else if ((("" + this.value).charCodeAt(0) >= 65 && ("" + this.value).charCodeAt(0) <= 90) || (("" + this.value).charCodeAt(0) >= 97 && ("" + this.value).charCodeAt(0) <= 122)) {
                    if (this.value.length > 1) this.value = ("" + this.value).substring(0, this.value.length - 1);
                    let upperCaseText = ("" + this.value).toUpperCase();
                    this.value = upperCaseText;
                    moveRight(colNum, rowNum);
                }
                else this.value = "";
            });
            if (row > 1) {
                inputField.classList.add(`${styles.inputFieldDisabled}`);
                tryNumberLabel.style.color = "gray";
            }
            else {
                inputField.classList.add(`${styles.inputFieldEnabled}`);
                tryNumberLabel.style.color = "white";
            }
            inputFieldsRow.appendChild(inputField);
        }
        gameBox?.appendChild(inputFieldsRow);
    }
}

function loadHints() {
    if (hintLabel) hintLabel.innerHTML = "" + numberOfHints;
}

function SubmitGuess() {
    if (currentTryNumber <= numberOfTries) {
        let userInput = "";
        for (let index = 1; index <= wordLength; index++) {
            let inputField = document.getElementById(currentTryNumber + "_" + index);
            userInput += (inputField as HTMLInputElement).value;
            checkLetter(0, index);
        }
        let tryNumberLabel = document.getElementById("try_" + currentTryNumber);
        if (tryNumberLabel) tryNumberLabel.style.color = "gray";
        currentTryNumber++;
        if (word === userInput) {
            isWin = true;
            endGame("You Won :) the word is: ");
        }
        else if (currentTryNumber != numberOfTries + 1) {
            let tryNumberLabel = document.getElementById("try_" + currentTryNumber);
            if (tryNumberLabel) tryNumberLabel.style.color = "white";
            for (let index = 1; index <= wordLength; index++) {
                let prevInputField = document.getElementById((currentTryNumber - 1) + "_" + index);
                let inputField = document.getElementById(currentTryNumber + "_" + index);
                inputField?.classList.remove(`${styles.inputFieldDisabled}`);
                inputField?.classList.add(`${styles.inputFieldEnabled}`);
                if (prevInputField?.style.backgroundColor === "green") {
                    inputField?.classList.remove(`${styles.inputFieldEnabled}`);
                    inputField?.classList.add(`${styles.inputFieldDisabled}`);
                    if (inputField) inputField.style.backgroundColor = "green";
                    (inputField as HTMLInputElement).value = (prevInputField as HTMLInputElement).value;
                }
            }
        }
    }
    if (currentTryNumber == 6 && !isWin) {
        for (let index = 1; index <= wordLength; index++) checkLetter(1, index);
        endGame("You Lost :( the correct word was: ");
    }
}

function PutHint() {
    numberOfHints--;
    if (hintLabel) hintLabel.innerHTML = "" + numberOfHints;
    if (numberOfHints == 0) {
        if (hintButton) {
            hintButton.style.pointerEvents = "none";
            hintButton.style.backgroundColor = "gray";
        }
    }

    let possiblePlaces = "";
    for (let index = 1; index <= wordLength; index++) {
        let inputField = document.getElementById(currentTryNumber + "_" + index);
        if (inputField?.style.backgroundColor !== "green") possiblePlaces += index;
    }
    let randomPlace = parseInt("" + Math.random() * possiblePlaces.length);
    let hintPlace = parseInt(possiblePlaces.charAt(randomPlace));
    let inputField = document.getElementById(currentTryNumber + "_" + hintPlace);
    inputField?.classList.remove(`${styles.inputFieldEnabled}`);
    inputField?.classList.add(`${styles.inputFieldDisabled}`);
    if (inputField) inputField.style.backgroundColor = "green";
    (inputField as HTMLInputElement).value = word.charAt(hintPlace - 1);
    let isAll = true;
    for (let i = 1; i <= wordLength; i++) {
        if (!document.getElementById(currentTryNumber + "_" + i)?.classList.contains(`${styles.inputFieldDisabled}`)) isAll = false;
    }
    if (isAll) {
        isWin = true;
        endGame("You Won :) the word is: ");
    }
}

export default { LoadPage, SubmitGuess, PutHint };