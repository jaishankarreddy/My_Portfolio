import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const footerItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <footer className="bg-gray-100 py-10 -mb-5">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-5 space-x-1 text-white ">
              <span className="text-orange-500 text-2xl animate-bounce">●</span>
              <span className="font-bold text-2xl text-gray-700  cursor-pointer"
                onClick={() => scrollToSection("home")}>
                JS
              </span>
            </div>

          
          <div className="flex justify-center gap-6 mb-6 text-sm">
          {footerItems.filter(item => !item.rightSide).map(item => (
             <button 
             key={item.id}
             onClick={() => scrollToSection(item.id)}
             className= "text-gray-600 font-medium hover:text-orange-500"
           >
             {item.label}
           </button>
          ))}
             


         
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <button href="#" className="text-gray-600 hover:text-orange-500">
              <Facebook className="h-5 w-5" />
            </button>
            <button href="#" className="text-gray-600 hover:text-orange-500">
              <Twitter className="h-5 w-5" />
            </button>
            <button href="#" className="text-gray-600 hover:text-orange-500">
              <Instagram className="h-5 w-5" />
            </button>
            <button href="#" className="text-gray-600 hover:text-orange-500">
              <Linkedin className="h-5 w-5" />
            </button>
          </div>
          <p className="text-xs text-gray-600">
            © 2024 <span className="text-orange-500">Jaishankar</span> All
            Rights Reserved , Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
