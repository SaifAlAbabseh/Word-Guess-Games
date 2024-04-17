import styles from '../common_css/common.module.css';

function MainContainer({ children } : { children: React.ReactNode }) {
    return (
        <main className={styles.mainContainer} id={styles.mainContainer}>
            { children }
        </main>
    );
}

export default MainContainer;