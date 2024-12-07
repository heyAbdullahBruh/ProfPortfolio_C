import React, { useContext, useState } from 'react';
import './Navber.css'
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload, faHome, faPhone, faPodcast, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faEye, faListAlt, faMoon, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import { BackgroundChange } from '../../App';
import { faFacebook, faGithub, faInstagramSquare, faLinkedin, faTelegram, faTwitter,  } from '@fortawesome/free-brands-svg-icons';
import profile from '../images/me.jpg';

const Navber = () => {

    const [background,setBackground]=useContext(BackgroundChange);
    // console.log(background);
    const [day,setDay]=useState(false);

     const handleDay= ()=>{
        setDay(true);
        setBackground({backgroundColor:'black',color:'#93c7f5'});
     }

     const handleNight= ()=>{
        setDay(false);
        setBackground({backgroundColor:'#93c7f521',color:'black'});
     }  

 

    return (
        <div className='navber'>
            <div className="navSec1"> 
            <div className="navSecUp">

                <div className="sideText">
                    <img src={profile} alt="" />
                    <div className="slideHd">
                    <h5>Abu Sayed</h5>
                    <h5><Typed
                         strings={['Web Developer','Front-End Developer','Web Desiner','React Developer','CV Writter','Resume Writter']}
                         typeSpeed={150}
                         backSpeed={100}
                         loop
                         /></h5>
                    </div>
                </div>
                <div className="backGround">
                   { day ===true ?<button onClick={handleNight} className="nightBtn"><FontAwesomeIcon icon={faMoon} /></button>  :
                      <button onClick={handleDay} className=" dayBtn"><FontAwesomeIcon icon={faSun} /></button>
                    }
                </div>
            </div>
                <div className="navSecDwn">
                <div className="link">
                    <Link className='navLink'  to={'/home'} >
                        <FontAwesomeIcon icon={faHome} />
                        <br />
                        <span>Home</span>
                        
                    </Link>
                </div>
                <div className="link">
                    <Link className='navLink' to={'/about'} >
                        <FontAwesomeIcon icon={faUser} />
                        <br />
                        <span>About</span>
                        
                    </Link>
                </div>
                <div className="link">
                    <Link className='navLink' to={'/resume'} >
                        <FontAwesomeIcon icon={faListAlt} />
                        <br />
                        <span>Resume</span>
                    </Link>
                </div>
                <div className="link">
                    <Link className='navLink' to={'/work'} >
                        <FontAwesomeIcon icon={faEye} />
                        <br />
                        <span>Work</span>
                    </Link>
                </div>
                <div className="link">
                    <Link className='navLink' to={'/blog'} >
                        <FontAwesomeIcon icon={faPodcast} />
                        <br />
                        <span>Blogs</span>
                    </Link>
                </div>
                <div className="link">
                    <Link className='navLink' to={'/contact'} >
                        <FontAwesomeIcon icon={faPhone} />
                        <br />
                        <span>Contact</span>
                    </Link>
                </div>
                <div className="link">
                    <Link className='navLink' to={'/my_team_members'} >
                        <FontAwesomeIcon icon={faUsers} />
                        <br />
                        <span>Team</span>
                    </Link>
                </div>
                </div>
            </div>

            
            <div className="navSec2" style={background}>
                     <div className="backImg">
                       
                     </div>
                     <div className="navSec2Txt" style={background}>
                        <img src={profile} alt="" />
                        <h1>Abdullah Shayed</h1>
                        {/*   Text Changer */}
                        <h3>Expert in <Typed
                         strings={['Web Development','Front-End Development','Backend Development','MongoDB']}
                         typeSpeed={150}
                         backSpeed={100}
                         loop
                         /></h3>
                         <div className="socialIcn" style={background}>
                             <Link target='_blank' to='https://github.com/MrAbuSayed' style={background} className="sclLnk"><FontAwesomeIcon icon={faLinkedin} /></Link>
                             <Link target='_blank' to='https://facebook.com/Developer.Sayed.1' style={background} className="sclLnk"><FontAwesomeIcon icon={faFacebook} /> </Link>
                             <Link target='_blank' to='https://twitter.com/DeveloperShayed' style={background} className="sclLnk"><FontAwesomeIcon icon={faTwitter} /> </Link>
                             <Link target='_blank' to='https://www.instagram.com/developer_sayed/' style={background} className="sclLnk"><FontAwesomeIcon icon={faInstagramSquare} /></Link>
                             <Link target='_blank' to='https://github.com/MrAbuSayed' style={background} className="sclLnk"><FontAwesomeIcon icon={faGithub} /></Link>
                         </div>
                         <div className="navBtn">
                            <a href='https://pdflink.to/ab846943/' target='blank'><button style={background} className="contactBtn">Download CV &nbsp;  <FontAwesomeIcon icon={faCloudDownload} /></button></a>
                            <Link to='/contact'> <button style={background} className="cvBtn">Contact Me &nbsp;  <FontAwesomeIcon icon={faTelegram} /></button></Link>
                         </div>
                     </div>
             </div>
        </div>
    );
};

export default Navber;