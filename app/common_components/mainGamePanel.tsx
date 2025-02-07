import styles from '../common_css/common.module.css';

function MainGamePanel({ children } : Readonly<{ children: React.ReactNode }>) {
    return (
        <div className={styles.gameMainPanel} id={styles.gameMainPanel}>
            { children }
        </div>
    );
}

export default MainGamePanel;