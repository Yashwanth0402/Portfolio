import React, { useEffect, useRef, useState } from 'react';

import './research.css';

const Research = () => {
  const researchTextRef = useRef(null);
  const researchSplineRef = useRef(null);
  const researchTitleRef = useRef(null);
  const researchTextRef2 = useRef(null);
  const researchSplineRef2 = useRef(null);


  const [researchTextStyle, setResearchTextStyle] = useState({
    opacity: 0,
    transform: 'translateX(-100px)',
    pointerEvents: 'none',
    transition: 'opacity 1s ease, transform 1s ease',
  });

  const [researchSplineStyle, setResearchSplineStyle] = useState({
    opacity: 0,
    transform: 'translateX(100px)',
    pointerEvents: 'none',
    transition: 'opacity 1s ease, transform 1s ease',
  });

  const [researchTextStyle2, setResearchTextStyle2] = useState({
    opacity: 0,
    transform: 'translateX(-100px)',
    pointerEvents: 'none',
    transition: 'opacity 1s ease, transform 1s ease',
  });

  const [researchSplineStyle2, setResearchSplineStyle2] = useState({
    opacity: 0,
    transform: 'translateX(100px)',
    pointerEvents: 'none',
    transition: 'opacity 1s ease, transform 1s ease',
  });

  const [titleVisible, setTitleVisible] = useState(false);

  const handleScroll = () => {
    const textInView = researchTextRef.current?.getBoundingClientRect().top <= window.innerHeight * 0.8;
    const splineInView = researchSplineRef.current?.getBoundingClientRect().top <= window.innerHeight * 0.8;
    const textInView2 = researchTextRef2.current?.getBoundingClientRect().top <= window.innerHeight * 0.8;
    const splineInView2 = researchSplineRef2.current?.getBoundingClientRect().top <= window.innerHeight * 0.8;

    setResearchTextStyle(textInView ? { opacity: 1, transform: 'translateX(0)', pointerEvents: 'auto' } : { opacity: 0, transform: 'translateX(-100px)', pointerEvents: 'none' });
    setResearchSplineStyle(splineInView ? { opacity: 1, transform: 'translateX(0)', pointerEvents: 'auto' } : { opacity: 0, transform: 'translateX(100px)', pointerEvents: 'none' });
    setResearchTextStyle2(textInView2 ? { opacity: 1, transform: 'translateX(0)', pointerEvents: 'auto' } : { opacity: 0, transform: 'translateX(-100px)', pointerEvents: 'none' });
    setResearchSplineStyle2(splineInView2 ? { opacity: 1, transform: 'translateX(0)', pointerEvents: 'auto' } : { opacity: 0, transform: 'translateX(100px)', pointerEvents: 'none' });
  };

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setTitleVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (researchTitleRef.current) {
      titleObserver.observe(researchTitleRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (researchTitleRef.current) {
        titleObserver.unobserve(researchTitleRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="research" className="research-section">
      <h1 ref={researchTitleRef} className={`research-title ${titleVisible ? 'fade-in' : 'fade-out'}`}>
        Research
      </h1>

      {/* First Research Container */}
      <div className="research-container">
        <div className="research-text" ref={researchTextRef} style={researchTextStyle}>
          <p>The main objective of this research is to develop an application based on Deep learning, Computer vision and cloud computing that detects the different kinds of skin diseases caused by different types of viruses, Bacteria, Fungus and Environment. This study has also developed and integrated a recommendation system, which recommends the medicines and care taking process for a particular disease. The application also suggests preventive methods for different kinds of skin infections. This study used an ensemble of convolution neural networks (CNN) with generative adversarial network (GAN) and Computer vision for construction of the model. Further, Amazon Personalize is used to build recommendation system in the proposed web application. The proposed application detects the disease based on symptoms, pictures, and videos of infected skin area. The application will be helpful for dermatologists and common people to perform early detection and prevention of skin diseases in India. This study also compared the accuracy of ensemble of convolution neural networks (CNN) with GAN and other algorithms like CNN. In comparison of accuracy, this study found that the Ensembles of CNN with GAN give best results for the proposed dataset..</p>
        </div>

        <div className="research-spline" ref={researchSplineRef} style={researchSplineStyle}>
          <spline-viewer url="/assets/graph.spline" style={{ width: '100%', height: '300px' }}></spline-viewer>
        </div>
      </div>

      {/* Second Research Container */}
      <div className="research-container research-container2">
        <div className="research-text" ref={researchTextRef2} style={researchTextStyle2}>
          <p>The study focuses on enhancing the performance of CNN-based classification models through an ensemble approach combined with GAN-based data augmentation. While individual CNN classifiers achieved accuracy levels between 89% and 90%, the integration of five independent CNN models into an ensemble framework improved classification performance to 97%. This demonstrates the effectiveness of combining multiple classifiers into a meta-classifier to boost accuracy. Additionally, GAN-based augmentation played a crucial role in refining CNN performance by generating high-quality synthetic data. The comparison between standalone CNN models and CNN ensembles with GAN augmentation highlights a significant improvement, with accuracy increasing from 89% to 97% and sensitivity from 85% to 93%. These findings emphasize the potential of ensemble learning and GAN-based augmentation in developing more robust classification models, which were effectively applied in our application development..</p>
          {/* IEEE Research Paper Link */}
          <a
            href="https://ieeexplore.ieee.org/document/10192759/figures#figures"
            target="_blank"
            rel="noopener noreferrer"
            className="research-link"
          >
            View my Research Paper here
          </a>
        </div>


        <div className="research-spline" ref={researchSplineRef2} style={researchSplineStyle2}>
          <spline-viewer
            url="/assets/cards.spline"
            style={{ width: '100%', height: '300px' }}
          ></spline-viewer>
        </div>
      </div>
    </div>
  );
};

export default Research;
