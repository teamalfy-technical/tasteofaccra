import React, { useEffect } from 'react';
import herobg from '../assets/images/taste-of-accra-bg.png'
import ButtonSet from './ButtonSet';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, [])


  return (
    <div
      id='home'
      style={{ "--image-url": `url(${herobg})` }}
      className="w-[98%] m-auto h-[400px] lg:h-[750px] flex flex-col rounded-3xl bg-cover bg-no-repeat items-center justify-center bg-center bg-[image:var(--image-url)] relative bg-blend-overlay bg-Pink bg-opacity-30">

      <div className="flex flex-col w-[94%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[94%] m-auto items-center justify-center text-center text-white font-bold z-10">
        <h1 className="text-[65px] sm:text-[100px] md:text-[100px] lg:text-[140px] xl:text-[100px] font-bold ">Taste <span className="font-dancing"><span className="text-pink-500">Accra</span> Tour</span></h1>
        <p data-aos="fade-in" data-aos-duration="2000" data-aos-easing="ease-in-out" className="w-[80%] sm:text-[18px] md:text-[30px] font-semibold">A culinary adventure through the streets of Accra like no other including stops by historic heritage sites. It’s a Foodie Tour with a Twist!</p>
        <ButtonSet />
      </div>
    </div>
  )
}

export default Hero
