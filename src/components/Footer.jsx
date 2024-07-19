import React, { useState, useEffect } from 'react';
import { footerLinks, utilities } from '../constants/index.js';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    const [active, SetActive] = useState("");
    useEffect(() => {
        Aos.init();
      }, [])

    return (
        <div className='flex flex-col w-[98%] m-auto bg-[#1F2A22] rounded-3xl mt-24 lg:mt-52 p-6 md:p-10 text-white'>
            <div data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out" className='flex flex-col justify-center text-center w-full md:w-[60%] lg:w-[35%] m-auto pb-10'>
                <h1 className='text-[36px] md:text-[50px] font-semibold'>Ready for the Taste Accra Tour?</h1>
                <p className='text-[18px] md:text-[22px] text-[#FFFFFF]'>Stay updated with the latest news, tips, and stories from Accra's food scene</p>
                <div>
                    <button className='bg-Green inline-flex text-white mt-[20px] py-2 px-6 md:py-4 md:px-8'>Register A Seat</button>
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-full md:w-[90%] m-auto h-auto md:h-[476px] bg-[#161616] rounded-3xl text-white p-6 md:px-20 justify-between mt-10 md:mt-16'>
                <div className='w-full md:w-[32%] text-center md:text-start mb-10 md:mb-0'>
                    <h1 className='font-bold text-[40px] md:text-[50px] mt-[24px]'>Taste <span className='text-Green font-dancing'>Accra</span></h1>
                    <p className='text-[18px] md:text-[24px] mt-[20px] md:mt-[70px] text-[#FFFFFF]'>Our tours are perfect for food enthusiasts, travellers, and anyone looking to experience the true flavours of Ghana. Register now to reserve your spot on our next tour.</p>
                </div>

                <div className='flex flex-col md:flex-row md:justify-between w-full md:w-[52%]'>
                    <div className='flex flex-col items-center md:items-start md:w-1/2'>
                        <h3 className='text-[20px] md:text-[28px] font-semibold mt-[40px] mb-[10px] text-[#FFFFFF]'>Menu</h3>
                        <ul className="flex flex-col gap-4 md:gap-6 w-auto text-white mt-[10px]">
                            {footerLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? 'text-white' : 'text-[#999999]'}
                                text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] text-center md:text-start cursor-pointer hover:text-white`}
                                    onClick={() => SetActive(link.title)}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col items-center md:items-start mt-6 md:mt-0 md:w-1/2'>
                        <h3 className='text-[20px] md:text-[28px] font-semibold mt-[40px] mb-[10px] text-[#FFFFFF]'>Utilities</h3>
                        <ul className="flex flex-col gap-4 md:gap-6 w-auto text-white mt-[10px]">
                            {utilities.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? 'text-white' : 'text-[#999999]'}
                                text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] text-center md:text-start cursor-pointer hover:text-white`}
                                    onClick={() => SetActive(link.title)}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
