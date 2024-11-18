import React, { useEffect, useRef, useState } from "react";
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
import { SiTailwindcss } from "react-icons/si";
import CustomHook from "./CustomHook";
import "./progress.css";

const Skills = () => {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  // List of skills without the percentage counter
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "With a strong foundation in HTML, I bring clean, semantic structure to every project.",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "Proficient in CSS, I design responsive, visually appealing layouts that work seamlessly on any device.",
      icon: faCss3,
    },
    {
      name: "JavaScript",
      des: "I build dynamic, interactive features that enhance user engagement and functionality.",
      icon: faJs,
    },
    {
      name: "React Js",
      des: "I create dynamic, component-based interfaces that ensure smooth user interactions and efficient rendering.",
      icon: faReact,
    },
    {
      name: "Node Js",
      des: "I develop scalable, high-performance back-end solutions, handling data-intensive tasks and API integrations.",
      icon: faNodeJs,
    },
    {
      name: "MongoDB",
      des: "I design flexible, efficient databases, optimizing data storage and retrieval for scalable applications.",
      icon: faDatabase,
    },
    {
      name: "Tailwind CSS",
      des: "I utilize Tailwind CSS for rapid styling and efficient, responsive design.",
      icon: "tailwind",
    },
    {
      name: "Bootstrap",
      des: "I use Bootstrap for quick prototyping and building responsive layouts.",
      icon: faBootstrap,
    },

    
  ]);

  return (
    <section className="skills -mt-5" ref={scrollTab}>
      <div
        className="text-5xl font-bold items-center justify-center my-8 flex gap-3"
        ref={(el) => el && divs.current.push(el)}
      >
        My <span className="text-orange-500">Skills</span>
      </div>
      <div className="des1" ref={(el) => el && divs.current.push(el)}>
        I specialize in full-stack development using the MERN stack, creating
        responsive user interfaces and efficient back-end systems. My expertise
        ensures seamless, scalable web applications from front to back.
      </div>
      <div className="list">
        {listSkills.map((skill, index) => (
          <div
            className="item"
            key={skill.name}
            ref={(el) => el && divs.current.push(el)}
          >
            {/* Skill Icon */}
            {skill.icon === "tailwind" ? (
              <SiTailwindcss className="text-black text-7xl tailwind" />
            ) : (
              <FontAwesomeIcon className="icon" icon={skill.icon} size="2x" />
            )}

            {/* Skill Name */}
            <h3 className="font-extrabold my-3 name_size">{skill.name}</h3>

            {/* Skill Description */}
            <div className="des font-semibold">{skill.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
