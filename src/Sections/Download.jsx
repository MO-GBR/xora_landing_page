import React from 'react'
import { Element } from "react-scroll";
import { Marker } from '../Components/Marker'
import { logos, links } from '../Constants'
import Button from '../Components/Button';
import { motion } from "framer-motion"

const Download = () => {
  return (
    <section>
        <Element name='Download' className='g7 relative pb-32 pt-24 rounded-3xl'>
            <div className='container max-lg:flex max-lg:flex-col'>
                <div className='flex items-center max-lg:flex-col max-lg:justify-start max-lg:items-start'>
                    <div className='relative mr-6 flex-540'>
                        <div className='mb-10'>
                            <img
                                src = "/images/xora.svg"
                                width={160}
                                height={55}
                                alt='xora'
                            />
                        </div>
                        <p className='text-[22px] leading-[30px] mb-10 w-[20vw] max-lg:w-fit'>Try it now for free on iOS, Android, PC, Web - whatever your flavor, we've got you covered.</p>
                        <ul className='flex flex-wrap items-center gap-6'>
                            {
                                links.map((link, index) => (
                                    <li key={index} className='download_tech-link download_tech-link_last-before download_tech-link_last-after flex flex-col'>
                                        <a href={link.url} className='download_tech-icon relative flex items-center overflow-hidden p-1.5 justify-center rounded-3xl border-2 border-[#334679] bg-[#080D27] transition-[border-color] duration-500'>
                                            <span className='absolute -top-2 rotate-90'>
                                                <Marker />
                                            </span>
                                            <img
                                                src = "/images/lines.svg"
                                                alt = "lines"
                                                className="absolute size-13/20 object-contain"
                                            />
                                            <span className="download_tech-icon">{link.icon}</span>
                                        </a>
                                    </li>
                                ))
                            }
                            <Button icon="/images/zap.svg">Try it now</Button>
                        </ul>
                    </div>
                    <motion.div initial = {{transform: "translateX(300px)"}} whileInView={{transform: "translateX(0)"}} transition={{duration: 1}} className='mb-10'>
                        <div className='download_preview-before download_preview-after rounded-40 relative left-70 max-lg:left-5 rounded-3xl w-[955px] max-lg:w-[320px] max-lg:mt-5 border-2 border-[#263466] p-6'>
                            <div className='relative rounded-3xl bg-[#080D27] px-6 pb-6 pt-14'>
                                <span className="download_preview-dot left-6 bg-[#3C52D9]" />
                                <span className="download_preview-dot left-11 bg-[#334679]" />
                                <span className="download_preview-dot left-16 bg-[#2EF2FF]/15" />
                                <img
                                  src="/images/screen.jpg"
                                  width={655}
                                  height={455}
                                  alt="screen"
                                  className="rounded-xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <ul className="mt-24 flex justify-center max-lg:mt-0 max-lg:justify-between">
                   {logos.map((logo, index) => (
                        <li key={index} className="mx-10 max-lg:mx-0 max-lg:m-1">
                            <img className='m-1' src={logo.url} width={logo.width} height={logo.height} alt={logo.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </Element>
    </section>
  )
}

export default Download