import React, { useEffect, useRef, useState } from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  const aboutTextRef = useRef(null);
  const aboutPhotoRef = useRef(null);
  const aboutTitleRef = useRef(null);

  const [aboutTextStyle, setAboutTextStyle] = useState({
    opacity: 0,
    transform: 'translateX(-100px)',
    pointerEvents: 'none',
    transition: 'opacity 1s ease, transform 1s ease',
  });

  const [aboutPhotoStyle, setAboutPhotoStyle] = useState({
    opacity: 0,
    transform: 'translateX(-100px)',
    pointerEvents: 'none',
    transition: 'opacity 1s ease, transform 1s ease',
  });

  const [titleVisible, setTitleVisible] = useState(false);

  const handleScroll = () => {
    const aboutText = aboutTextRef.current;
    const aboutPhoto = aboutPhotoRef.current;

    // Check if About Text and Photo are in view
    if (aboutText && aboutPhoto) {
      const textInView = aboutText.getBoundingClientRect().top <= window.innerHeight * 0.8;
      const photoInView = aboutPhoto.getBoundingClientRect().top <= window.innerHeight * 0.8;

      // When the text comes into view
      if (textInView) {
        setAboutTextStyle({
          opacity: 1, // Make visible
          transform: 'translateX(0)', // Reset position
          pointerEvents: 'auto',
          transition: 'opacity 1s ease, transform 1s ease', // Transition
        });
      } else {
        // Reverse animation when scrolling back
        setAboutTextStyle({
          opacity: 0, // Fade out
          transform: 'translateX(-100px)', // Move back out of view
          pointerEvents: 'none',
          transition: 'opacity 1s ease, transform 1s ease', // Transition
        });
      }

      // When the photo comes into view
      if (photoInView) {
        setAboutPhotoStyle({
          opacity: 1, // Make visible
          transform: 'translateX(0)', // Reset position
          pointerEvents: 'auto',
          transition: 'opacity 1s ease, transform 1s ease', // Transition
        });
      } else {
        // Reverse animation when scrolling back
        setAboutPhotoStyle({
          opacity: 0, // Fade out
          transform: 'translateX(100px)', // Move back out of view
          pointerEvents: 'none',
          transition: 'opacity 1s ease, transform 1s ease', // Transition
        });
      }
    }
  };

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Set the title visibility to true if it is intersecting
          setTitleVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the title is visible
    );

    // Observe the about title
    if (aboutTitleRef.current) {
      titleObserver.observe(aboutTitleRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      if (aboutTitleRef.current) {
        titleObserver.unobserve(aboutTitleRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="about" className="about-section">
      {/* About Title with Scroll-based Fade In/Out */}
      <h1
        ref={aboutTitleRef}
        className={`about-title ${titleVisible ? 'fade-in' : 'fade-out'}`}
      >
        About Me
      </h1>

      <div className="about-container">
        {/* About Text */}
        <div className="about-text" ref={aboutTextRef} style={aboutTextStyle}>
          <p>
            I am a Masters student in Computer Science at the University of North Texas, specializing in Artificial Intelligence (AI).
            My TensorFlow Developer Certificate validates my expertise in AI, enabling me to create advanced machine learning models.
            I have gained practical experience through projects with organizations like CDAC, honing my skills and staying abreast of technological advancements.
            With proficiency in AI Fundamentals and Azure, I aim to drive digital transformation and tackle societal challenges.
          </p>
        </div>

        {/* About Photo */}
        <div className="about-photo" ref={aboutPhotoRef} style={aboutPhotoStyle}>
          <img src="/assets/Profile_pic_Yash.png" alt="About Me" />
        </div>
      </div>
    </div>
  );
};

export default About;
