'use client'

import styles from './page.module.css';
import '../common_css/common.css';
import AboutFooter from '../common_components/aboutFooter';
import MainContainer from '../common_components/mainContainer';
import MainPanel from '../common_components/mainPanel';
import TopBar from '../common_components/topBar';
import InitGame from '../games_logic/memoryGameLogic';
import { useEffect } from 'react';


function memoryGame() {

    useEffect(
        () => {
            InitGame();
        }, []);

    return (
        <MainContainer>
            <MainPanel>
                <TopBar />
                <div className={`${styles.mainGameBoxParent} ${styles.flexBoxCentered}`} id={styles.mainGameBoxParent}>
                    <div className={`${styles.mainGameBox} ${styles.flexBoxCentered}`}>
                        <h1 className={styles.wrongTriesCounterBox}>
                            There're 3 of each card
                        </h1>
                        <h1 className={styles.wrongTriesCounterBox}>
                            Wrong Tries: <label id={styles.wrongTriesCounter}>0</label>
                        </h1>
                        <div className={`${styles.mainGameBox} ${styles.flexBoxCentered}`} id={styles.gameBox}>
                        </div>
                    </div>
                </div>
            </MainPanel>
            <AboutFooter />
        </MainContainer>
    );
}

export default memoryGame;