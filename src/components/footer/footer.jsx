
const Footer = () => {
  return (
    <footer className="h-auto e ">
        <div className="h-[25rem] w-full grid-rows-2 relative ">
            <div className=" bg-gray-400 h-1/2 w-full"></div>
            <div className=" bg-gray-900 ck h-1/2 w-full"></div>
            <div className="absolute top-0 h-full flex justify-center items-center w-full">
                <div className="w-[90%] shadow-lg  flex gap-4 flex-col  items-center py-3 rounded-lg lg:w-[70%]">
                    <h2 className="text-center lg:text-2xl">Interested in working together? We should queue up a time to chat</h2>
                    <address>+2348126866823</address>
                    <span className="italic">or</span>
                    <p>
                    Send me a message here <a href="mailto:favourkcb@gmail.com" className="text-blue-500 underline font-bold"> mail</a> 
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer