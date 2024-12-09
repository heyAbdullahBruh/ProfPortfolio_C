'use client';
import styles from './Navber.module.css'; // Import the module CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload, faHome, faPhone, faPodcast, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faEye, faListAlt, faMoon, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faGithub, faInstagramSquare, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Typed from '../TypeAnimation/Typed';

const Navber = () => {

    return (
        <div className={styles.navber}>
            <div className={styles.navSec1}>
                <div className={styles.navSecDwn}>
                    {[' ', 'about', 'resume', 'work', 'blog', 'contact', 'team'].map((route, idx) => (
                        <div className={styles.link} key={idx}>
                            <Link className={styles.navLink} href={`/${route}`}>
                                <FontAwesomeIcon
                                    icon={[
                                        faHome,
                                        faUser,
                                        faListAlt,
                                        faEye,
                                        faPodcast,
                                        faPhone,
                                        faUsers,
                                    ][idx]}
                                />
                                <br />
                                <span>{route.charAt(0).toUpperCase() + route.slice(1).replace('_', ' ')}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.navSec2}>
                <div className={styles.backImg}></div>
                <div className={styles.navSec2Txt}>
                    <img src={'https://i.ibb.co.com/dLBnBC7/me.jpg'} alt="Profile" />
                    <h1>Abu Sayed</h1>
                    <h3>
                        Expert in{' '}
                        <Typed
                            strings={[
                                'Web Development',
                                'Front-End Development',
                                'Backend Development',
                                'MongoDB',
                            ]}
                            typeSpeed={150}
                            backSpeed={100}
                            loop
                        />
                    </h3>
                    <div className={styles.socialIcn}>
                        {[
                            { href: 'https://github.com/MrAbuSayed', icon: faLinkedin },
                            { href: 'https://facebook.com/Developer.Sayed.1', icon: faFacebook },
                            { href: 'https://twitter.com/DeveloperShayed', icon: faTwitter },
                            { href: 'https://www.instagram.com/developer_sayed/', icon: faInstagramSquare },
                            { href: 'https://github.com/MrAbuSayed', icon: faGithub },
                        ].map(({ href, icon }, idx) => (
                            <Link key={idx} target="_blank" href={href} className={styles.sclLnk}>
                                <FontAwesomeIcon icon={icon} />
                            </Link>
                        ))}
                    </div>
                    <div className={styles.navBtn}>
                        <a href="https://pdflink.to/ab846943/" target="blank">
                            <button className={styles.contactBtn}>
                                Download CV &nbsp; <FontAwesomeIcon icon={faCloudDownload} />
                            </button>
                        </a>
                        <Link href="/contact">
                            <button className={styles.cvBtn}>
                                Contact Me &nbsp; <FontAwesomeIcon icon={faTelegram} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;
