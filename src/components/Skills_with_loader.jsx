import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faLaravel,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";
import { SiTailwindcss } from "react-icons/si";
import "./progress.css";

const Skills = () => {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const [listSkills] = useState([
    {
      name: "HTML",
      des: "With a strong foundation in HTML, I bring clean, semantic structure to every project.",
      icon: faHtml5,
      percent: 80,
    },
    {
      name: "CSS",
      des: "Proficient in CSS, I design responsive, visually appealing layouts that work seamlessly on any device.",
      icon: faCss3,
      percent: 80,
    },
    {
      name: "Javascript",
      des: "I build dynamic, interactive features that enhance user engagement and functionality.",
      icon: faJs,
      percent: 70,
    },
    {
      name: "React Js",
      des: "I create dynamic, component-based interfaces that ensure smooth user interactions and efficient rendering.",
      icon: faReact,
      percent: 75,
    },
    {
      name: "Node Js",
      des: "I develop scalable, high-performance back-end solutions, handling data-intensive tasks and API integrations.",
      icon: faNodeJs,
      percent: 60,
    },
    {
      name: "MongoDB",
      des: "I design flexible, efficient databases, optimizing data storage and retrieval for scalable.",
      icon: faDatabase,
      percent: 50,
    },
    {
      name: "Tailwind",
      des: "I design flexible, efficient databases, optimizing data storage and retrieval for scalable.",
      icon: "tailwind",
      percent: 75,
    },
    {
      name: "Bootstrap",
      des: "I design flexible, efficient databases, optimizing data storage and retrieval for scalable.",
      icon: faBootstrap,
      percent: 80,
    },
  ]);

  return (
    <section className="skills" ref={scrollTab}>
      <div
        className="text-6xl font-bold items-center justify-center my-8 flex gap-3"
        ref={(el) => el && divs.current.push(el)}
      >
        These are my <span className="text-orange-500">Skills</span>
      </div>
      <div className="des1" ref={(el) => el && divs.current.push(el)}>
        I specialize in full-stack development using the MERN stack, creating
        responsive user interfaces and efficient back-end systems. My expertise
        ensures seamless, scalable web applications from front to back.
      </div>
      <div className="list">
        {listSkills.map((value, index) => {
          const [counter, setCounter] = useState(0);
          const [isVisible, setIsVisible] = useState(false);
          const skillRef = useRef();

          useEffect(() => {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setIsVisible(true); // Start the animation when visible
                } else {
                  setIsVisible(false); // Stop the animation when out of view
                }
              },
              { threshold: 0.5 } // Trigger when 50% of the div is visible
            );

            if (skillRef.current) {
              observer.observe(skillRef.current); // Observe the skill div
            }

            return () => {
              if (skillRef.current) {
                observer.unobserve(skillRef.current); // Clean up observer on unmount
              }
            };
          }, []);

          useEffect(() => {
            if (isVisible) {
              setCounter(0); // Reset counter each time the skill becomes visible
              const interval = setInterval(() => {
                setCounter((prevCounter) => {
                  if (prevCounter < value.percent) {
                    return prevCounter + 1;
                  } else {
                    clearInterval(interval);
                    return prevCounter;
                  }
                });
              }, 30);

              return () => clearInterval(interval); // Clean up on unmount or visibility change
            }
          }, [isVisible, value.percent]);

          return (
            <div
              className="item"
              key={value.name}
              ref={skillRef} // Attach the ref to each skill div
            >
              {value.icon === "tailwind" ? (
                <SiTailwindcss className="text-black text-7xl tailwind" />
              ) : (
                <FontAwesomeIcon className="icon" icon={value.icon} size="2x" />
              )}

              <div className="skilll">
                <div className="outer">
                  <div className="inner">
                    <div className="number">{counter}%</div>
                  </div>
                </div>
                <svg
                  className="progress_svg"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="70px"
                  height="70px"
                >
                  <defs>
                    <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#814DA" />
                    <stop offset="100%" stopColor="#834EA3" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="30"
                    cy="30"
                    r="19"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: 115, // Circumference of the circle
                      strokeDashoffset: 115 - (115 * counter) / 100, // Dynamic strokeDashoffset
                    }}
                  />
                </svg>
              </div>

              <h3 className="font-extrabold my-3 name_size">{value.name}</h3>
              <div className="des font-semibold">{value.des}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
