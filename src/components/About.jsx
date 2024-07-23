import React, {useEffect, useState} from 'react'
import { aboutLinks } from '../constants'
import salad from '../assets/images/salad.jpeg'
import bus from '../assets/images/tour-bus.jpeg'
import car from '../assets/images/car-tour.jpeg'
import plate from '../assets/images/food-plate.png'
import location from '../assets/images/icons/location-pin.svg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import ButtonSet from './ButtonSet'


const About = () => {
    const [active, SetActive] = useState("");
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div id='about' className='relative flex flex-col justify-center'>
            <img src={location} alt="location" className='w-[30%] left-[28%] top-72 h-[400px] absolute -z-10 transform rotate-[-1deg] opacity-10' />

            <div className='mb-[50px]  w-[98%] m-auto'>
                <ul className="list-none duration-600 flex flex-wrap justify-between">
                    {aboutLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? 'text-green-700' : 'text-black'
                                } text-[20px] sm:text-[24px] md:text-[32px] lg:text-[34px] font-bold cursor-pointer m-1`}
                            onClick={() => SetActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>


            <div data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out" className='flex flex-col sm:flex-row gap-[2px] sm:gap-2 mx-[1%] relative'>
                <div className='bg-Green rounded-3xl w-full sm:w-[40%] lg:w-[15%] lg:h-[200px] justify-start p-6 mb-4 sm:mb-0 flex items-center shadow-2xl'>
                    <h1 className='text-white font-bold text-center lg:text-start text-[18px] sm:text-[20px] lg:text-[22px]'>The Accra Food Tasting Tour is almost here!</h1>
                </div>
                <div className='w-full sm:w-[20%] lg:w-[7%] bg-Green  sm:flex sm:flex-col flex-row md:hidden  lg:flex hidden rounded-3xl p-4 items-center mb-4 sm:mb-0 shadow-2xl'>
                    <img src={salad} alt="salad" className='sm:w-[90%] h-[56px] rounded-full mb-2 sm:mb-0' />
                    <img src={bus} alt="bus" className=' sm:w-[90%] h-[56px] rounded-full mb-2 sm:mb-0' />
                    <img src={car} alt="car" className=' sm:w-[90%] h-[56px] rounded-full mb-2 sm:mb-0' />
                </div>
                <img data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" src={plate} alt="plate" className='h-[100px]   md:h-[400px] -top-32 -right-36 absolute -z-10 ' />
            </div>


            <div className='flex flex-col justify-center w-full text-center  lg:-mt-[10%] xl:-mt-[6%]'>
                <h1 className='font-bold text-[32px] sm:text-[48px] md:text-[64px] lg:text-[78px] mb-[20px]'>About The Event</h1>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50" data-aos-easing="ease-in-out" className='text-[20px] sm:text-[20px] md:text-[24px] m-auto font-semibold text-[#343434] text-center w-[90%] sm:w-[85%] md:w-[80%] lg:w-[78%] mb-5'>
                    Embark on a one-of-a-kind culinary adventure with Taste Accra Tour. Delve into a diverse array of traditional delicacies, innovative fusion dishes, and rich culinary customs during our captivating tours. Immerse yourself in the intricate flavours, captivating narratives, and fascinating individuals that shape the vibrant food landscape of Accra. Join us and savour every moment of this unforgettable gastronomic experience.
                </p>
                <ButtonSet />
            </div>


        </div>
    )
}

export default About
