import { FaXTwitter, FaLinkedin, FaGithub, FaCheck } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { HiMiniClipboardDocumentCheck } from 'react-icons/hi2'
import './personal.css'
import { CopyToclipboard } from '../../helpers/copy'
import { useState } from 'react'
import { motion } from "framer-motion"
import { containerVariants,ChildVariants } from '../../helper'
const PersonalInfo = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    let demo = document.getElementById('demo').innerText
      await CopyToclipboard(demo)
     setCopied(true)
  }
  
  setTimeout(() => {
    setCopied(false)
  }, 3000)

  
  return (
    <motion.div 
        initial= "hidden" animate="visible" variants={containerVariants}
        className="col-span-2 lg:col-span-1 text-white  flex flex-col gap-[2rem] justify-center  h-[30rem] lg:gap-[2.5rem]">
      <div className="">
        <h1 className="text-2xl font-[700] mb-[0.8rem] lg:text-3xl">
          Favour Timothy
        </h1>
        <div className="flex flex-col  justify-between w-1/2 lg:flex-row ">
          <p className="text-sm text-gray-400">Frontend Developer </p>
        </div>
      </div>
      <motion.p 
        variants={ChildVariants}
        className=" w-11/12">
        👋 Hello, i'm a passionate web developer based in Nigeria. With a keen
        interest in Frontend web development, I bring creativity and a
        solutions-driven mindset to every project. Reach out to me today let's work together.
      </motion.p>
      <motion.div 
          variants={ChildVariants}
          className="hidden italic lg:flex shrink-0 gap-7 flex-wrap rounded-lg w-11/12">
        <p className="text-gray-400 text-xl font-[600] border px-3">HTML</p>
        <p className="text-gray-400 text-xl font-[600] border px-3">CSS</p>
        <p className="text-gray-400 text-xl font-[600] border px-3">
          TailwindCSS
        </p>
        <p className="text-gray-400 text-xl font-[600] border px-3">
          WordPress
        </p>
        <p className="text-gray-400 text-xl font-[600] border px-3">
          Javascript
        </p>
        <p className="text-gray-400 text-xl font-[600] border px-3">React</p>
        <p className="text-gray-400 text-xl font-[600] border px-3">
          Typescript
        </p>
        <p className="text-gray-400 text-xl font-[600] border px-3">Node/Express</p>
      </motion.div>
      <motion.div 
          variants={ChildVariants}
          className="flex items-center justify-between w-1/2 lg:[mt-[2rem]">
        <a href="https://twitter.com/shunnode" title='Visit my Twitter' className='border p-2 rounded-lg'>
          <FaXTwitter size={20} />
        </a>
        <a href="mailto:favourkcb@gmail.com" title='Send a mail' className='border p-2 rounded-lg'>
          <SiGmail size={20} />
        </a>
        <a href="https://www.linkedin.com/in/favour-timothy-234a07182/" title='Visit my LinkedIn' className='border p-2 rounded-lg'>
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/shunGoes" title='Check out my Github' className='border p-2 rounded-lg'>
          <FaGithub size={20} /> 
        </a>
        <div className=" lg:block tel relative border p-2 rounded-lg">
          <BsFillTelephoneFill  className=''/>
          <div className="h-[3rem] border rounded-lg p-2 child ">
            <div className="flex gap-3 items-center  h-full">
              <address id="demo" className="text-gray-400 font-bold ">
                {' '}
                +2348126866823{' '}
              </address>
              <div>
                {copied ? (
                  <FaCheck />
                ) : (
                  <HiMiniClipboardDocumentCheck
                  size={20}
                  onClick={handleCopy}
                />
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default PersonalInfo
