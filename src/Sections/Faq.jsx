import React from 'react'
import { Element } from "react-scroll";
import { faq } from '../Constants';
import FaqItem from '../Components/FaqItem';

const Faq = () => {
  return (
    <section>
        <Element name='FAQ'>
            <div className='container flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold text-center text-[#a8a8ff] border-4 border-[#10103f] rounded-2xl p-5 m-10 border-t-0 w-full'>You've got questions, we've got answers.</h1>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        {
                            faq.map((item, index) => (
                                <FaqItem key={index} question={item.question} answer={item.answer} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Faq