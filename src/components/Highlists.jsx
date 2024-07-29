import React, { useEffect } from 'react'
import local from '../assets/images/street1.jpg';
import street from '../assets/images/street3.jpg';
import tour from '../assets/images/scenic.jpg';
import Arrow from './Arrow';
import tourFeast from '../assets/images/exclusive.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Highlists = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div id='highlights' className='w-[98%] m-auto flex flex-col my-[20px] bg-white'>

            <div className='mt-[20px] flex flex-col text-center md:text-left mb-2'>
                <h1 className='font-bold text-[40px] md:text-[50px] lg:text-[60px] xl:text-[76px]'>Tour Highlights</h1>
                <p className=' md:w-[85%] font-semibold text-[20px] md:text-[26px]'>
                    Our tours offer an array of experiences designed to delight your senses. Explore breath-taking landscapes, savor local cuisine, and immerse yourself in the rich culture of each destination.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 mt-[50px] gap-4 gap-x-4 gap-y-6'>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{ "--image-url": `url(${local})`, backgroundPosition: 'top center' }} className='flex flex-col sm:col-span-2 lg:col-span-4 h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl p-4 bg-cover bg-no-repeat justify-between bg-center bg-[image:var(--image-url)] bg-blend-overlay hover:bg-black hover:bg-opacity-40 bg-black bg-opacity-35 transition duration-300 ease-in-out cursor-pointer'>
                    <div className='w-full flex justify-end'>
                        <Arrow />
                    </div>
                    <div className='h-[150px]'>

                        <h1 className='text-white font-bold text-[30px] md:text-[40px] lg:text-[60px]'>Local Dining</h1>

                    </div>
                </div>

                <div data-aos-delay="50" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{
                    backgroundImage: `url(${tour})`,
                    backgroundPosition: 'top center'
                }} className=' flex flex-col sm:col-span-1 lg:col-span-3 h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl p-4 bg-cover bg-no-repeat justify-between bg-center bg-[image:var(--image-url)] bg-blend-overlay hover:bg-black hover:bg-opacity-35 bg-black bg-opacity-25 transition duration-300 ease-in-out cursor-pointer'>
                    <div className='w-full flex justify-end'>
                        <Arrow />
                    </div>
                    <div className='h-[150px]'>
                        <h1 className='text-white font-bold text-[30px] md:text-[40px] lg:text-[60px]'>Scenic Tours</h1>
                    </div>
                </div>

                <div data-aos-delay="150" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{ "--image-url": `url(${street})` }} className='flex flex-col sm:col-span-1 lg:col-span-3 h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl p-4 bg-cover bg-no-repeat justify-between bg-center bg-[image:var(--image-url)] bg-blend-overlay hover:bg-black hover:bg-opacity-35 bg-black bg-opacity-25 transition duration-300 ease-in-out cursor-pointer'>
                    <div className='w-full flex justify-end'>
                        <Arrow />
                    </div>
                    <div className='h-[150px]'>
                        <h1 className='text-white font-bold text-[24px] md:text-[30px] lg:text-[60px]'>Street Food Tasting</h1>
                    </div>
                </div>

                <div data-aos-delay="100" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{ "--image-url": `url(${tourFeast})` }} className='flex flex-col sm:col-span-2 lg:col-span-4 h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl p-4 bg-cover bg-no-repeat justify-between bg-center bg-blend-overlay hover:bg-black hover:bg-opacity-35 bg-black bg-opacity-25 bg-[image:var(--image-url)] relative transition duration-300 ease-in-out cursor-pointer'>
                    <div className='w-full flex justify-end'>
                        <Arrow />
                    </div>
                    <div className='h-[150px]'>
                        <h1 className='text-white font-bold text-[24px] md:text-[30px] lg:text-[60px] z-40'>Exclusive Tastings</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Highlists
