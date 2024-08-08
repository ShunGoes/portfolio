import React from 'react'
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
  transition: {when:"beforeChildren", staggerChildren: 0.4}
}
const ChildVariants = {
  hidden: {opacity: 0,scale: 0}, visible: {opacity: 1, scale: 1},
  transition: {ease: "easeInOut",duration: 2}
}
const Experience = () => {

  return (
    <motion.section 
      initial = "hidden"
      whileInView= "visible"
      variants= {containerVariants}
      className="lg:my-[2rem] my-[3rem]">
      <h3 className="sticky top-[3.5rem] mb-[1.5rem] bg-black text-white py-4 lg:top-[-1rem] lg:py-7 lg:mb-[0.2rem]  ">
        Experience
      </h3>
      <motion.div 
        initial = "hidden"
        whileInView = "visible"
        variants={ChildVariants}
        viewport={{once:true}}
        className="flex flex-col gap-4 lg:my-3 lg:gap-2">
        <div 
          
          className="flex flex-col gap-2">
          <span className="text-gray-400 text-[10px] font-semibold dates lg:text-[13px]">
            May 2024- Present
          </span>
          <strong className="experience-title text-[14px]">
            Zerotozenith Media
          </strong>
          <span className="text-gray-400 text-[10px] font-semibold dates lg:text-[13px]">
            WordPress/Frontend Developer
          </span>
        </div>
        <ul className=''>
          <li>
          Improved website speed by 35% through strategic optimization techniques, enhancing user experience and SEO.
          </li><br />

        <li>
        Delivered comprehensive WordPress solutions, including custom theme development and plugin integration, to more than 20 clients.
        </li><br />

        <li>
        Leveraged HTML, CSS, and JavaScript to create dynamic and engaging WordPress websites, aligning with client goals.
        </li><br />
        </ul>
        <div className="italic flex shrink-0 flex-wrap">
          <p className="px-2 border rounded-lg">Divi Theme Builder</p>
          <p className="px-2 border rounded-lg">HTML</p>
          <p className="px-2 border rounded-lg">Css</p>
          <p className="px-2 border rounded-lg">Responsive Webpage Design</p>
        </div>
      </motion.div>
      <motion.div 
        initial = "hidden"
        whileInView = "visible"
        variants={ChildVariants}
        viewport={{once:true}}
        className="flex flex-col gap-4 my-[2.5rem] lg:my-[2rem] lg:gap-2">
        <div 
          
          className="flex flex-col gap-2">
          <span className="text-gray-400 text-[10px] font-semibold dates lg:text-[13px]">
            Sept 2023 - Present
          </span>
          <strong className="experience-title text-[14px]">
            Pit Africa
          </strong>
          <span className="text-gray-400 text-[10px] font-semibold dates lg:text-[13px]">
            Frontend Developer
          </span>
        </div>
        <ul className=''>
          <li>
          Implemented optimizations to enhance website performance, aiming for a 20% reduction in page load time to improve overall user experienc
          </li><br />

        <li>
        Collaborate with UI/UX designers and backend developers to implement 3 new features within the current sprint cycle, enhancing the functionality and user engagement of our web applications..
        </li><br />

        <li>
        Actively contribute to design and code reviews, aiming for a 90% participation rate to foster collaboration and maintain code quality standards within the development team.
        </li><br />
        </ul>
        <div className="italic flex shrink-0 flex-wrap">
          <p className="px-2 border rounded-lg">React</p>
          <p className="px-2 border rounded-lg">Typescript</p>
          <p className="px-2 border rounded-lg">Git</p>
        </div>
      </motion.div>
      <motion.div 
        initial = "hidden"
        whileInView = "visible"
        variants={ChildVariants}
        viewport={{once:true}}
        className="flex flex-col gap-4 my-[2.5rem] lg:my-[2rem]">
        <div className="flex flex-col gap-2">
          <span className="text-gray-400 text-[10px] font-semibold dates lg:text-[13px]">
            May 2023 - Sept 2023
          </span>
          <strong className="experience-title text-[14px]">
            Leand Support
          </strong>
          <span className="text-gray-400 text-[10px] font-semibold dates lg:text-[13px]">
            Web development Tutor
          </span>
        </div>
        <ul>
          <li>
          Created initial assessment for over 100students,identifying strengths and areas for improvements and achieved 95% satisfaction rate through feedbacks and adjustment
          </li><br />
          <li>
          Created and delivered 20+  in-depth tutorials,which in turn led to rapid improvements in  over 65% of students.
          </li><br />
          <li>
          Implemented hands-on exercises with frameworks, contributing to a 40% increase in practical application.
          </li><br />
        </ul>
        <div className="italic flex shrink-0 flex-wrap">
          <p className="px-2 border rounded-lg">HTML</p>
          <p className="px-2 border rounded-lg">CSS</p>
          <p className="px-2 border rounded-lg">Javascript</p>
          <p className="px-2 border rounded-lg">Tailwind CSS</p>
          <p className="px-2 border rounded-lg">Python</p>
        </div>
      </motion.div>
      <motion.div 
        initial = "hidden"
        whileInView = "visible"
        variants={ChildVariants}
        viewport={{once:true}}
        className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 lg:my-3">
          <span className="text-gray-400 text-[10px] font-semibold dates lg:text-[13px]">
            aug 2022 - Apr 2023
          </span>
          <strong className="experience-title text-[14px]">
            HighFly Tec World
          </strong>
          <span className="text-gray-400 text-[10px] font-semibold dates lg:text-[13px]">
          Web development Tutor
          </span>
        </div>
        <ul>
          <li>
          Ensured over 30 students understood the basis of web development that resulted in 55% increase in projects delivered within the same time frame as compared to the previous semester
          </li><br />
          <li>
          Mentored a group of 23 students growth in web development over the course of 3 months which resulted in a 65% increase in students being promoted to the next class as compared to previous semesters
          </li><br />
          <li>
          Monitored and graded projects, quizzes and examination that accumulated in a 50% success rate which subsequently increased the company’s student intake the next semester 
          </li><br />
        </ul>
        <div className="italic flex shrink-0 flex-wrap">
          <p className="px-2 border rounded-lg">React</p>
          <p className="px-2 border rounded-lg">CSS</p>
          <p className="px-2 border rounded-lg">Git</p>
          <p className="px-2 border rounded-lg">Github</p>
        </div>
      </motion.div>
      <motion.div 
        initial = "hidden"
        whileInView = "visible"
        variants={ChildVariants}
        viewport={{once:true}}
        className="flex flex-col gap-4  mt-7">
        <div className="flex flex-col gap-2">
          <span className="text-gray-400 text-[10px] font-semibold dates lg:text-[13px]">
            aug 2022 - Apr 2023
          </span>
          <strong className="experience-title text-[14px]">
            HNG Internship
          </strong>
          <span className="text-gray-400 text-[10px] font-semibold dates lg:text-[13px]">
          Frontend developer Intern
          </span>
        </div>
        <ul>
          <li>
          Teamed up with 8 other developers to convert Figma designs into responsive user interfaces.and also Identified and resolved javascript logic  bugs, ensuring smooth website functionality and a seamless user experience.
          </li><br />
          <li>
          Led a team of 8 frontend developers that Implemented 3 Landing pages, user’s dashboard, and inventory carts, surpassing project deadlines and showcasing exceptional  organisational skills and collaborative efficiency
          </li><br />
          <li>
          Collaborated with a team of 3 backend developers to Implement endpoint integration including user’s authentication (sign-up and login) in 2 days thereby preventing the team from being eliminated
          </li><br />
        </ul>
        <div className="italic flex shrink-0 flex-wrap">
          <p className="px-2 border rounded-lg">React</p>
          <p className="px-2 border rounded-lg">CSS</p>
          <p className="px-2 border rounded-lg">Git</p>
          <p className="px-2 border rounded-lg">Github</p>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Experience
