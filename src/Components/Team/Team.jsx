'use client';
import './team.css';
// import { BackgroundChange } from '../../App';
import {faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';


const Team = () => {

    // const [background]=useContext(BackgroundChange);
    // // const backColor = background.color;

    return (
        <div className='teams'>
           <h3 className='teamHdr'> <span><FontAwesomeIcon icon={faUsers} /> M</span>y Team Members</h3><hr />
            <div className="teamCont">
                    <div className="member">
                        <img src="https://i.ibb.co.com/8KFntJN/tarek.jpg" alt="tarek" />
                        <h3>Tarequl Islam Rifat</h3>
                        <p>Web Developer</p>
                        <div className="teamIco"> 
                             {/* <Link href='https://www.facebook.com/tarikulrifat.39' className='teamLink' ><FontAwesomeIcon icon={faFacebook} /> </Link> */}
                             <Link href='https://www.facebook.com/tarekul.1001r' className='teamLink' ><FontAwesomeIcon icon={faFacebook} /> </Link>
                             <Link href='https://github.com/tarekul42 ' className='teamLink' ><FontAwesomeIcon icon={faGithub} /> </Link>
                             <Link href='https://www.instagram.com/tarekulrifat/' className='teamLink' ><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>
                    </div>
                    
                    <div className="member">
                        <img src="https://i.ibb.co.com/vZG28db/user.webp" alt="Simmey" />
                        <h3>Simmey Sheikh</h3>
                        <p>Front-End Developer</p>
                        <div className="teamIco"> 
                             <Link href='' className='teamLink' ><FontAwesomeIcon icon={faFacebook} /> </Link>
                             <Link href='' className='teamLink' ><FontAwesomeIcon icon={faGithub} /> </Link>
                             <Link href='' className='teamLink' ><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>
                    </div>
                    <div className="member">
                        <img src="https://i.ibb.co.com/YTVZnzG/arafath.jpg" alt="arafath" />
                        <h3>Arafath Habibi</h3>
                        <p>Web Developer</p>
                        <div className="teamIco"> 
                             <Link href='https://www.facebook.com/arafath.habib.90' className='teamLink' ><FontAwesomeIcon icon={faFacebook} /> </Link>
                             <Link href='https://github.com/ArafathHabib' className='teamLink' ><FontAwesomeIcon icon={faGithub} /> </Link>
                             <Link href='https://www.instagram.com/error.araf.404' className='teamLink' ><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>
                    </div>
                    {/* <div className="member">
                        <img src="https://i.postimg.cc/pTxFqqb6/wlaker.jpg" alt="" />
                        <h3>Alan Walker</h3>
                        <p>Musician/Artist</p>
                        <div className="teamIco"> 
                             <Link to='' className='teamLink' ><FontAwesomeIcon icon={faFacebook} /> </Link>
                             <Link to='' className='teamLink' ><FontAwesomeIcon icon={faTwitterSquare} /> </Link>
                             <Link to='' className='teamLink' ><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>
                    </div> */}
            </div>
        </div>
    );
};

export default Team;
