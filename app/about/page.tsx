import '../common_css/common.css';
import styles from './page.module.css';
import GoBackArrowButton from '../common_components/goBackArrowButton';

function About() {
    return (
        <div className={styles.aboutMePanel}>
            <GoBackArrowButton />
            <h3 className={styles.intro}>
                My name is Saif AlAbabseh, I'm a Software Engineer, and I'm working as a Quality Engineer at Aspire IT Services.
            </h3>
            <h3 className={styles.intro}>
                Here are my contact details:
            </h3>
            <h2 className={styles.contactLinkLabel}>
                Email: <a className={styles.contactLink} href="mailto:sababseh97@gmail.com">sababseh97@gmail.com</a>
            </h2>
            <h2 className={styles.contactLinkLabel}>
                GitHub: <a target="_blank" className={styles.contactLink} href="https://github.com/SaifAlAbabseh">https://github.com/SaifAlAbabseh</a>
            </h2>
            <h2 className={styles.contactLinkLabel}>
                LinkedIn: <a target="_blank" className={styles.contactLink} href="https://www.linkedin.com/in/saif-alababseh-aa4513240/">https://www.linkedin.com/in/saif-alababseh-aa4513240/</a>
            </h2>
        </div>
    );
}

export default About;