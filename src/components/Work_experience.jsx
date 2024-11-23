import React, { useRef } from "react";
import CustomHook from "./CustomHook";

const Work_experience = () => {

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="work_section mx-auto mt-20 max-w-4xl  px-4 pt-20 work_exp"  ref={scrollTab}>
      <h2 className="text-3xl font-bold items-center justify-center my-5 sm:my-7 mb-10 flex gap-2 sm:gap-3 sm:text-5xl" ref={(el) => el && divs.current.push(el)}>
        My <span className="text-orange-500" >Work Experience</span>
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />
        {[
           {
            company: "IPEC Solutions Pvt Limited, Bangalore-98",
            period: "Oct 2022 - Nov 2022",
            role: "Python Programming with RDBMS.",
            dotColor: "bg-orange-500",
            discription:
              "Internship on Python programming with Specialization in Relational Data Base Management, where I gained hands-on experience on RDBMS.",
          },
          {
            company: "Colt Assist Pvt Limited, Bangalore-61",
            period: "Oct 2023 - Nov 2023",
            role: "Java Fill-Stack Developer.",  
            dotColor: "bg-gray-400 ",
            discription:
              "Internship on Java Full Stack Web Development, where I gained hands-on experience in building responsive front-end interfaces and efficient back-end solutions with Java.",
          },
         
          {
            company: "Rooman Pvt Limited",
            period: "oct 2024 - Present",
            role: "Devops Engineer.",
            dotColor: "bg-orange-500",
            discription:
              "Internship on Devops, where I gained hands-on experience in Devops, and all other Devops related applications.",
          },
        ].map((experience, index) => (
          <div key={index} className="flex mb-2 sm:mb-12 items-center" ref={(el) => el && divs.current.push(el)}>
            <div className="work_left w-1/2 pr-8 text-right">
              <h3 className=" work_company font-bold text-2xl mr-5">{experience.company}</h3>
              <p className="work_period text-gray-500 text-sm mt-2 mr-5 font-semibold">
                {experience.period}
              </p>
            </div>
            <div
              className={`work_dot w-4 h-4 rounded-full ${experience.dotColor} z-10 flex-shrink-0`}
            />
            <div className="work_right w-1/2 pl-8">
              <h4 className="work_role text-gray-800 text-lg ml-5 mt-5 font-bold">
                {experience.role}
              </h4>
              <p className="work_discription text-gray-500 font-semibold text-sm mt-2 ml-5 ">
                {experience.discription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work_experience;
