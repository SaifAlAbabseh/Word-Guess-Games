import styles from '../common_css/common.module.css';

function MainPanel({ children } : Readonly<{ children: React.ReactNode }>) {
    return (
        <div className={styles.mainPanel}>
            { children}
        </div>
    );
}

export default MainPanel;