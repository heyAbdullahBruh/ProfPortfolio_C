"use client";
import { useState } from "react";
import "./contact.css";
import Popup from "../popup/popup";

const Contact = () => {
  const [popupMsg, setPopupmsg] = useState({
    type: true,
    message: "",
    trigger: false,
  });

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    mail: "",
    // teleId:'',
    subject: "",
    message: "",
  });

  const fromHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleMessage = (e) => {
    setLoading(true);
    e.preventDefault();
    fetch("/api/client/sendMsg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        mail: data.mail,
        // teleId:data.teleId?.split(' ').join(''),
        subject: data.subject,
        message: data.message,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setPopupmsg({ message: res.message, trigger: true, type: true });
        } else {
          setPopupmsg({ message: res.message, trigger: true, type: false });
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setData({
          name: "",
          mail: "",
          // teleId:'',
          subject: "",
          message: "",
        });
        setLoading(false);
      });
    setTimeout(() => setPopupmsg({ trigger: false }), 8000);
  };

  return (
    <div className="contact">
      <h3 className="cntcHdr">
        {" "}
        <span>G</span>et in touch
      </h3>
      <hr />
      <div className="contactSec">
        <div className="myDetail">
          <div className="adres">
            <p>Address ---- Dhaka, bangladesh</p>
            <br />
            <p>Phone ---- +8801603070892</p>
            <br />
          </div>
          <div className="phone">
            <p>
              Email ----{" "}
              <a
                href="mailto:abdullah.shayed@protonmail.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                abdullah.shayed@proton.me
              </a>
            </p>
            <br />
            <p>Online ---- 6.00AM -12.00AM(+6.00 GMT) </p>
            <br />
          </div>
        </div>

        {loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <div style={{ textAlign: "center" }}>
              {/* <h1>Loading...</h1> */}
              <div
                style={{
                  border: "4px solid #f3f3f3",
                  borderTop: "4px solid #3498db",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  animation: "spin 1s linear infinite",
                }}
              />
              <style jsx>{`
                @keyframes spin {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
              `}</style>
            </div>
          </div>
        ) : (
          <div className="contactFrom">
            <h3 className="cntcHdr">
              {" "}
              <span>C</span>ontact From
            </h3>
            <hr />
            <form onSubmit={handleMessage} className="FromC">
              <input
                type="text"
                name="name"
                value={data.name}
                placeholder="Your Name/*"
                required
                onChange={fromHandler}
              />

              <input
                type="email"
                name="mail"
                value={data.mail}
                placeholder="Your Email/*"
                required
                onChange={fromHandler}
              />

              {/* <input type='text' name="teleId" value={data.teleId} id="teleId" placeholder='@Your Telegram Username/Number/*' required onChange={fromHandler}/> */}

              <input
                type="text"
                name="subject"
                value={data.subject}
                id="subject"
                placeholder="Write a subject/*"
                required
                onChange={fromHandler}
              />

              <textarea
                name="message"
                id="message"
                value={data.message}
                placeholder="Your Message/*"
                onChange={fromHandler}
              ></textarea>

              <div className="Fbtn">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        )}
      </div>

      <Popup
        trigger={popupMsg.trigger}
        message={popupMsg.message}
        type={popupMsg.type}
      />
    </div>
  );
};

export default Contact;
