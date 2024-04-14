'use client'

import '../common_css/common.css';
import styles from './page.module.css';
import InitGame from '../games_logic/hangmanGameLogic';
import AboutFooter from '../common_components/aboutFooter';
import MainContainer from '../common_components/mainContainer';
import MainPanel from '../common_components/mainPanel';
import { useEffect } from 'react';
import TopBar from '../common_components/topBar';

function HangManGame() {

    useEffect(
        () => {
            InitGame();
        }, []);

    return (
        <MainContainer>
            <MainPanel>
                <TopBar />
                <div id={styles.gameUpperBoxContainer} className={styles.flexBoxCenter}>
                    <div id={styles.hangedManBox}>
                        <div id={styles.hangedManBase}></div>
                        <div id={styles.hangedManInvalid_1} className={styles.hiddenPart}></div>
                        <div id={styles.hangedManInvalid_2} className={styles.hiddenPart}></div>
                        <div id={styles.hangedManInvalid_3} className={styles.hiddenPart}></div>
                        <div id={styles.hangedManInvalid_4} className={styles.hiddenPart}></div>
                        <div id={styles.hangedManInvalid_5} className={styles.hiddenPart}></div>
                        <div id={styles.hangedManInvalid_6} className={styles.hiddenPart}></div>
                        <div id={styles.hangedManInvalid_7} className={styles.hiddenPart}></div>
                    </div>
                    <div id={styles.lettersBox} className={styles.flexBoxCenter}></div>
                </div>
                <div id={styles.gameLowerBoxContainer} className={styles.flexBoxCenter}></div>
            </MainPanel>
            <AboutFooter />
        </MainContainer>
    );


}

export default HangManGame;