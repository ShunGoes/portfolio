import {motion} from 'framer-motion'

const containerVariants = {
    hidden: {opacity: 0,scale: 0},
    visible: {opacity: 1, scale: 1,
    transition: {duration: 1, when: "beforeChildren", staggerChildren: 0.4}
  }}
   const ChildVariants = {
    hidden: {opacity: 0,scale: 0},
    visible: {opacity: 1,scale: 1},
   }

const About_Large = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      // viewport={{once: true}}
      className="lg:my-[2rem[ hidden lg:block"
    >
      <h3 className="sticky top-[3.5rem] mb-[1.5rem] bg-black text-white py-4 lg:top-[-1rem] lg:py-7 lg:mb-[0.2rem]">
        ABOUT
      </h3>
      <motion.p 
        variants={ChildVariants}
        // viewport={{once:true}}
        >
        I am passionate about turning ideas into visually appealing and
        intuitive digital experiences, I'm also a dedicated frontend developer
        with a keen eye for design and a commitment to creating seamless,
        responsive, and user-friendly websites.
      </motion.p>{' '}
      <br />
      <motion.p
        variants={ChildVariants}
        // viewport={{once:true}}
        >
       My expertise extends to the use of various frontend development
      technologies such as React and Typescript. While diving into other
      aspects of web development such as Content Management Systems (CMS) with WordPress and i have also tried building on the backend with Nodejs .
      </motion.p>{' '}
      <br />
      <motion.p 
        variants={ChildVariants}
        // viewport={{once:true}}
        >
        {' '}
        My process is centered on having a thorough understanding of the
        objectives and needs of both clients and end users. My commitment lies
        on providing solutions that not only fulfill technical specifications
        but also surpass them in terms of visual attractiveness and user
        experience.
      </motion.p>
      <br />
      <motion.p
        variants={ChildVariants}
        // viewport={{once:true}}
        >
        I do best in fast-paced settings where I can swiftly adjust to new
        challenges and developing technologies. My desire to always learn new
        things motivates me to stay ahead in a field that is changing all the
        time. I'm not simply a developer; I'm also an innovator, a
        problem-solver, and a creative thinker who uses technology to try and
        improve things.
      </motion.p>
    </motion.div>
  )
}

export default About_Large