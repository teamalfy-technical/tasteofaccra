import React, {useEffect} from 'react'
import zuludesk from '../assets/images/Zuludesk-logo.png'
import icon from '../assets/images/icons/initiative.svg'
import { initiativeData } from '../constants/index'
import ButtonSet from './ButtonSet.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Initiative = () => {
    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div className='flex flex-col mt-40'>
            <h1 className='text-center font-bold text-[40px] md:text-[60px] lg:text-[76px]'>A Zuludesk Initiative</h1>
            <p className='text-[24px] md:text-[30px] lg:text-[30px] font-semibold text-center mt-2'>Why are we doing this?</p>
            <div className='w-[98%] m-auto h-auto lg:h-[600px] flex flex-col bg-[#1f2B22] rounded-3xl justify-center mt-[40px] lg:mt-[60px] mb-5 relative py-4'>
                <img src={zuludesk} alt='zuludesk' data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out" className='mb-[28px] md:mt-[20px] w-[120px] h-[44px] lg:w-[200px] lg:h-[74px] self-center' />
                <img src={zuludesk} alt='zuludesk' className='w-[90%] lg:w-[1400px] h-auto lg:h-[450px] self-center absolute bottom-0 lg:-bottom-28 -z-1 opacity-5' />
                <img src={icon} alt='initiative-icon' className='hidden xl:block absolute w-[200px] lg:w-[250px] bottom-0 lg:-bottom-28 right-4 lg:-right-20 h-[200px] lg:h-[250px] -z-10' />
                <div className='w-[90%] lg:w-[80%] m-auto z-10 my-10'>
                    {initiativeData.map((initiative, index) => (
                        <p data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" key={index} className='text-[20px] md:text-[30px] lg:text-[28px] text-center text-white mb-[30px] lg:mb-[40px]'>
                            <span className='font-bold'>{initiative.title}</span> {initiative.description}
                        </p>
                    ))}
                </div>
            </div>
            <ButtonSet className="flex flex-col" />
        </div>
    )
}

export default Initiative
