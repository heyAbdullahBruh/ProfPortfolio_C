'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHandshake } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import Link from 'next/link';
import styles from './home.module.css';  // Import the CSS module
import Typed from '../TypeAnimation/Typed';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.homeContainer}>
                <div className={styles.intro}>
                    <h3>Hi.! I am <Typed strings={['Abdullah Shayed -<Turning Ideas into Interactive Web Solutions!>']} typeSpeed={50} /></h3>
                    <p>With 3+ years of experience and expertise in MERANN technologies, I build stunning websites and web apps that deliver results.</p>
                </div>

                <div className={styles.homeSec}>
                    <div className={styles.count1}>
                        <h3><CountUp end={30} duration={1} />+</h3>
                        <p>Complete Project</p>
                    </div>
                    <div className={styles.count1}>
                        <h3><CountUp end={25} duration={1} />+</h3>
                        <p>Happy Client</p>
                    </div>
                    <div className={styles.count1}>
                        <h3><CountUp end={8} duration={1} />+</h3>
                        <p>Running Project</p>
                    </div>
                    <div className={styles.count1}>
                        <h3><CountUp end={10} duration={1} />+</h3>
                        <p>Start Project</p>
                    </div>
                </div>

                <div className={styles.callAct}>
                    <Link href='/work'> 
                        <button className={styles.homeBtn}>
                            <FontAwesomeIcon icon={faEye} /> View My Work
                        </button>
                    </Link>
                    <Link href='/contact'> 
                        <button className={styles.homeBtn}>
                            Let’s Collaborate! <FontAwesomeIcon icon={faHandshake} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
