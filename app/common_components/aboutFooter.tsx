import styles from '../common_css/common.module.css';
import Link from 'next/link';

function AboutFooter() {
    return (
        <div className={styles.footer}>
            <p>Developed By Saif AlAbabseh</p>
            <Link href="/about" className={styles.aboutLink}>
                About Me
            </Link>
        </div>
    );
}

export default AboutFooter;