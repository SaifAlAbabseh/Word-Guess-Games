import styles from '../common_css/common.module.css';
import GoBackArrowButton from './goBackArrowButton';

function restartGame() {
    window.location.reload();
}

function TopBar() {
    return (
        <div className={styles.restartButtonBox}>
            <GoBackArrowButton />
            <button onClick={restartGame} className={styles.button}>Restart</button>
        </div>
    );
}

export default TopBar;