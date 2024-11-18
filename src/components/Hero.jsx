import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  // State to trigger animation on page load
  const [isAnimating, setIsAnimating] = useState(false);

  
  // Reset animation on component mount
  useEffect(() => {
    setIsAnimating(false);
    const timeout = setTimeout(() => setIsAnimating(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  // Stagger effect for container
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Spring animation for elements
  const springAnimation = {
    initial: { x: "-10vw", opacity: 0, filter: "blur(10px)" },
    animate: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 90, damping: 9, mass: 1 },
    },
  };

  const imageAnimation = {
    initial: { x: "10vw", opacity: 0, filter: "blur(10px)" },
    animate: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 80, damping: 7, mass: 1 },
    },
  };

  const iconAnimation = {
    initial: { y: "7vw", opacity: 0, filter: "blur(10px)" },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 80, damping: 10, mass: 2 },
    },
  };

  return (
    <section className="hero relative z-10 mx-auto  max-w-6xl px-5 py-20 flex flex-col lg:flex-row gap-4 items-center min-h-svh mt-12 -mb-10">
      {/* <section className="hero mx-auto max-w-6xl px-5 py-20 flex flex-col lg:flex-row gap-4 items-center mt-36"> */}
      {/* Right Section with Animated Text */}
      {isAnimating && (
        <motion.div
          key="right-section"
          className="right flex-2 pl-5 space-y-5"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-2xl font-semibold"
            variants={springAnimation}
          >
            Hi Their,
          </motion.h2>
          <motion.h1
            className="text-5xl font-bold py-2 text-orange-500 text-shadow"
            variants={springAnimation}
          >
            <span className="text-black">I’m </span>
            <p className="ml-20 mt-1">Jaishankar Reddy</p>
          </motion.h1>
          <motion.h1
            className="text-3xl font-bold pb-2"
            variants={springAnimation}
          >
            <div className="flex text-2xl font-bold ">
              {" "}
              <span className="mr-2 text-gray-00 ">I am a </span>
              <p className="text-orange-600 "> Full-Stack Developer</p>
            </div>
          </motion.h1>
          <motion.p
            className="text-gray-600 max-w-xl text-base font-medium pb-2"
            variants={springAnimation}
          >
            I’m a Full Stack Web Developer specializing in the MERN stack, with
            expertise in creating responsive, scalable applications. I focus on
            both front-end and back-end development, prioritizing user
            experience and efficiency.
          </motion.p>
          <motion.a href="resume.pdf" variants={springAnimation}>
            <motion.button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-6 py-2 text-base my-5">
              Download CV
            </motion.button>
          </motion.a>
        </motion.div>
      )}

      {/* Left Section with Profile Image and Icons */}
      {isAnimating && (
        <motion.div
          key="left-section"
          className="left flex-1 pl-44 flex flex-col items-center"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          
            <motion.div
              variants={imageAnimation}
              className="relative w-72 h-72 rounded-full border-8 border-white overflow-hidden shadow-lg"
            >
              <img
                src={"images/myImg.jpg"}
                alt="Profile"
                className="object-cover w-full h-full z-20 "
              />
            </motion.div>
        

          <motion.div className="flex space-x-4 mt-10 ">
            <motion.a
              variants={iconAnimation}
              href="#"
              className="hover:text-orange-500 "
            >
              <FaFacebook className="h-5 w-5" />
            </motion.a>
            <motion.a
              variants={iconAnimation}
              href="#"
              className="hover:text-orange-500"
            >
              <FaTwitter className="h-5 w-5" />
            </motion.a>
            <motion.a
              variants={iconAnimation}
              href="#"
              className="hover:text-orange-500"
            >
              <Instagram className="h-5 w-5" />
            </motion.a>
            <motion.a
              variants={iconAnimation}
              href="https://www.linkedin.com/in/jai-shankar-9a65ab314"
              className="hover:text-orange-500"
            >
              <FaLinkedin className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
