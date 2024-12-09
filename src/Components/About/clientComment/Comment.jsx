import React, { useState } from 'react';
import styles from './comment.module.css'; // Include the styles as a module

const CommentSlider = () => {
  const comments = [
    {
      id: 1,
      text: "Outstanding work! Abdullah delivered exactly what we needed, and the website looks amazing. Highly recommend for anyone looking for a skilled developer.",
      name: "Sarah Williams",
      role: "Art Director",
      image: "https://i.ibb.co.com/dm3x76t/client-Four.jpg", 
    },
    {
      id: 2,
      text: "Impressed with the quality and speed of the project. The real estate website he built is user-friendly, professional, and meets all our requirements.",
      name: "Rachel Thompson",
      role: "Marketing Director",
      image: "https://i.ibb.co.com/SRt3kZ7/client-Two.jpg",
    },
    {
      id: 3,
      text: "Abdullah’s full-stack expertise made a huge difference in our project. The website runs smoothly, and the user experience is top-notch. Excellent work!",
      name: "Jessica Roberts",
      role: "Fashion Designer",
      image: "https://i.ibb.co.com/PG4VC5z/client-Three.jpg",
    },
    {
      id: 4,
      text: "Great attention to detail and a perfect understanding of our business needs. The website is everything we envisioned and more!",
      name: "Emily Davis",
      role: "Hotel Manager",
      image: "https://i.ibb.co.com/4Z0psBF/client-Five.jpg",
    },
    {
      id: 5,
      text: "I’ve worked with many developers, but Abdullah's work stands out. Fast, reliable, and always on point with his solutions. Will definitely hire again.",
      name: "Jane Smith",
      role: "Tech Entrepreneur",
      image: "https://i.ibb.co.com/2PFny6t/client-One.jpg",
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
    <div className={styles.sliderContainer}>
      <button className={styles.navButton} onClick={goToPrevious}>
        &#9664; {/* Left Arrow */}
      </button>
      <div className={`${styles.slide} ${styles.transition}`}>
        <p className={styles.cmntText}>
          " &nbsp; {comments[currentIndex].text} &nbsp;&nbsp; "
        </p>
        <img
          src={comments[currentIndex].image}
          alt={comments[currentIndex].name}
          className={styles.profilePic}
        />
        <h3>{comments[currentIndex].name}</h3>
        <p className={styles.role}>{comments[currentIndex].role}</p>
      </div>
      <button className={styles.navButton} onClick={goToNext}>
        &#9654; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default CommentSlider;
