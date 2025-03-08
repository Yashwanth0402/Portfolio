import React, { useEffect, useRef, useState } from "react";
import "./Projects.css"; // Import the CSS file
import img1 from "../components/images/img1.jpg";  // Your image path
import img2 from "../components/images/img2.jpg";
import img3 from "../components/images/img3.jpg";


const Projects = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const timeRef = useRef(null);

  // Define your projects array dynamically
  const projects = [
    {
      id: 1,
      image: img1,
      title: "Virtual Art Gallery - GestEasy",
      topic: "React, Google Firebase, Express, Node.js, TensorFlow",
      description: "GestEasy is a website for an interactive art exhibition that uses the TensorFlow Handpose model to ensure smooth interaction using gesture-based navigation.we have Achieved 90% gesture recognition accuracy while maintaining 80% compatibility across modern browsers by optimizing model constraints.",
      viewLink: "https://gest-easy-nine.vercel.app/",
      detailsLink: "https://github.com/Yashwanth0402/GestEasy/tree/master"
    },
    {
      id: 2,
      image: img2,
      title: "Travello",
      topic: "Python, Django, MySQL,Flask",
      description: "Travello, an all-inclusive website for booking and trip planning that helps people from all over the world find, reserve, and arrange their travels. Developed with MySQL for easy database management, React for the dynamic frontend, and Django for the backend, guaranteeing scalability and good speed.",
      viewLink: "https://github.com/Yashwanth0402/Travel_website_Django",
      detailsLink: "https://github.com/Yashwanth0402/Travel_website_Django"
    },
    {
      id: 3,
      image: img3,
      title: "Speech Quality Control(”Bhashini”)",
      topic: "Python, TensorFlow, PyTorch, Few-Shot Learning",
      description: "We have created a Speech Quality Control model known as Bhashini as part of my Research Associate research project for Government of india’s Natural language translation mission and Designed cutting-edge speech recognition model leveraging few-shot learning for improved accuracy in low-resource scenarios. Designed a novel approach by converting speech signals into spectrum images and processing them through a Few-shot learning.",
      viewLink: "/",
      detailsLink: "/"
    },
  ];

  useEffect(() => {
    const nextDom = nextRef.current;
    const prevDom = prevRef.current;
    const carouselDom = carouselRef.current;
    const SliderDom = sliderRef.current;
    const thumbnailBorderDom = thumbnailRef.current;
    const timeDom = timeRef.current;

    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    let timeRunning = 3000;
    let timeAutoNext = 7000;

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    const showSlider = (type) => {
      let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
      let thumbnailItemsDom = document.querySelectorAll(".carousel .thumbnail .item");

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    nextDom.onclick = () => showSlider("next");
    prevDom.onclick = () => showSlider("prev");

    return () => {
      clearTimeout(runNextAuto);
      nextDom.onclick = null;
      prevDom.onclick = null;
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={sliderRef}>
        {/* Dynamically render all projects */}
        {projects.map((project) => (
          <div key={project.id} className="item">
            <img src={project.image} alt={`Project ${project.id}`} />
            <div className="content">
              <div className="author">Project {project.id}</div>
              <div className="title">{project.title}</div>
              <div className="topic">{project.topic}</div>
              <div className="des">{project.description}</div>
            <div className="buttons">
            <div class="view-btn">
                <a href={project.viewLink} target="_blank" rel="noopener noreferrer">
                 <button>View</button>
                 </a>
               </div>
               <div class="details-btn">
                <a href={project.detailsLink} target="_blank" rel="noopener noreferrer">
                   <button>Details</button>
                </a>
             </div>
            </div>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnail Section */}
      <div className="thumbnail" ref={thumbnailRef}>
        {projects.map((project) => (
          <div key={project.id} className="item">
            <img src={project.image} alt={`Thumbnail ${project.id}`} />
            <div className="content">
              <div className="title">{project.title}</div>

            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="arrows">
        <button ref={prevRef} id="prev">{"<"}</button>
        <button ref={nextRef} id="next">{">"}</button>
      </div>
    </div>
  );
};

export default Projects;
