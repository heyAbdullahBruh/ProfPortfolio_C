"use client";
import styles from './nav.module.css'; // Import the module CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload, faHome, faPhone, faPodcast, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faEye, faListAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faGithub, faInstagramSquare, faLinkedin, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Typed from '../TypeAnimation/Typed';
import { useEffect, useState } from 'react';

const Navber = () => {

     
    // const thisLocation=window.location.pathname.split('/')[1];
 
    const [routeId ,setRoute ]=useState(' ');

    useEffect(() => {
        const path = window.location.pathname.split("/")[1];
        setRoute(path);
      }, []);
    // console.log(thisLocation);

    const handleRoute = ()=>{
        switch (routeId) {
            case ' ': return ' ';
            case 'about': return 'about';
            case 'resume': return 'resume';
            case 'work': return 'work';
            case 'blog': return 'blog';
            case 'contact': return 'contact';
            case 'team': return 'team';
            default: return routeId;
        };
    };

    // console.log(handleRoute());


    return (
        <div className={styles.navber}>
            <div className={styles.navSec1}>
                <div className={styles.navSecDwn}>
                    {[' ', 'about', 'resume', 'work', 'blog', 'contact', 'team'].map((route, idx) => (
                        <div className={`${styles.link} ${route===handleRoute() ? styles.activeBorder : ''}`} key={idx}>
                            <Link className={`${styles.navLink} ${route===handleRoute() ? styles.active : ''}`} href={`/${route}`} onClick={()=> setRoute(route)}>
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
                    <img src={'https://i.ibb.co.com/DgNTJpJ/me.png'} alt="Profile" />
                    <h1>Abdullah Sayed</h1>
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
                            { href: 'https://www.linkedin.com/in/heyabdullahbro', icon: faLinkedin },
                            { href: 'https://facebook.com/Mr.Pie0', icon: faFacebook },
                            { href: 'https://x.com/MrPieX', icon: faXTwitter },
                            { href: 'https://www.instagram.com/Mr.1Pie/', icon: faInstagramSquare },
                            { href: 'https://github.com/heyabdullahbruh', icon: faGithub },
                            { href: 'https://github.com/MrPieee', icon: faGithub },
                        ].map(({ href, icon }, idx) => (
                            <Link key={idx} target="_blank" href={href} className={styles.sclLnk}>
                                <FontAwesomeIcon icon={icon} />
                            </Link>
                        ))}
                    </div>
                    <div className={styles.navBtn}>
                        <a href="https://pdflink.to/ab846943/" target="blank">
                            <button className={styles.contactBtn}>
                                Resume &nbsp; <FontAwesomeIcon icon={faCloudDownload} />
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
