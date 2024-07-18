import React, {useEffect} from 'react'
import localFeast from '../assets/images/local-feast.png';
import fufu from '../assets/images/asanka-fufu.jpeg';
import Car from '../assets/images/car-tour.jpeg';
import Arrow from './Arrow';
import tourFeast from '../assets/images/tour-feast.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Highlists = () => {
    useEffect(() => {
        Aos.init();
      }, [])
      
    return (
        <div id='highlights' className='w-[98%] m-auto flex flex-col my-[20px]'>
            <div className='w-full flex  justify-center lg:justify-end'>
                <button className='font-manrope text-white bg-[#CC5396] hover:bg-Green text-[18px] md:px-10 md:py-4'>
                    Book your Seat
                </button>
            </div>

            <div className='mt-[20px] flex flex-col text-center md:text-left mb-2'>
                <h1 className='font-bold text-[40px] md:text-[50px] lg:text-[60px] xl:text-[76px]'>Tour Highlights</h1>
                <p className=' md:w-[85%] font-semibold text-[20px] md:text-[26px]'>
                    Our tours offer an array of experiences designed to delight your senses. Explore breath-taking landscapes, savor local cuisine, and immerse yourself in the rich culture of each destination.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 mt-[50px] gap-4 gap-x-4 gap-y-6'>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{ "--image-url": `url(${localFeast})` }} className='flex flex-col sm:col-span-2 lg:col-span-4 h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl p-4 bg-cover bg-no-repeat justify-between bg-center bg-[image:var(--image-url)] bg-blend-overlay hover:bg-black hover:bg-opacity-35 transition duration-300 ease-in-out cursor-pointer'>
                    <div className='w-full flex justify-end'>
                        <Arrow />
                    </div>
                    <div  className='rounded-3xl p-4 backdrop-blur relative'>
                        <div className='bg-[#D011C0] absolute rounded-3xl top-0 left-0 right-0 bottom-0 bg-opacity-10'></div>
                        <h1 className='text-white font-bold text-[28px]'>Local Dining</h1>
                        <p className='text-white text-[14px] md:text-[16px] lg:text-[16px] font-semibold mt-[10px]'>
                            Enjoy meals at top-rated restaurants known for their authentic and innovative dishes. From cozy, family-owned eateries to chic, modern dining spots, you'll experience the full spectrum of Accra's culinary offerings. Savor dishes that highlight both traditional flavors and contemporary twists, prepared by some of the city's most talented chefs.
                        </p>
                    </div>
                </div>

                <div data-aos-delay="50" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{ "--image-url": `url(${Car})` }} className=' flex flex-col sm:col-span-1 lg:col-span-3 h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl p-4 bg-cover bg-no-repeat justify-between bg-center bg-[image:var(--image-url)] bg-blend-overlay hover:bg-black hover:bg-opacity-35 bg-black bg-opacity-25 transition duration-300 ease-in-out cursor-pointer'>
                    <div className='w-full flex justify-end'>
                        <Arrow />
                    </div>
                    <div className='h-[150px]'>
                        <h1 className='text-white font-bold text-[30px] md:text-[40px] lg:text-[60px]'>Scenic Tours</h1>
                    </div>
                </div>

                <div data-aos-delay="150" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{ "--image-url": `url(${fufu})` }} className='flex flex-col sm:col-span-1 lg:col-span-3 h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl p-4 bg-cover bg-no-repeat justify-between bg-center bg-[image:var(--image-url)] bg-blend-overlay hover:bg-black hover:bg-opacity-35 bg-black bg-opacity-25 transition duration-300 ease-in-out cursor-pointer'>
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
