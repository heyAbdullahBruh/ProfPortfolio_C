import React, { useState } from 'react';
import './comment.css'; // Include the styles here
import image1 from '../../images/client/clientOne.jpeg'
import image2 from '../../images/client/clientTwo.jpeg'
import image3 from '../../images/client/clientThree.jpeg'
import image4 from '../../images/client/clientFour.jpeg'
import image5 from '../../images/client/clientFive.jpeg'

const CommentSlider = () => {
  const comments = [
    {
      id: 1,
      text: "Outstanding work! Abdullah delivered exactly what we needed, and the website looks amazing. Highly recommend for anyone looking for a skilled developer.",
      name: "Sarah Williams",
      role: "Art Director",
      image: image4, // Replace with the actual image URL
    },
    {
      id: 2,
      text: "Impressed with the quality and speed of the project. The real estate website he built is user-friendly, professional, and meets all our requirements.",
      name: "Rachel Thompson",
      role: "Marketing Director",
      image: image2,
    },
    {
      id: 3,
      text: "Abdullah’s full-stack expertise made a huge difference in our project. The website runs smoothly, and the user experience is top-notch. Excellent work!",
      name: "Jessica Roberts",
      role: "Fashion Designer",
      image: image3,
    },
    {
        id: 4,
        text: "Great attention to detail and a perfect understanding of our business needs. The website is everything we envisioned and more!",
        name: "Emily Davis",
        role: "Hotel Manager",
        image: image5,
      },
      {
        id: 5,
        text: "I’ve worked with many developers, but Abdullah's work stands out. Fast, reliable, and always on point with his solutions. Will definitely hire again.",
        name: "Jane Smith",
        role: "Tech Entrepreneur",
        image: image1,
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? comments.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === comments.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <button className="nav-button" onClick={goToPrevious}>
        &#9664; {/* Left Arrow */}
      </button>
      <div className="slide">
        {/* <blockquote></blockquote> */}
        <p className='cmntText'>" &nbsp; {comments[currentIndex].text}&nbsp;&nbsp;  "</p>
        <img src={comments[currentIndex].image} alt={comments[currentIndex].name} className="profile-pic" />
        <h3>{comments[currentIndex].name}</h3>
        <span className="role">{comments[currentIndex].role}</span>
      </div>
      <button className="nav-button" onClick={goToNext}>
        &#9654; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default CommentSlider;
