import React from 'react'
import java from "../../public/java.png"
import javascript from "../../public/Javascript.png"
import springboot from "../../public/spring-boot-logo.png"
import react from "../../public/React.webp"
const Portfolio = () => {
    const cardItem=[

        {
            id: 1,
            logo: javascript,
            name:"JavaScript",
            discription:"Tic-Tac-Toe"
        },
        {
            id:2,
            logo:java,
            name:"Core Java",
            discription:"Hotel Reservation System"
        },
        {
            id:3,
            logo:springboot,
            name:"Spring Boot",
            discription:"User Authentication System"
        },
        {
            id:4,
            logo:react,
            name:"React",
            discription:"Book Store Websites"
        }
    ]
  return (
    <>
     <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
      <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
      <span className='underline font-semibold'>Featured Projects</span>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
        {
            cardItem.map(({id,logo,name,discription})=>(
                <div key={id} className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
                    <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                    <div>
                    <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                    <div className='px-2 text-gray-700'>{discription}</div>
                    </div>
                    <div className='px-6 py-4 '>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                    </div>
                </div>
            ))
        }
      </div>
     </div>
    </>
  )
}

export default Portfolio
