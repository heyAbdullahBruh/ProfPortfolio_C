import React from 'react';
import './team.css';
// import { BackgroundChange } from '../../App';
import {faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';


const Team = () => {

    // const [background]=useContext(BackgroundChange);
    // // const backColor = background.color;

    return (
        <div className='teams'>
           <h3 className='teamHdr'> <span><FontAwesomeIcon icon={faUsers} /> M</span>y Team Members</h3><hr />
            <div className="teamCont">
                    <div className="member">
                        <img src="https://i.postimg.cc/pXCXJm9B/tarek.jpg" alt="" />
                        <h3>Tarequl Islam Rifat</h3>
                        <h4>Web Developer</h4>
                        <div className="teamIco"> 
                             <Link to='https://www.facebook.com/tarikulrifat.39' className='teamLink' ><FontAwesomeIcon icon={faFacebook} /> </Link>
                             <Link to='https://www.instagram.com/tarekulrifat/' className='teamLink' ><FontAwesomeIcon icon={faGithub} /> </Link>
                             <Link to='https://github.com/tarekul42' className='teamLink' ><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>
                    </div>
                    
                    <div className="member">
                        <img src="https://i.postimg.cc/BbH65prY/simmy.jpg" alt="" />
                        <h3>Orpannita</h3>
                        <h4>Backend Developer</h4>
                        <div className="teamIco"> 
                             <Link to='' className='teamLink' ><FontAwesomeIcon icon={faFacebook} /> </Link>
                             <Link to='' className='teamLink' ><FontAwesomeIcon icon={faGithub} /> </Link>
                             <Link to='' className='teamLink' ><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>
                    </div>
                    <div className="member">
                        <img src="https://i.postimg.cc/cJ5NMVG3/arafath.png" alt="" />
                        <h3>Arafath Habibi</h3>
                        <h4>Web Developer</h4>
                        <div className="teamIco"> 
                             <Link to='https://www.facebook.com/arafath.habib.90' className='teamLink' ><FontAwesomeIcon icon={faFacebook} /> </Link>
                             <Link to='https://github.com/ArafathHabib' className='teamLink' ><FontAwesomeIcon icon={faGithub} /> </Link>
                             <Link to='https://www.instagram.com/error.araf.404' className='teamLink' ><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>
                    </div>
                    {/* <div className="member">
                        <img src="https://i.postimg.cc/pTxFqqb6/wlaker.jpg" alt="" />
                        <h3>Alan Walker</h3>
                        <h4>Musician/Artist</h4>
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