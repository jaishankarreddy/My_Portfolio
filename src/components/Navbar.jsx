import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
    return `${baseClass} bg-orange-500 px-5 py-2 rounded-full ${isScrolled ? (isHovered ? "opacity-100" : "opacity-0") : "opacity-100"} transition-opacity duration-300`;
  };

  return (
    <div>
      {isVisible && (
        <nav
          className={`nav fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out
            ${isScrolled ? "-translate-y-full top-3 hover:translate-y-0" : ""}`}
          style={{ marginTop: isScrolled ? '3px' : '30px' }}
        >
          <div className="absolute w-full h-[130px] -top-[30px]" onMouseEnter={() => setIsHovered(true)} />
          
          <div className="nav_bg mx-auto max-w-6xl backdrop-blur-0">
            <div className="nav_container bg-gray-900/90 rounded-full px-4 sm:px-7 py-4 flex items-center justify-between relative">
              {/* Left Navigation Items */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-10">
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
              <div className=" nav_js flex items-center space-x-1 text-white">
                <span className="text-orange-500 text-2xl animate-bounce">●</span>
                <span
                  className="nav_js font-bold text-2xl text-white cursor-pointer"
                  onClick={() => scrollToSection("home")}
                >
                  JS
                </span>
              </div>

              {/* Right Navigation Items */}
              <div
                className={`hidden lg:flex items-center space-x-4 xl:space-x-10 transition-all duration-300
                  ${isScrolled ? (isHovered ? "opacity-100" : "opacity-0") : "opacity-100"}`}
              >
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

              {/* Hamburger Menu for Mobile and Tablet */}
              <button
                className="hand_burger lg:hidden text-white text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? '✖' : '☰'}
              </button>
            </div>

            {/* Mobile and Tablet Menu */}
            {isMenuOpen && (
              <div className="lg:hidden bg-gray-900/90 mt-2 rounded-xl flex flex-col items-center space-y-4 py-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={getButtonClass(item.isSpecial)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;