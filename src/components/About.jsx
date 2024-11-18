import React, { useRef } from 'react'
import CustomHook from './CustomHook';

const About = () => {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
   <>
    <section className="mx-auto max-w-6xl py-15 relative mb-20 -mt-8" ref={scrollTab}>
    <h2 className="text-5xl font-bold items-center justify-center mb-7 flex gap-3"  ref={(el) => el && divs.current.push(el)}>About<span className="text-orange-500"> Me</span></h2>
          <div className=" grid lg:grid-cols-2 gap-8 items-center">
            <div  ref={(el) => el && divs.current.push(el)}>
              <img
                src="images/about_me.png"
                alt="3D Avatar"
                className="mx-auto w-full max-w-xs my-30"
              />
            </div>
            <div className="space-y-6"  >
              
              <h3 className=' text-gray-800 font-bold text-4xl pt-5 ' ref={(el) => el && divs.current.push(el)} >I'm Jaishankar</h3>
              <h3 className='text-gray-800 font-bold text-2xl pb-2' ref={(el) => el && divs.current.push(el)} >Software Engineer</h3>
              <h4 className="text-gray-600 max-w-xl text-base font-medium" ref={(el) => el && divs.current.push(el)}>I am a Software Engineer based in Bangalore, India. I am very passionate about improving my coding skills, developing web applications & websites. I build web apps and websites using MERN Stack. Love to build Full-Stack applications.</h4>
              <div className='flex' ref={(el) => el && divs.current.push(el)}><p className="text-orange-500 max-w-xl text-base font-bold" >Email : </p><span className="text-gray-900 max-w-xl text-base font-medium ml-2" > jaishankar63663@gmail.com</span></div>
              <div className='flex' ref={(el) => el && divs.current.push(el)}><p className="text-orange-500 max-w-xl text-base font-bold" >Place : </p><span className="text-gray-900 max-w-xl text-base font-medium ml-2" > Bangalore, Karnataka, India, 560062</span></div>




              {/* <p className="text-gray-600 max-w-xl text-base font-medium"  ref={(el) => el && divs.current.push(el)}>
                My technical expertise includes JavaScript, React, Node.js, and
                Express.js and many more allowing me to deliver robust solutions across both
                front-end and back-end. I prioritize user experience,
                performance, and collaborative problem-solving.
              </p>
              <div className="space-y-4"  ref={(el) => el && divs.current.push(el)}>
                {[
                  { name: "Java Script", value: 80 },
                  { name: "React js", value: 90 },
                  { name: "Node js", value: 75 },
                  { name: "Express js", value: 90 },
                  { name: "Mysql", value: 80 },
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2 font-semibold" >
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-orange-500 rounded-full"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </section>
   </>
  )
}

export default About