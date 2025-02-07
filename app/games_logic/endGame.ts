import styles2 from '../common_css/common.module.css';

function EndGame(message: string, textColor: string) {
    let messageBox = document.getElementById(`${styles2.messageBox}`);
    let messageText = document.getElementById(`${styles2.messageText}`);
    if(messageBox) messageBox.classList.add(`${styles2.messageBoxDisplay}`);
    if(messageText) {
        messageText.innerHTML = message;
        messageText.style.color = textColor;
    }
    let mainGamePanel = document.getElementById(`${styles2.gameMainPanel}`);
    if(mainGamePanel) mainGamePanel.style.pointerEvents = "none";
}

export default EndGame;