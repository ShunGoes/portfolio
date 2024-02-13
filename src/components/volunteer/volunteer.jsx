import React from 'react'
import ProjectCard from '../project-card/project-card'
import { arrayOfObject2 } from '../../../data'
import { useContext } from 'react'
import { RefContext } from '../../context/ref-context'

const Volunteer = () => {
  const {volunteerRef} = useContext(RefContext)
  // console.log(value);                                                                                                                                                                                                                                 
  return (
    <section ref={volunteerRef} className='lg:my-[2rem['>
      <h3 className='sticky top-[3.5rem] mb-[1.5rem] bg-black text-white py-4 lg:top-[-1rem] lg:py-7 lg:mb-[0.2rem]'>Volunteer</h3>
      {
          arrayOfObject2.map(arr => <ProjectCard  arrObj={arr} key={arr.id}/> )
        }
    </section>
  )
}

export default Volunteer
