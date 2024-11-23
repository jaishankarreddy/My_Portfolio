import React, { useEffect, useRef } from "react";
import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'
import CustomHook from "./CustomHook";




const Contact = () => {
  
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen  mt-40  max-w-6xl m-auto bg-white text-black mb-20" ref={scrollTab} >
      <div className="container mx-auto px-4 py-16" >
        <h1 className="sm:text-5xl text-3xl flex justify-center font-bold mb-16 sd:mb-20 text-orange-500 " ref={(el) => el && divs.current.push(el)}> <span className="text-black mr-3">Contact</span> Me</h1>
        <div className="grid md:grid-cols-2 gap-14 bg-gray-200 p-10 rounded-3xl contact_us ">
          <div className="text-xs md:text-sm">
            <form onSubmit={handleSubmit} className="space-y-3" ref={(el) => el && divs.current.push(el)}>
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-semibold mb-2" >Name</label>
                <input ref={(el) => el && divs.current.push(el)}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2" ref={(el) => el && divs.current.push(el)}>Email</label>
                <input ref={(el) => el && divs.current.push(el)}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2" ref={(el) => el && divs.current.push(el)}>Message</label>
                <textarea ref={(el) => el && divs.current.push(el)}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows={4}
                />
              </div>
              <button  ref={(el) => el && divs.current.push(el)}
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-xs md:text-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </form>
          </div >
          <div className="space-y-3" >
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-orange-500" ref={(el) => el && divs.current.push(el)}>Get in Touch</h2>
            <p className="mb-4 text-xs md:text-base font-semibold text-gray-800" ref={(el) => el && divs.current.push(el)}>
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex items-center space-x-3 text-gray-800 font-medium sm:font-semibold  text-xs md:text-sm" ref={(el) => el && divs.current.push(el)}>
              <Mail className="text-orange-500"  />
              <span>jaishankar63663@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-800 font-medium sm:font-semibold  text-xs md:text-sm" ref={(el) => el && divs.current.push(el)}>
              <Phone className="text-orange-500" />
              <span>+91 9986535860</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-800 font-medium sm:font-semibold  text-xs md:text-sm" ref={(el) => el && divs.current.push(el)}>
              <MapPin className="text-orange-500" />
              <span>Bangalore, Karnataka, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
