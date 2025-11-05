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
              {/* <span >Developer</span>  */}
              <ReactTyped
                className='text-red-700 font-bold'
                strings={["Web Developer", " Coder", " Programmer"]}
                typeSpeed={60}
                backSpeed={80}
                loop={true}
              />
            </div>
            <br />
            <p className='text-sm md:text-md text-justify'>
              passionate and detail oriented Web Developer dedicated to crafting innovative, 
              user focused digital experiences. With a strong commitment to continuous learning, 
              clean and efficient code, and modern design principles, I strive to deliver high quality,
              impactful solutions. I thrive in collaborative environments where creativity, technology, 
              and problem-solving come together to create meaningful results.
            </p>
            <br />
            {/* social media icon */}
            <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0'>
              <div className='space-y-2'>
                <h1 className='font-bold' >Available On</h1>
                <ul className='flex space-x-5'>
                  <li>
                    <a href="https://x.com/Shiphan_8601" target='blank'>
                      <FaSquareXTwitter className='text-2xl cursor-pointer' /> </a></li>
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
      <hr />
    </>
  )
}

export default Home
