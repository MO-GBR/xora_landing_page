import React from 'react'
import { Element, Link as LinkScroll } from "react-scroll";
import Button from '../Components/Button';
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className='relative mt-60 max-lg:mt-5 max-lg:m-4 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
        <Element name='Hero'>
            <div className='container flex max-lg:flex-col'>
                <div className='z-2 relative max-w-512 w-xl max-lg:max-w-388'>
                    <div className='uppercase text-[#C8EA80] text-[12px] font-bold leading-[16px] tracking-[0.3em]'>
                       Video Editing
                    </div>
                    <motion.div initial = {{transform: "translateX(-300px)"}} whileInView={{transform: "translateX(0)"}} transition={{duration: 1}} className='mb-6 text-[84px] font-black leading-[84px] tracking-[-0.03em] text-[#EAEDFF] uppercase max-lg:mb-7 max-lg:text-xl max-md:mb-4 max-md:text-3xl max-md:leading-12'>
                       Amazingly simple
                    </motion.div>
                    <p className='mb-14 max-w-440 max-lg:w-[50%]'>
                       We designed XORA AI Video Editor to be an easy to use, quick to learn, and surprisingly powerful.
                    </p>
                    <LinkScroll to="features" offset={-100} spy smooth>
                        <Button icon="/images/zap.svg">Try it now</Button>
                    </LinkScroll>
                </div>
                <motion.div className='pointer-events-none' initial = {{transform: "translateX(300px)"}} whileInView={{transform: "translateX(0)"}} transition={{duration: 1}}>
                    <img
                        src='/images/hero.png'
                        className='h-auto w-[1000px] z-50'
                    />
                </motion.div>
            </div>
        </Element>
    </section>
  )
}

export default Hero