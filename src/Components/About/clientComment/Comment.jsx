import React, { useEffect, useState } from 'react';
import styles from './comment.module.css'; // Include the styles as a module
import { Box, Typography, Button, Avatar } from '@mui/material';

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

  // Auto-carousel with delay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 3000); // 5-second delay
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? comments.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  return (
   <section className={styles.sliderContainer}>
     <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '450px',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        bgcolor: '#0000005e',
        borderRadius: '8px',
        px: 2,
        transition: 'transform 0.5s ease-in-out', // Smooth animation
      }}
    >
      {/* Avatar */}
      <Avatar
        src={comments[currentIndex].image}
        alt={comments[currentIndex].name}
        sx={{
          width: 100,
          height: 100,
          mb: 2,
          animation: 'fadeIn 1s', // Animation
        }}
      />

      {/* Text */}
      <Typography
        variant="p"
        sx={{
          textAlign: 'center',
          fontStyle: 'italic',
          color: '#9ac0c2c2',
          px: 3,
          mb: 2,
          animation: 'fadeIn 1s', // Animation
        }}
      >
        "{comments[currentIndex].text}"
      </Typography>

      {/* Name and Role */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        {comments[currentIndex].name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'gray', textAlign: 'center' }}>
        {comments[currentIndex].role}
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: '20px',
          width: '80%',
        }}
      >
        <Button variant="contained" onClick={handlePrev}>
        &#10094;
        </Button>
        <Button variant="contained" onClick={handleNext}>
        &#10095;
        </Button>
      </Box>
    </Box>
   </section>
  );
};

export default CommentSlider;
