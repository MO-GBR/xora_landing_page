import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { IoIosArrowDropdown } from "react-icons/io";

const FaqItem = ({question, answer}) => {
  return (
    <div className='border h-fit m-5 divide-y divide-white/5 rounded-xl bg-white/5 cursor-pointer hover:border-[#1959AD] border-[#10103f] transition-all duration-500'>
        <div className='w-xl p-5 max-lg:p-2 max-lg:w-sm max-lg:m-5'>
            <Disclosure as="div" className="" defaultOpen={false}>
                <DisclosureButton className="group flex w-full max-lg:w-[85%] items-center justify-between">
                    <span className='flex items-center justify-center text-lg font-medium text-white group-data-[hover]:text-white/80 mb-2 cursor-pointer'>
                    <img src='/images/faq-logo.svg' className='m-5'/>
                    {question}
                    </span>
                    <IoIosArrowDropdown />
                </DisclosureButton>
                <DisclosurePanel transition className="transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 w-fit">
                    <div className='w-lg max-lg:w-fit'>
                        <span>{answer}</span>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    </div>
  )
}

export default FaqItem