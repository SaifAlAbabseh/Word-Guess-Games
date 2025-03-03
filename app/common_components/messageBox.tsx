import styles from '../common_css/common.module.css';

function MessageBox() {
    return (
        <h2 className={styles.messageText} id={styles.messageText}>
        </h2>
    );
}

export default MessageBox;