import React from 'react'
import { testimonials } from '../Constants'
import { motion } from "framer-motion"

const Testimonial = () => {
  return (
    <section className='m-1 border-3 p-5 border-[#10103f] rounded-3xl'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <h1 className='text-5xl text-[#818631]'>
                   Wall of Love
                </h1>
                <span className='bg-[#3100a3] -p-80 w-[75%] h-[1px]'/>
            </div>
            <p className='text-3xl mt-5'>Words from our fans</p>
            <div className='flex justify-center'>
                <div className='grid grid-cols-3 max-lg:grid-cols-1 max-lg:grid-rows-6 grid-rows-2 gap-10 m-10'>
                    {
                        testimonials.map((item, index) => (
                            <motion.div key={index} initial = {{scale: 1}} whileHover={{scale: 1.1}} transition={{duration: 0.2}} className='flex flex-col justify-center items-center p-5 m-5 cursor-pointer hover:border-[#1959AD] border-[#00042b] border-2 rounded-3xl hover:border-2 transition-all duration-500 max-lg:w-full max-lg:ml-[-5px]'>
                                <img
                                    src={item.avatarUrl}
                                    className='z-1'
                                />
                                <div className='text-[#c0c0c0] text-2xl m-2 font-bold'>{item.name}</div>
                                <div className='font-bold border border-[#2EF2FF] text-[#2EF2FF] p-2 rounded-3xl m-5'>{item.role}</div>
                                <div className='text-center'>{item.comment}</div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial