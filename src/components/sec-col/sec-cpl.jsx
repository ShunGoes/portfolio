import React from 'react'
import About from '../about/about'
import Experience from '../experience/experience'
import './sec.css'
import Project from '../project/project'
import Volunteer from '../volunteer/volunteer'
import Footer from '../footer/footer'
import {motion,useScroll} from "framer-motion"

const SecCol = () => {
  const { scrollYProgress } = useScroll();
  return (
    <section
      className='col-span-2 lg:col-span-1 sec  flex items-center '>
        <motion.div style={{scaleX: scrollYProgress}} />
      <div className='lg:h-5/6  w-full lg:my-auto sec '>

      <About />
      <Experience /> 
      <Project />
      <Volunteer /> 
      <Footer />
      </div>
    </section>
  )
}

export default SecCol


