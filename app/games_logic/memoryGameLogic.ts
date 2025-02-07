import styles from '../memory_game/page.module.css';
import endGame from '../games_logic/endGame';

const numberOfRows = 3;
const numberOfColumns = 5;
const numberOfCardDuplication = 3;
const cardPath = "../../cards/";
let wrongTriesCounter: HTMLElement | null;
let cardNames: Array<string>;
let cards: Array<string>;
let cardCount: Array<number>;
let cardsCorrect: Array<number>;
let prevCard: string | null;
let wrongTriesCount: number;

function InitGame() {
    wrongTriesCounter = document.getElementById(`${styles.wrongTriesCounter}`);
    cardNames = ["apple.png", "banana.png", "berry.png", "orange.png", "watermelon.png"];
    cardCount = [0, 0, 0, 0, 0];

    cards = ["apple.png", "banana.png", "berry.png", "orange.png", "watermelon.png"];
    cardsCorrect = [0, 0, 0, 0, 0];
    prevCard = null;
    wrongTriesCount = 0;

    initBoxes();
}

function initBoxes() {
    let gameBox = document.getElementById(`${styles.gameBox}`);
    for (let i = 1; i <= numberOfRows; i++) {
        let boxesRow = document.createElement("div");
        boxesRow.classList.add(`${styles.boxesRow}`);
        for (let j = 1; j <= numberOfColumns; j++) {
            let newBox = document.createElement("div");
            newBox.classList.add(`${styles.box}`);
            newBox.id = "box_" + i + "_" + j;
            let card = document.createElement("img");
            card.classList.add(`${styles.card}`);
            card.id = "card_" + i + "_" + j;
            let randomPos = Math.floor(Math.random() * cardNames.length);
            let randomCard = cardNames[randomPos]
            card.src = cardPath + randomCard;
            newBox.onclick = () => {
                boxClicked(newBox, card, randomCard)
            };
            newBox.appendChild(card);
            boxesRow.appendChild(newBox);
            cardCount[randomPos]++;
            if (cardCount[randomPos] == numberOfCardDuplication) {
                cardCount.splice(randomPos, 1);
                cardNames.splice(randomPos, 1);
                randomPos = Math.floor(Math.random() * cardNames.length);
            }
        }
        gameBox?.appendChild(boxesRow);
    }
}

function boxClicked(box: HTMLElement, clickedCard: HTMLElement, card: string) {
    clickedCard.classList.add(`${styles.clickedCard}`);
    box.style.pointerEvents = "none";
    if (prevCard !== null && card !== prevCard) {
        wrongTriesCount++;
        if(wrongTriesCounter) wrongTriesCounter.innerHTML = "" + wrongTriesCount;
        for (let i = 1; i <= numberOfRows; i++) {
            for (let j = 1; j <= numberOfColumns; j++) {
                let card = document.getElementById("card_" + i + "_" + j);
                let boxElement = document.getElementById("box_" + i + "_" + j);
                setTimeout(function () {
                    card?.classList.remove(`${styles.clickedCard}`);
                    if(boxElement) boxElement.style.pointerEvents = "all";
                }, 300);
                cardsCorrect = [0, 0, 0, 0, 0];
                prevCard = null;
            }
        }
    }
    else if (prevCard !== null && card === prevCard && cardsCorrect[cards.indexOf(card)] !== numberOfCardDuplication) {
        cardsCorrect[cards.indexOf(card)]++;
        if (cardsCorrect[cards.indexOf(card)] === numberOfCardDuplication) prevCard = null;
    }
    else if (prevCard === null) {
        cardsCorrect[cards.indexOf(card)]++;
        prevCard = card;
    }

    let isWin = true;
    for (const element of cardsCorrect) {
        if (element !== 3) isWin = false;
    }
    if (isWin) {
        endGame("You've won :)", "green");
    }
}

export default InitGame;