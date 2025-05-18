import React from 'react'
import { Link as LinkScroll } from "react-scroll";
import { socials, footerNav } from '../Constants'
import { Marker } from '../Components/Marker';

const Footer = () => {
    const NavLink = ({ title }) => (
        <LinkScroll
          to={title}
          offset={-100}
          spy
          smooth
          className="text-[#EAEDFF] text-2xl transition duration-500 z-1 cursor-pointer hover:text-[#2EF2FF]"
        >
          {title}
        </LinkScroll>
    );
    
  return (
    <footer className='p-5 mb-10'>
        <div className='container flex py-15 h-[300px] p-0 max-xl:flex-col max-lg:h-fit max-lg:justify-start max-lg:items-start'>
            <div className='flex w-[50%] h-full flex-col p-1'>
                <img width={55} height={55} src='/images/faq-logo.svg'/>
                <div className='flex flex-col p-5'>
                    {
                        footerNav.map((item, index) => (
                            <NavLink key={index} title={item}>{item}</NavLink>
                        ))
                    }
                </div>
                <div className='flex justify-between max-lg:p-5'>
                    <p className='font-bold text-gray-600 cursor-pointer hover:text-[#2698b4] max-lg:m-3'>Copyrights, Eng/Mo.Gabr</p>
                    <p className='font-bold text-gray-200 cursor-pointer hover:text-[#2698b4] max-lg:m-3'>Privacy Policy</p>
                    <p className='font-bold text-gray-200 cursor-pointer hover:text-[#2698b4] max-lg:m-3'>Our Terms</p>
                </div>
            </div>
            <div className='p-10 g10 rounded-3xl ml-20 max-lg:w-full max-lg:ml-[-10px]'>
                <h1 className='text-4xl font-bold mb-2'>
                    Subscribe
                </h1>
                <p>Sign up to our newsletter for feature updates and our undying love.</p>
                <div className='bg-[#10103f] m-3 p-4 rounded-xl flex flex-row-reverse'>
                    <input className='text-white outline-none w-full ml-2' type='text' placeholder='youremail@example.com'/>
                    <Marker />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer