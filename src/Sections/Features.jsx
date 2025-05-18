import React from 'react'
import { Element } from "react-scroll";
import Button from "../Components/Button";
import { details, features } from "../Constants";
import { motion } from "framer-motion"

const Features = () => {
  return (
    <section className='w-full'>
        <Element name='Features'>
            <div className='container'>
                <div className="flex flex-col relative flex-nowrap border-2 border-[#334679] rounded-4xl">
                <div className='flex justify-center items-center max-lg:flex-col'>
                  {
                    features.map(({ id, icon, caption, title, text, button }) => (
                      <div key={id} className='relative'>
                        <div className='w-full flex justify-start items-start'>
                          <div className='-ml-3 mb-12 flex items-center justify-center flex-col'>
                            <div className='w-0.5 h-16 bg-[#334679]' />
                            <img
                              src={icon}
                              className="size-28 z-2 object-contain"
                              alt={title}
                            />
                            <div className='p-10 rounded-3xl shadow-2xl bg-[#10103f] m-7 -top-[100px] relative border-2 border-[#334679]'>
                              <p className='mb-5 uppercase text-[#C8EA80] max-lg:m-4.5'>{caption}</p>
                              <h3 className='max-w-400 mb-7 text-[48px] font-semibold leading-[56px] tracking-[-0.02em] max-lg:text-xl max-lg:leading-[20px] text-[#EAEDFF]'>{title}</h3>
                              <p className='m-5 max-lg:text-sm'>{text}</p>
                              <Button icon={button.icon}>{button.title}</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <ul className='flex justify-center mb-10 border-t-8 shadow-2xl border-[#061130] rounded-t-4xl p-2 border-b-0 g4 rounded-4xl max-lg:flex-col'>
                    <div className="absolute bg-[#334679]/20 top-[38%] left-0 right-0 w-full h-[1px] z-10 m-5" />
                    {
                      details.map(({id, icon, title}) => (
                        <li key={id}>
                          <div className='flex flex-col justify-center items-center p-5 m-5 rounded-2xl cursor-pointer hover:border-[#1959AD] border-2 border-[#10103f] transition-all duration-500 shadow-2xl'>
                            <img
                              src={icon}
                              alt={title}
                              className='h-24  w-24 m-2'
                            />
                            <h3 className="relative z-2 max-w-36 mx-auto my-0 text-sm text-center uppercase text-[rgb(252,222,255)] m-2">{title}</h3>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Features