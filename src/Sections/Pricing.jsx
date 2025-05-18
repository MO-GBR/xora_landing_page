import React, {useState} from 'react'
import CountUp from "react-countup";
import Button from '../Components/Button';
import { plans } from '../Constants';
import { Element } from "react-scroll";

const Pricing = () => {
    const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <Element name="Pricing">
        <div className='flex-col justify-center items-center'>
          <div className='flex justify-center items-center flex-col m-10'>
            <div className='h3 text-amber-200 text-center max-lg:m-15 max-lg:mb-50'>
              <h3 className='text-3xl'>Flexible pricing for teams of all sizes</h3>
            </div>
            <div className='bg-[#10103f] border border-[#19195c] rounded-2xl relative p-0.5 m-6 w-fit flex items-center justify-center max-lg:-top-45'>
              <button className={`p-8 cursor-pointer font-bold text-lg transition-all duration-500 max-lg:p-4 max-lg:text-md ${monthly && "bg-[#080825] rounded-2xl shadow-2xl"}`} onClick={() => setMonthly(true)}>Monthly</button>
              <button className={`p-8 cursor-pointer font-bold text-lg transition-all duration-500 max-lg:p-4 max-lg:text-md ${!monthly && "bg-[#080825] rounded-2xl shadow-2xl"}`} onClick={() => setMonthly(false)}>Annual</button>
            </div>
          </div>
          <div>
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
          </div>
          <div className='relative z-2 flex justify-center m-20 items-start -mt-78 scroll-hide max-lg:flex-col'>
            {
              plans.map((plan, index) => (
                <div key={plan.id} className='pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-lg:p-12 max-lg:m-5 max-lg:ml-[-10px]'>
                  {index === 1 && (
                    <div className='g4 absolute h-fit left-0 right-0 top-0 rounded-tl-3xl rounded-tr-3xl' />
                  )}
                  <div className={`absolute right-0 flex items-center justify-cente
                  ${
                    index === 1 ? "-top-8 left-24" : "left-30 -top-6 xl:-top-11"
                  }
                  `}>
                    <img
                      src={plan.logo}
                      alt={plan.title}
                      className={`object-contain drop-shadow-2xl ${
                        index === 1 ? "size-[120px]" : "size-[88px]"
                      }
                      `}
                    />
                  </div>
                  <div className={`relative flex flex-col items-center ${
                    index === 1 ? "pt-24" : "pt-12"
                  }`}>
                    <div className={`rounded-xl relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase text-[12px] font-bold leading-[16px] tracking-[0.3em] ${
                      index === 1 ? "border-[#C8EA80] text-[#C8EA80]" : "border-[#2EF2FF] text-[#2EF2FF]"
                    }`}>{plan.title}</div>
                    <div className='relative z-2 flex items-center justify-center'>
                      <div className={`h-num flex items-start ${
                        index === 1 ? "text-[#C8EA80]" : "text-[#EAEDFF]"
                      }`}>
                        ${" "}
                        <CountUp
                          start={plan.priceMonthly}
                          end={monthly ? plan.priceMonthly : plan.priceYearly}
                          duration={0.4}
                          useEasing={false}
                          preserveValue
                        />
                      </div>
                      <div className='relative top-3 ml-1 uppercase text-[14px] font-semibold leading-[18px] tracking-[0.03em]'>
                        / mo
                      </div>
                    </div>
                  </div>
                  <div className={`text-[22px] leading-[36px] relative z-2 mb-10 w-full border-b-[#0C1838] pb-9 text-center text-[#EAEDFF] ${index === 1 && "border-b"}`}>{plan.caption}</div>
                  <ul className="mx-auto space-y-4 xl:px-7">
                    {
                      plan.features.map((feature, index) => (
                        <li key={index} className='relative flex items-center gap-5'>
                          <img
                            src='/images/check.png'
                            alt='check'
                            className="size-10 object-contain"
                          />
                          <p className="flex-1">{feature}</p>
                        </li>
                      ))
                    }
                  </ul>
                  <div className='mt-10 flex w-full justify-center'>
                    <Button icon={plan.icon}>Get Started</Button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Pricing