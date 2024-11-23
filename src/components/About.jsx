import React, { useRef } from 'react'
import { Mail, ChevronRight, MapPin, Briefcase, Github, Twitter } from 'lucide-react'
import CustomHook from "./CustomHook";
const About = () => {

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <>
      <section className="about_section mx-auto max-w-6xl py-8 sm:py-15 relative mb-10 sm:mb-20 -mt-4 sm:-mt-8 px-4 sm:px-6 lg:px-8" ref={scrollTab}>
        {/* <h2 className="text-3xl sm:text-5xl font-bold justify-center items-center mb-5 sm:mb-7 flex gap-3" ref={(el) => el && divs.current.push(el)}>
          About<span className="text-orange-500"> Me</span>
        </h2> */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="order-1 lg:order-none hidden sm:block" ref={(el) => el && divs.current.push(el)}>
            <img
              src="images/about_me.png"
              alt="3D Avatar"
              className="mx-auto w-full max-w-xs my-8 sm:my-12"
            />
          </div>
          {/* <div className="space-y-4 sm:space-y-6 order-2 lg:order-none">
            <h3 className='text-gray-800 font-bold text-3xl sm:text-4xl pt-3 sm:pt-5' ref={(el) => el && divs.current.push(el)}>I'm Jaishankar</h3>
            <h3 className='text-gray-800 font-bold text-xl sm:text-2xl pb-1 sm:pb-2' ref={(el) => el && divs.current.push(el)}>Software Engineer</h3>
            <h4 className="text-gray-600 max-w-xl text-sm sm:text-base font-medium" ref={(el) => el && divs.current.push(el)}>
              I am a Software Engineer based in Bangalore, India. I am very passionate about improving my coding skills, developing web applications & websites. I build web apps and websites using MERN Stack. Love to build Full-Stack applications.
            </h4>
            <div className='flex flex-col sm:flex-row sm:items-center' ref={(el) => el && divs.current.push(el)}>
              <p className="text-orange-500 text-sm sm:text-base font-bold">Email : </p>
              <span className="text-gray-900 text-sm sm:text-base font-medium sm:ml-2">jaishankar63663@gmail.com</span>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center' ref={(el) => el && divs.current.push(el)}>
              <p className="text-orange-500 text-sm sm:text-base font-bold">Place : </p>
              <span className="text-gray-900 text-sm sm:text-base font-medium sm:ml-2">Bangalore, Karnataka, India, 560062</span>
            </div>
          </div> */}

          

<div className="px-4 py-12 bg-background"  >
      <div className="max-w-full mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2" >
          <h2 className="about_me text-3xl sm:text-5xl font-bold  mb-5 sm:mb-7 flex gap-3" ref={(el) => el && divs.current.push(el)}>
            About <span className="text-orange-500 text-primary">Me</span>
          </h2>
          <div className="flex items-center text-lg font-medium gap-2 text-muted-foreground" ref={(el) => el && divs.current.push(el)}>
            <Briefcase className="w-5 h-5  text-orange-500" />
            <span>Software Engineer</span>
          </div>
        </div>

        {/* Main Content Card */}
        
          <div className="about_me_card card p-6" ref={(el) => el && divs.current.push(el)}>
            <p className=" card_disc text-muted-foreground leading-relaxed text-sm font-medium">
              I am a Software Engineer based in Bangalore, India. I am very passionate about improving my coding skills, 
              developing web applications & websites. I build web apps and websites using MERN Stack. 
              Love to build Full-Stack applications.
            </p>
          </div>

      
        {/* Contact Information */}
        <div className="space-y-4 bg-muted/50 rounded-lg p-4 bg-gray-100 " ref={(el) => el && divs.current.push(el)}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <Mail className="w-4 h-4 text-primary  text-orange-500" />
            </div>
            <div>
              <p className="about_contact_hedings text-sm  text-muted-foreground">Email</p>
              <a href="mailto:jaishankar33@gmail.com" className="about_contact_content text-sm font-medium hover:text-primary">
                jaishankar6366@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200   flex items-center justify-center">
              <MapPin className="w-4 h-4 text-primary text-orange-500" />
            </div>
            <div>
              <p className="about_contact_hedings text-sm text-muted-foreground">Location</p>
              <p className=" about_contact_content text-sm font-medium">Bangalore, Karnataka, India</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full group bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors" ref={(el) => el && divs.current.push(el)}>
          <div className="flex items-center justify-between">
            <a href="resume.pdf">
            <button className="about_resume font-medium">View Full Resume</button>
            </a>
            <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>
    </div>




        </div>
      </section>
    </>
  )
}

export default About