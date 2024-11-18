import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  const springAnimation = {
    initial: { x: "-20vw", opacity: 0, filter: "blur(10px)" },
    animate: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 90, damping: 9, mass: 1 },
    },
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", isSpecial: true },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience", rightSide: true },
    { id: "project", label: "Project", rightSide: true },
    { id: "contact", label: "Contact", rightSide: true }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const getButtonClass = (isSpecial) => {
    const baseClass = "text-white text-base";
    if (!isSpecial) return baseClass;
    return `${baseClass} bg-orange-500 px-5 py-2 rounded-full ${
      isScrolled ? (isHovered ? "opacity-100" : "opacity-0") : "opacity-100"
    } transition-opacity duration-300`;
  };

  return (
    <div >
       {/* <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
          ${isScrolled && isVisible ? "bg-gray-900/90" : ""}`} // Apply background only when visible and scrolled
        style={{ marginTop: isScrolled ? '10px' : '20px' }} // Margin at initial load
      > */}
     
     {isVisible &&(
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out
        ${isScrolled ? "-translate-y-full top-3 hover:translate-y-0" : ""}`} style={{ marginTop: isScrolled ? '3px' : '30px' }}>
        <div className="absolute w-full h-[130px] -top-[30px]" onMouseEnter={() => setIsHovered(true)} />
        
        <div className="mx-auto max-w-6xl backdrop-blur-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          
          <div className="bg-gray-900/90 rounded-full px-7 py-4 flex items-center justify-between relative">
            {/* Left Navigation Items */}
            <div className="flex items-center space-x-10">
              {navItems.filter(item => !item.rightSide).map(item => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={getButtonClass(item.isSpecial)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Logo */}
            <div className="flex items-center space-x-1 text-white">
              <span className="text-orange-500 text-2xl animate-bounce">●</span>
              <span className="font-bold text-2xl text-white cursor-pointer"
                onClick={() => scrollToSection("home")}>
                JS
              </span>
            </div>

            {/* Right Navigation Items */}
            <div className={`flex items-center space-x-10 transition-all duration-300
              ${isScrolled ? (isHovered ? "opacity-100" : "opacity-0") : "opacity-100"}`}>
              {navItems.filter(item => item.rightSide).map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={getButtonClass(item.isSpecial)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
     )}
    </div>
  );
};

export default Navbar
