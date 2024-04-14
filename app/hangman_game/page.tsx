"use client"

import '../common_css/common.css';
import './page.css';
import InitGame from "../games_logic/hangmanGameLogic";
import AboutFooter from "../common_components/aboutFooter";
import MainContainer from "../common_components/mainContainer";
import MainPanel from "../common_components/mainPanel";
import { useEffect } from 'react';

function HangManGame() {

    useEffect(
        () => {
            InitGame();
        }, []);


    return (
        <MainContainer>
            <MainPanel>
                <div id="game-upper-box-container" className="flex-box-center">
                    <div className="flex-box-center column-box">
                        <div className="restart-button-box">
                            <button className="button">Restart</button>
                        </div>
                        <div id="hanged-man-box">
                            <div id="hanged-man-base"></div>
                            <div id="hanged-man-invalid-1" className="hidden-part"></div>
                            <div id="hanged-man-invalid-2" className="hidden-part"></div>
                            <div id="hanged-man-invalid-3" className="hidden-part"></div>
                            <div id="hanged-man-invalid-4" className="hidden-part"></div>
                            <div id="hanged-man-invalid-5" className="hidden-part"></div>
                            <div id="hanged-man-invalid-6" className="hidden-part"></div>
                            <div id="hanged-man-invalid-7" className="hidden-part"></div>
                        </div>
                    </div>
                    <div id="letters-box" className="flex-box-center"></div>
                </div>
                <div id="game-lower-box-container" className="flex-box-center"></div>
            </MainPanel>
            <AboutFooter />
        </MainContainer>
    );


}

export default HangManGame;