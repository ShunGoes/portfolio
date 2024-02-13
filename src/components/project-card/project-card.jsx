const ProjectCard = ({arrObj}) => {
    const {image,alt,title,description,skills,link} = arrObj
  return (
    <div className="flex flex-col gap-5 lg:w-[60%] lg:mx-auto my-[5rem] lg:my-[4rem]">
      <div className=" h-[10rem] w-full rounded-2xl ">

        <img src={image} alt={alt} className="object-cover rounded-2xl h-full w-full" />
      </div>
      <div className="text-center flex flex-col gap-4">
        <h2>
            <a href={link} target="_blank">
            {title}
            </a>
            </h2>
        <p>
         {description}
        </p>
        <div className="italic flex flex-wrap shrink-0gap-3 justify-center">
            {
                skills.map((skill,index) => (
                    <p key={index} className="rounded-lg px-2 border ">{skill}</p>
                ))
            }
          
        </div>
        <button className="h-[50px] w-6/12 mx-auto rounded-2xl flex justify-center items-center font-semibold  border">
          {' '}
          View on Github
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
