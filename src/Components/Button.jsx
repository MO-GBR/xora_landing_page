import React from 'react'
import { Marker } from './Marker'
import { motion } from "framer-motion"

const Button = (
    {
        icon,
        children,
        href,
        containerClassName,
        onClick,
        markerFill,
    }
) => {
    const Inner = () => (
        <>
            <span className='relative flex items-center min-h-[60px] px-4 g4 rounded-2xl group-hover:before:opacity-100 overflow-hidden before:g7 inner-before'>
                <span className='absolute -left-[1px]'>
                    <Marker fill={markerFill} />
                </span>
                {icon && (
                    <img
                        src={icon}
                        alt='circle'
                        className='z-10 mr-5 size-10 object-contain'
                    />
                )}
                <span className='z-2 relative font-bold text-[#2EF2FF] fontPoppins'>
                    {children}
                </span>
            </span>
        </>
    );
    return href ? (
        <a className={`relative p-0.5 g5 rounded-2xl cursor-pointer shadow ${containerClassName}`} href={href}>
            <Inner />
        </a>
    ) : (
        <motion.button initial = {{scale: 1}} whileHover={{scale: 1.1}} transition={{duration: 0.2}} className={`relative p-0.5 g5 rounded-2xl cursor-pointer shadow hover:border-[#1959AD] border-2 border-[#10103f] transition-all duration-500 ${containerClassName}`} onClick={onClick}>
            <Inner />
        </motion.button>
    )
}

export default Button