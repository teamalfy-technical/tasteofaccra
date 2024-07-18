import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SponsorForm from './SponsorForm';


const ButtonSet = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className='font-manrope inline-flex  sm:flex-row text-[14px] sm:text-[16px] gap-2  justify-center mt-[20px]'>
            <button className='bg-white  hover:bg-[#161616] hover:text-white border-black text-black py-2 lg:py-4 lg:px-10 '>Book your Seat</button>
            <div className='sponser'>
                <button onClick={() => setIsOpen(true)} className={`bg-[#4B8458] hover:bg-Pink cursor-pointer text-white py-2 lg:py-4 px-5 lg:px-10`}>Become a sponsor</button>
                <SponsorForm isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    )
}

export default ButtonSet
