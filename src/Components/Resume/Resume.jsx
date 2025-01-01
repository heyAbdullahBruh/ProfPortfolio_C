'use client';
import './resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCheck, faCode, faGraduationCap,  } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
const Resume = () => {
    return (
        <div className='resume'>
            <h3 className='resumeHdr'> <span>R</span>esume</h3>
            <hr />
            <div className="resumeCont">

                <div className="eduExp">
                        <div className="experience">
                            <span className='ExIcon'> <FontAwesomeIcon icon={faBriefcase}/> </span><span>Experience</span>
                            <div className="ex1">
                                <span>2021 - 2022</span>
                                <div className="title">
                                    <h3>Front-End Development</h3>
                                </div>
                                <i>Fiverr Inc.</i>
                                <p>I'm  worked on Fiverr in 2021 - 2022 as a frontend developer, creating engaging user interfaces for diverse client projects. This role enhanced his expertise in responsive design and user-centric web solutions.</p>
                            </div>
                            <div className="ex1">
                                <span>2022 - 2023</span>
                                <div className="title">
                                    <h3>Backend Development</h3>
                                </div>
                                <i>Upwork Inc.</i>
                                <p>I'm worked on Upwork in 2022 - 2023 as a backend developer, honing his skills in creating efficient server-side solutions. This experience improved his expertise in backend technologies and client collaboration.</p>
                            </div>
                            <div className="ex1">
                            <span>2023 - Present</span>
                                <div className="title">
                                    <h3>Web Developer</h3>
                                </div>
                                <i>PieTech.io </i>
                                <p> I have been working at PieTech as a full-stack web developer since 2023, excelling in end-to-end project development. His role involves creating seamless, scalable web applications using cutting-edge MERANN technologies</p>
                            </div>
                        </div>
                        <div className="education">
                           <span className='EdIcon'> <FontAwesomeIcon icon={faGraduationCap}/> </span><span>Education</span>
                            <div className="edu1">
                                    <span>2020-2022</span>
                                    <h2>S.S.C</h2>
                                    <h3>Kutumbapur High School</h3>
                                    <p>Kutumbapur High School is a O level school in Cumilla,Bangladesh. </p>
                            </div>
                            <div className="edu1">
                            <span>2022-2024</span>
                                    <h2>HSC</h2>
                                    <h3>Sher-E-Bangla Nagar Govt. College</h3>
                                    <p>Sher-E-Bangla Nagar Govt. College is a school A level college in Dhaka, Bangladesh </p>
                            </div>
                            <div className="edu1">
                            <span>2020-2021</span>
                                    <h2>Web Development</h2>
                                    <h3>Udemy</h3>
                                    <p>I learned web development on Udemy, mastering coding and building modern websites through structured courses and hands-on projects.</p>
                            </div>
                        </div>
                </div>

                <div className="skill">
                 <h3 className='resumeHdr'> <span>S</span>kill</h3>
                 <hr />
                 <div className="skillCont">
                    <div className="skill1">
                        <div className="code">
                            <div className="codeHdr">
                                <span><FontAwesomeIcon icon={faCode}/></span>
                                <h3>CODING</h3>
                            </div>
                            <div className="codeCont">
                                <div className="code1">
                                    <p className='H1'>Javascript--80%</p >
                                    <div className="cercle1"><span></span></div>
                                </div>
                                <div className="code2">
                                   <p className='H1'>React--75%</p >
                                  <div className="cercle2"><span></span></div>
                                </div>
                                <div className="code3">
                                    <p className='H1'>NextJS--70%</p >
                                   <div className="cercle3"><span></span></div>
                                </div>
                                <div className="code4"> 
                                    <p className='H1'>Html & CSS--86%</p >
                                   <div className="cercle4"><span></span></div>
                                </div>
                                <div className="code5"> 
                                    <p className='H1'>MUI--73%</p >
                                   <div className="cercle5"><span></span></div>
                                </div>
                                <div className="code6"> 
                                    <p className='H1'>MongoDB--76%</p >
                                   <div className="cercle6"><span></span></div>
                                </div>
                                <div className="code7"> 
                                    <p className='H1'>Node.js --70%</p >
                                   <div className="cercle7"><span></span></div>
                                </div>
                                <div className="code8"> 
                                    <p className='H1'>Express.js--75%</p >
                                   <div className="cercle8"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skill2">
                        <div className="knowleg">
                            <div className="codeHdr">
                                <span><FontAwesomeIcon icon={faListAlt}/></span>
                                <h3>KNOWLEDGE</h3>
                            </div>
                            <div className="knowCont">
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; E-Commerce Website</p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Website hosting </p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Front-End Development</p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Back-End Development</p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Database Management</p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Hosting Installation </p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; SEO Optimize</p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Responsive and mobile Friendly</p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; MERN Stack </p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Clean code </p>
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
                

                <div className="testimonil">
                <h3 className='resumeHdr'> <span>Q</span>uote</h3><hr />
                      <div className="testimoSec">
                            <p>" &nbsp; Transforming ideas into reality with seamless full-stack solutions—where innovation meets functionality to elevate your business to the next level..&nbsp;&nbsp;  "</p>
                            <img src={"https://i.ibb.co.com/CsjTpxr/me2.jpg"} alt="AbdullahShayed"  style={{border:'3px solid #1E90FF'}}/>
                            <h3>Mr. Edward Abdullah</h3>
                            <b style={{fontSize:'.7rem'}}>Full-Stuck Dveloper</b>
                      </div>  
                </div>






            </div>
        </div>
    );
};

export default Resume;