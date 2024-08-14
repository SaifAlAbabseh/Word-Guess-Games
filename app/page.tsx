import styles from './page.module.css';
import './common_css/common.css';
import Link from 'next/link';
import Image from 'next/image';
import hangmanIcon from '../public/hangmanGameIcon.svg';
import guessWordGameIcon from '../public/guessWordGameIcon.svg';
import memoryGameIcon from '../public/memoryGameIcon.svg';
import AboutFooter from './common_components/aboutFooter';
import MainContainer from './common_components/mainContainer';
import MainPanel from './common_components/mainPanel';

function Home() {

  return (
    <MainContainer>
      <MainPanel>
        <div className={styles.linksContainer}>
          <Link href="/hangman_game" className={styles.gameLink} id={styles.hangManGameLink}>
            <Image src={hangmanIcon} alt={'hangman icon'} className={styles.svgIcon} priority />
            <br />
            Play HangMan Game
          </Link>
          <Link href="/guess_word_game" className={styles.gameLink} id={styles.guessWordGameLink}>
            <Image src={guessWordGameIcon} alt={'word guess game icon'} className={styles.svgIcon} priority />
            <br />
            Play Guess Word Game
          </Link>
          <Link href="/memory_game" className={styles.gameLink} id={styles.memoryGameLink}>
            <Image src={memoryGameIcon} alt={'memory game icon'} className={styles.svgIcon} priority />
            <br />
            Play Memory Game
          </Link>
        </div>
      </MainPanel>
      <AboutFooter />
    </MainContainer>
  );
}

export default Home;