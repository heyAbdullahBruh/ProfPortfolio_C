import React from 'react';
import './Home.css';
import Typed from 'react-typed';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHandshake } from '@fortawesome/free-solid-svg-icons';
// import { BackgroundChange } from '../../App';

const Home = () => {
    // const [background]=useContext(BackgroundChange);
    // const {}= useState
    return (
        <div className='home'>
            <div className="homeContainer">
                <div className="intro">
                    <h2>Hi.! Iam <Typed strings={['Abdullah Shayed <b>-Turning Ideas into Interactive Web Solutions!</b>']} typeSpeed={50}  backSpeed={50}/></h2>
                    <h4>With 4+ years of experience and expertise in MERANN technologies, I build stunning websites and web apps that deliver results.</h4>
                </div>

                <div className="homeSec">
                    <div className="count1">
                    <h3><CountUp end={30} duration={1} />+</h3>
                    <h4>Complete Project</h4>
                    </div>
                    <div className="count1">
                    <h3><CountUp end={25} duration={1} />+</h3>
                    <h4>Happy Client</h4>
                    </div>
                    <div className="count1">
                    <h3><CountUp end={8} duration={1} />+</h3>
                    <h4>Running Project</h4>
                    </div>
                    <div className="count1">
                    <h3><CountUp end={10} duration={1} />+</h3>
                    <h4>Start Project</h4>
                    </div>
                </div>

                <div className="callAct">
                        
                        <Link to='/work'> <button className='homeBtn'><FontAwesomeIcon icon={faEye} /> View My Work</button></Link>
                    <Link to='/contact'> <button className='homeBtn'>Let’s Collaborate! <FontAwesomeIcon icon={faHandshake} /> </button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default Home;