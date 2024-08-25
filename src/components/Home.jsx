import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import pic from "../../public/shiphann.avif"
import { ReactTyped } from "react-typed";
const Home = () => {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='text-xl'>Welcome.....!</span>
        <div className='flex space-x-1 text-2xl md:text-4xl '>
        <h1>Hello, I'm a </h1>
         {/* <span >Developer</span> */} 
          <ReactTyped
            className='text-red-700 font-bold'
            strings={[" Full Stack Developer"," Coder"," Programmer"]}
            typeSpeed={60}
            backSpeed={80}
            loop={true}
            />
        </div>
        <br/>
        <p className='text-sm md:text-md text-justify'>
        I'm Shiphan Pathan. I'm Full Stack Developer and an active learner 
        who loves to learn new technologies and apply them to build something 
        and I'm looking a role in company where I can pitch my ideas and learn 
        new skills and increase my abilities for the organizational goals as well as 
        myself along with being mentored toward a successful career
        </p>
        <br />
        {/* social media icon */}
        <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0'>
        <div className='space-y-2'>
            <h1 className='font-bold' >Available On</h1>
            <ul className='flex space-x-5'>
                <li>
                    <a href="https://x.com/Shiphan_8601" target='blank'>
                    <FaSquareXTwitter  className='text-2xl cursor-pointer'  /> </a></li>
                <li>  <a href="https://www.linkedin.com/in/shiphan-pathan-a909ba211/" target='blank'>
                <FaLinkedin className='text-2xl cursor-pointer' /> </a></li>
                <li><a href="#"><FaTelegram className='text-2xl cursor-pointer' /></a></li>
            </ul>            
        </div>  
        </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
        <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
        </div> 
        </div>
    </div>
    <hr/>
    </>
  )
}

export default Home
