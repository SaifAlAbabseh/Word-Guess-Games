import styles from '../common_css/common.module.css';

function MessageBox() {
    return (
        <div className={styles.messageBox} id={styles.messageBox}>
            <h2 className={styles.messageText} id={styles.messageText}>
                Test Message
            </h2>
        </div>
    );
}

export default MessageBox;