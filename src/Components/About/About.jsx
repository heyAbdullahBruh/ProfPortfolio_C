'use client';
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
// import client from '../images/avatar2-184x184.png';
import { faMdb } from '@fortawesome/free-brands-svg-icons/faMdb';
import CommentSlider from './clientComment/Comment';

const About = () => {
    return (
        <div className='about'>
            <h3 className='aboutHdr'> <span>A</span>bout Me</h3><hr />
            <div className="aboutSec">
                <div className="myDsc">
                    <div className="dsc1">
                        <h3>Hello! I’m Abdullah Shayed.</h3>
                        <p>I am a passionate web developer with 3+ years of experience in building modern, scalable, and user-friendly web applications. My expertise lies in MERN technologies—MongoDB, Express, React, Node.js, and Next.js—allowing me to deliver efficient and cutting-edge solutions for businesses across various industries.
                        <br />
                        <br />
                        What sets me apart is my commitment to bridging functionality with aesthetics. I believe every web application should not only perform seamlessly but also provide an exceptional user experience.
                        <br />
                        <br />
                        I’m passionate about learning, collaborating, and staying ahead in the ever-evolving tech world. If you're looking for someone to turn your ideas into reality or if you're interested in connecting, feel free to reach out. Let’s create something amazing together!</p>
                    </div>
                    <div className="dsc2">
                        <div className="child">
                            <p>Name . . Abdullah Sayed</p>
                            <p>Wrok . . Programming</p>
                        </div>
                        <div className="child">
                             <p>RESIDENCE . . Banglasdesh</p>
                            <p>ADDRESS . . Mirpur, Dhaka, Banglasdesh</p>
                        </div>
                    </div>
                </div>

                <div className="service">
                    <h3 className='aboutHdr'> <span>M</span>y Services</h3><hr />

                    <div className="service1">
                        <div className="servChild">
                            <span> <FontAwesomeIcon icon={faHtml5}/> </span>
                            <p>Craft visually appealing, responsive websites using HTML, CSS, and JavaScript for seamless cross-device performance.</p>
                         </div>
                         <div className="servChild">
                            <span > <FontAwesomeIcon icon={faReact}/> </span>
                            <p>Building high-performing, interactive interfaces using React to deliver exceptional user experiences.</p>
                         </div>
                         <div className="servChild">
                            <span style={{color:'green'}}> <FontAwesomeIcon icon={faNode}/> </span>
                            <p>Build secure and efficient server-side solutions with Node.js and Express to power your applications.</p>
                         </div>
                         <div className="servChild">
                            <span><span style={{padding:'.1rem 1rem',backgroundColor:'black',color:'white',border:'none'}}>N</span></span>
                            <p>Creating modern, SEO-friendly applications with Next.js for optimal speed and functionality..</p>
                         </div>
                       <div className="servChild">
                           <span> <FontAwesomeIcon icon={faMdb}/> </span>
                            <p>Design and implement reliable, scalable databases using MongoDB to manage your data effortlessly.</p>
                       </div>
                       <div className="servChild">
                           <span> <FontAwesomeIcon icon={faShieldAlt}/> </span>
                            <p>Security consultants can check the code and scan for vulnerabilities.</p>
                       </div>
                    </div>
                </div>

                <div className="testimonil">
                <h3 className='aboutHdr'> <span>T</span>estimonials</h3><hr />
                      
                      <CommentSlider/>
                </div>

                
            </div>
        </div>
    );
};

export default About;
