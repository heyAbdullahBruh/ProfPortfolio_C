import React, { useState } from 'react';
import './contact.css';

const Contact = () => {

  const [From, setFrom] = useState({});

   const fromHandler=(e)=>{
    setFrom({...From,[e.target.name]:e.target.value})
   }

 const sendEmail=(e)=>{
 e.preventDefault();
    const config= {
        // Username : "abu.sayed121@yahoo.com",
        // Password : "956751E6920D0298273211AC41F1A04F1590",
        // Host : "smtp.elasticemail.com",
        // Port: 2525,
        SecureToken : "c85a12a3-6855-4e5e-b0c5-34bf438e4f42",
        To : 'abu.sayed121@yahoo.com',
        From : From.email,
        Subject : From.subject,
        Body : `
        Name:${From.name},
        Email:${From.email},
        Telegram:${From.telegram},
        The_Message:${From.message}
        `
      }

    if (window.Email) {
        window.Email.send(config).then(()=>{alert('The messsage was send')})
    }
 }


    return (
        <div className='contact'>
        <h3 className='cntcHdr'> <span>G</span>et in touch</h3><hr />
            <div className="contactSec">
                <div className="myDetail">
                    <div className="adres">
                        <h3>Address ---- Dhaka, bangladesh</h3><br />
                        <h3>Phone ---- +8801603070892</h3><br />
                    </div>
                    <div className="phone">
                        <h3>Email ---- <a href="mailto:abdullah.shayed@protonmail.com" style={{color:'white',textDecoration:'none'}}>abdullah.shayed@proton.me</a></h3><br />
                        <h3>Online ---- 6.00AM -12.00AM(+6.00 GMT) </h3><br />
                    </div>
                </div>

                <div className="contactFrom">
                    <h3 className='cntcHdr'> <span>C</span>ontact From</h3><hr />
                    <form onSubmit={sendEmail}   className="FromC">
                    {/* <input type="hidden" name="_captcha" value="false" />
                     <input type="hidden" name="_subject" value="New submission!" /> */}
                     {/* <input type="hidden" name="_template" value="table"/> */}
                        <div className="namEmail">
                            <input type="text" name="name"  placeholder='Your Name' required onChange={fromHandler} />
                            <input type="email" name="email"  placeholder='Your Email' required onChange={fromHandler} />
                        </div>
                        <input type='text' name="telegram" id="teleId" placeholder='@Your Telegram Usern@me' required onChange={fromHandler}/><br />
                        <input type="text" name="subject" id="subject" placeholder='Write a subject' required onChange={fromHandler}/><br />
                        <textarea name="message" id="message" placeholder='Your Message' onChange={fromHandler}></textarea><br />
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