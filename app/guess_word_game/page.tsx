'use client'

import '../common_css/common.css';
import styles from './page.module.css';
import AboutFooter from '../common_components/aboutFooter';
import MainContainer from '../common_components/mainContainer';
import MainPanel from '../common_components/mainPanel';
import { useEffect } from 'react';
import TopBar from '../common_components/topBar';
import GameLogic from '../games_logic/guessWordGameLogic';

function GuessWordGame() {

    useEffect(
        () => {
            GameLogic.LoadPage();
        }
    , []);

    return (
        <MainContainer>
            <MainPanel>
                <TopBar />
                <div className={`${styles.parentBox} ${styles.flexBox}`}>
                    <div className={`${styles.gameTitleBox} ${styles.flexBoxCenter}`}>
                        <h1 className={styles.gameTitle}>
                            Word Guess Game
                        </h1>
                    </div>
                    <div className={`${styles.gameParentBox} ${styles.flexBox}`}>
                        <div className={`${styles.gameLeftBox} ${styles.flexBox}`}>
                            <div className={styles.flexBox} id={styles.gameBox}>
                            </div>
                            <div className={`${styles.buttonsBox} ${styles.flexBox}`}>
                                <button className={`${styles.button} ${styles.submitButton}`} id={styles.submitButton} onClick={GameLogic.SubmitGuess}>SUBMIT</button>
                                <button className={`${styles.button} ${styles.hintButton}`} id={styles.hintButton} onClick={GameLogic.PutHint}>HINTS: <label id={styles.numberOfHints}></label></button>
                            </div>
                        </div>
                        <div className={`${styles.gameRulesBox} ${styles.flexBox}`}>
                            <h2 className={styles.subTitle}>Letter Colors:</h2>
                            <h2 className={`${styles.ruleParentBox} ${styles.flexBox}`} style={{ color: "green" }}>
                                <div className={styles.ruleBox} style={{ backgroundColor: "green" }}></div>
                                Correct Letter And In The Correct Place
                            </h2>
                            <h2 className={`${styles.ruleParentBox} ${styles.flexBox}`}>
                                <div className={styles.ruleBox} style={{ backgroundColor: "black" }}></div>
                                Wrong Letter And Doesn't Exist
                            </h2>
                            <h2 className={`${styles.ruleParentBox} ${styles.flexBox}`} style={{ color: "orange" }}>
                                <div className={styles.ruleBox} style={{ backgroundColor: "orange" }}></div>
                                Correct Letter But In The Wrong Place
                            </h2>
                            <div id={styles.wordBox}>
                            </div>
                        </div>
                    </div>
                </div>
            </MainPanel>
            <AboutFooter />
        </MainContainer>
    );
}

export default GuessWordGame;