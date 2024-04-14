import Link from 'next/link';
import Image from 'next/image';
import backArrowIcon from '../../public/backArrowIcon.svg';
import styles from '../common_css/common.module.css';

function GoBackArrowButton() {
    return (
        <Link href="/">
            <Image src={backArrowIcon} alt={'back arrow icon'} className={styles.backArrowSvg} priority />
        </Link>
    );
}

export default GoBackArrowButton;