"use client";
import  { useState } from 'react';
import './contact.css';

const Contact = () => {

  const [form, setFrom] = useState({});

   const fromHandler=(e)=>{
    setFrom({...form,[e.target.name]:e.target.value})
   };

 const handleMessage=(e)=>{
 e.preventDefault();
   console.log(form);
 };


    return (
        <div className='contact'>
        <h3 className='cntcHdr'> <span>G</span>et in touch</h3><hr />
            <div className="contactSec">
                <div className="myDetail">
                    <div className="adres">
                        <p>Address ---- Dhaka, bangladesh</p><br />
                        <p>Phone ---- +8801603070892</p><br />
                    </div>
                    <div className="phone">
                        <p>Email ---- <a href="mailto:abdullah.shayed@protonmail.com" style={{color:'white',textDecoration:'none'}}>abdullah.shayed@proton.me</a></p><br />
                        <p>Online ---- 6.00AM -12.00AM(+6.00 GMT) </p><br />
                    </div>
                </div>

                <div className="contactFrom">
                    <h3 className='cntcHdr'> <span>C</span>ontact From</h3><hr />
                    <form onSubmit={handleMessage}   className="FromC">

                        <input type="text" name="name"  placeholder='Your Name' required onChange={fromHandler} />

                         <input type="email" name="email"  placeholder='Your Email' required onChange={fromHandler} />
                            
                        <input type='text' name="telegram" id="teleId" placeholder='@Your Telegram Username/Number' required onChange={fromHandler}/>

                        <input type="text" name="subject" id="subject" placeholder='Write a subject' required onChange={fromHandler}/>

                        <textarea name="message" id="message" placeholder='Your Message' onChange={fromHandler}></textarea>

                        <div className="Fbtn">
                            <button type="submit">Send @Mail</button>
                        </div>
                       
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Contact;